let gameSeq = [];
let userSeq = [];
let opts = ["green", "pink", "blue", "orange"];
let h2 = document.querySelector("h2")
let started = false;
let level =0;
let allBtns = document.querySelectorAll(".btn");
for( btns of allBtns){
   btns.addEventListener("click", buttonPress);
}

document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
    }
    levelUp();
})

function flashBG(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250)
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = "Level "+level;
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = opts[randomIdx];
    gameSeq.push(randomColor);
    let randomBtn = document.querySelector(`.${randomColor}`);
    flashBG(randomBtn);
}
function checkSeq(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerText="Game Over! YOUR SCORE IS "+level+"!\nPress any key to start again.";
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150)
        reset();
    }
}
 function buttonPress(){
    let btn = this;
    flashBG(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkSeq(userSeq.length-1);
 }

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level =0;
}