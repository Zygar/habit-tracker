<template>
    <div id="SubTypes" class="component">
        <div v-for="child in children">
            <a href="#" v-on:click="emitNavigationRequest(child)" >{{child.isActive}}{{child.name}}</a>
            <SubTypes v-if="child.children" :children="child.children" />
        </div>
    </div>
</template>

<script>
import eventHub from '../eventHub.js';

export default {
    name: 'SubTypes',
    props: {
        children: Array,
        isActive: Boolean
    },
    methods: {
        emitNavigationRequest: function (requestedChild) {
            eventHub.$emit('navigationRequest', requestedChild);
        }
    }
}
</script>
