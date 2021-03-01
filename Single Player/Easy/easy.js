'use strict';
const score0El=document.getElementById('score--0');
const current0El = document.getElementById('current--0');
const count0El = document.getElementById('count--1');
const win=document.getElementById('won');
const lost=document.getElementById('lose');
const currentcount=document.getElementById('count');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const modal = document.querySelector('.modal');
const btnok = document.querySelector('.ok-btn');
const btncancel = document.querySelector('.cancel-btn');

let scores, count,currentScore, playing,change,rcount;


const init = function () {
  scores =0;
  count=3;
  rcount=40;
  currentScore = 0;
  playing = true;
  currentcount.innerHTML=3;
  count0El.innerHTML=rcount;
  score0El.innerHTML=0;
  current0El.innerHTML=0;
  modal.style.display="none";
  win.style.display="none";
  lost.style.display="none";
  diceEl.classList.add('hidden');
};
init();


function rollcount(){
    rcount= rcount-1;
    
    count0El.innerHTML=rcount;
}

btnRoll.addEventListener('click', function () {

  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
   diceEl.src = `images/dice-${dice}.png`;
   /* let dice=0;

    if(currentScore<42){

       dice=6;
      diceEl.src = `images/dice-${dice}.png`;
    }else{
       dice=2;
      diceEl.src = `images/dice-${dice}.png`;
    }

    if(dice===4){
      rcount=rcount-3;
      if(scores>16){
        scores=scores-16;
        score0El.innerHTML=scores;
      }
      if(scores<=16){
        scores=0;
        score0El.innerHTML=scores;
      }
    }
     */
    if (dice !== 1) {
       

      currentScore += dice;
      
      current0El.innerHTML=currentScore;
      rollcount();
    } else {
      if(count>0){
        modal.style.display="block";
      }
      else{
        
        current0El.innerHTML=0;
        currentScore = 0;
      }
    }
    if(rcount==0){
        
        count0El.innerHTML=rcount;
        
        diceEl.classList.add('hidden');
        lost.style.display="block"
        playing=false;
    }
  }
});
btnok.addEventListener('click',function(){
  modal.style.display="none";
  scores+=Math.trunc(currentScore/2);
  score0El.innerHTML=scores;
  /* if(scores===66 || scores===44 || scores===88){
      scores=0;
      score0El.innerHTML=scores;
    } */
 
  current0El.innerHTML=0;
    currentScore = 0;
    rollcount();
    count--;
    currentcount.innerHTML=count;
});
btncancel.addEventListener('click',function(){
  modal.style.display="none";
  
  current0El.innerHTML=0;
    currentScore = 0;
});
btnHold.addEventListener('click', function () {
   rollcount();
  if (playing) {
    scores+= currentScore;

    score0El.innerHTML=scores;
    /* if(scores===66 || scores===44 || scores===88){
      scores=0;
      score0El.innerHTML=scores;
    } */
    
    if (scores>= 100 ) {
      
      playing = false;
      diceEl.classList.add('hidden');
      if(rcount>0){
        win.style.display="block";
      }

    } else {
      
      current0El.innerHTML=0;
      currentScore = 0;
    }
    if(rcount==0 && scores<100){
      count0El.innerHTML=rcount;
      diceEl.classList.add('hidden');
      lost.style.display="block";
      playing=false;
  }
  }
});

btnNew.addEventListener('click', init);
