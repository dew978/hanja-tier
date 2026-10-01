const assert = require('node:assert/strict');
global.window = {};
require('../js/hanja.js'); require('../js/hanja-engine.js');
const H=window.Hanja,E=window.HanjaEngine;
const ts=Date.parse('2026-09-30T03:00:00Z'), day=E.day(ts);
let tests=0;
function test(name,fn){fn();tests++;console.log('PASS',name);}
const answers=items=>items.map(q=>H.BY[q.h][q.type]);
function daily(level=0,learned=0){return E.ensurePlan(E.profile({level,learned}),ts);}
function practice(p,index=0){for(const h of E.batchChars(p.studyDays[day],index))p=E.recordPractice(p,day,index,h,ts);return p;}
const pairAnswers=qs=>qs.map(q=>({hun:H.BY[q.h].hun,eum:H.BY[q.h].eum}));
function pass(p,index=0){const qs=E.dailyItems(p.studyDays[day],index);return E.finishBatch(practice(p,index),day,index,qs,pairAnswers(qs),ts);}

test('300 unique characters, official group counts, exactly five relevant examples',()=>{
 assert.equal(H.LIST.length,300);assert.equal(new Set(H.LIST.map(x=>x.h)).size,300);
 assert.deepEqual(H.LEVELS.map((_,i)=>H.LIST.filter(x=>x.level===i).length),[50,50,50,75,75]);
 for(const x of H.LIST){assert.equal(x.words.length,5);assert.equal(new Set(x.words.map(w=>w.word)).size,5);assert(x.words.every(w=>w.word.includes(x.h)&&w.read));}
});
test('30 unique diagnostic characters, ten per grade and 15 meaning/15 reading',()=>{
 for(let k=0;k<100;k++){const qs=E.diagnostic();assert.equal(qs.length,30);assert.equal(new Set(qs.map(q=>q.h)).size,30);assert.deepEqual([8,7,6].map(g=>qs.filter(q=>H.BY[q.h].grade===g).length),[10,10,10]);assert.equal(qs.filter(q=>q.type==='hun').length,15);}
});
test('four distinct options, one exact answer',()=>{for(const x of H.LIST)for(const type of ['hun','eum']){const q=E.question(x.h,type);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.equal(q.options.filter(o=>o===q.answer).length,1);}});
test('daily plan fixes ten characters, two batches of five, only first initially open',()=>{
 const p=daily(),plan=p.studyDays[day];assert.equal([...plan.chars].length,10);assert.equal(E.batchCount(plan),2);
 assert.equal(E.dailyItems(plan).length,5);assert.equal(E.visibleChars(plan).length,5);assert(E.isBatchOpen(plan,0));assert(!E.isBatchOpen(plan,1));assert(!E.isBatchOpen(plan,2));assert(!E.isBatchOpen(plan,-1));
 assert.deepEqual(E.dailyPlan(p,ts),plan);assert.equal(E.dailyPlan(p,ts,999).chars,plan.chars);
 assert.throws(()=>practice(p,1));assert.throws(()=>pass(p,1));
});
test('practice missing or only one completion blocks testing; wrong character cannot be saved',()=>{
 let p=daily(),qs=E.dailyItems(p.studyDays[day]);assert.throws(()=>E.finishBatch(p,day,0,qs,pairAnswers(qs),ts));
 assert.throws(()=>E.recordPractice(p,day,0,'訓',ts));p=practice(p);p.studyDays[day].practice[qs[0].h].count=1;
 assert.throws(()=>E.finishBatch(p,day,0,qs,pairAnswers(qs),ts));
});
test('3/5 fails; 4/5 requires both meaning and reading; only success unlocks the next five',()=>{
 let p=practice(daily()),qs=E.dailyItems(p.studyDays[day]),a=pairAnswers(qs);
 a[0].hun='?';a[1].eum='?';let r=E.finishBatch(p,day,0,qs,a,ts);assert.equal(r.result.right,3);assert(!r.passed);assert.equal(r.p.learned,0);assert(!E.isBatchOpen(r.p.studyDays[day],1));
 a=pairAnswers(qs);a[0].eum='?';r=E.finishBatch(r.p,day,0,qs,a,ts);assert(r.passed);assert.equal(r.result.right,4);assert.equal(r.p.learned,5);assert.equal(r.points,0);assert.equal(r.p.score,1000);assert.equal(r.next,1);assert(E.isBatchOpen(r.p.studyDays[day],1));assert.equal(E.visibleChars(r.p.studyDays[day]).length,10);
 let again=E.finishBatch(r.p,day,0,qs,a.map(()=>({})),ts);assert.equal(again.p.learned,5);assert(E.isBatchOpen(again.p.studyDays[day],1));
 r=pass(r.p,1);assert(r.done);assert.equal(r.points,5);assert.equal(r.p.learned,10);assert.equal(r.p.score,1005);assert.equal(Object.keys(r.p.mastered).length,9);
 r=pass(r.p,0);r=pass(r.p,1);assert.equal(r.points,0);assert.equal(r.p.score,1005);assert.equal(r.p.learned,10);assert.equal(Object.keys(r.p.mastered).length,10);assert.equal(r.p.studyDays[day].chars,p.studyDays[day].chars);
});
test('daily reward 5/10/10/15/15 happens only after all planned batches, once',()=>{
 for(let lv=0;lv<5;lv++){let r=pass(daily(lv,lv?H.BOUNDS[lv-1]:0));assert.equal(r.points,0);r=pass(r.p,1);assert.equal(r.points,[5,10,10,15,15][lv]);assert.equal(pass(r.p,1).points,0);}
});
test('stage boundary pads with review to five, never crosses stage; completed course reviews ten',()=>{
 let p=daily(0,49),plan=p.studyDays[day];assert.equal(plan.chars.length,5);assert.equal(plan.freshChars.length,1);assert([...plan.chars].every(h=>H.BY[h].level===0));let r=pass(p);assert.equal(r.p.learned,50);assert.equal(r.points,5);assert(r.done);
 assert.equal(E.dailyPlan({version:2,level:5,learned:300,score:1700},ts).chars.length,10);
});
test('existing 20-character completion preserves progress/score and only reviews ten with no extra reward',()=>{
 let p=E.ensurePlan({version:2,score:1225,learned:20,level:0,days:{[day]:{date:day,chars:H.LIST.slice(0,20).map(x=>x.h).join(''),done:true,stage:0,reward:5}}},ts);
 assert.equal(p.score,1225);assert.equal(p.learned,20);assert.equal(p.studyDays[day].chars.length,10);assert(p.studyDays[day].legacyCompleted);assert(E.isBatchOpen(p.studyDays[day],1));p=pass(p,1).p;p=pass(p,0).p;assert.equal(p.score,1225);assert.equal(p.learned,20);
});
test('midnight rollover rejects old-day submissions and permits a new fixed ten-character plan',()=>{
 const p=practice(daily()),qs=E.dailyItems(p.studyDays[day]);assert.throws(()=>E.finishBatch(p,day,0,qs,pairAnswers(qs),ts+86400000));assert.throws(()=>E.recordPractice(p,day,0,qs[0].h,ts+86400000));
 assert.notEqual(E.dailyPlan(p,ts+86400000).date,day);assert.equal(E.day(Date.parse('2026-09-30T15:00:00Z')),'2026-10-01');
 const finished=pass(pass(p,0).p,1).p;assert.equal(E.dailyPlan(finished,ts+86400000).from,10);
});
test('incomplete, duplicate or foreign question sets cannot earn points',()=>{
 const p=practice(daily()),qs=E.dailyItems(p.studyDays[day]);assert.throws(()=>E.finishBatch(p,day,0,qs.slice(1),pairAnswers(qs).slice(1),ts));
 const wrong=qs.map(q=>({...q,h:'訓'}));assert.throws(()=>E.finishBatch(p,day,0,wrong,pairAnswers(wrong),ts));
 assert.throws(()=>E.finishBatch(p,day,0,qs.map(()=>qs[0]),pairAnswers(qs),ts));
});
test('diagnostic and promotion tests contain meaning/reading only, never strokes',()=>{for(const qs of [E.diagnostic(),...H.LEVELS.map((_,i)=>E.examItems(i,E.TEST_COUNTS[i]))])assert(qs.every(q=>['hun','eum'].includes(q.type)));});
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
test('legacy progress is retained; totals without a saved plan cannot identify correct characters',()=>{const p=E.profile({learned:150,level:3});assert.equal(p.learned,150);assert.equal(p.level,3);assert.equal(p.score,1000);p.baseline={right:30,total:30,ts};assert.equal(E.summary(E.migrateAssessment(p)).mastered,0);assert(E.migrateAssessment(p).creditReviewNeeded);});
test('Hanja-only tier boundaries',()=>{for(const [score,id] of [[1000,'bronze'],[1099,'bronze'],[1100,'silver'],[1249,'silver'],[1250,'gold'],[1449,'gold'],[1450,'platinum'],[1699,'platinum'],[1700,'diamond']])assert.equal(E.tierOf(score).id,id);});
test('meaning and reading aliases accept whitespace and common variants',()=>{assert.equal(E.grade([{h:'地',type:'hun'},{h:'女',type:'eum'}],[' 땅 ','여']).right,2);});
console.log(`${tests} test groups passed`);
