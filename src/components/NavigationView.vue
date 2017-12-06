<template>
    <ul id="NavigationView"  class="component">
        <item :model="tree" ></item>
    </ul>
</template>

<script>
import Item from './Item.vue';
export default {
    name: 'NavigationView',
    components: { Item },
    props: ['tree', 'selected']
}
</script>
