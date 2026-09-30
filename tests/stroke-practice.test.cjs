const assert=require('node:assert/strict');
global.window={};require('../js/hanja.js');require('../js/hanja-strokes.js');require('../js/stroke-practice.js');
const {matchStroke,resample}=window.StrokePractice;
for(const x of window.Hanja.LIST){
 const d=window.HanjaStrokes[x.h];assert(d,x.h);assert(d.strokes.length>0);assert.equal(d.strokes.length,d.medians.length);
 for(const path of [...d.strokes,...d.medians])assert.match(path,/^[MmLlHhVvCcSsQqTtAaZz0-9.,\s+-]+$/);
}
const line=[[100,500],[900,500]],curve=[[100,100],[500,100],[500,700]],dot=[[350,300],[400,375]];
for(const shape of [line,curve,dot]){
 assert(matchStroke(shape,shape));assert(matchStroke(resample(shape,50).map(([x,y])=>[x+8,y-8]),shape));
 assert(!matchStroke([...shape].reverse(),shape));assert(!matchStroke(shape.map(([x,y])=>[x+200,y+200]),shape));
}
assert(!matchStroke([[100,500],[150,500]],line));
assert(!matchStroke([[100,500],[900,500],[100,500],[900,500]],line));
assert(!matchStroke([[100,100],[500,700]],curve));
assert(!matchStroke([[100,500],[500,0],[900,500]],line));
assert(!matchStroke([[100,500]],line));assert(!matchStroke([[NaN,0],[900,500]],line));
console.log('PASS: all 300 Korean stroke datasets, correct/noisy paths, reverse/wrong/short/skipped/scribbled strokes');
