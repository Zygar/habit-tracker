<template>
    <main id="App"  class="component">
       <!--  <NavigationView /> -->
        <!-- <input type="number" name="current" v-model="current"> -->
        <InfoView :selected="selected" />
    </main>
</template>

<script>
import sourceData from './_data.js';
import InfoView from './components/InfoView.vue';
import NavigationView from './components/NavigationView.vue';

function selectCurrent() {
    return sourceData;
}

export default {
    name: 'app', 
    components: { InfoView, NavigationView },
    data () {
        let current = {
            selected: selectCurrent()
        }
        return current;
    }
}
</script>
