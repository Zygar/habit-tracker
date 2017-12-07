<template>
    <main id="App"  class="component">
        <NavigationView  :tree="allItems" :selected="selected" />
        <InfoView :selected="selected" />
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
    },
    mounted () {
        this.newSelectCurrent(this.allItems.children[1].children[3]);
        eventHub.$on('navigationRequest', (requestedChild) => {
            this.newSelectCurrent(requestedChild);

            // requestedChild.isActive = true;
            console.log(requestedChild)
        });
        // eventHub.$on('navigationRequest', function(requestedChild) {
        //     console.log("Navigation request FIRED", requestedChild);
        //     console.log('mounted scope is', this);

        //     // this.selectCurrent(requestedChild);
        // })
    }
}
</script>
