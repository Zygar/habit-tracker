<template>
    <nav id="NavigationView"  class="component">
        <div v-if="children!=null" v-for="child in children" >
            <SubTypes v-if="child.children" :children="child.children"/>
        </div>
    </nav>
</template>

<script>
import sourceData from '../_data.js';
import SubTypes from './SubTypes.vue';
export default {
    name: 'NavigationView',
    components: { SubTypes },
    props: ['selected'],
    data () {
        return sourceData
    }
}
</script>
