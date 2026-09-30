const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const storage=()=>{const m=new Map();return{getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,v),removeItem:k=>m.delete(k)}};
global.window={addEventListener(){},HANJA_FIREBASE_CONFIG:null};
global.localStorage=storage();global.sessionStorage=storage();
const now=Date.parse('2026-10-03T12:00:00Z'); // Saturday night in Korea: autonomous learning must work.
Date.now=()=>now;
const rules=JSON.parse(fs.readFileSync(path.join(root,'database.rules.json'),'utf8'));
global.fetch=async()=>({ok:true,json:async()=>rules});
localStorage.setItem('hanjaTierDemoDB_v1',JSON.stringify({config:{teacher:'t'},users:{u:{name:'test'},other:{name:'other'}}}));
sessionStorage.setItem('hanjaTierDemoUid','u');
for(const file of ['hanja.js','hanja-engine.js','backend.js']) vm.runInThisContext(fs.readFileSync(path.join(root,'js',file),'utf8'),{filename:file});
const B=window.Backend,E=window.HanjaEngine,H=window.Hanja;
const getdb=()=>JSON.parse(localStorage.getItem('hanjaTierDemoDB_v1'));
(async()=>{
 await B.init();let p=E.profile();p.baselinePlan=E.diagnostic();p.baseline={right:10,total:30,ts:now};await B.set('hanja/u',p);
 await B.set('hanjaRanks/u',E.summary(p));assert.equal((await B.get('hanjaRanks')).u.baseline,10);
 const day=E.day(now);p.days[day]=E.dailyPlan(p,now);await B.set('hanja/u',p);
 const qs=E.dailyItems(p.days[day]),answers=qs.map(q=>H.BY[q.h][q.type]);
 const r=await B.tx('hanja/u',raw=>E.finishDaily(raw,day,qs,answers,now).p);assert.equal(r.value.score,1005);
 await B.set('hanjaRanks/u',E.summary(r.value));
 // Removed modules have no writable paths, including for a registered student.
 for(const path of ['entries/u/legacy','acct/u/cash','quests/u','levels/u/typing'])await assert.rejects(()=>B.set(path,1));
 await assert.rejects(()=>B.get('hanja/other'));
 await assert.rejects(()=>B.set('hanjaRanks/other',E.summary(r.value)));
 await assert.rejects(()=>B.set('hanjaRanks/u',{...E.summary(r.value),score:9999}));
 await assert.rejects(()=>B.set('hanja/u/baseline/right',0));
 await assert.rejects(()=>B.set('hanja/u/days/'+day+'/chars','一'));
 // A completed old-profile migration and earned promotion work with compiled rules.
 p=r.value;p.learned=50;await B.set('hanja/u',p);
 const exam=E.examItems(0,30),as=exam.map(q=>H.BY[q.h][q.type]);
 const up=await B.tx('hanja/u',raw=>E.finishExam(raw,0,exam,as,now).p);
 assert.equal(up.value.score,1105);
 await B.set('hanjaRanks/u',E.summary(up.value));
 assert.equal((await B.get('hanjaRanks')).u.score,1105);
 console.log('PASS Hanja-only storage: daily/promotion rewards, separate rankings, fixed baseline/day pool, cross-user denial, unrelated paths denied');
})().catch(e=>{console.error(e);process.exitCode=1;});
