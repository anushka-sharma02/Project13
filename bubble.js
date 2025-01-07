var timer_count=60;
var score=0;
var random_hit=0;
function makesBubble(){
var clutter="";
for(var i=1;i<=126;i++){
    var random_num=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${random_num}</div>`;
}
document.querySelector(".bottom-section").innerHTML=clutter;
}
function clock(){
        const myInterval = setInterval(timerRunning,1000);
        function timerRunning(){
            timer_count-=1;
            document.querySelector("#timer").textContent=timer_count;
            if(timer_count==0){
                document.querySelector(".bottom-section").innerHTML=`<h1>GAME OVER!!! Your score is ${score}.</h1>`;
                clearInterval(myInterval);
            }
        }
    }
function hitNumber(){
    random_hit=Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML=random_hit;
}
function increaseScore(){
     score+=10;
     document.querySelector("#score").innerHTML=score;
}
document.querySelector(".bottom-section").addEventListener("click",function(details){
    var clickedNum=Number(details.target.textContent);
    if(clickedNum===random_hit){
        increaseScore();
        makesBubble();
        hitNumber();
    }
})



hitNumber();
clock();
makesBubble();
