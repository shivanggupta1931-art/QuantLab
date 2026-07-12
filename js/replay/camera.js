

function moveCamera(){
 const n=replay.visibleData.length;
 chart.timeScale().setVisibleLogicalRange({
   from:Math.max(0,n-80),
   to:n+2
 });
}
