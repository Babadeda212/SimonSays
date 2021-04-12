<template>
  <div class="main">
    <h1 class="title">Simon Say Game</h1>
    <div class="gamefild">
        <div class="game">
            <div class="simon">
                <div class="red block" id="1"></div>
                <div class="green block" id="2"></div>
                <div class="blue block" id="3"></div>
                <div class="yellow block" id="4"></div>
            </div>
        </div>
        <div class="menu">
            <div>
                <p class="round">Раунд : <span class="numberRound">0</span></p>
                <button class="buttonStart" v-on:click="
                startgame();
                ">Старт!</button>
            </div>
            <form class="options">
                <p class="optionsTitle">Уровни сложности:</p>
                <div class="groop">
                    <input class="level" type="radio" id="ez" name="lvl" value="1500"> 
                    <label for="ez" class="levelName">Легкий</label>
                </div>
                <div class="groop">
                    <input class="level" type="radio" name="lvl" value="1000">
                    <label form="midle" class="levelName">Средний</label>
                </div>
                <div class="groop">
                    <input class="level" type="radio" name="lvl" value="400">
                    <label class="levelName">Сложный</label>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>

<script>
const block = Array.from(document.querySelectorAll('.block'));
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
simon.addEventListener('click',(e)=>{
    registerClick(e.target);
})

</script>
<style scoped>
.main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title{
    margin: 0 auto 10px;
}
.gamefild{
    width: 500px;
    height: 300px;
    display: flex;
    margin: 0 auto;
}
.game{
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.simon{
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;
    grid-gap: 5px;
    border-radius: 100px;
    box-shadow: 10px 10px  10px rgba(0,0,0,0.5);
    overflow: hidden;
}
.block{
    width: 100px;
    height: 100px;
    border: 1px black solid;
    opacity: 0.3;
}
.red{
    background: red;
}
.blue{
    background: blue;
}
.green{
    background: green;
}
.yellow{
    background: yellow;
}
.groop{
    display: flex;
    margin-bottom: 10px;
}
.levelName{
    margin: 0;
}
.level{
    margin: 0;
}
.menu{
    width: 200px;
    height: 300px;
}
</style>
