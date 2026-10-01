const assert=require('node:assert/strict');
global.window={};require('../js/hanja.js');require('../js/hanja-engine.js');
const H=window.Hanja,E=window.HanjaEngine,ts=Date.parse('2026-10-01T03:00:00Z');
const answers=items=>items.map(q=>H.BY[q.h][q.type]);
const initial=()=>E.prepareAssessment(null,'baseline',ts);
const finish=(p,mode,at=ts,wrongFrom=30)=>{const qs=E.assessmentItems(p,mode),as=answers(qs);as.fill('?',wrongFrom);return E.finishAssessment(p,mode,qs,as,at)};
let p=initial(),all=finish(p,'baseline');
assert.equal(all.recognized,30);assert.equal(all.points,30);assert.equal(all.p.score,1030);assert.equal(all.p.learned,0);assert.equal(all.p.level,0);
assert.equal(all.p.baseline.correctChars.length,30);assert.equal(Object.keys(all.p.assessmentSeen).length,30);
assert.throws(()=>finish(all.p,'baseline'),/이미/);
const zero=finish(initial(),'baseline',ts,0),partial=finish(initial(),'baseline',ts,17);
assert.equal(zero.points,0);assert.equal(zero.recognized,0);assert.equal(zero.p.score,1000);assert.equal(partial.points,17);assert.equal(partial.recognized,17);
const shared=initial();shared.mastered=Object.fromEntries(shared.baselinePlan.slice(0,5).map(q=>[q.h,true]));
assert.equal(finish(shared,'baseline').points,25,'daily and diagnosis recognition must not overlap');
const qs=p.baselinePlan,as=answers(qs);
assert.throws(()=>E.finishAssessment(p,'baseline',qs.slice(1),as.slice(1),ts),/30문제/);
assert.throws(()=>E.finishAssessment(p,'baseline',qs.map(()=>qs[0]),as,ts),/30문제/);
assert.throws(()=>E.finishAssessment(p,'baseline',qs.map((q,i)=>i? q:{...q,type:q.type==='hun'?'eum':'hun'}),as,ts),/30문제/);
assert.throws(()=>E.prepareAssessment(all.p,'recheck',ts+E.RECHECK_INTERVAL-1),/7일/);
let at=ts+E.RECHECK_INTERVAL,next=E.prepareAssessment(all.p,'recheck',at);
assert(next.recheckPlan.items.every(q=>!all.p.assessmentSeen[q.h]),'new characters first');
assert.deepEqual(E.prepareAssessment(next,'recheck',at).recheckPlan,next.recheckPlan,'quitting cannot redraw a saved plan');
let second=finish(next,'recheck',at);assert.equal(second.recognized,60);assert.equal(second.points,30);assert.equal(second.p.score,1060);
assert.equal(second.p.baseline.ts,ts);assert.equal(E.summary(second.p).growth,0);
assert.throws(()=>E.finishAssessment(second.p,'recheck',next.recheckPlan.items,answers(next.recheckPlan.items),at),/이미/);
// Eventually every character is seen, but repeated examinations never exceed 300 credits.
p=second.p;
for(let i=0;i<18;i++){
  at+=E.RECHECK_INTERVAL;
  p=E.prepareAssessment(p,'recheck',at);
  const items=p.recheckPlan.items;
  assert.equal(new Set(items.map(q=>q.h)).size,30);
  assert.deepEqual([8,7,6].map(g=>items.filter(q=>H.BY[q.h].grade===g).length),[10,10,10]);
  p=finish(p,'recheck',at).p;
  assert(E.summary(p).mastered<=300);assert(p.score<=1300);
}
assert.equal(E.summary(p).mastered,300);assert.equal(p.score,1300);
at+=E.RECHECK_INTERVAL;const repeated=finish(E.prepareAssessment(p,'recheck',at),'recheck',at);assert.equal(repeated.points,0);
// Previously wrong answers become eligible on a later occurrence, once each.
p=zero.p;p.assessmentSeen=Object.fromEntries(H.LIST.map(x=>[x.h,true]));at=ts+E.RECHECK_INTERVAL;
assert.equal(finish(E.prepareAssessment(p,'recheck',at),'recheck',at).points,30);
// Legacy totals are never guessed. Perfect scores are recoverable from their saved plan.
const old={version:2,learned:25,level:0,score:1005,baseline:{right:30,total:30,ts},baselinePlan:qs,mastered:{[qs[0].h]:true}};
let migrated=E.migrateAssessment(old);assert.equal(migrated.score,1034);assert.equal(E.summary(migrated).mastered,30);assert.equal(migrated.learned,25);
assert.deepEqual(E.migrateAssessment(migrated),migrated);
const prior={...old,baseline:{right:17,total:30,ts},assessment:{right:20,total:30,ts:ts+E.RECHECK_INTERVAL}};
migrated=E.migrateAssessment(prior);assert.equal(migrated.score,1005);assert(migrated.creditReviewNeeded);
let reviewed=finish(E.prepareAssessment(migrated,'credit-review',ts+1),'credit-review',ts+1);
assert.equal(reviewed.points,29);assert.equal(reviewed.p.creditReviewNeeded,false);assert.deepEqual(reviewed.p.baseline,prior.baseline);assert.deepEqual(reviewed.p.assessment,prior.assessment);
assert.throws(()=>E.finishAssessment(reviewed.p,'credit-review',qs,answers(qs),ts+1),/이미/);
const users={a:{name:'첫 진단'},b:{name:'승급'}};
const ranks={a:{...E.summary(all.p),mastered:30},b:{...E.summary(all.p),mastered:20,level:1,score:1200}};
assert.equal(E.ranking(users,ranks,'absolute')[0].uid,'a','absolute progress ranks by recognized characters first');
console.log('PASS assessment credit: zero/partial/perfect, distinct new characters, stable retries, weekly timing, 300-character cap, no double reward, legacy recovery and ranking');
