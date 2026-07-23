const progress={
    streak:localStorage.getItem("streak") || 0,
    answered:0,
    correct:0,
    wrong:0,
    xp:0
}

function updateProgress(isCorrect){
   if(progress.answered<DAILY_LIMIT){

    progress.answered++;

}
    // progress.streak++;

    if(isCorrect){
        progress.correct++;
        progress.xp+=10;
    }else{
        progress.wrong++;
    }
    updateProgressUI();
}

function updateProgressUI(){
    document.getElementById("dailyProgress").textContent=`${Math.min(progress.answered,DAILY_LIMIT)} / ${DAILY_LIMIT}`;
    const accuracy=progress.answered===0
    ?0
    :Math.round(progress.correct/progress.answered*100);
    document.getElementById("dailyAccuracy").textContent=accuracy+"%";
    document.getElementById("dailyXP").textContent=progress.xp;
    document.getElementById("dailyStreak").textContent=progress.streak;


}