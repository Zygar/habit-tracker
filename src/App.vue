<template>
    <main id="App"  class="component">
        <habit v-for="habit in habits" :title="habit.title" :emoji="habit.emoji" :targetPercentage="habit.targetPercentage" :actualPercentagePlaceholder="habit.actualPercentagePlaceholder"></habit>        
    </main>
</template>

<script>
import sourceData from './content/_data.js';
import Habit from './components/Habit.vue';

export default {
    name: 'app', 
    components: { Habit },
    data () {
        let habits = sourceData;
        return habits; 
    }
}
</script>
