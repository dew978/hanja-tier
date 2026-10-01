/* 자율학습: 최초 진단 → 뜻·음·따라쓰기 → 오늘 확인 → 급수 승급. */
(function () {
  const A = window.App, { S, B, $, esc, toast } = A;
  const H = window.Hanja, E = window.HanjaEngine;
  const MAIN_MESSAGES = [
    '하루 한 자, 차곡차곡 쌓이는 지혜',
    '매일 만나는 한자, 매일 커지는 생각',
    '작은 글자가 모여 만드는 우리의 큰 배움',
    '한 걸음씩 다가가는 재미있는 한자의 세계',
    '다 함께 한 자 한 자, 즐거운 우리 반 한자 시간',
    '친구들과 함께 키워가는 우리 반 한자 나무',
    '우리가 힘을 모아 완성하는 한자 퍼즐',
    '함께 읽고 쓰는 우리 반의 든든한 한자 실력',
    '한자를 알면 우리말이 더 쉬워져요!',
    '글자 속에 숨은 깊은 뜻, 오늘 함께 찾아볼까요?',
    '생각의 깊이를 더해주는 든든한 한자 길잡이',
    '알수록 재밌는 한자 탐험',
    '한자, 아는 만큼 넓어지는 세상',
    '머릿속 한자 창고, 오늘도 든든하게 채워요!'
  ];
  const messageKey = 'hanja-tier:main-message:' + new URL('.', location.href).pathname;
  let mainMessage = null, lastMessageIndex = -1;
  function mainMessageForVisit() {
    if (mainMessage !== null) return mainMessage;
    // Advance once per visit, not on ranking updates or other home-screen redraws.
    let previous = lastMessageIndex;
    for (const storageName of ['localStorage', 'sessionStorage']) {
      try {
        const saved = window[storageName].getItem(messageKey);
        if (saved !== null && /^(0|[1-9]\d*)$/.test(saved) && Number(saved) < MAIN_MESSAGES.length) {
          previous = Number(saved);
          break;
        }
      } catch (_) { /* Storage may be unavailable in private or restricted browsers. */ }
    }
    lastMessageIndex = (previous + 1) % MAIN_MESSAGES.length;
    for (const storageName of ['localStorage', 'sessionStorage']) {
      try { window[storageName].setItem(messageKey, String(lastMessageIndex)); } catch (_) {}
    }
    mainMessage = MAIN_MESSAGES[lastMessageIndex];
    return mainMessage;
  }
  let session = null, lastKey = '', rankTrack = 'growth', busy = false, writer = null;
  const p = () => E.profile(S.hanja);
  const date = () => E.day(B.now());
  const levelName = n => n ? H.LEVELS[n - 1] : '도전 중';
  const words = x => `<div class="hj-words">${x.words.map(w => `<div><b>${[...w.word].map(c => c === x.h ? `<em>${esc(c)}</em>` : esc(c)).join('')}</b><span class="rd">${esc(w.read)}</span>${w.mean ? `<span class="mn">${esc(w.mean)}</span>` : ''}</div>`).join('')}</div>`;
  function stopWriter(){writer?.destroy();writer=null;}
  function redraw() { stopWriter(); lastKey = ''; const main = $('#st-main'); if (!main) return; main.dataset.tab = 'hanja'; if (session) drawSession(main); else home(main); window.scrollTo(0,0); }
  function render(main) {
    const key = JSON.stringify([S.uid, S.hanja, S.hanjaRanks, S.users, date(), rankTrack]);
    if (main.dataset.tab === 'hanja' && (session || key === lastKey)) return;
    lastKey = key; main.dataset.tab = 'hanja'; main.dataset.key = '';
    if (session) drawSession(main); else home(main);
  }
  async function guarded(fn) {
    if (busy) return; busy = true;
    try { await fn(); } catch (e) { toast(e.message || '저장하지 못했어요. 다시 시도해 주세요.', 'bad'); }
    finally { busy = false; }
  }
  async function publish(uid, raw) {
    await B.set('hanjaRanks/' + uid, E.summary(raw));
  }
  function rankingHtml() {
    const rows = E.ranking(S.users || {}, S.hanjaRanks || {}, rankTrack);
    return `<div class="panel hj-rank"><h3>우리 반 랭킹</h3><div class="hj-track-tabs"><button class="btn ${rankTrack === 'growth' ? 'primary' : ''}" data-track="growth">발전도</button><button class="btn ${rankTrack === 'absolute' ? 'primary' : ''}" data-track="absolute">절대 진도</button></div>
      <p class="note">${rankTrack === 'growth' ? '첫 진단 대비 정답 증가 · 재확인 후 순위 반영 · 동점 공동 순위' : '통과 급수 → 뜻·음 확인 수 → 학습 진도 → 티어점수'}</p>
      <div class="hj-table-wrap"><table class="tbl"><thead><tr><th>순위</th><th>이름</th><th>${rankTrack === 'growth' ? '처음보다' : '통과 급수'}</th><th>${rankTrack === 'growth' ? '처음 → 지금' : '확인한 한자'}</th><th>티어점수</th></tr></thead><tbody>
      ${rows.map(r => `<tr class="${r.uid === S.uid ? 'hj-me' : ''}"><td>${r.rank}</td><td>${esc(r.name)}${r.uid === S.uid ? ' · 나' : ''}</td><td>${rankTrack === 'growth' ? `${r.growth >= 0 ? '+' : ''}${r.growth}문항 (${(r.growth / 30 * 100).toFixed(1)}%p)` : levelName(r.level)}</td><td>${rankTrack === 'growth' ? `${r.baseline} → ${r.current}/30` : `${r.mastered}/300자`}</td><td>${r.score}</td></tr>`).join('') || '<tr><td colspan="5" class="empty">학습 기록 없음</td></tr>'}</tbody></table></div></div>`;
  }
  function home(main) {
    const v = p(), s = E.summary(v), next = E.dailyPlan(v, B.now()), d = next;
    const started=!!v.studyDays[date()]||!!v.days[date()];
    const canExam = v.baseline && v.level < 5 && v.learned >= H.BOUNDS[v.level];
    const tier = E.tierOf(v.score);
    const readyRecheck = v.baseline && B.now() - (v.assessment || v.baseline).ts >= 7 * 86400000;
    main.innerHTML = `<div class="panel hj-banner"><span class="month-pill">한자 자율학습 · 8급부터 6급까지</span><h2 data-main-message>${esc(mainMessageForVisit())}</h2><p>뜻 · 음 · 획순 연습</p>
      <div class="hj-stats"><div><small>한자 티어</small><strong>${tier.name}</strong><span>${v.score}점</span></div><div><small>통과 급수</small><strong>${levelName(v.level)}</strong><span>5단계 중 ${v.level}단계</span></div><div><small>학습 진도</small><strong>${v.learned}<small> / 300자</small></strong><span>뜻·음 확인 ${s.mastered}자</span></div><div><small>처음보다 성장</small><strong>${v.assessment ? (s.growth >= 0 ? '+' : '') + s.growth + '문항' : '측정 준비'}</strong><span>${v.baseline ? '처음 ' + v.baseline.right + '/30문항' : '첫 진단 전'}</span></div></div>
      <div class="hj-progress"><i style="width:${v.learned / 3}%"></i></div><div class="hj-steps">${H.LEVELS.map((n,i) => `<span class="${i < v.level ? 'done' : i === v.level ? 'on' : ''}">${i < v.level ? '✓ ' : ''}${n}</span>`).join('')}</div></div>
      ${!v.baseline ? `<div class="panel hj-focus"><span class="month-pill">첫 방문 · 약 10분</span><h3>첫 실력 진단</h3><p>8급·7급·6급 각 10문제씩, 뜻과 음 무작위 30문제</p><button class="btn primary lg" data-hj="baseline">처음 실력 확인</button></div>` : `
      <div class="grid2" style="margin-top:16px"><div class="panel"><h3><span class="ink-label" aria-hidden="true">學</span>오늘의 한자</h3><p><b>오늘 ${[...next.chars].length}자</b> · ${H.LEVELS[next.stage]} · ${d.done?'오늘 완료 ✓':'5자씩 학습'}</p><p class="note">${d.done?`오늘 +${d.reward}점 획득 · 하루 1회`:`4/5자 통과 → 다음 묶음 · 오늘 전체 완료 +${next.reward}점`}</p>
      <div class="hj-batches">${Array.from({length:E.batchCount(next)},(_,i)=>`<div class="hj-batch"><b>${i+1}묶음 · 5자</b><span class="note">${next.batches?.[i]?.passed||next.legacyCompleted?'통과 ✓':E.isBatchOpen(next,i)?'학습 가능':'앞 묶음 통과 필요'}</span><button class="btn ${i===E.nextBatch(next)?'primary':''}" data-hj="study" data-batch="${i}" ${E.isBatchOpen(next,i)?'':'disabled'}>${next.batches?.[i]?.passed||next.legacyCompleted?'복습':i===0?(started?'첫 5자 이어가기':'첫 5자 학습'):'다음 5자 학습'}</button></div>`).join('')}</div>
      <p class="note">하루 최대 10자 · 뜻·음 모두 정답 = 1자 통과</p>${next.legacyCompleted?'<p class="note">오늘 학습 완료 · 복습 가능</p>':''}</div>
      <div class="panel"><h3><span class="ink-label" aria-hidden="true">試</span>승급 시험</h3><p>${v.level >= 5 ? '6급까지 통과 완료' : `${H.LEVELS[v.level]} 도전 · ${Math.min(v.learned, H.BOUNDS[v.level])}/${H.BOUNDS[v.level]}자 학습`}</p><p class="note">뜻·음 쓰기 · 80% 이상 통과 · 획순 출제 없음<br>승급 +100점 · 급수별 1회</p><button class="btn good lg" data-hj="exam" ${!canExam || v.failDay === date() ? 'disabled' : ''}>${v.failDay === date() ? '내일 재도전' : '승급 시험 시작'}</button></div></div>
      <div class="panel" style="margin-top:16px"><h3><span class="ink-label" aria-hidden="true">進</span>발전도 다시 확인</h3><p class="note">첫 진단과 동일한 30문항 · 7일마다 · 점수 차감 없음</p><button class="btn" data-hj="recheck" ${readyRecheck ? '' : 'disabled'}>${readyRecheck ? '이번 주 발전도 확인' : '다음 확인: ' + E.day((v.assessment || v.baseline).ts + 7 * 86400000)}</button></div>`}
      ${rankingHtml()}<div class="panel" style="margin-top:16px"><h3><span class="ink-label" aria-hidden="true">書</span>오늘의 한자 책장</h3><p class="note">학습한 한자 · 뜻·음 · 예시 단어 5개</p><div class="hj-chars">${started ? E.visibleChars(d).map(h => `<button class="btn" data-char="${h}"><b>${h}</b></button>`).join('') : '<span class="note">학습 시작 후 열림</span>'}</div></div>
      <div class="panel" style="margin-top:16px"><h3>앱으로 설치하기</h3><p class="note">Chrome·Edge: 앱 설치<br>iPhone·iPad: Safari → 공유 → 홈 화면에 추가</p><button class="btn primary install-btn hidden" data-install="1">이 기기에 설치</button><p class="note">로그인·기록 저장: 인터넷 연결 필요</p></div>`;
    main.onclick = e => {
      const t = e.target.closest('[data-track]'); if (t) { rankTrack = t.dataset.track; redraw(); return; }
      const c = e.target.closest('[data-char]'); if (c) { viewChar(c.dataset.char); return; }
      const b = e.target.closest('[data-hj]'); if (b && !b.disabled) guarded(() => start(b.dataset.hj,b.dataset.batch===undefined?undefined:Number(b.dataset.batch)));
    };
    document.dispatchEvent(new CustomEvent('hanja-rendered'));
  }
  async function start(mode,batchIndex) {
    const uid = S.uid, now = B.now(); let items, plan, lv;
    const tx = await B.tx('hanja/' + uid, raw => {
      const v = mode==='study'?E.ensurePlan(raw,now):E.profile(raw);
      if (mode === 'baseline') { if (v.baseline) throw new Error('처음 실력 확인은 이미 완료했어요.'); if (!v.baselinePlan) v.baselinePlan = E.diagnostic(); }
      else if (!v.baseline) throw new Error('처음 실력 확인부터 해 주세요.');
      if (mode === 'study') { const today=v.studyDays[E.day(now)];if(batchIndex===undefined)batchIndex=E.nextBatch(today);if(!E.isBatchOpen(today,batchIndex))throw new Error('앞 묶음에서 4자 이상 통과해 주세요.'); }
      if (mode === 'recheck' && now - (v.assessment || v.baseline).ts < 7 * 86400000) throw new Error('발전도 확인은 7일마다 할 수 있어요.');
      if (mode === 'exam' && (v.level >= 5 || v.learned < H.BOUNDS[v.level] || v.failDay === E.day(now))) throw new Error('지금은 승급 시험에 도전할 수 없어요.');
      return v;
    });
    const v = tx.value;
    if (mode === 'study') { plan = v.studyDays[E.day(now)]; items = E.shuffle(E.dailyItems(plan,batchIndex)); }
    else if (mode === 'exam') { lv = v.level; items = E.examItems(lv, A.settings().hanja.testCount[lv]); }
    else items = E.shuffle(v.baselinePlan);
    S.hanja=v;session = { uid, mode, plan, batchIndex, level: lv, date: E.day(now), items, answers: [], i: 0, card: 0, step: mode === 'study' ? 'cards' : 'quiz' }; redraw();
  }
  function header(title, pos, total) { return `<div class="a-head"><h2>${title}</h2><span class="sp"></span><button class="btn sm" id="hj-quit">그만하기</button></div><div class="hj-progress"><i style="width:${100 * pos / total}%"></i></div>`; }
  function bindQuit() { $('#hj-quit').onclick = async () => { if (await A.confirmBox('학습 종료', '학습 묶음 유지 · 진행 중인 테스트는 처음부터 재시작', '돌아가기')) { session = null; redraw(); } }; }
  function drawStudyCard(main) {
    const s=session,chars=E.batchChars(s.plan,s.batchIndex),x=H.BY[chars[s.card]],saved=s.plan.practice?.[x.h]?.count===2;
    main.innerHTML=`<div class="panel">${header((s.batchIndex+1)+'묶음 · '+(s.card+1)+' / 5자',s.card,5)}<div class="hj-card hj-writing-card"><div class="hj-writing"><div id="hj-stroke-board" class="hj-stroke-board"></div><p id="hj-write-count" class="month-pill">${saved?2:0}/2회 완료</p><div class="hj-writing-actions"><button class="btn sm" id="hj-demo">획순 시범 보기</button><button class="btn sm" id="hj-restart">다시 두 번 쓰기</button></div></div><div class="hj-info"><span class="month-pill">${x.levelName}</span><div class="hun">${esc(x.hun)} ${esc(x.eum)}</div><p class="note">동그라미 → 안내선 · 획순·방향대로 <b>2회</b> 완성</p>${words(x)}</div></div><p id="hj-write-msg" class="note" role="status" aria-live="polite"></p><div class="foot"><button class="btn hidden" id="hj-save-writing">쓰기 기록 저장 다시 시도</button><button class="btn primary" id="hj-next" ${saved?'':'disabled'}>${s.card<4?'다음 한자':'5자 뜻·음 확인하기'}</button></div></div>`;
    let saving=false;
    async function saveWriting(){
      if(saving||session!==s)return;saving=true;$('#hj-next').disabled=true;
      try{
        if(S.uid!==s.uid)throw new Error('다시 로그인해 주세요.');
        const now=B.now(),tx=await B.tx('hanja/'+s.uid,raw=>E.recordPractice(raw,s.date,s.batchIndex,x.h,now));
        if(session!==s)return;S.hanja=tx.value;s.plan=tx.value.studyDays[s.date];$('#hj-next').disabled=false;$('#hj-save-writing').classList.add('hidden');$('#hj-write-msg').textContent='2회 완료 · 저장 완료';
      }catch(e){if(session===s){$('#hj-write-msg').textContent=e.message;$('#hj-save-writing').classList.remove('hidden');}}
      finally{saving=false;}
    }
    try{
      writer=window.StrokePractice.mount($('#hj-stroke-board'),x.h,{completed:saved,onStatus:text=>{if(session===s)$('#hj-write-msg').textContent=text;},onProgress:state=>{if(session===s)$('#hj-write-count').textContent=state.round+'/2회 완료';},onReset:()=>{$('#hj-next').disabled=true;},onComplete:saveWriting});
      $('#hj-demo').onclick=()=>{if(!saving)writer?.demonstrate();};$('#hj-restart').onclick=()=>{if(!saving)writer?.reset();};
    }catch(e){$('#hj-write-msg').textContent=e.message;$('#hj-next').disabled=true;}
    $('#hj-save-writing').onclick=saveWriting;
    $('#hj-next').onclick=()=>{if($('#hj-next').disabled)return;if(++s.card>=chars.length)s.step='quiz';redraw();};bindQuit();
  }
  function drawPairQuestion(main) {
    const s=session,item=s.items[s.i],selected={},questions={hun:E.question(item.h,'hun'),eum:E.question(item.h,'eum')};
    main.innerHTML=`<div class="panel">${header((s.batchIndex+1)+'묶음 뜻·음 확인 · '+(s.i+1)+' / 5자',s.i,5)}<div class="hj-q"><p class="prompt">뜻·음 선택</p><div class="big">${item.h}</div><div class="hj-pair-fields">${['hun','eum'].map(type=>`<fieldset><legend>${type==='hun'?'뜻':'음'}</legend><div class="hj-opts">${questions[type].options.map((option,i)=>`<button type="button" data-pair="${type}" data-choice="${i}" aria-pressed="false">${esc(option)}</button>`).join('')}</div></fieldset>`).join('')}</div><div class="foot"><button class="btn ghost" id="hj-unknown">잘 모르겠어요</button><button class="btn primary" id="hj-pair-submit" disabled>답 제출</button></div><p class="note">뜻·음 모두 정답 = 1자 통과 · 4/5자 이상 통과</p></div></div>`;
    bindQuit();let answered=false;
    function submit(answer){if(answered)return;answered=true;s.answers.push(answer);if(++s.i>=s.items.length)s.step='result';redraw();}
    main.querySelectorAll('[data-pair]').forEach(button=>button.onclick=()=>{
      const type=button.dataset.pair;selected[type]=questions[type].options[Number(button.dataset.choice)];
      main.querySelectorAll('[data-pair="'+type+'"]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      $('#hj-pair-submit').disabled=selected.hun===undefined||selected.eum===undefined;
    });
    $('#hj-pair-submit').onclick=()=>{if(!$('#hj-pair-submit').disabled)submit({...selected});};$('#hj-unknown').onclick=()=>submit({hun:'',eum:''});
  }
  function viewChar(h) { const x=H.BY[h]; A.modal(`<div class="hj-card"><div class="hj-glyph"><span class="static">${x.h}</span></div><div class="hj-info"><div class="hun">${esc(x.hun)} ${esc(x.eum)}</div>${words(x)}</div></div><div class="foot"><button class="btn" data-close>닫기</button></div>`, { wide:true }); }
  function drawSession(main) {
    main.onclick = null;
    if (session.step === 'result') return result(main);
    if (session.step === 'cards') return drawStudyCard(main);
    if (session.mode === 'study') return drawPairQuestion(main);
    const item=session.items[session.i], q=E.question(item.h,item.type,Math.random,session.mode==='exam'?H.LIST.slice(0,H.BOUNDS[session.level]):H.LIST);
    const label={baseline:'처음 실력 확인',recheck:'발전도 확인',study:'오늘의 뜻·음 확인',exam:'승급 시험'}[session.mode];
    const written=session.mode==='exam';
    const questionPrompt=written?`${item.type==='hun'?'뜻':'음'} 쓰기`:(item.type==='hun'?'뜻을 고르세요.':'음을 고르세요.');
    main.innerHTML=`<div class="panel">${header(label+' · '+(session.i+1)+' / '+session.items.length,session.i,session.items.length)}<div class="hj-q"><p class="prompt${written?'':' prompt-choice'}">${questionPrompt}</p><div class="big">${item.h}</div>
      ${written?'<form id="hj-answer-form"><label for="hj-written">한글로 답하기</label><input id="hj-written" autocomplete="off" maxlength="30" required><button class="btn primary" type="submit">답 제출</button></form>':`<div class="hj-opts">${q.options.map((o,i)=>`<button data-answer="${i}">${esc(o)}</button>`).join('')}</div>`}<button class="btn ghost" id="hj-unknown" style="margin-top:20px">잘 모르겠어요</button></div></div>`;
    bindQuit(); let answered=false;
    const submit=a=>{if(answered)return;answered=true;session.answers.push(a.trim());session.i++;if(session.i>=session.items.length)session.step='result';redraw();};
    if(written) $('#hj-answer-form').onsubmit=e=>{e.preventDefault();submit($('#hj-written').value);};
    else main.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>submit(q.options[Number(b.dataset.answer)]));
    $('#hj-unknown').onclick=()=>submit('');
  }
  async function commit(s) {
    if (S.uid !== s.uid) throw new Error('다시 로그인해 주세요.');
    const now=B.now(); let outcome;
    const tx=await B.tx('hanja/'+s.uid,raw=>{
      const v=E.profile(raw);
      if(s.mode==='study') {outcome=E.finishBatch(v,s.date,s.batchIndex,s.items,s.answers,now);return outcome.p;}
      if(s.mode==='exam') {outcome=E.finishExam(v,s.level,s.items,s.answers,now);return outcome.p;}
      const g=E.grade(s.items,s.answers);
      if(s.mode==='baseline') {if(v.baseline) throw new Error('이미 저장된 첫 진단을 유지합니다.');v.baseline={right:g.right,total:30,ts:now};}
      else {if(now-(v.assessment||v.baseline).ts<7*86400000)throw new Error('이번 발전도 확인은 이미 저장됐어요.');v.assessment={right:g.right,total:30,ts:now};}
      outcome={result:g,points:0,passed:true};return v;
    });
    S.hanja=tx.value;s.outcome=outcome;s.committed=true;
    await publish(s.uid,tx.value);s.published=true;
  }
  async function result(main) {
    const s=session;if(!s)return;
    main.innerHTML='<div class="panel"><h3>결과 저장 중…</h3></div>';
    try { if(!s.committed) {if(!s.saving)s.saving=commit(s);await s.saving;} else if(!s.published){await publish(s.uid,p());s.published=true;} }
    catch(e) {s.saving=null;if(session!==s)return;main.innerHTML=`<div class="panel"><h3>${s.committed?'학습 저장 완료 · 순위 동기화 필요':'결과 저장 실패'}</h3><p>${esc(e.message)}</p><button class="btn primary" id="hj-save-retry">저장 다시 시도</button></div>`;$('#hj-save-retry').onclick=()=>result(main);return;}
    if(session!==s || S.tab!=='hanja')return;
    const o=s.outcome,g=o.result,diagnostic=s.mode==='baseline'||s.mode==='recheck';
    const msg=diagnostic?(s.mode==='baseline'?'첫 진단 완료 · 학습 시작 가능':'발전도 확인 완료') : o.passed?(o.points?`${s.mode==='exam'?'승급 시험 통과!':'오늘 학습 완료!'} +${o.points}점`:s.mode==='study'?(o.done?'복습 완료 · 오늘 보상 수령 완료':'묶음 통과 · 다음 5자 학습 가능'):'승급 시험 통과'):(s.mode==='study'?'통과 기준 4/5자 · 같은 묶음 재도전':'통과 기준 80% · 내일 재도전');
    main.innerHTML=`<div class="panel hj-result"><span class="ink-result-mark" aria-hidden="true">${o.passed?'成':'習'}</span><h2>${g.right} / ${g.total}${s.mode==='study'?'자 통과':' 정답'} · ${Math.round(g.percent)}%</h2><p>${msg}</p>${diagnostic?'':`<div class="hj-chars">${g.marked.filter(x=>!x.correct).map(q=>`<div><b>${q.h}</b><span>${esc(H.BY[q.h].hun+' '+H.BY[q.h].eum)}</span></div>`).join('')}</div>`}<div class="foot">${s.mode==='study'&&!o.passed?'<button class="btn primary" id="hj-retry">이 5자 다시 학습</button>':''}${s.mode==='study'&&o.next!==null&&o.next!==undefined?'<button class="btn primary" id="hj-next-batch">다음 5자 학습</button>':''}<button class="btn" id="hj-home">한자 홈으로</button></div></div>`;
    $('#hj-home').onclick=()=>{session=null;redraw();};const retry=$('#hj-retry');if(retry)retry.onclick=()=>guarded(()=>start('study',s.batchIndex));
    const next=$('#hj-next-batch');if(next)next.onclick=()=>guarded(()=>start('study',o.next));

  }
  let syncKey='';
  function sync() {if(!S.uid||S.isTeacher||!p().baseline)return;const key=S.uid+JSON.stringify(E.summary(p()));if(key===syncKey)return;syncKey=key;publish(S.uid,p()).catch(()=>{syncKey='';});}
  window.HanjaStudy={viewChar,render(main){render(main);sync();},reset(){stopWriter();mainMessage=null;session=null;lastKey='';syncKey='';busy=false;rankTrack='growth';}};
})();
