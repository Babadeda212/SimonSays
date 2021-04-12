<template>
     <div class="menu">
            <div>
                <p class="round">Раунд : <span class="numberRound">0</span></p>
                <button class="buttonStart">Старт!</button>
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
</template>

<script>
export default {
    name: 'Menu',
}
</script>