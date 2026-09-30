/* 자율학습: 최초 진단 → 뜻·음·따라쓰기 → 오늘 확인 → 급수 승급. */
(function () {
  const A = window.App, { S, B, $, esc, toast } = A;
  const H = window.Hanja, E = window.HanjaEngine;
  let session = null, lastKey = '', rankTrack = 'growth', busy = false;
  const p = () => E.profile(S.hanja);
  const date = () => E.day(B.now());
  const levelName = n => n ? H.LEVELS[n - 1] : '도전 중';
  const words = x => `<div class="hj-words">${x.words.map(w => `<div><b>${[...w.word].map(c => c === x.h ? `<em>${esc(c)}</em>` : esc(c)).join('')}</b><span class="rd">${esc(w.read)}</span>${w.mean ? `<span class="mn">${esc(w.mean)}</span>` : ''}</div>`).join('')}</div>`;
  function redraw() { lastKey = ''; const main = $('#st-main'); if (!main) return; main.dataset.tab = 'hanja'; if (session) drawSession(main); else home(main); window.scrollTo(0,0); }
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
    return `<div class="panel hj-rank"><h3>우리 반의 두 가지 순위</h3><div class="hj-track-tabs"><button class="btn ${rankTrack === 'growth' ? 'primary' : ''}" data-track="growth">🌱 발전도</button><button class="btn ${rankTrack === 'absolute' ? 'primary' : ''}" data-track="absolute">📚 절대 진도</button></div>
      <p class="note">${rankTrack === 'growth' ? '처음 30문제와 같은 한자를 다시 확인해 늘어난 정답 수로 비교해요. 재확인 후 순위에 참여해요. 동점은 공동 순위예요.' : '통과 급수 → 뜻·음 모두 확인한 한자 수 → 학습 진도 → 티어점수 순서예요.'}</p>
      <div class="hj-table-wrap"><table class="tbl"><thead><tr><th>순위</th><th>이름</th><th>${rankTrack === 'growth' ? '처음보다' : '통과 급수'}</th><th>${rankTrack === 'growth' ? '처음 → 지금' : '확인한 한자'}</th><th>티어점수</th></tr></thead><tbody>
      ${rows.map(r => `<tr class="${r.uid === S.uid ? 'hj-me' : ''}"><td>${r.rank}</td><td>${esc(r.name)}${r.uid === S.uid ? ' · 나' : ''}</td><td>${rankTrack === 'growth' ? `${r.growth >= 0 ? '+' : ''}${r.growth}문항 (${(r.growth / 30 * 100).toFixed(1)}%p)` : levelName(r.level)}</td><td>${rankTrack === 'growth' ? `${r.baseline} → ${r.current}/30` : `${r.mastered}/300자`}</td><td>${r.score}</td></tr>`).join('') || '<tr><td colspan="5" class="empty">아직 기록이 없어요. 첫 학습부터 차근차근 시작해요.</td></tr>'}</tbody></table></div></div>`;
  }
  function home(main) {
    const v = p(), s = E.summary(v), d = v.days[date()], next = E.dailyPlan(v, B.now(), A.settings().hanja.daily);
    const canExam = v.baseline && v.level < 5 && v.learned >= H.BOUNDS[v.level];
    const tier = E.tierOf(v.score);
    const readyRecheck = v.baseline && B.now() - (v.assessment || v.baseline).ts >= 7 * 86400000;
    main.innerHTML = `<div class="panel hj-banner"><span class="month-pill">한자 자율학습 · 8급부터 6급까지</span><h2>매일 조금씩, 나만의 속도로</h2><p>뜻을 알고, 소리를 읽고, 손으로 익혀요.</p>
      <div class="hj-stats"><div><small>한자 티어</small><strong>${tier.name}</strong><span>${v.score}점</span></div><div><small>통과 급수</small><strong>${levelName(v.level)}</strong><span>5단계 중 ${v.level}단계</span></div><div><small>학습 진도</small><strong>${v.learned}<small> / 300자</small></strong><span>뜻·음 확인 ${s.mastered}자</span></div><div><small>처음보다 성장</small><strong>${v.assessment ? (s.growth >= 0 ? '+' : '') + s.growth + '문항' : '측정 준비'}</strong><span>${v.baseline ? '처음 ' + v.baseline.right + '/30문항' : '첫 실력 확인부터 시작해요'}</span></div></div>
      <div class="hj-progress"><i style="width:${v.learned / 3}%"></i></div><div class="hj-steps">${H.LEVELS.map((n,i) => `<span class="${i < v.level ? 'done' : i === v.level ? 'on' : ''}">${i < v.level ? '✓ ' : ''}${n}</span>`).join('')}</div></div>
      ${!v.baseline ? `<div class="panel hj-focus"><span class="month-pill">첫 방문 · 약 10분</span><h3>지금의 나를 알아볼까요?</h3><p>8급·7급·6급에서 10문제씩, 뜻과 음을 묻는 무작위 30문제예요. 모르면 ‘잘 모르겠어요’를 눌러도 괜찮아요.</p><p class="note">점수 차감은 없어요. 이 결과는 앞으로 얼마나 성장했는지 비교하는 출발점이에요.</p><button class="btn primary lg" data-hj="baseline">처음 실력 확인</button></div>` : `
      <div class="grid2" style="margin-top:16px"><div class="panel"><h3>📖 오늘의 한자</h3><p><b>${[...next.chars].length}자</b> · ${H.LEVELS[next.stage]} · ${d && d.done ? '오늘 완료 ✓' : '뜻·음 확인 90% 이상이면 완료'}</p><p class="note">${d && d.done ? `오늘 +${d.reward}점을 받았어요. 같은 한자만 더 확인할 수 있어요.` : `따라쓰기와 뜻·음 테스트를 마치면 +${next.reward}점. 하루 한 번 받을 수 있어요.`}</p><button class="btn primary lg" data-hj="study">${d && d.done ? '오늘 한자 다시 확인' : d ? '오늘 학습 이어가기' : '오늘 학습 시작'}</button><p class="note">하루 최대 20자. 시작한 한자 묶음은 오늘 바뀌지 않아요.</p></div>
      <div class="panel"><h3>🏅 승급 시험</h3><p>${v.level >= 5 ? '6급까지 모두 통과했어요!' : `${H.LEVELS[v.level]} 도전 · ${Math.min(v.learned, H.BOUNDS[v.level])}/${H.BOUNDS[v.level]}자 학습`}</p><p class="note">뜻·음 쓰기 중심 · 80% 이상이면 승급 +100점.<br>획순 문제는 없어요. 급수별 보상은 한 번씩이에요.</p><button class="btn good lg" data-hj="exam" ${!canExam || v.failDay === date() ? 'disabled' : ''}>${v.failDay === date() ? '내일 다시 도전해요' : '승급 시험 시작'}</button></div></div>
      <div class="panel" style="margin-top:16px"><h3>🌱 발전도 다시 확인</h3><p class="note">첫 진단과 같은 30개 문항을 섞어서 풀어요. 7일마다 한 번 확인하고, 점수가 낮아져도 티어점수는 줄지 않아요.</p><button class="btn" data-hj="recheck" ${readyRecheck ? '' : 'disabled'}>${readyRecheck ? '이번 주 발전도 확인' : '다음 확인: ' + E.day((v.assessment || v.baseline).ts + 7 * 86400000)}</button></div>`}
      ${rankingHtml()}<div class="panel" style="margin-top:16px"><h3>📚 오늘의 한자 책장</h3><p class="note">오늘 한자 안에서 뜻·음·예시 단어 5개를 다시 살펴볼 수 있어요.</p><div class="hj-chars">${d ? [...d.chars].map(h => `<button class="btn" data-char="${h}"><b>${h}</b></button>`).join('') : '오늘 학습을 시작하면 책장이 열려요.'}</div></div>
      <div class="panel" style="margin-top:16px"><h3>📲 앱으로 설치하기</h3><p class="note">Chrome·Edge에서는 주소창의 설치 아이콘 또는 아래 버튼을 사용해요. iPhone·iPad Safari에서는 공유 → 홈 화면에 추가를 눌러요.</p><button class="btn primary install-btn hidden" data-install="1">이 기기에 설치</button><p class="note">처음 접속과 기록 저장에는 인터넷 연결이 필요해요.</p></div>`;
    main.onclick = e => {
      const t = e.target.closest('[data-track]'); if (t) { rankTrack = t.dataset.track; redraw(); return; }
      const c = e.target.closest('[data-char]'); if (c) { viewChar(c.dataset.char); return; }
      const b = e.target.closest('[data-hj]'); if (b && !b.disabled) guarded(() => start(b.dataset.hj));
    };
    document.dispatchEvent(new CustomEvent('hanja-rendered'));
  }
  async function start(mode) {
    const uid = S.uid, now = B.now(); let items, plan, lv;
    const tx = await B.tx('hanja/' + uid, raw => {
      const v = E.profile(raw);
      if (mode === 'baseline') { if (v.baseline) throw new Error('처음 실력 확인은 이미 완료했어요.'); if (!v.baselinePlan) v.baselinePlan = E.diagnostic(); }
      else if (!v.baseline) throw new Error('처음 실력 확인부터 해 주세요.');
      if (mode === 'study') { const today = E.day(now); if (!v.days[today]) v.days[today] = E.dailyPlan(v, now, A.settings().hanja.daily); }
      if (mode === 'recheck' && now - (v.assessment || v.baseline).ts < 7 * 86400000) throw new Error('발전도 확인은 7일마다 할 수 있어요.');
      if (mode === 'exam' && (v.level >= 5 || v.learned < H.BOUNDS[v.level] || v.failDay === E.day(now))) throw new Error('지금은 승급 시험에 도전할 수 없어요.');
      return v;
    });
    const v = tx.value;
    if (mode === 'study') { plan = v.days[E.day(now)]; items = E.shuffle(E.dailyItems(plan)); }
    else if (mode === 'exam') { lv = v.level; items = E.examItems(lv, A.settings().hanja.testCount[lv]); }
    else items = E.shuffle(v.baselinePlan);
    session = { uid, mode, plan, level: lv, date: E.day(now), items, answers: [], i: 0, card: 0, step: mode === 'study' ? 'cards' : 'quiz' }; redraw();
  }
  function header(title, pos, total) { return `<div class="a-head"><h2>${title}</h2><span class="sp"></span><button class="btn sm" id="hj-quit">그만하기</button></div><div class="hj-progress"><i style="width:${100 * pos / total}%"></i></div>`; }
  function bindQuit() { $('#hj-quit').onclick = async () => { if (await A.confirmBox('한자 홈으로 돌아갈까요?', '오늘의 한자 묶음은 유지돼요. 끝내지 않은 테스트는 처음부터 다시 풀어요.', '돌아가기')) { session = null; redraw(); } }; }
  function trace(canvas, onWritten) {
    const ctx = canvas.getContext('2d'); ctx.lineWidth = 7; ctx.strokeStyle = '#38342d'; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    let prev = null, distance = 0;
    const point = e => { const r = canvas.getBoundingClientRect(); return { x: (e.clientX-r.left)*canvas.width/r.width, y: (e.clientY-r.top)*canvas.height/r.height }; };
    canvas.onpointerdown = e => { e.preventDefault(); canvas.setPointerCapture(e.pointerId); prev = point(e); };
    canvas.onpointermove = e => { if (!prev) return; const q = point(e); ctx.beginPath(); ctx.moveTo(prev.x,prev.y); ctx.lineTo(q.x,q.y); ctx.stroke(); distance += Math.hypot(q.x-prev.x,q.y-prev.y); prev=q; if (distance > 120) onWritten(); };
    canvas.onpointerup = canvas.onpointercancel = () => { prev = null; };
    return () => { ctx.clearRect(0,0,canvas.width,canvas.height); distance=0; };
  }
  function viewChar(h) { const x=H.BY[h]; A.modal(`<div class="hj-card"><div class="hj-glyph"><span class="static">${x.h}</span></div><div class="hj-info"><div class="hun">${esc(x.hun)} ${esc(x.eum)}</div>${words(x)}</div></div><div class="foot"><button class="btn" data-close>닫기</button></div>`, { wide:true }); }
  function drawSession(main) {
    main.onclick = null;
    if (session.step === 'result') return result(main);
    if (session.step === 'cards') {
      const chars = [...session.plan.chars], x=H.BY[chars[session.card]];
      main.innerHTML=`<div class="panel">${header('오늘의 한자 · '+(session.card+1)+' / '+chars.length,session.card,chars.length)}<div class="hj-card"><div><div class="hj-glyph hj-trace"><span class="static">${x.h}</span><canvas id="hj-canvas" width="400" height="400" aria-label="${esc(x.hun+' '+x.eum)} 따라쓰기"></canvas></div><button class="btn sm" id="hj-clear">지우고 다시 쓰기</button></div><div class="hj-info"><span class="month-pill">${x.levelName}</span><div class="hun">${esc(x.hun)} ${esc(x.eum)}</div><p class="note">옅은 글자 위에 손가락이나 펜으로 따라 써 보세요.<br>획순이나 글씨 모양은 채점하지 않아요.</p>${words(x)}</div></div><div class="foot"><span id="hj-write-msg" class="note">한 번 따라 쓴 뒤 다음으로 가요.</span><button class="btn primary" id="hj-next" disabled>${session.card+1<chars.length?'다음 한자':'뜻·음 확인하기'}</button></div></div>`;
      const clear=trace($('#hj-canvas'),()=>{ $('#hj-next').disabled=false; $('#hj-write-msg').textContent='잘 연습했어요. 뜻과 음도 소리 내어 읽어 보세요.'; });
      $('#hj-clear').onclick=()=>{clear();$('#hj-next').disabled=true;};
      $('#hj-next').onclick=()=>{ if (++session.card>=chars.length) session.step='quiz'; redraw(); }; bindQuit(); return;
    }
    const item=session.items[session.i], q=E.question(item.h,item.type,Math.random,session.mode==='exam'?H.LIST.slice(0,H.BOUNDS[session.level]):H.LIST);
    const label={baseline:'처음 실력 확인',recheck:'발전도 확인',study:'오늘의 뜻·음 확인',exam:'승급 시험'}[session.mode];
    const written=session.mode==='exam';
    main.innerHTML=`<div class="panel">${header(label+' · '+(session.i+1)+' / '+session.items.length,session.i,session.items.length)}<div class="hj-q"><p class="prompt">이 한자의 ${item.type==='hun'?'뜻':'음'}${written?'을 써 주세요.':'은 무엇일까요?'}</p><div class="big">${item.h}</div>
      ${written?'<form id="hj-answer-form"><label for="hj-written">한글로 답하기</label><input id="hj-written" autocomplete="off" maxlength="30" required><button class="btn primary" type="submit">답 제출</button></form>':`<div class="hj-opts">${q.options.map((o,i)=>`<button data-answer="${i}">${esc(o)}</button>`).join('')}</div>`}<button class="btn ghost" id="hj-unknown" style="margin-top:20px">잘 모르겠어요</button><p class="note">결과는 모든 문제를 푼 뒤 보여 드려요.</p></div></div>`;
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
      if(s.mode==='study') {outcome=E.finishDaily(v,s.date,s.items,s.answers,now);return outcome.p;}
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
    main.innerHTML='<div class="panel"><h3>결과를 저장하고 있어요…</h3><p>완료될 때까지 잠시 기다려 주세요.</p></div>';
    try { if(!s.committed) {if(!s.saving)s.saving=commit(s);await s.saving;} else if(!s.published){await publish(s.uid,p());s.published=true;} }
    catch(e) {s.saving=null;if(session!==s)return;main.innerHTML=`<div class="panel"><h3>${s.committed?'학습 기록은 저장됐어요. 순위 동기화가 필요해요.':'아직 결과를 저장하지 못했어요.'}</h3><p>${esc(e.message)}</p><button class="btn primary" id="hj-save-retry">저장 다시 시도</button></div>`;$('#hj-save-retry').onclick=()=>result(main);return;}
    if(session!==s || S.tab!=='hanja')return;
    const o=s.outcome,g=o.result,diagnostic=s.mode==='baseline'||s.mode==='recheck';
    const msg=diagnostic?(s.mode==='baseline'?'출발점을 저장했어요. 이제 학습을 시작해요!':'이번 발전도 확인을 저장했어요.') : o.passed?(o.points?`완료! +${o.points}점을 받았어요.`:'오늘 보상은 이미 받았어요. 확인 학습을 마쳤어요.'):(s.mode==='study'?'90% 이상이면 완료돼요. 같은 한자로 다시 도전해요.':'80% 이상이면 승급해요. 복습한 뒤 내일 다시 도전해요.');
    main.innerHTML=`<div class="panel hj-result"><span style="font-size:3em">${o.passed?'🌟':'🌱'}</span><h2>${g.right} / ${g.total} 정답 · ${Math.round(g.percent)}%</h2><p>${msg}</p>${diagnostic?'':`<div class="hj-chars">${g.marked.filter(x=>!x.correct).map(q=>`<div><b>${q.h}</b><span>${esc(H.BY[q.h].hun+' '+H.BY[q.h].eum)}</span></div>`).join('')}</div>`}<div class="foot">${s.mode==='study'&&!o.passed?'<button class="btn primary" id="hj-retry">오늘 한자 다시 학습</button>':''}<button class="btn" id="hj-home">한자 홈으로</button></div></div>`;
    $('#hj-home').onclick=()=>{session=null;redraw();};const retry=$('#hj-retry');if(retry)retry.onclick=()=>guarded(()=>start('study'));
  }
  let syncKey='';
  function sync() {if(!S.uid||S.isTeacher||!p().baseline)return;const key=S.uid+JSON.stringify(E.summary(p()));if(key===syncKey)return;syncKey=key;publish(S.uid,p()).catch(()=>{syncKey='';});}
  window.HanjaStudy={viewChar,render(main){render(main);sync();},reset(){session=null;lastKey='';syncKey='';busy=false;rankTrack='growth';}};
})();
