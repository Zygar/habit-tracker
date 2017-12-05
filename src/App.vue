<template>
    <main id="App"  class="component">
        <NavigationView />
        <InfoView :selected="selected" />
        <div style="position:fixed; bottom:0; width:100%; margin-bottom:1em; height: 2em;">
            <input type="text" name="current" v-model="callNext"> <button v-on:click="updateInfo()">Update</button>    
        </div>
        
    </main>
</template>

<script>
import sourceData from './_data.js';
import InfoView from './components/InfoView.vue';
import NavigationView from './components/NavigationView.vue';

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
        selectCurrent: function(req) {
            console.log(req);
            this.selected = this.allItems.children[0].children[req];
            // console.log(this.selected)
            // return this.allItems.children[0]
        }
    }
}
</script>
