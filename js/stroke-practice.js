/* Guided Korean stroke practice. Dataset paths are local, licensed AnimCJK data. */
(function(){
  const distance=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
  const length=xs=>xs.slice(1).reduce((n,p,i)=>n+distance(xs[i],p),0);
  function resample(points,n=24){
    const total=length(points);if(!points.length||!total)return [];
    const out=[points[0]];let cursor=1,travelled=0;
    for(let i=1;i<n-1;i++){
      const target=total*i/(n-1);
      while(cursor<points.length-1&&travelled+distance(points[cursor-1],points[cursor])<target){travelled+=distance(points[cursor-1],points[cursor]);cursor++;}
      const a=points[cursor-1],b=points[cursor],d=distance(a,b),t=d?(target-travelled)/d:0;
      out.push([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]);
    }
    return [...out,points[points.length-1]];
  }
  function matchStroke(points,guide){
    if(points.length<2||guide.length<2||points.some(p=>p.length!==2||p.some(x=>!Number.isFinite(x))))return false;
    const a=resample(points),b=resample(guide),la=length(points),lb=length(guide);
    if(!a.length||!b.length||la<lb*.62||la>lb*1.75)return false;
    const tolerance=Math.max(34,Math.min(80,lb*.25));
    if(distance(a[0],b[0])>tolerance||distance(a.at(-1),b.at(-1))>tolerance)return false;
    // Ordered discrete Frechet distance rejects reversed, skipped and off-path strokes.
    const dp=Array.from({length:a.length},()=>Array(b.length).fill(Infinity));
    for(let i=0;i<a.length;i++)for(let j=0;j<b.length;j++){
      const d=distance(a[i],b[j]);
      dp[i][j]=i===0&&j===0?d:Math.max(d,Math.min(i?dp[i-1][j]:Infinity,j?dp[i][j-1]:Infinity,i&&j?dp[i-1][j-1]:Infinity));
    }
    return dp.at(-1).at(-1)<=tolerance;
  }
  function mount(host,h,options={}){
    const data=window.HanjaStrokes?.[h];
    if(!data||data.strokes.length!==data.medians.length||!data.strokes.length)throw new Error('이 한자의 획순 자료를 불러오지 못했어요. 새로고침 후 다시 시도해 주세요.');
    const ns='http://www.w3.org/2000/svg';
    const guides=data.medians.map(d=>{const p=document.createElementNS(ns,'path');p.setAttribute('d',d);const n=p.getTotalLength();return Array.from({length:40},(_,i)=>{const q=p.getPointAtLength(n*i/39);return [q.x,q.y];});});
    let round=options.completed?2:0,index=0,points=[],pointer=null,demo=null,timer=null,disposed=false;
    const status=text=>options.onStatus?.(text);
    function draw(message){
      if(disposed)return;
      const done=round===2,shown=demo===null?(done?data.strokes.length:index):demo;
      const current=guides[index],start=current[0],hint=demo===null&&!done;
      host.innerHTML=`<svg viewBox="0 0 1024 1024" role="img" aria-label="${h} 획순 연습판" data-round="${round}" data-stroke="${index+1}">
        <path d="M512 0V1024M0 512H1024M0 0L1024 1024M1024 0L0 1024" class="stroke-grid"/>
        ${data.strokes.map((d,i)=>`<path d="${d}" class="${i<shown?'stroke-done':'stroke-outline'}"/>`).join('')}
        ${hint?`<path d="${data.medians[index]}" class="stroke-guide" data-guide/><circle cx="${start[0]}" cy="${start[1]}" r="35" class="stroke-start"/><text x="${start[0]}" y="${start[1]+14}" class="stroke-number">${index+1}</text>`:''}
        <polyline class="stroke-ink" points=""/>
      </svg>`;
      const svg=host.querySelector('svg');
      const point=e=>{const r=svg.getBoundingClientRect();return [(e.clientX-r.left)*1024/r.width,(e.clientY-r.top)*1024/r.height];};
      svg.onpointerdown=e=>{
        if(disposed||round===2||demo!==null||pointer!==null||e.button>0)return;
        e.preventDefault();pointer=e.pointerId;points=[point(e)];svg.setPointerCapture(pointer);
      };
      svg.onpointermove=e=>{if(e.pointerId!==pointer||disposed)return;e.preventDefault();const q=point(e);if(distance(points.at(-1),q)>2&&points.length<4096)points.push(q);svg.querySelector('.stroke-ink').setAttribute('points',points.map(p=>p.join(',')).join(' '));};
      svg.onpointerup=e=>{
        if(e.pointerId!==pointer||disposed)return;e.preventDefault();points.push(point(e));pointer=null;
        const accepted=matchStroke(points,guides[index]);points=[];
        if(!accepted){draw('획의 시작점에서 안내선을 따라 끝까지 써 주세요. 순서와 방향도 확인해요.');return;}
        index++;
        if(index===data.strokes.length){round++;index=0;}
        draw(round===2?'획순에 맞게 두 번 완성했어요.':index===0?'한 번 완성했어요! 같은 획순으로 한 번 더 써 보세요.':undefined);
        if(round===2)options.onComplete?.();
      };
      svg.onpointercancel=()=>{pointer=null;points=[];draw('손을 떼었어요. 지금 획부터 다시 써 주세요.');};
      status(message||(demo!==null?`획순 시범 · ${demo}/${data.strokes.length}획 (연습 횟수에는 포함되지 않아요)`:`${round}/2회 완료 · ${done?'연습 완료':`${index+1}/${data.strokes.length}획 · 동그라미에서 시작해요`}`));
      options.onProgress?.({round,index,total:data.strokes.length});
    }
    function cancelDemo(){if(timer)clearInterval(timer);timer=null;demo=null;pointer=null;points=[];}
    draw();
    return {
      reset(){cancelDemo();round=0;index=0;options.onReset?.();draw();},
      demonstrate(){if(disposed)return;cancelDemo();demo=0;draw();timer=setInterval(()=>{if(disposed)return;demo++;if(demo>data.strokes.length){cancelDemo();draw();}else draw();},420);},
      destroy(){disposed=true;cancelDemo();host.replaceChildren();},
    };
  }
  window.StrokePractice={matchStroke,resample,mount};
})();
