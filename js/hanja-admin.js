/* 관리자 화면도 한자 학습과 학생 계정만 제공합니다. */
(function(){
  const A=window.App,{S,B,$,esc,toast}=A,E=window.HanjaEngine,H=window.Hanja,Accounts=window.StudentAccounts;
  let tab='progress',track='growth',lastKey='';
  const level=n=>n?H.LEVELS[n-1]:'도전 중';
  const students=()=>Object.entries(S.users).sort((a,b)=>(a[1].no||0)-(b[1].no||0));
  const empty=n=>`<tr><td colspan="${n}" class="empty">학습 기록 없음</td></tr>`;
  function progress(){
    const rows=students(),today=E.day(B.now()),done=rows.filter(([uid])=>(S.profiles[uid]?.studyDays?.[today]||S.profiles[uid]?.days?.[today])?.done).length;
    return `<section class="panel hj-banner"><span class="month-pill">관리자 · 한자 자율학습</span><h2>한 글자씩 쌓이는 우리 반의 성장</h2><p>8급~6급 · 뜻·음 · 획순 연습</p><div class="hj-stats"><div><small>학습 학생</small><strong>${rows.length}명</strong></div><div><small>오늘 학습 완료</small><strong>${done}명</strong></div><div><small>학습 범위</small><strong>300자</strong></div><div><small>하루 새 학습</small><strong>최대 ${A.settings().hanja.daily}자</strong></div></div></section>
    <section class="panel"><h3>한자 학습 살펴보기</h3><p class="note">한자 선택 → 뜻·음·예시 단어 5개</p><div class="hj-chars">${H.LIST.slice(0,10).map(x=>`<button class="btn" data-preview="${x.h}" aria-label="${x.h} ${esc(x.hun+' '+x.eum)} 살펴보기"><b>${x.h}</b></button>`).join('')}</div></section>
    <section class="panel"><h3>학생별 한자 학습 현황</h3><div class="hj-table-wrap"><table class="tbl"><thead><tr><th>학생</th><th>통과 급수</th><th>절대 진도</th><th>티어</th><th>오늘 학습</th></tr></thead><tbody>${rows.map(([uid,u])=>{const p=E.profile(S.profiles[uid]);return `<tr><td>${esc(u.no||'')} ${esc(u.name)}</td><td>${level(p.level)}</td><td>${E.summary(p).mastered}/300자<br><span class="note">학습 완료 ${p.learned}자</span></td><td>${E.tierOf(p.score).name} · ${p.score}점</td><td>${(p.studyDays[today]||p.days[today])?.done?'완료 ✓':(p.studyDays[today]||p.days[today])?'학습 중':p.baseline?'시작 전':'첫 진단 전'}</td></tr>`;}).join('')||empty(5)}</tbody></table></div>${!rows.length?'<button class="btn primary" data-go-students>첫 학생 등록하기</button>':''}</section>`;
  }
  function ranks(){
    const rows=E.ranking(S.users,S.hanjaRanks,track);
    return `<section class="panel"><h2>두 가지 한자 랭킹</h2><div class="hj-track-tabs"><button class="btn ${track==='growth'?'primary':''}" data-track="growth">발전도</button><button class="btn ${track==='absolute'?'primary':''}" data-track="absolute">절대 진도</button></div><p class="note">${track==='growth'?'첫 진단 대비 정답 증가 · 7일 후 재확인부터 반영':'인정한 한자 수 → 통과 급수 → 학습 완료 → 티어점수'} · 동점 공동 순위</p><div class="hj-table-wrap"><table class="tbl"><thead><tr><th>순위</th><th>이름</th><th>${track==='growth'?'처음 → 지금':'통과 급수'}</th><th>${track==='growth'?'발전도':'확인한 한자'}</th><th>티어점수</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r.rank}</td><td>${esc(r.name)}</td><td>${track==='growth'?r.baseline+' → '+r.current+'/30':level(r.level)}</td><td>${track==='growth'?(r.growth>=0?'+':'')+r.growth+'문항':r.mastered+'/300자'}</td><td>${r.score}</td></tr>`).join('')||empty(5)}</tbody></table></div></section>`;
  }
  function accounts(){
    return `<section class="panel"><div class="a-head"><h2>학생 관리</h2><span class="sp"></span><button class="btn" id="add-student">한 명씩 등록</button></div>
    <div class="student-import"><div><h3>엑셀로 우리 반 등록</h3><p class="note">이름·아이디 입력 · 초기 비밀번호 <b>123456</b></p><p class="note">첫 로그인 → 비밀번호 변경 → 다시 로그인</p></div><div class="student-import-actions"><a class="btn" href="assets/student-template.xlsx" download="한자티어_학생등록양식.xlsx">엑셀 양식 다운로드</a><button class="btn primary" id="import-students">엑셀로 학생 등록</button><input id="student-file" class="hidden" type="file" accept=".xlsx" aria-label="학생 등록 엑셀 파일"></div></div>
    <div class="hj-table-wrap"><table class="tbl"><thead><tr><th>번호</th><th>이름</th><th>아이디</th><th>관리</th></tr></thead><tbody>${students().map(([uid,u])=>`<tr><td>${esc(u.no||'')}</td><td>${esc(u.name)}</td><td>${esc(u.loginId||'—')}${u.pwc?'<br><span class="note">첫 비밀번호 변경 대기</span>':''}</td><td><button class="btn sm" data-edit="${esc(uid)}">이름·번호 수정</button> <button class="btn sm danger" data-delete="${esc(uid)}">학생 삭제</button></td></tr>`).join('')||empty(4)}</tbody></table></div></section>`;
  }
  function config(){return `<section class="panel"><h2>한자 학습 기준</h2><div class="hj-stats"><div><small>하루 최대</small><strong>10자</strong></div><div><small>한 번에</small><strong>5자</strong></div><div><small>다음 묶음</small><strong>4/5자 통과</strong></div><div><small>글자마다</small><strong>획순 2회</strong></div></div><p>뜻·음 모두 정답 = 1자 통과 · 4/5자 이상 → 다음 묶음</p><p>획순·방향대로 2회 완성 → 다음 글자 · 시험: 획순 출제 없음</p></section><section class="panel"><h3>학습과 승급 보상</h3><p>첫 실력 확인 30문제 · 승급 시험 80% 이상</p><p>진단·재확인: 새로 맞힌 한자 1자 = 절대 진도 1자 · +${E.ASSESSMENT_POINT}점<br>같은 한자 중복 인정·중복 보상 없음</p><p>그날 묶음 모두 완료: 8급 +5점 / 7급 +10점 / 6급 +15점 (하루 한 번)<br>승급: 급수별 최초 통과 시 +100점</p><p class="note">1000점 시작 · 월 초기화 없음 · 일일 목록 고정 · 통과 기록 유지</p></section>`;}
  function studentForm(uid){
    const u=uid?S.users[uid]:{},m=A.modal(`<h3>${uid?'학생 정보 수정':'학생 등록'}</h3><form id="student-form"><label>번호<input name="no" type="number" min="1" value="${esc(u.no||Accounts.nextNumber(S.users))}" required></label><label>이름<input name="studentName" maxlength="30" value="${esc(u.name||'')}" required></label>${uid?'':'<label>아이디 (영문·숫자·밑줄·하이픈)<input name="loginId" pattern="[A-Za-z0-9_-]{1,30}" autocomplete="off" required></label><p>초기 비밀번호: <b>123456</b></p><p class="note">첫 로그인 시 변경 · 변경 후 다시 로그인</p>'}<p class="err" role="alert"></p><div class="foot"><button class="btn" type="button" data-close>취소</button><button class="btn primary" type="submit">${uid?'저장':'등록'}</button></div></form>`);
    const pending={};
    const f=m.el.querySelector('form');f.onsubmit=e=>{e.preventDefault();A.submitForm(f,async()=>{
      const name=f.elements.studentName.value.trim(),no=Number(f.elements.no.value);if(!name)throw new Error('학생 이름을 적어 주세요.');
      if(uid)await B.update('users/'+uid,{name,no});
      else {
        const loginId=f.elements.loginId.value.trim().toLowerCase();if(loginId==='master')throw new Error('관리자 아이디는 사용할 수 없어요.');
        Object.assign(pending,{name,no,loginId});
        try {await Accounts.register(B,S.uid,pending);} finally {if(pending.pendingUid)f.elements.loginId.disabled=true;}
      }
      m.close();toast(uid?'학생 정보를 저장했어요.':'학생을 등록했어요.');
    },f.querySelector('.err'));};
  }
  async function removeStudent(uid){
    const user=S.users[uid],teacher=S.uid;
    if(!user || !S.isTeacher)return;
    const m=A.modal(`<h3>학생을 삭제할까요?</h3><p><b>${esc(user.name)}</b> · ${esc(user.loginId||'')}</p><p>학습 기록·진도·점수가 함께 삭제되며 복구할 수 없습니다.</p><p class="note">삭제 후 이 계정으로 학습 불가 · 삭제한 아이디 재사용 불가</p><p class="err" role="alert"></p><div class="foot"><button class="btn" data-cancel>취소</button><button class="btn danger" data-confirm>학생 삭제</button></div>`,{dismissable:false});
    const button=m.el.querySelector('[data-confirm]'),cancel=m.el.querySelector('[data-cancel]');
    cancel.onclick=m.close;
    button.onclick=async()=>{
      button.disabled=true;cancel.disabled=true;
      try{
        if(S.uid!==teacher || !S.isTeacher)throw new Error('관리자로 다시 로그인해 주세요.');
        await Accounts.deleteStudent(B,uid);m.close();toast('학생과 학습 기록을 삭제했어요.');
      }catch(error){m.el.querySelector('.err').textContent=error.message;}
      finally{button.disabled=false;cancel.disabled=false;}
    };
  }
  async function importStudents(file){
    if(!file)return;
    if(!/\.xlsx$/i.test(file.name) || file.size>2*1024*1024){toast('2MB 이하의 .xlsx 파일을 선택해 주세요.','bad');return;}
    const teacher=S.uid;
    try{
      const rows=Accounts.validateRows(await Accounts.readSpreadsheet(await file.arrayBuffer()),await B.get('users')||{});
      if(S.uid!==teacher)return;
      const invalid=rows.some(row=>row.errors.length),opts={wide:true,dismissable:false};
      const m=A.modal('<h3>학생 등록 확인</h3><p class="note">초기 비밀번호 123456 · 첫 로그인 시 변경</p><div class="import-table hj-table-wrap"></div><p class="import-status note" role="status" aria-live="polite"></p><div class="foot"><button class="btn" data-finish>닫기</button><button class="btn primary" data-register>등록하기</button></div>',opts);
      const button=m.el.querySelector('[data-register]'),close=m.el.querySelector('[data-finish]'),status=m.el.querySelector('.import-status');
      let busy=false;
      const paint=()=>{m.el.querySelector('.import-table').innerHTML=`<table class="tbl"><thead><tr><th>엑셀 행</th><th>이름</th><th>아이디</th><th>상태</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${row.rowNumber}</td><td>${esc(row.name)}</td><td>${esc(row.loginId)}</td><td class="${row.errors.length||row.error?'err':''}">${esc(row.errors.join(' · ')||row.error||({ready:'등록 대기',working:'등록 중…',done:'등록 완료'}[row.status]))}</td></tr>`).join('')}</tbody></table>`;};
      paint();
      button.disabled=invalid;
      status.textContent=invalid?'표시된 오류 수정 후 엑셀 파일을 다시 선택해 주세요.':rows.length+'명 · 확인 후 등록';
      close.onclick=()=>{if(!busy)m.close();};
      const leaving=e=>{if(busy){e.preventDefault();e.returnValue='';}};
      button.onclick=async()=>{
        if(busy || invalid)return;
        busy=true;button.disabled=true;close.disabled=true;window.addEventListener('beforeunload',leaving);
        try{
          for(const row of rows){
            if(row.status==='done')continue;
            if(S.uid!==teacher)break;
            row.status='working';row.error='';paint();
            try{await Accounts.register(B,teacher,row);}catch(error){row.status='ready';row.error=error.message;paint();break;}
            paint();status.textContent=rows.filter(row=>row.status==='done').length+' / '+rows.length+'명 등록 완료';
          }
        }finally{
          busy=false;window.removeEventListener('beforeunload',leaving);close.disabled=false;
          const count=rows.filter(row=>row.status==='done').length;
          status.textContent=count===rows.length?count+'명 등록 완료 · 아이디와 초기 비밀번호를 학생에게 전달해 주세요.':count+'명 완료 · 남은 학생은 다시 시도할 수 있어요.';
          button.textContent='남은 학생 다시 등록';button.disabled=count===rows.length;
        }
      };
    }catch(error){toast(error.message,'bad');}
  }
  function render(){
    const main=$('#tc-main'),key=JSON.stringify([tab,track,S.users,S.profiles,S.hanjaRanks,S.config,E.day(B.now())]);if(lastKey===key)return;lastKey=key;
    $('#tc-tabs').innerHTML=[['progress','학습 현황'],['ranks','두 가지 랭킹'],['students','학생 관리'],['settings','학습 설정']].map(([id,label])=>`<button class="btn ${tab===id?'primary':'ghost'}" data-tab="${id}" aria-current="${tab===id?'page':'false'}">${label}</button>`).join('');
    $('#tc-tabs').onclick=e=>{const b=e.target.closest('[data-tab]');if(b){tab=b.dataset.tab;render();}};
    main.innerHTML=({progress,ranks,students:accounts,settings:config})[tab]();
    main.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.track){track=b.dataset.track;render();}if(b.dataset.edit)studentForm(b.dataset.edit);if(b.dataset.delete)removeStudent(b.dataset.delete);if(b.id==='add-student')studentForm();if(b.id==='import-students')$('#student-file').click();if(b.hasAttribute('data-go-students')){tab='students';render();}if(b.dataset.preview)window.HanjaStudy.viewChar(b.dataset.preview);};
    main.onchange=e=>{if(e.target.id==='student-file'){const file=e.target.files[0];e.target.value='';importStudents(file);}};
  }
  window.HanjaAdmin={render,reset(){lastKey='';tab='progress';track='growth';}};
})();
