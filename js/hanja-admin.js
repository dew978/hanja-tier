/* 관리자 화면도 한자 학습과 학생 계정만 제공합니다. */
(function(){
  const A=window.App,{S,B,$,esc,toast}=A,E=window.HanjaEngine,H=window.Hanja;
  let tab='progress',track='growth',lastKey='';
  const level=n=>n?H.LEVELS[n-1]:'도전 중';
  const students=()=>Object.entries(S.users).sort((a,b)=>(a[1].no||0)-(b[1].no||0));
  const empty=n=>`<tr><td colspan="${n}" class="empty">학습 기록 없음</td></tr>`;
  function progress(){
    const rows=students(),today=E.day(B.now()),done=rows.filter(([uid])=>(S.profiles[uid]?.studyDays?.[today]||S.profiles[uid]?.days?.[today])?.done).length;
    return `<section class="panel hj-banner"><span class="month-pill">관리자 · 한자 자율학습</span><h2>한 글자씩 쌓이는 우리 반의 성장</h2><p>8급~6급 · 뜻·음 · 획순 연습</p><div class="hj-stats"><div><small>학습 학생</small><strong>${rows.length}명</strong></div><div><small>오늘 학습 완료</small><strong>${done}명</strong></div><div><small>학습 범위</small><strong>300자</strong></div><div><small>하루 새 학습</small><strong>최대 ${A.settings().hanja.daily}자</strong></div></div></section>
    <section class="panel"><h3>한자 학습 살펴보기</h3><p class="note">한자 선택 → 뜻·음·예시 단어 5개</p><div class="hj-chars">${H.LIST.slice(0,10).map(x=>`<button class="btn" data-preview="${x.h}" aria-label="${x.h} ${esc(x.hun+' '+x.eum)} 살펴보기"><b>${x.h}</b></button>`).join('')}</div></section>
    <section class="panel"><h3>학생별 한자 학습 현황</h3><div class="hj-table-wrap"><table class="tbl"><thead><tr><th>학생</th><th>통과 급수</th><th>학습 진도</th><th>티어</th><th>오늘 학습</th></tr></thead><tbody>${rows.map(([uid,u])=>{const p=E.profile(S.profiles[uid]);return `<tr><td>${esc(u.no||'')} ${esc(u.name)}</td><td>${level(p.level)}</td><td>${p.learned}/300자</td><td>${E.tierOf(p.score).name} · ${p.score}점</td><td>${(p.studyDays[today]||p.days[today])?.done?'완료 ✓':(p.studyDays[today]||p.days[today])?'학습 중':p.baseline?'시작 전':'첫 진단 전'}</td></tr>`;}).join('')||empty(5)}</tbody></table></div>${!rows.length?'<button class="btn primary" data-go-students>첫 학생 등록하기</button>':''}</section>`;
  }
  function ranks(){
    const rows=E.ranking(S.users,S.hanjaRanks,track);
    return `<section class="panel"><h2>두 가지 한자 랭킹</h2><div class="hj-track-tabs"><button class="btn ${track==='growth'?'primary':''}" data-track="growth">발전도</button><button class="btn ${track==='absolute'?'primary':''}" data-track="absolute">절대 진도</button></div><p class="note">${track==='growth'?'첫 진단 대비 정답 증가 · 7일 후 재확인부터 반영':'통과 급수 → 뜻·음 확인 수 → 학습 진도 → 티어점수'} · 동점 공동 순위</p><div class="hj-table-wrap"><table class="tbl"><thead><tr><th>순위</th><th>이름</th><th>${track==='growth'?'처음 → 지금':'통과 급수'}</th><th>${track==='growth'?'발전도':'확인한 한자'}</th><th>티어점수</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r.rank}</td><td>${esc(r.name)}</td><td>${track==='growth'?r.baseline+' → '+r.current+'/30':level(r.level)}</td><td>${track==='growth'?(r.growth>=0?'+':'')+r.growth+'문항':r.mastered+'/300자'}</td><td>${r.score}</td></tr>`).join('')||empty(5)}</tbody></table></div></section>`;
  }
  function accounts(){
    return `<section class="panel"><div class="a-head"><h2>학생 관리</h2><span class="sp"></span><button class="btn primary" id="add-student">학생 등록</button></div><p class="note">학생에게 계정 전달 · 계정별 기록 저장</p><div class="hj-table-wrap"><table class="tbl"><thead><tr><th>번호</th><th>이름</th><th>아이디</th><th>관리</th></tr></thead><tbody>${students().map(([uid,u])=>`<tr><td>${esc(u.no||'')}</td><td>${esc(u.name)}</td><td>${esc(u.loginId||'—')}</td><td><button class="btn sm" data-edit="${esc(uid)}">이름·번호 수정</button></td></tr>`).join('')||empty(4)}</tbody></table></div></section>`;
  }
  function config(){return `<section class="panel"><h2>한자 학습 기준</h2><div class="hj-stats"><div><small>하루 최대</small><strong>10자</strong></div><div><small>한 번에</small><strong>5자</strong></div><div><small>다음 묶음</small><strong>4/5자 통과</strong></div><div><small>글자마다</small><strong>획순 2회</strong></div></div><p>뜻·음 모두 정답 = 1자 통과 · 4/5자 이상 → 다음 묶음</p><p>획순·방향대로 2회 완성 → 다음 글자 · 시험: 획순 출제 없음</p></section><section class="panel"><h3>학습과 승급 보상</h3><p>첫 실력 확인 30문제 · 승급 시험 80% 이상</p><p>그날 묶음 모두 완료: 8급 +5점 / 7급 +10점 / 6급 +15점 (하루 한 번)<br>승급: 급수별 최초 통과 시 +100점</p><p class="note">1000점 시작 · 월 초기화 없음 · 일일 목록 고정 · 통과 기록 유지</p></section>`;}
  function studentForm(uid){
    const u=uid?S.users[uid]:{},m=A.modal(`<h3>${uid?'학생 정보 수정':'학생 등록'}</h3><form id="student-form"><label>번호<input name="no" type="number" min="1" max="99" value="${esc(u.no||students().length+1)}" required></label><label>이름<input name="studentName" maxlength="30" value="${esc(u.name||'')}" required></label>${uid?'':'<label>아이디 (영문·숫자·밑줄·하이픈)<input name="loginId" pattern="[A-Za-z0-9_-]{3,30}" autocomplete="off" required></label><label>초기 비밀번호 (6자 이상)<input name="pw" type="password" minlength="6" maxlength="100" autocomplete="new-password" required></label>'}<p class="err" role="alert"></p><div class="foot"><button class="btn" type="button" data-close>취소</button><button class="btn primary" type="submit">${uid?'저장':'등록'}</button></div></form>`);
    let pendingUid=null;
    const f=m.el.querySelector('form');f.onsubmit=e=>{e.preventDefault();A.submitForm(f,async()=>{
      const name=f.elements.studentName.value.trim(),no=Number(f.elements.no.value);if(!name)throw new Error('학생 이름을 적어 주세요.');
      if(uid)await B.update('users/'+uid,{name,no});
      else {
        const loginId=f.elements.loginId.value.trim().toLowerCase();if(loginId==='master')throw new Error('관리자 아이디는 사용할 수 없어요.');
        if(!pendingUid){pendingUid=await B.createAccount(loginId,f.elements.pw.value);f.elements.loginId.disabled=true;f.elements.pw.disabled=true;}
        await B.set('users/'+pendingUid,{name,no,loginId,createdAt:B.now()});
      }
      m.close();toast(uid?'학생 정보를 저장했어요.':'학생을 등록했어요.');
    },f.querySelector('.err'));};
  }
  function render(){
    const main=$('#tc-main'),key=JSON.stringify([tab,track,S.users,S.profiles,S.hanjaRanks,S.config,E.day(B.now())]);if(lastKey===key)return;lastKey=key;
    $('#tc-tabs').innerHTML=[['progress','학습 현황'],['ranks','두 가지 랭킹'],['students','학생 관리'],['settings','학습 설정']].map(([id,label])=>`<button class="btn ${tab===id?'primary':'ghost'}" data-tab="${id}" aria-current="${tab===id?'page':'false'}">${label}</button>`).join('');
    $('#tc-tabs').onclick=e=>{const b=e.target.closest('[data-tab]');if(b){tab=b.dataset.tab;render();}};
    main.innerHTML=({progress,ranks,students:accounts,settings:config})[tab]();
    main.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.track){track=b.dataset.track;render();}if(b.dataset.edit)studentForm(b.dataset.edit);if(b.id==='add-student')studentForm();if(b.hasAttribute('data-go-students')){tab='students';render();}if(b.dataset.preview)window.HanjaStudy.viewChar(b.dataset.preview);};
  }
  window.HanjaAdmin={render,reset(){lastKey='';tab='progress';track='growth';}};
})();
