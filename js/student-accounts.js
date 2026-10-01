/* Student import stays in this browser. Only validated account records are saved. */
(function () {
  'use strict';
  const INITIAL_PASSWORD = '123456', MAX_STUDENTS = 100;
  const text = value => String(value ?? '').trim();
  function validateRows(rows, users = {}) {
    const header = rows.findIndex(row => row.cells.slice(0, 3).some(value => text(value)));
    if (header < 0 || ['이름', '아이디', '비밀번호'].some((value, i) => text(rows[header].cells[i]) !== value)) {
      throw new Error('첫 행의 열 이름을 이름, 아이디, 비밀번호 순서로 맞춰 주세요.');
    }
    const ids = new Set(Object.values(users).map(user => text(user.loginId).toLowerCase()));
    const result = [];
    for (const row of rows.slice(header + 1)) {
      const [name, rawId, password] = row.cells.slice(0, 3).map(text);
      if (!name && !rawId && !row.formula) continue;
      const loginId = (rawId || '').toLowerCase(), errors = [];
      if (!name || name.length > 30) errors.push('이름: 1~30자');
      if (!/^[a-z0-9_-]{1,30}$/.test(loginId)) errors.push('아이디: 영문·숫자·밑줄·하이픈 1~30자');
      if (loginId === 'master') errors.push('관리자 아이디 사용 불가');
      if (ids.has(loginId)) errors.push('이미 등록된 아이디');
      if (password && password !== INITIAL_PASSWORD) errors.push('비밀번호: 123456 고정');
      if (row.formula) errors.push('수식 대신 글자로 입력');
      if (row.invalid) errors.push('셀 오류 확인');
      result.push({ rowNumber: row.rowNumber, name: name || '', loginId, errors, status: 'ready' });
    }
    if (!result.length) throw new Error('이름과 아이디를 입력한 학생이 없어요.');
    if (result.length > MAX_STUDENTS) throw new Error('한 번에 최대 100명까지 등록할 수 있어요.');
    const counts = new Map();
    for (const row of result) counts.set(row.loginId, (counts.get(row.loginId) || 0) + 1);
    for (const row of result) if (counts.get(row.loginId) > 1) row.errors.push('엑셀 안에서 중복된 아이디');
    return result;
  }
  const nextNumber = users => Math.max(0, ...Object.values(users).map(user => Number(user.no) || 0)) + 1;
  function pendingKey(B, teacher, id) {
    return (window.HANJA_DEMO_NAMESPACE || 'hanjaTier') + ':' + B.mode + ':pendingStudent:' + teacher + ':' + id;
  }
  async function register(B, teacher, row) {
    if (B.currentUid() !== teacher) throw new Error('관리자 계정으로 다시 로그인해 주세요.');
    const key = pendingKey(B, teacher, row.loginId);
    let savedUid;
    try { savedUid = localStorage.getItem(key); } catch (_) { /* The open import still holds its pending UID. */ }
    row.pendingUid ||= savedUid;
    const users = await B.get('users') || {};
    const existing = Object.entries(users).find(([, user]) => text(user.loginId).toLowerCase() === row.loginId);
    if (existing) {
      if (existing[0] !== row.pendingUid) throw new Error('이미 등록된 아이디예요.');
      try { localStorage.removeItem(key); } catch (_) {}
      row.status = 'done';
      return existing[0];
    }
    if (!row.pendingUid) {
      row.pendingUid = await B.createAccount(row.loginId, INITIAL_PASSWORD);
      try { localStorage.setItem(key, row.pendingUid); } catch (_) {}
    }
    if (B.currentUid() !== teacher) throw new Error('관리자 로그인이 끊겼어요. 다시 로그인한 뒤 재시도해 주세요.');
    if (users[row.pendingUid]) throw new Error('계정 정보가 달라요. 관리자 확인이 필요해요.');
    await B.set('users/' + row.pendingUid, {
      name: row.name, loginId: row.loginId, no: row.no || nextNumber(users), pwc: true, createdAt: B.now()
    });
    try { localStorage.removeItem(key); } catch (_) {}
    row.status = 'done';
    return row.pendingUid;
  }
  async function requiresPasswordChange(B, uid, user, login) {
    if (!user.pwc) return false;
    // Clear the flag only after a fresh, successful sign-in with a non-default password.
    // Changing the password alone never grants access to study.
    if (login && login.loginId === text(user.loginId).toLowerCase() && !login.usedInitial && B.currentUid() === uid) {
      await B.remove('users/' + uid + '/pwc');
      return false;
    }
    return true;
  }
  async function changeFirstPassword(B, uid, password, again) {
    if (password.length < 6 || password.length > 100) throw new Error('새 비밀번호는 6~100자로 입력해 주세요.');
    if (password === INITIAL_PASSWORD) throw new Error('초기 비밀번호 123456과 다른 비밀번호를 정해 주세요.');
    if (password !== again) throw new Error('비밀번호가 서로 달라요.');
    if (B.currentUid() !== uid) throw new Error('다시 로그인해 주세요.');
    await B.changeOwnPassword(password);
    // pwc deliberately stays set until the student's next successful sign-in.
    await B.signOut();
  }
  async function readSpreadsheet(buffer) {
    const fail = () => new Error('엑셀 파일을 읽지 못했어요. 양식에 작성한 뒤 .xlsx로 다시 저장해 주세요.');
    if (buffer.byteLength > 2 * 1024 * 1024 || buffer.byteLength < 22) throw fail();
    const view = new DataView(buffer), bytes = new Uint8Array(buffer), decode = new TextDecoder();
    const within = (at, size) => { if (at < 0 || size < 0 || at + size > bytes.length) throw fail(); };
    let end = -1;
    for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 65557); i--) {
      if (view.getUint32(i, true) === 0x06054b50 && i + 22 + view.getUint16(i + 20, true) === bytes.length) { end = i; break; }
    }
    if (end < 0 || view.getUint16(end + 4, true) || view.getUint16(end + 6, true)) throw fail();
    const count = view.getUint16(end + 10, true), files = new Map();
    if (count > 500) throw fail();
    let pos = view.getUint32(end + 16, true), expanded = 0;
    for (let i = 0; i < count; i++) {
      within(pos, 46);
      if (view.getUint32(pos, true) !== 0x02014b50 || (view.getUint16(pos + 8, true) & 1)) throw fail();
      const nameSize = view.getUint16(pos + 28, true), extra = view.getUint16(pos + 30, true), comment = view.getUint16(pos + 32, true);
      within(pos, 46 + nameSize + extra + comment);
      const size = view.getUint32(pos + 24, true);
      expanded += size;
      if (size > 4 * 1024 * 1024 || expanded > 12 * 1024 * 1024) throw fail();
      const name = decode.decode(bytes.subarray(pos + 46, pos + 46 + nameSize));
      if (files.has(name)) throw fail();
      files.set(name, { method: view.getUint16(pos + 10, true), compressed: view.getUint32(pos + 20, true), size, at: view.getUint32(pos + 42, true) });
      pos += 46 + nameSize + extra + comment;
    }
    async function get(name) {
      const entry = files.get(name);
      if (!entry) return null;
      within(entry.at, 30);
      if (view.getUint32(entry.at, true) !== 0x04034b50) throw fail();
      const start = entry.at + 30 + view.getUint16(entry.at + 26, true) + view.getUint16(entry.at + 28, true);
      within(start, entry.compressed);
      let data = bytes.subarray(start, start + entry.compressed);
      if (entry.method === 8) {
        let stream;
        try { stream = new DecompressionStream('deflate-raw'); }
        catch (_) { throw new Error('현재 브라우저에서는 엑셀을 읽을 수 없어요. 최신 Chrome·Edge·Safari를 사용해 주세요.'); }
        const reader = new Blob([data]).stream().pipeThrough(stream).getReader();
        const parts = []; let total = 0;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          total += value.length;
          if (total > entry.size) { await reader.cancel(); throw fail(); }
          parts.push(value);
        }
        data = new Uint8Array(total); let offset = 0;
        for (const part of parts) { data.set(part, offset); offset += part.length; }
      } else if (entry.method !== 0) throw fail();
      if (data.length !== entry.size) throw fail();
      const source = decode.decode(data);
      if (/<!DOCTYPE/i.test(source)) throw fail();
      const xml = new DOMParser().parseFromString(source, 'application/xml');
      if (xml.getElementsByTagName('parsererror').length) throw fail();
      return xml;
    }
    const tags = (node, name) => [...node.getElementsByTagNameNS('*', name)];
    const stringValue = node => tags(node, 't').map(value => value.textContent).join('');
    const workbook = await get('xl/workbook.xml'), relationships = await get('xl/_rels/workbook.xml.rels');
    if (!workbook || !relationships) throw fail();
    const sheets = tags(workbook, 'sheet'), first = sheets.find(sheet => sheet.getAttribute('name') === '학생등록') || sheets[0];
    const relation = first && tags(relationships, 'Relationship').find(rel => rel.getAttribute('Id') === first.getAttribute('r:id'));
    if (!relation || relation.getAttribute('TargetMode') === 'External') throw fail();
    const target = new URL(relation.getAttribute('Target'), 'https://xlsx.invalid/xl/');
    if (target.origin !== 'https://xlsx.invalid' || !target.pathname.startsWith('/xl/')) throw fail();
    const sheet = await get(target.pathname.slice(1));
    if (!sheet) throw fail();
    const sharedXml = await get('xl/sharedStrings.xml');
    const shared = sharedXml ? tags(sharedXml, 'si').map(stringValue) : [];
    const rows = [];
    for (const row of tags(sheet, 'row')) {
      if (rows.length > 10000) throw fail();
      const cells = ['', '', '']; let formula = false, invalid = false;
      for (const cell of tags(row, 'c')) {
        const reference = cell.getAttribute('r') || '';
        const col = /^([A-C])[0-9]+$/.exec(reference);
        if (!col) continue;
        const type = cell.getAttribute('t'), value = tags(cell, 'v')[0]?.textContent || '';
        formula ||= tags(cell, 'f').length > 0;
        invalid ||= type === 'e' || (type === 's' && shared[Number(value)] === undefined);
        cells[col[1].charCodeAt(0) - 65] = type === 's' ? shared[Number(value)] : type === 'inlineStr' ? stringValue(cell) : value;
      }
      rows.push({ rowNumber: Number(row.getAttribute('r')) || rows.length + 1, cells, formula, invalid });
    }
    return rows;
  }
  window.StudentAccounts = { INITIAL_PASSWORD, MAX_STUDENTS, validateRows, nextNumber, register, requiresPasswordChange, changeFirstPassword, readSpreadsheet };
})();
