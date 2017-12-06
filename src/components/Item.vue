<!-- ITEM.
     This deprecates SubType. 
     -->

<template>
    <li>
        <div :class="{active: isActive, expandable: hasChildren}">
            <strong @click="emitNavRequest(model)">{{model.name}}</strong>
            <button v-if="hasChildren" @click="toggle">[{{isOpened ? '-' : '+'}}]</button>
        </div>
        <ul v-show="isOpened"  v-if="hasChildren">
            <item v-for="model in model.children" :model="model"></item>
        </ul>
    </li>
</template>

<script>
    import eventHub from '../eventHub.js';

    export default {
        name: 'Item',
        props: {
            model: Object
        },
        data () {
            return {
                isOpened: false,
                isActive: false
            }
        }, 
        computed: {
            hasChildren: function() {
                return this.model.children && this.model.children.length
            }
        },
        methods: {
            toggle: function () {
                if (this.hasChildren) {
                    this.isOpened = !this.isOpened
                }
            },
            emitNavRequest: function (requestedChild) {
                console.log("Emitting Navigation Request");
                eventHub.$emit('navigationRequest', requestedChild);
                this.isActive = !this.isActive;
            }
        }
    }
</script>

