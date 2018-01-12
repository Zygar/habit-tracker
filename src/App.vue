<template>
    <main id="App"  class="component">
        <h1>Welcome to the HABIT TRACKER</h1>
    </main>
</template>

<script>
import sourceData from './content/_data.js';

export default {
    name: 'app', 
    components: { },
    data () {
        let habits = sourceData;
        return habits; 
    }
}
</script>
