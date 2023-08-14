var timer=60;
var score=0;
var hitrn=0;
function scoreIncrease()
{
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}
function getNewHit()
{
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hitrn;
}
function Bubbler()
{
var clutter="";
for(var i=1;i<=102;i++)
{
    var random= Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${random}</div>`
}
document.querySelector("#pbottom").innerHTML=clutter;
}
function runTimer()
{
     var timerrun=setInterval(function(){
        if (timer>0) {
            timer--;
            document.querySelector("#timerValue").textContent=timer;
        }
        else
        {
            clearInterval(timerrun)
            document.querySelector("#pbottom").innerHTML =`<h1>Game Over</h1>`;
        }
    },1000);
}
document.querySelector("#pbottom").addEventListener("click",function(dets)
{
    var clickedNumber=Number(dets.target.textContent);
    if(clickedNumber ===hitrn)
    {
        scoreIncrease();
        getNewHit();
        Bubbler();
    }
    
})
runTimer();
Bubbler();
getNewHit();