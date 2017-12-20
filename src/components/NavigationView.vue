<template>
    <div id="NavigationView" :class="{expanded: hamburgerExpanded}">
        <button class="mobile-nav" @click="toggleHamburger()">{{hamburgerExpanded ? 'Hide' : 'Show'}} Menu</button>
        <ul id="NavigationViewContent"   class="component  hasItems">
            <item :model="tree" :selected="selected" ></item>
        </ul>    
    </div>
</template>

<script>
import Item from './Item.vue';
import eventHub from '../eventHub.js';

export default {
    name: 'NavigationView',
    components: { Item },
    props: {
        tree: Object,
        selected: Object
    },
    data() {
        return {
            hamburgerExpanded: false
        }
    },
    methods: {
        toggleHamburger: function () {
            this.hamburgerExpanded = !this.hamburgerExpanded
        }
    },
    mounted () {
        eventHub.$on('navigationRequest', (requestedChild) => {
            if (this.hamburgerExpanded == true){
                this.toggleHamburger();
            }       
        });
    }
}
</script>
