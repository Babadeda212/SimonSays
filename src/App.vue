<template>
  <div id="app" >
  <h1 class="title">Simon Say Game</h1>
  <div class="gamefild">
      <Game />
      <Menu />
      <p class="titleLose visible">Вы закончили на <span class="lose"></span> раунде</p>
  </div>
  </div>
</template>

<script>
import Game from './components/game.vue'
import Menu from './components/menu.vue'

export default {
  name: 'App',
  components: {
    Game,
    Menu
  }
  
}
</script>

<style>
 #app{
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .gamefild{
       height: 100%;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .visible{
   visibility: hidden;
 }
</style>
