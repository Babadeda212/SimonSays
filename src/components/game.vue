<template>
    <div class="game">
        <div class="simon">
            <div class="red block" id="1"></div>
            <div class="green block" id="2"></div>
            <div class="blue block" id="3"></div>
            <div class="yellow block" id="4"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Game'
}
</script>
<style>
.gamefild{
    width: 500px;
    height: 300px;
    display: flex;
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
</style>