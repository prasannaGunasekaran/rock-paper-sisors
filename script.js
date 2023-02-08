
//getting elements
const userScoreEl=document.querySelector('.user-score')
const compScoreEl=document.querySelector('.cmp-score')
const userChoiceEl=document.querySelector('.user-choice')
const compChoiceEl=document.querySelector('.cmp-choice')
const resultEl=document.querySelector('.result')
const resetEl=document.querySelector('.reset')

 function init(){
 userScore=0;
 compScore=0;
 userChoiceEl.innerText=null;
 compChoiceEl.innerText=null;
 resultEl.innerText=null;
}

//global variables
let userScore=0;
let compScore=0;

//function

//comp choice step-2
const getCmpChoice=function()
{
    const randomNumber=Math.floor(Math.random()*3)+1;
    if(randomNumber===1)
    {
        return 'rock';
    }
    else if(randomNumber===2)
    {
        return 'paper';
    }
    else if(randomNumber===3)
    {
        return 'scissors';
    }
};

//user choice step-3
const getUserChoice=function(userBtn)
{
    const users=userBtn;
    const comps=getCmpChoice();

    const result=getResult(users,comps);

    if(result==='WON'){
        userScore=userScore+1;
    }
    else if(result==='LOST'){
        compScore=compScore+1;
    }

    //displaying in project
    userScoreEl.innerText=userScore;
    compScoreEl.innerText=compScore;
    userChoiceEl.innerText=`user Selected ${users}`;
    compChoiceEl.innerText=`cmp Selected ${comps}`;
    resultEl.innerText=`The result ${result}`;
};


//get result function step-1
const getResult=function(user,cmp)
{
    if(user==='rock'){
        if(cmp==='rock')
        {
            return 'DRAW';
        }
        else if(cmp==='paper')
        {
            return'WON';
        }
        else if(cmp==='scissors')
        {
            return 'LOST';
        }
    }


    if(user==='paper')
    {
        if(cmp==='rock')
        {
            return'WON';
        }
        else if(cmp==='paper')
        {
            return'DRAW';
        }
        else if(cmp==='scissors')
        {
            return'LOST';
        }
    }

    if(user==='scissors')
    {
        if(cmp==='rock')
        {
            return'LOST';
        }
        else if(cmp==='paper')
        {
            return'WON';
        }
        else if(cmp==='scissors')
        {
            return'DRAW';
        }
    }
}
//step-4
resetEl.addEventListener('click',function(){
    userScoreEl.innerText=0;
    compScoreEl.innerText=0;
    init()

})


