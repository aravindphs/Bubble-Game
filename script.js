var timer=60;
var score=0;
function scoreIncrease()
{
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}
function getNewHit()
{
    var rn=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=rn;
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
        }
    },1000);
}
Bubbler();
runTimer();
getNewHit();
scoreIncrease();