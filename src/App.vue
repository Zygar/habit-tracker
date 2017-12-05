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

function selectCurrent(req) {
    if(req != undefined) {
        console.log("returning", req)
        console.log(sourceData.children[req])
        return sourceData.children[req];    
    }
    else return sourceData;
    // return sourceData;
    // return sourceData.children[0];
    // return sourceData.children[0].children[0].children[0];
}

export default {
    name: 'app', 
    components: { InfoView, NavigationView },
    data () {
        let current = {
            selected: selectCurrent(),
            callNext: ""
        }
        return current;
    }, 
    methods: {
        updateInfo: function(e) {
            console.log(this.callNext);
            selectCurrent(this.callNext);
            
        }
    }
}
</script>
