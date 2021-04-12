import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
const block = Array.from(document.querySelectorAll('.block'));
const button = document.querySelector('.buttonStart');
const simon = document.querySelector('.simon');
const round = document.querySelector('.numberRound');
const level = document.querySelectorAll('.level');

let arrRand = [];
let copy = [];
let action;
let sec = 1500;

function activBlock(el){
    el.style.opacity = 1;
    setTimeout(()=>{
        el.style.opacity = 0.3;
    },sec/2)
}
function startgame(){
    complexity();
    arrRand=[];
    copy=[];
    button.setAttribute('disabled','disabled');
    newRaund();

}
function newRaund(){
    round.innerHTML=arrRand.length+1;
    arrRand.push(randNum());
    for(let i=0;i<arrRand.length;i++){
        setTimeout(()=>{
            activBlock(block[arrRand[i]-1]);
        },(i+1)*sec)
    }
    copy=arrRand.slice(0);
}
function registerClick(elem){
    var desired = copy.shift();
    var actual = Number(elem.id);
    activBlock(block[Number(elem.id)-1])
    action = (desired===actual);
    valid();
}
function valid(){
    if(copy.length===0 && action){
        newRaund();
    }
    else if(!action){
        round.innerHTML=0;
        endGame();
    }
}
function endGame(){
    button.removeAttribute('disabled');
    Array.from(level).forEach(element => {
        element.removeAttribute('disabled');
    });
}
function randNum(){
    return Math.floor((Math.random()*4)+1);
}
function complexity(){
    Array.from(level).forEach(element => {
        if(element.checked){
            sec=element.value;
        }
        element.setAttribute('disabled','disabled');
    });
}
button.addEventListener('click',startgame);
simon.addEventListener('click',(e)=>{
    registerClick(e.target);
})
