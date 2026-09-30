/* Pure learning rules: independent of UI and storage. */
(function () {
  const H = window.Hanja;
  const START = 1000, DAILY_LIMIT = 20;
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
    p.days = p.days || {}; p.promotions = p.promotions || {}; p.mastered = p.mastered || {};
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
  function diagnostic(random = Math.random) {
    return shuffle([8, 7, 6].flatMap(g => shuffle(H.LIST.filter(x => x.grade === g), random).slice(0, 10)
      .map((x, i) => ({ h: x.h, type: i % 2 ? 'eum' : 'hun' }))), random);
  }
  function dailyPlan(raw, ts, limit = 20) {
    const p = profile(raw), date = day(ts);
    if (p.days[date]) return clone(p.days[date]);
    const size = Math.max(1, Math.min(DAILY_LIMIT, Math.floor(Number(limit) || DAILY_LIMIT)));
    const end = H.BOUNDS[Math.min(4, p.level)];
    const fresh = p.level < 5 && p.learned < end;
    const items = fresh ? H.LIST.slice(p.learned, Math.min(end, p.learned + size)) : H.LIST.slice(Math.max(0, p.learned - size), p.learned);
    return { date, chars: items.map(x => x.h).join(''), from: p.learned, to: fresh ? p.learned + items.length : p.learned,
      stage: Math.min(4, p.level), fresh, reward: [5, 10, 10, 15, 15][Math.min(4, p.level)], done: false };
  }
  const dailyItems = plan => [...plan.chars].flatMap(h => [{ h, type: 'hun' }, { h, type: 'eum' }]);
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
  function finishDaily(raw, date, items, answers, ts) {
    const p = profile(raw), plan = p.days[date];
    if (!plan || date !== day(ts)) throw new Error('날짜가 바뀌었어요. 한자 홈에서 오늘 학습을 시작해 주세요.');
    const expected = dailyItems(plan);
    const key = xs => xs.map(q => q.h + ':' + q.type).sort().join('|');
    if (!items.length || key(items) !== key(expected) || answers.length !== items.length) throw new Error('오늘의 학습 문제를 모두 풀어 주세요.');
    const result = grade(items, answers), passed = result.right * 10 >= result.total * 9;
    const awarded = passed && !plan.done;
    plan.lastRight = result.right; plan.total = result.total;
    if (passed) {
      for (const h of [...plan.chars]) if (result.marked.filter(q => q.h === h).every(q => q.correct)) p.mastered[h] = true;
      p.learned = Math.max(p.learned, plan.to);
      if (awarded) { p.score += plan.reward; plan.done = true; plan.completedAt = ts; plan.completedRight = result.right; p.lastDone = date; }
    }
    return { p, result, passed, awarded, points: awarded ? plan.reward : 0 };
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
    return { score: p.score, level: p.level, learned: p.learned, mastered: Object.keys(p.mastered).filter(h => H.BY[h]).length,
      baseline: base ? base.right : -1, current: latest ? latest.right : -1,
      growth: base && latest ? latest.right - base.right : 0, assessedAt: latest ? latest.ts : 0, hasRecheck: !!p.assessment };
  }
  function ranking(users, summaries, track) {
    const rows = Object.keys(users).filter(uid => summaries[uid] && summaries[uid].baseline >= 0 && (track !== 'growth' || summaries[uid].hasRecheck))
      .map(uid => ({ uid, name: users[uid].name, ...summaries[uid] }));
    const metrics = r => track === 'growth' ? [r.growth] : [r.level, r.mastered, r.learned, r.score];
    const cmp = (a, b) => { const av = metrics(a), bv = metrics(b); for (let i = 0; i < av.length; i++) if (av[i] !== bv[i]) return bv[i] - av[i]; return 0; };
    rows.sort((a, b) => cmp(a, b) || String(a.name).localeCompare(String(b.name), 'ko'));
    rows.forEach((r, i) => { r.rank = i && cmp(r, rows[i - 1]) === 0 ? rows[i - 1].rank : i + 1; });
    return rows;
  }
  window.HanjaEngine = {tierOf, START, DAILY_LIMIT, TEST_COUNTS, THRESHOLDS, day, shuffle, profile, question, diagnostic, dailyPlan, dailyItems, examItems, grade, finishDaily, finishExam, summary, ranking };
})();
