let gameseq=[];
let userseq=[];
let btns =["yellow","red","purple","green"];
let started = false;
let level = 0;
let highestscore=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelup();
    }
    
});
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},100);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
    }
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    btnFlash(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    
}
function chekAns(idx){
    
    if(userseq[idx]===gameseq[idx]){
    if(userseq.length===gameseq.length){
        setTimeout(levelup,1000);
    }

    }
    else{
        if(highestscore<level){
            highestscore=level;
        }
        h2.innerHTML=`Game over! Your score is <b>${level}</b> <br> Press any key to start the game <br> Highest score is ${highestscore}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    chekAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level=0;
}