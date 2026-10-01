/* 한자 전용 앱: 인증, 화면, 설치. 학습 규칙은 hanja-engine.js에서 관리합니다. */
(function () {
  const B = window.Backend, E = window.HanjaEngine;
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const S = { uid:null, isTeacher:false, tab:'hanja', hanja:null, hanjaRanks:{}, users:{}, profiles:{}, config:{} };
  let subscriptions = [], generation = 0, settingUp = false, installPrompt = null, homeDialogOpen = false;
  function toast(msg, kind='') {
    const el = document.createElement('div'); el.className='toast '+kind; el.textContent=msg;
    $('#toast-root').append(el); setTimeout(()=>el.remove(),4500);
  }
  function modal(html, opts={}) {
    const bg=document.createElement('div'), before=document.activeElement;
    bg.className='modal-bg'; bg.innerHTML=`<section class="modal ${opts.wide?'wide':''}" role="dialog" aria-modal="true" tabindex="-1">${html}</section>`;
    $('#modal-root').append(bg); const el=bg.firstElementChild; el.focus(); let closed=false;
    const close=()=>{if(closed)return;closed=true;bg.remove();before?.focus();opts.onClose?.();};
    bg.onclick=e=>{if(e.target.closest('[data-close]') || (e.target===bg && opts.dismissable!==false))close();};
    bg.onkeydown=e=>{
      if(e.key==='Escape' && opts.dismissable!==false)close();
      if(e.key==='Tab') {const xs=[...el.querySelectorAll('button:not(:disabled),input,select,[tabindex="0"]')];if(!xs.length){e.preventDefault();return;}if(e.shiftKey && (document.activeElement===xs[0]||document.activeElement===el)){e.preventDefault();xs.at(-1).focus();}else if(!e.shiftKey && document.activeElement===xs.at(-1)){e.preventDefault();xs[0].focus();}}
    };
    return {el,close};
  }
  function confirmBox(title, msg, ok='확인') {
    return new Promise(resolve=>{let yes=false;const m=modal(`<h3>${esc(title)}</h3><p>${msg}</p><div class="foot"><button class="btn" data-close>취소</button><button class="btn primary" data-ok>${esc(ok)}</button></div>`,{onClose:()=>resolve(yes)});m.el.querySelector('[data-ok]').onclick=()=>{yes=true;m.close();};});
  }
  function settings() {
    return {hanja:{daily:E.DAILY_LIMIT,testCount:E.TEST_COUNTS.slice()}};
  }
  function show(name) {document.querySelectorAll('.screen').forEach(el=>el.classList.toggle('hidden',el.id!=='scr-'+name));S.screen=name;}
  function render() {
    if(!S.uid)return;
    if(S.isTeacher)window.HanjaAdmin?.render();
    else window.HanjaStudy?.render($('#st-main'));
    syncInstall();
  }
  async function requestHome() {
    if (!S.uid || homeDialogOpen) return;
    const blocked = !S.isTeacher && window.HanjaStudy?.homeBlockedMessage();
    if (blocked) { toast(blocked); return; }
    const token = generation;
    const notice = S.isTeacher ? '학습 현황 화면으로 이동합니다.' : window.HanjaStudy.homeNotice();
    homeDialogOpen = true;
    try {
      if (!await confirmBox('메인화면으로 돌아갈까요?', notice, '돌아가기')) return;
      if (token !== generation || !S.uid) return;
      if (S.isTeacher) {
        window.HanjaAdmin.reset();
        render();
        window.scrollTo(0, 0);
      } else window.HanjaStudy.goHome();
    } finally { homeDialogOpen = false; }
  }
  function endSession() {
    homeDialogOpen = false;
    subscriptions.forEach(off=>off()); subscriptions=[];
    window.HanjaStudy?.reset();window.HanjaAdmin?.reset();$('#modal-root').replaceChildren();
    Object.assign(S,{uid:null,isTeacher:false,hanja:null,hanjaRanks:{},users:{},profiles:{},config:{},tab:'hanja'});
    $('#st-main').replaceChildren();$('#tc-main').replaceChildren();
  }
  async function startSession(uid, token) {
    const teacher=await B.get('config/teacher');
    const isTeacher=teacher===uid;
    const users=await B.get('users')||{};
    if(token!==generation)return;
    if(!isTeacher && !users[uid])throw new Error('등록된 학생 계정이 아니에요. 관리자에게 확인해 주세요.');
    Object.assign(S,{uid,isTeacher,users});
    $('#account-name').textContent=isTeacher?'관리자':users[uid].name;
    $('#login-pw').value='';
    show(isTeacher?'teacher':'student');
    $('#app-header').classList.remove('hidden');
    const watch=(path,key,defaultValue)=>subscriptions.push(B.on(path,value=>{if(token!==generation)return;S[key]=value||defaultValue;render();}));
    watch('users','users',{});watch('hanjaRanks','hanjaRanks',{});
    subscriptions.push(B.on('config/settings',value=>{if(token!==generation)return;S.config.settings=value||{};render();}));
    if(isTeacher)watch('hanja','profiles',{});else watch('hanja/'+uid,'hanja',null);
    render();
  }
  async function authChanged(uid) {
    if(settingUp)return;
    const token=++generation;endSession();$('#app-header').classList.add('hidden');show('loading');
    try {
      if(uid)await startSession(uid,token);
      else {const teacher=await B.get('config/teacher');if(token===generation)show(teacher?'login':'setup');}
    } catch(e) {if(token!==generation)return;show('login');$('#login-err').textContent=e.message;}
  }
  async function submitForm(form, action, errorElement) {
    const button=form.querySelector('[type="submit"]');button.disabled=true;errorElement.textContent='';
    try{await action();}catch(e){errorElement.textContent=e.message;}finally{button.disabled=false;}
  }
  function syncInstall() {
    const standalone=window.matchMedia('(display-mode: standalone)').matches||navigator.standalone;
    document.querySelectorAll('[data-install]').forEach(b=>b.classList.toggle('hidden',!!standalone));
  }
  async function install() {
    if(installPrompt){await installPrompt.prompt();const choice=await installPrompt.userChoice;installPrompt=null;if(choice.outcome==='accepted')toast('설치 후 홈 화면에서 한자 티어를 열 수 있어요.');return;}
    modal('<h3>한자 티어 앱 설치</h3><p>Chrome·Edge: 주소창 설치 아이콘 / 메뉴 → 앱 설치</p><p>iPhone·iPad: Safari → 공유 → 홈 화면에 추가</p><p class="note">로그인·기록 저장: 인터넷 연결 필요</p><div class="foot"><button class="btn primary" data-close>확인</button></div>');
  }
  function passwordDialog() {
    const m=modal('<h3>비밀번호 변경</h3><form id="password-form"><label>새 비밀번호<input name="pw" type="password" minlength="6" maxlength="100" autocomplete="new-password" required></label><label>새 비밀번호 확인<input name="again" type="password" minlength="6" autocomplete="new-password" required></label><p class="err" role="alert"></p><div class="foot"><button type="button" class="btn" data-close>취소</button><button type="submit" class="btn primary">변경</button></div></form>');
    const form=m.el.querySelector('form');form.onsubmit=e=>{e.preventDefault();submitForm(form,async()=>{if(form.elements.pw.value!==form.elements.again.value)throw new Error('비밀번호가 서로 달라요.');await B.changeOwnPassword(form.elements.pw.value);m.close();toast('비밀번호를 변경했어요.');},form.querySelector('.err'));};
  }
  window.App={S,B,$,esc,toast,modal,confirmBox,settings,render,syncInstall,submitForm,requestHome};
  document.addEventListener('DOMContentLoaded',async()=>{
    $('#login-form').onsubmit=e=>{e.preventDefault();submitForm(e.target,()=>B.signIn($('#login-id').value.trim().toLowerCase(),$('#login-pw').value),$('#login-err'));};
    $('#setup-form').onsubmit=e=>{e.preventDefault();submitForm(e.target,async()=>{
      settingUp=true;try{const uid=await B.signUpSelf('master',$('#setup-pw').value);const result=await B.tx('config/teacher',current=>current?undefined:uid);if(!result.committed)throw new Error('이미 관리자 계정이 있어요.');await B.set('config/className',$('#setup-class').value.trim());await B.set('config/teacherName','관리자');settingUp=false;await authChanged(uid);}finally{settingUp=false;}
    },$('#setup-err'));};
    document.addEventListener('click',e=>{if(e.target.closest('[data-home]'))requestHome();if(e.target.closest('[data-install]'))install();if(e.target.closest('[data-logout]'))B.signOut().catch(err=>toast(err.message,'bad'));if(e.target.closest('[data-password]'))passwordDialog();});
    document.addEventListener('hanja-rendered',syncInstall);
    window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;syncInstall();});
    window.addEventListener('appinstalled',syncInstall);
    window.addEventListener('offline',()=>toast('인터넷 연결이 끊겼어요. 기록 저장 전 연결을 확인해 주세요.'));
    if('serviceWorker' in navigator && B.mode==='firebase')navigator.serviceWorker.register('./sw.js').catch(()=>{});
    syncInstall();
    try{await B.init();if(B.mode==='demo')$('#demo-note').classList.remove('hidden');B.onAuth(authChanged);}catch(e){$('#loading-msg').textContent=e.message;}
  });
})();
