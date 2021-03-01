'use strict';
const modal=document.querySelector('.modal');
const btnclose=document.querySelector('.close-btn');
const btnrule=document.querySelector('.rules-btn');
const btnsingle=document.querySelector('.btn');
const easy=document.querySelector('.btn1');
const hard=document.querySelector('.btn2');


btnrule.addEventListener('click',function(){
    
    modal.style.display="block";
})

btnclose.addEventListener('click',function(){

    modal.style.display="none";
})
btnsingle.addEventListener('click',function(){
    easy.style.display="block";
    hard.style.display="block";
})
