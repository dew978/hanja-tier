const assert = require('node:assert/strict');
global.window = {};
require('../js/hanja.js'); require('../js/hanja-engine.js'); require('../js/tier.js');
const H=window.Hanja,E=window.HanjaEngine,T=window.Tier;
const ts=Date.parse('2026-09-30T03:00:00Z'), day=E.day(ts);
let tests=0;
function test(name,fn){fn();tests++;console.log('PASS',name);}
const answers=items=>items.map(q=>H.BY[q.h][q.type]);
function daily(level=0,learned=0){const p=E.profile({level,learned});const plan=E.dailyPlan(p,ts);p.days[day]=plan;return p;}
test('300 unique characters, official group counts, exactly five relevant examples',()=>{
 assert.equal(H.LIST.length,300);assert.equal(new Set(H.LIST.map(x=>x.h)).size,300);
 assert.deepEqual(H.LEVELS.map((_,i)=>H.LIST.filter(x=>x.level===i).length),[50,50,50,75,75]);
 for(const x of H.LIST){assert.equal(x.words.length,5);assert.equal(new Set(x.words.map(w=>w.word)).size,5);assert(x.words.every(w=>w.word.includes(x.h)&&w.read));}
});
test('30 unique diagnostic characters, ten per grade and 15 meaning/15 reading',()=>{
 for(let k=0;k<100;k++){const qs=E.diagnostic();assert.equal(qs.length,30);assert.equal(new Set(qs.map(q=>q.h)).size,30);assert.deepEqual([8,7,6].map(g=>qs.filter(q=>H.BY[q.h].grade===g).length),[10,10,10]);assert.equal(qs.filter(q=>q.type==='hun').length,15);}
});
test('four distinct options, one exact answer',()=>{for(const x of H.LIST)for(const type of ['hun','eum']){const q=E.question(x.h,type);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.equal(q.options.filter(o=>o===q.answer).length,1);}});
test('daily plan persists and limits even excessive settings to 20',()=>{const p=daily();assert.equal([...p.days[day].chars].length,20);assert.deepEqual(E.dailyPlan(p,ts,2),p.days[day]);assert.equal([...E.dailyPlan(E.profile(),ts,999).chars].length,20);});
test('daily 35/40 fails, 36/40 passes; same day retry gives no duplicate reward',()=>{
 let p=daily(),qs=E.dailyItems(p.days[day]),a=answers(qs);a.fill('?',0,5);
 let r=E.finishDaily(p,day,qs,a,ts);assert.equal(r.passed,false);assert.equal(r.p.score,1000);assert.equal(r.p.learned,0);
 a=answers(qs);a.fill('?',0,4);r=E.finishDaily(r.p,day,qs,a,ts);assert(r.passed);assert.equal(r.p.score,1005);assert.equal(r.p.learned,20);
 r=E.finishDaily(r.p,day,qs,answers(qs),ts);assert.equal(r.points,0);assert.equal(r.p.score,1005);assert.equal(Object.keys(r.p.mastered).length,20);
 assert.deepEqual(E.dailyPlan(r.p,ts).chars,p.days[day].chars);
});
test('daily reward is 5/10/10/15/15 and applies only once',()=>{for(let lv=0;lv<5;lv++){const p=daily(lv,lv?H.BOUNDS[lv-1]:0),qs=E.dailyItems(p.days[day]);const r=E.finishDaily(p,day,qs,answers(qs),ts);assert.equal(r.points,[5,10,10,15,15][lv]);}});
test('stage boundary and full course review never exceed daily limit',()=>{assert.equal([...E.dailyPlan({level:0,learned:49},ts).chars].length,1);assert.equal([...E.dailyPlan({level:5,learned:300},ts).chars].length,20);});
test('midnight rollover rejects prior-day result, new date permits a new plan',()=>{const p=daily(),qs=E.dailyItems(p.days[day]);assert.throws(()=>E.finishDaily(p,day,qs,answers(qs),ts+86400000));assert.notEqual(E.dailyPlan(p,ts+86400000).date,day);assert.equal(E.day(Date.parse('2026-09-30T15:00:00Z')),'2026-10-01');});
test('incomplete or foreign daily question sets cannot earn points',()=>{const p=daily(),qs=E.dailyItems(p.days[day]);assert.throws(()=>E.finishDaily(p,day,qs.slice(1),answers(qs).slice(1),ts));const wrong=qs.map(q=>({...q,h:'訓'}));assert.throws(()=>E.finishDaily(p,day,wrong,answers(wrong),ts));});
test('all promotion tests use an exact 80% threshold, no repeat reward',()=>{
 for(let lv=0;lv<5;lv++){
  const p=E.profile({level:lv,learned:H.BOUNDS[lv]}),qs=E.examItems(lv,E.TEST_COUNTS[lv]),a=answers(qs),need=Math.ceil(qs.length*.8);
  assert.equal(qs.length,E.TEST_COUNTS[lv]);assert(qs.every(q=>H.BY[q.h].level<=lv));
  a.fill('?',need-1);let r=E.finishExam(p,lv,qs,a,ts);assert.equal(r.passed,false);assert.throws(()=>E.finishExam(r.p,lv,qs,answers(qs),ts));
  const b=answers(qs);b.fill('?',need);r=E.finishExam(p,lv,qs,b,ts);assert(r.passed);assert.equal(r.p.score,1100);assert.equal(r.p.level,lv+1);assert.throws(()=>E.finishExam(r.p,lv,qs,b,ts));
  r.p.level=lv;const again=E.finishExam(r.p,lv,qs,b,ts+86400000);assert.equal(again.points,0);assert.equal(again.p.score,1100);
 }
});
test('progress rankings are separate; ties share rank',()=>{
 const users={a:{name:'가'},b:{name:'나'},c:{name:'다'}};
 const data={a:{baseline:5,current:15,growth:10,hasRecheck:true,level:1,mastered:50,learned:50,score:1200},b:{baseline:20,current:22,growth:2,hasRecheck:true,level:4,mastered:200,learned:225,score:1600},c:{baseline:10,current:20,growth:10,hasRecheck:true,level:2,mastered:90,learned:100,score:1350}};
 const growth=E.ranking(users,data,'growth');assert.deepEqual(growth.map(r=>r.rank),[1,1,3]);assert.equal(E.ranking(users,data,'absolute')[0].uid,'b');
 data.a.hasRecheck=false;assert.equal(E.ranking(users,data,'growth').length,2);
});
test('legacy progress is retained; first diagnostic does not grant mastery',()=>{const p=E.profile({learned:150,level:3});assert.equal(p.learned,150);assert.equal(p.level,3);assert.equal(p.score,1000);p.baseline={right:30,total:30,ts};assert.equal(E.summary(p).mastered,0);});
test('legacy settings migrate to self-study and always clamp daily limit',()=>{const old=T.mergeSettings({hanja:{daily:5,days:[1],testCount:[20,20,20]}});assert.equal(old.hanja.daily,20);assert.equal(old.hanja.testCount.length,5);assert.equal(T.mergeSettings({hanja:{version:2,daily:999}}).hanja.daily,20);});
test('meaning and reading aliases accept whitespace and common variants',()=>{assert.equal(E.grade([{h:'地',type:'hun'},{h:'女',type:'eum'}],[' 땅 ','여']).right,2);});
console.log(`${tests} test groups passed`);
