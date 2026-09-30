// Browser integration fixture. Local only; never published by the Pages workflow.
window.HANJA_FIREBASE_CONFIG=null;
window.HANJA_DEMO_NAMESPACE='hanjaBatchBrowser_v2';
(function(){
 const key=window.HANJA_DEMO_NAMESPACE,now=Date.now(),E=window.HanjaEngine;
 if(!localStorage.getItem(key+'DB')){
  const date=E.day(now),chars='一二三四五六七八九十',practice={};
  for(const h of '二三四五')practice[h]={count:2,ts:now};
  const p=E.profile({version:2,score:1000,learned:0,level:0,baseline:{right:0,total:30,ts:now},studyDays:{[date]:{version:1,date,chars,sequence:[...chars],freshChars:chars,from:0,to:10,stage:0,reward:5,done:false,batches:{},practice}}});
  localStorage.setItem(key+'DB',JSON.stringify({config:{teacher:'fixtureTeacher'},users:{fixtureStudent:{name:'화면 검증용 가상 학생',no:1}},hanja:{fixtureStudent:p}}));
  localStorage.setItem(key+'Auth',JSON.stringify({student:{uid:'fixtureStudent',pw:'demo-only'}}));
 }
 sessionStorage.setItem(key+'Uid','fixtureStudent');
})();
