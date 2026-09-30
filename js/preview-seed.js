/* Local preview only: no Firebase connection; all names and records are fictional. */
window.HANJA_FIREBASE_CONFIG = null;
window.HANJA_DEMO_NAMESPACE = 'hanjaPreview_v2';
(function () {
  const key='hanjaPreview_v2';
  if(!localStorage.getItem(key+'DB')){
    const now=Date.now(),week=now-8*86400000;
    const profiles={
      demoFirst:{version:2,learned:0,level:0,score:1000},
      demoGrowing:{version:2,learned:100,level:2,score:1270,baseline:{right:5,total:30,ts:week},assessment:{right:16,total:30,ts:now}},
      demoAdvanced:{version:2,learned:225,level:4,score:1560,baseline:{right:24,total:30,ts:week},assessment:{right:27,total:30,ts:now}}
    };
    const ranks={demoGrowing:{score:1270,level:2,learned:100,mastered:0,baseline:5,current:16,growth:11,assessedAt:now,hasRecheck:true},demoAdvanced:{score:1560,level:4,learned:225,mastered:0,baseline:24,current:27,growth:3,assessedAt:now,hasRecheck:true}};
    localStorage.setItem(key+'DB',JSON.stringify({config:{teacher:'demoTeacher',className:'한자 자율학습 체험반',teacherName:'체험 선생님'},users:{demoFirst:{name:'체험 학생',no:1,loginId:'student'},demoGrowing:{name:'성장 예시',no:2},demoAdvanced:{name:'진도 예시',no:3}},hanja:profiles,hanjaRanks:ranks}));
    localStorage.setItem(key+'Auth',JSON.stringify({student:{uid:'demoFirst',pw:'demo-only'},teacher:{uid:'demoTeacher',pw:'demo-only'}}));
  }
  if(!sessionStorage.getItem(key+'Uid'))sessionStorage.setItem(key+'Uid','demoFirst');
})();
