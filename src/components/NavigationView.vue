<template>
    <nav id="NavigationView"  class="component">
        {{ name }}
        <div v-if="children!=null" v-for="child in children" >
            <div v-for="child in children">{{child.name}}</div>
        </div>
    </nav>
</template>

<script>
import sourceData from '../_data.js';

export default {
    name: 'NavigationView',
    data () {
        return sourceData
    }
}
</script>
