<template>
    <ul id="NavigationView"  class="component">
        <item :model="tree" :selected="selected" ></item>
    </ul>
</template>

<script>
import Item from './Item.vue';
export default {
    name: 'NavigationView',
    components: { Item },
    props: {
        tree: Object,
        selected: Object
    }
}
</script>
