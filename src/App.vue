<template>
    <main id="App"  class="component">
        <h1>Welcome to the HABIT TRACKER</h1>
    </main>
</template>

<script>
import sourceData from './content/_data.js';
import InfoView from './components/InfoView.vue';
import NavigationView from './components/NavigationView.vue';
import eventHub from './eventHub.js';

export default {
    name: 'app', 
    components: { InfoView, NavigationView },
    data () {
        let current = {
            callNext: "",
            allItems: sourceData,
            selected: {}
        }
        return current;
    }, 
    methods: {
        updateInfo: function(e) {
            this.selectCurrent(this.callNext);
        },
        newSelectCurrent: function(newContent) {
            this.selected = newContent;
        }
    }
}
</script>
