var clutter="";
for(var i=1;i<=102;i++)
{
    var random= Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${random}</div>`
}
document.querySelector("#pbottom").innerHTML=clutter;