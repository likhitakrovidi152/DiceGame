'use strict';
const score0El=document.getElementById('score--0');
const current0El = document.getElementById('current--0');
const count0El = document.getElementById('count--1');
const win=document.getElementById('won');
const lost=document.getElementById('lose');
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
  count=1;
  rcount=25;
  currentScore = 0;
  playing = true;
  count0El.innerHTML=rcount;
  score0El.innerHTML = 0;
  current0El.innerHTML = 0;
  diceEl.classList.add('hidden');
  modal.style.display="none";
  win.style.display="none";
  lost.style.display="none";
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
        
        lost.style.display="block";
        playing=false;
    }
  }
});
btnok.addEventListener('click',function(){
  
  modal.style.display="none";
  scores+=Math.trunc(currentScore/2);
  score0El.innerHTML=scores;
  current0El.innerHTML=0;
  currentScore = 0;
  rollcount();
  count--;
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

    
    if (scores>= 100 ) {
      
      playing = false;
      diceEl.classList.add('hidden');
      if(rcount==0){
        
        win.style.display="block";
        
    }
  
    } else {
      current0El.innerHTML=0
      currentScore=0;

    }
    if(rcount==0){
      count0El.innerHTML=rcount;
      diceEl.classList.add('hidden');
      lost.style.display="block";
      playing=false;
  }
  }
});

btnNew.addEventListener('click', init);
