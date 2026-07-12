async function loadMarketData(path){
 const txt=await fetch(path).then(r=>r.text());
 const lines=txt.trim().split("\n");
 const out=[];
 const padding = [];



candleSeries.setData([...padding, ...replay.visibleData]);
 for(let i=2;i<lines.length;i++){
   const r=lines[i].split(",");
   if(r.length<7) continue;
   out.push({time:r[1].trim(),open:+r[3],high:+r[4],low:+r[5],close:+r[6]});
 }
 out.reverse();
 return out;
}


