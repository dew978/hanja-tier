/* Pure learning rules: independent of UI and storage. */
(function () {
  const H = window.Hanja;
  const START = 1000, DAILY_LIMIT = 10, BATCH_SIZE = 5, PRACTICE_COUNT = 2;
  const ASSESSMENT_POINT = 1, RECHECK_INTERVAL = 7 * 86400000;
  const TEST_COUNTS = [30, 40, 50, 60, 60];
  const THRESHOLDS = { silver: 1100, gold: 1250, platinum: 1450, diamond: 1700 };
  const clone = x => JSON.parse(JSON.stringify(x));
  const day = ts => new Date(ts + 9 * 3600000).toISOString().slice(0, 10);
  const shuffle = (xs, random = Math.random) => {
    const a = xs.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  function tierOf(score) {
    for (const [id,name] of [['diamond','다이아'],['platinum','플래티넘'],['gold','골드'],['silver','실버']]) if(score>=THRESHOLDS[id])return {id,name};
    return {id:'bronze',name:'브론즈'};
  }
  function profile(raw) {
    const p = Object.assign({ learned: 0, level: 0, days: {}, promotions: {}, mastered: {}, score: START }, clone(raw || {}));
    p.learned = Math.max(0, Math.min(300, Number(p.learned) || 0));
    p.level = Math.max(0, Math.min(5, Number(p.level) || 0));
    p.days = p.days || {}; p.studyDays = p.studyDays || {}; p.promotions = p.promotions || {}; p.mastered = p.mastered || {};
    if (p.version !== 2) { p.version = 2; p.score = START; p.migratedLearned = p.learned; }
    return p;
  }
  function question(h, type, random = Math.random, pool = H.LIST) {
    const x = H.BY[h];
    const answer = type === 'hun' ? x.hun : x.eum;
    const accepted = [answer, ...(x[type + 'Aliases'] || [])];
    const other = [...new Set(pool.filter(y => y.h !== h).map(y => type === 'hun' ? y.hun : y.eum))].filter(a => !accepted.includes(a));
    return { h, type, answer, options: shuffle([answer, ...shuffle(other, random).slice(0, 3)], random) };
  }
  function diagnostic(random = Math.random, seen = {}) {
    return shuffle([8, 7, 6].flatMap(g => {
      const pool=H.LIST.filter(x=>x.grade===g);
      return [...shuffle(pool.filter(x=>!seen[x.h]),random),...shuffle(pool.filter(x=>seen[x.h]),random)].slice(0,10)
        .map((x, i) => ({ h: x.h, type: i % 2 ? 'eum' : 'hun' }));
    }), random);
  }
  function validDiagnostic(items) {
    return Array.isArray(items) && items.length===30 && new Set(items.map(q=>q.h)).size===30 &&
      items.every(q=>H.BY[q.h] && ['hun','eum'].includes(q.type)) &&
      [8,7,6].every(g=>items.filter(q=>H.BY[q.h].grade===g).length===10);
  }
  function recognize(p, marked) {
    let chars='';
    p.assessmentCredits=p.assessmentCredits||{};
    for(const q of marked)if(q.correct && !p.mastered[q.h]){
      p.mastered[q.h]=true;
      p.assessmentCredits[q.h]=ASSESSMENT_POINT;
      chars+=q.h;
    }
    const points=[...chars].length*ASSESSMENT_POINT;
    p.score+=points;
    return {chars,points};
  }
  function migrateAssessment(raw) {
    const p=profile(raw);
    if(!p.baseline || p.assessmentCreditVersion===1)return p;
    p.assessmentCreditVersion=1;
    p.assessmentSeen=p.assessmentSeen||{};
    const plan=Array.isArray(p.baselinePlan)?p.baselinePlan:[];
    for(const q of plan)if(H.BY[q.h])p.assessmentSeen[q.h]=true;
    // Old versions retained only totals. A perfect score uniquely identifies all correct characters.
    const perfect=[p.baseline,p.assessment].some(r=>r?.right===30 && r.total===30);
    if(perfect && validDiagnostic(plan)){
      const award=recognize(p,plan.map(q=>({...q,correct:true})));
      p.legacyAssessmentCredit={chars:award.chars,points:award.points};
    }else if(p.baseline.right>0 || p.assessment?.right>0){
      p.creditReviewNeeded=true;
    }
    return p;
  }
  function prepareAssessment(raw,mode,ts,random=Math.random) {
    const p=migrateAssessment(raw);
    if(mode==='baseline'){
      if(p.baseline)throw new Error('처음 실력 확인은 이미 완료했어요.');
      if(!p.baselinePlan)p.baselinePlan=diagnostic(random);
    }else{
      if(!p.baseline)throw new Error('처음 실력 확인부터 해 주세요.');
      if(mode==='credit-review'){
        if(!p.creditReviewNeeded)throw new Error('이전 진단 확인은 이미 완료했어요.');
        if(!p.creditReviewPlan)p.creditReviewPlan=validDiagnostic(p.baselinePlan)?clone(p.baselinePlan):diagnostic(random,p.assessmentSeen);
      }else if(mode==='recheck'){
        const after=(p.assessment||p.baseline).ts;
        if(ts-after<RECHECK_INTERVAL)throw new Error('발전도 확인은 7일마다 할 수 있어요.');
        if(!p.recheckPlan || p.recheckPlan.after!==after)p.recheckPlan={after,items:diagnostic(random,p.assessmentSeen)};
      }else throw new Error('평가 종류를 확인해 주세요.');
    }
    return p;
  }
  function assessmentItems(p,mode) {
    return mode==='baseline'?p.baselinePlan:mode==='credit-review'?p.creditReviewPlan:p.recheckPlan?.items;
  }
  function finishAssessment(raw,mode,items,answers,ts) {
    const p=migrateAssessment(raw);
    if(mode==='baseline' && p.baseline)throw new Error('이미 저장된 첫 진단을 유지합니다.');
    if(mode!=='baseline' && !p.baseline)throw new Error('처음 실력 확인부터 해 주세요.');
    if(mode==='recheck' && ts-(p.assessment||p.baseline).ts<RECHECK_INTERVAL)throw new Error('이번 발전도 확인은 이미 저장됐어요.');
    if(mode==='credit-review' && !p.creditReviewNeeded)throw new Error('이전 진단 확인은 이미 완료했어요.');
    if(!['baseline','recheck','credit-review'].includes(mode))throw new Error('평가 종류를 확인해 주세요.');
    const expected=assessmentItems(p,mode),key=q=>q.h+':'+q.type;
    if(!validDiagnostic(items) || !validDiagnostic(expected) || answers.length!==30 || items.some(q=>!expected.some(x=>key(x)===key(q))))throw new Error('저장된 30문제를 모두 풀어 주세요.');
    if(mode==='recheck' && p.recheckPlan.after!==(p.assessment||p.baseline).ts)throw new Error('새 발전도 확인을 시작해 주세요.');
    const result=grade(items,answers),award=recognize(p,result.marked);
    const record={right:result.right,total:30,ts,correctChars:result.marked.filter(q=>q.correct).map(q=>q.h).join(''),creditedChars:award.chars,points:award.points,items:clone(items)};
    p.assessmentCreditVersion=1;p.assessmentSeen=p.assessmentSeen||{};
    for(const q of items)p.assessmentSeen[q.h]=true;
    if(mode==='baseline')p.baseline=record;
    else if(mode==='recheck'){p.assessment=record;delete p.recheckPlan;}
    else {p.creditReview=record;p.creditReviewNeeded=false;delete p.creditReviewPlan;}
    return {p,result,points:award.points,newChars:award.chars,recognized:summary(p).mastered,passed:true};
  }
  function dailyPlan(raw, ts) {
    const p = profile(raw), date = day(ts);
    if (p.studyDays[date]) { const plan=clone(p.studyDays[date]);plan.sequence=plan.sequence||[...plan.chars];return plan; }
    const legacy = p.days[date];
    if (legacy?.done) {
      // Already earned points/progress are retained. No extra learning or reward today.
      let hs = [...legacy.chars].slice(0, DAILY_LIMIT);
      while (hs.length % BATCH_SIZE) { const x=H.LIST.find(x=>!hs.includes(x.h)); hs.push(x.h); }
      return { version:1,date,chars:hs.join(''),sequence:hs,freshChars:'',from:p.learned,to:p.learned,stage:legacy.stage,reward:legacy.reward,
        legacyCompleted:true,done:true,completedAt:legacy.completedAt||ts,batches:{},practice:{} };
    }
    const end = H.BOUNDS[Math.min(4, p.level)];
    const fresh = p.level < 5 && p.learned < end;
    const items = fresh ? H.LIST.slice(p.learned, Math.min(end, p.learned + DAILY_LIMIT)) : H.LIST.slice(Math.max(0, p.learned - DAILY_LIMIT), p.learned);
    const freshChars = fresh ? items.map(x=>x.h).join('') : '';
    // Old 1–20/day settings may leave a stage with fewer than five new characters.
    // Fill that last batch with already learned characters; never cross a grade boundary.
    while (!items.length || items.length % BATCH_SIZE) {
      const extra=H.LIST.slice(0,end).find(x=>!items.some(y=>y.h===x.h));
      if(!extra)break;items.push(extra);
    }
    return { version:1,date,chars:items.map(x=>x.h).join(''),sequence:items.map(x=>x.h),freshChars,from:p.learned,to:p.learned+[...freshChars].length,
      stage:Math.min(4,p.level),reward:[5,10,10,15,15][Math.min(4,p.level)],done:false,batches:{},practice:{} };
  }
  const batchChars = (plan,index) => [...plan.chars].slice(index*BATCH_SIZE,(index+1)*BATCH_SIZE);
  const batchCount = plan => Math.ceil([...plan.chars].length/BATCH_SIZE);
  const isBatchOpen = (plan,index) => Number.isInteger(index)&&index>=0&&index<batchCount(plan)&&(index===0||!!plan.batches?.[index-1]?.passed||!!plan.legacyCompleted);
  const nextBatch = plan => { for(let i=0;i<batchCount(plan);i++)if(!plan.batches?.[i]?.passed)return i;return 0; };
  const dailyItems = (plan,index=0) => batchChars(plan,index).map(h=>({h,type:'pair'}));
  const visibleChars = plan => [...plan.chars].filter((_,i)=>isBatchOpen(plan,Math.floor(i/BATCH_SIZE)));
  function ensurePlan(raw,ts) { const p=profile(raw),date=day(ts);p.studyDays[date]=dailyPlan(p,ts);return p; }
  function checkBatch(p,date,index,ts) {
    const plan=p.studyDays[date];
    if(!plan||date!==day(ts))throw new Error('날짜가 바뀌었어요. 한자 홈에서 오늘 학습을 시작해 주세요.');
    if(!isBatchOpen(plan,index))throw new Error('앞 묶음에서 5자 중 4자 이상 통과한 뒤 시작해 주세요.');
    return plan;
  }
  function recordPractice(raw,date,index,h,ts) {
    const p=profile(raw),plan=checkBatch(p,date,index,ts);
    if(!batchChars(plan,index).includes(h))throw new Error('현재 묶음의 한자를 연습해 주세요.');
    plan.practice=plan.practice||{};
    if(!plan.practice[h])plan.practice[h]={count:PRACTICE_COUNT,ts};
    return p;
  }
  function examItems(level, count, random = Math.random) {
    const end = H.BOUNDS[level], start = level ? H.BOUNDS[level - 1] : 0;
    const n = Math.max(10, Math.min(60, Math.floor(Number(count) || TEST_COUNTS[level])));
    const nOld = level ? Math.round(n * .2) : 0;
    const xs = [...shuffle(H.LIST.slice(start, end), random).slice(0, n - nOld), ...shuffle(H.LIST.slice(0, start), random).slice(0, nOld)];
    return shuffle(xs.map((x, i) => ({ h: x.h, type: i % 2 ? 'eum' : 'hun' })), random);
  }
  function grade(items, answers) {
    const clean = v => String(v || '').normalize('NFKC').replace(/\s+/g, '');
    const marked = items.map((q, i) => {
      const x = H.BY[q.h], accepted = [x[q.type], ...(x[q.type + 'Aliases'] || [])];
      return { ...q, correct: accepted.some(a => clean(a) === clean(answers[i])) };
    });
    const right = marked.filter(x => x.correct).length;
    return { total: items.length, right, percent: items.length ? right * 100 / items.length : 0, marked };
  }
  function finishBatch(raw, date, index, items, answers, ts) {
    const p=profile(raw),plan=checkBatch(p,date,index,ts),chars=batchChars(plan,index);
    if(items.length!==BATCH_SIZE||answers.length!==BATCH_SIZE||new Set(items.map(q=>q.h)).size!==BATCH_SIZE||items.some(q=>q.type!=='pair'||!chars.includes(q.h)))throw new Error('현재 묶음의 5자 문제를 모두 풀어 주세요.');
    if(chars.some(h=>plan.practice?.[h]?.count!==PRACTICE_COUNT))throw new Error('한 글자마다 획순에 맞게 두 번 완성해 주세요.');
    const marked=items.map((q,i)=>{const a=answers[i]||{},g=grade([{h:q.h,type:'hun'},{h:q.h,type:'eum'}],[a.hun,a.eum]);return {h:q.h,correct:g.right===2,hunCorrect:g.marked[0].correct,eumCorrect:g.marked[1].correct};});
    const right=marked.filter(q=>q.correct).length,result={right,total:BATCH_SIZE,percent:right*20,marked},passed=right>=4;
    plan.batches=plan.batches||{};
    const previous=plan.batches[index];
    let points=0;
    if (passed) {
      for(const q of marked)if(q.correct)p.mastered[q.h]=true;
      if(!previous?.passed)plan.batches[index]={passed:true,right,total:BATCH_SIZE,ts};
      let learned=0;
      for(let i=0;i<batchCount(plan);i++){if(!plan.batches[i]?.passed)break;learned+=batchChars(plan,i).filter(h=>plan.freshChars.includes(h)).length;}
      p.learned=Math.max(p.learned,plan.from+learned);
      const all=Array.from({length:batchCount(plan)},(_,i)=>plan.batches[i]?.passed).every(Boolean);
      if(all&&!plan.done){points=plan.reward;p.score+=points;plan.done=true;plan.completedAt=ts;p.lastDone=date;}
    }
    return {p,result,passed,points,done:plan.done,next:passed&&index+1<batchCount(plan)?index+1:null};
  }
  function finishExam(raw, level, items, answers, ts) {
    const p = profile(raw), date = day(ts);
    if (level !== p.level || p.level >= 5 || p.learned < H.BOUNDS[level]) throw new Error('현재 단계의 한자를 먼저 모두 학습해 주세요.');
    if (p.failDay === date) throw new Error('승급 시험은 하루 한 번 도전할 수 있어요.');
    if (items.length < 10 || answers.length !== items.length || items.some(q => H.BY[q.h].level > level)) throw new Error('시험 문항을 확인해 주세요.');
    const result = grade(items, answers), passed = result.right * 5 >= result.total * 4;
    p.lastTest = { ts, level, right: result.right, total: result.total, passed };
    const awarded = passed && !p.promotions[level + 1];
    if (passed) {
      p.level++;
      if (awarded) { p.score += 100; p.promotions[level + 1] = { ts, points: 100, right: result.right, total: result.total }; }
      delete p.failDay;
    } else p.failDay = date;
    return { p, result, passed, points: awarded ? 100 : 0 };
  }
  function summary(raw) {
    const p = profile(raw), base = p.baseline, latest = p.assessment || base;
    return { score: p.score, level: p.level, learned: p.learned, mastered: Object.keys(p.mastered).filter(h => H.BY[h] && p.mastered[h]).length,
      baseline: base ? base.right : -1, current: latest ? latest.right : -1,
      growth: base && latest ? latest.right - base.right : 0, assessedAt: latest ? latest.ts : 0, hasRecheck: !!p.assessment };
  }
  function ranking(users, summaries, track) {
    const rows = Object.keys(users).filter(uid => summaries[uid] && summaries[uid].baseline >= 0 && (track !== 'growth' || summaries[uid].hasRecheck))
      .map(uid => ({ uid, name: users[uid].name, ...summaries[uid] }));
    const metrics = r => track === 'growth' ? [r.growth] : [r.mastered, r.level, r.learned, r.score];
    const cmp = (a, b) => { const av = metrics(a), bv = metrics(b); for (let i = 0; i < av.length; i++) if (av[i] !== bv[i]) return bv[i] - av[i]; return 0; };
    rows.sort((a, b) => cmp(a, b) || String(a.name).localeCompare(String(b.name), 'ko'));
    rows.forEach((r, i) => { r.rank = i && cmp(r, rows[i - 1]) === 0 ? rows[i - 1].rank : i + 1; });
    return rows;
  }
  window.HanjaEngine = {tierOf,START,DAILY_LIMIT,BATCH_SIZE,PRACTICE_COUNT,ASSESSMENT_POINT,RECHECK_INTERVAL,TEST_COUNTS,THRESHOLDS,day,shuffle,profile,question,diagnostic,migrateAssessment,prepareAssessment,assessmentItems,finishAssessment,dailyPlan,dailyItems,batchChars,batchCount,isBatchOpen,nextBatch,visibleChars,ensurePlan,recordPractice,examItems,grade,finishBatch,finishExam,summary,ranking};
})();
