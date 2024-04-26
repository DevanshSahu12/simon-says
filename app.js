let body=document.querySelector("body");
let h2=document.querySelector("h2");
let buttons=document.querySelectorAll(".button");

let level=0;
let gameSeq=[];
let userSeq=[];
let colors=["red", "green", "blue", "yellow"];
let start=false;

body.addEventListener("keydown", function (){
    if(start==false)
    {
        start=true;
        levelUp();
    }
});

for(let button of buttons)
{
    button.addEventListener("click", function (){
        userSeq.push(this.classList[1]);
        buttonFlash(this);
        check();
    });
}

function check()
{
    for(let i=0; i<userSeq.length; i++)
    {
        if(userSeq[i]!=gameSeq[i])
        {
            gameOver();
        }
    }
    if(userSeq.length==gameSeq.length && start==true)
    {
        userSeq=[];
        setTimeout(levelUp, 1000);
    }
}

function gameOver()
{
    h2.innerText=`Game Over!\nScore:${level}\nPress any key to restart`;
    start=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}

function levelUp()
{
    level++;
    h2.innerText=`Level ${level}`;

    let randomInt=Math.floor(Math.random()*4);
    let randomColor=colors[randomInt];
    let randomButton=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);

    buttonFlash(randomButton);
}

function buttonFlash(button)
{
    button.classList.add("flash");
    setTimeout(function () {
        button.classList.remove("flash");
    }, 250);
}