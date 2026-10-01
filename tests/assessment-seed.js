/* Fictional local QA fixtures. The tests directory is excluded from GitHub Pages. */
window.HANJA_FIREBASE_CONFIG=null;
window.HANJA_DEMO_NAMESPACE='hanjaAssessmentPreview_v1';
(function(){
  const key=window.HANJA_DEMO_NAMESPACE,E=window.HanjaEngine,H=window.Hanja,now=Date.now(),week=now-8*86400000;
  if(!localStorage.getItem(key+'DB')){
    const first=E.prepareAssessment(null,'baseline',week);
    const full=E.finishAssessment(first,'baseline',first.baselinePlan,first.baselinePlan.map(q=>H.BY[q.h][q.type]),week).p;
    const legacy={version:2,score:1000,learned:0,level:0,baseline:{right:30,total:30,ts:week},baselinePlan:first.baselinePlan};
    localStorage.setItem(key+'DB',JSON.stringify({config:{teacher:'qaTeacher'},users:{qaFresh:{name:'첫 진단 체험',no:1,loginId:'first'},qaRecheck:{name:'재확인 체험',no:2,loginId:'recheck'},qaLegacy:{name:'이전 만점 체험',no:3,loginId:'legacy'}},hanja:{qaRecheck:full,qaLegacy:legacy},hanjaRanks:{qaRecheck:E.summary(full)}}));
    localStorage.setItem(key+'Auth',JSON.stringify({teacher:{uid:'qaTeacher',pw:'preview-only'},first:{uid:'qaFresh',pw:'preview-only'},recheck:{uid:'qaRecheck',pw:'preview-only'},legacy:{uid:'qaLegacy',pw:'preview-only'}}));
  }
  const role=new URLSearchParams(location.search).get('case');
  sessionStorage.setItem(key+'Uid',({teacher:'qaTeacher',recheck:'qaRecheck',legacy:'qaLegacy'})[role]||'qaFresh');
})();
