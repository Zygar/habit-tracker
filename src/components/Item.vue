<!-- ITEM.
     This deprecates SubType. 
     -->

<template>
    <li class="item">
        <div :class="{active: isActive, expandable: hasChildren}">
            <strong @click="emitNavRequest(model)">{{model.name}}</strong>
            <button v-if="hasChildren" @click="toggle">[{{isOpened ? '-' : '+'}}]</button>
        </div>
        <ul v-show="isOpened"  v-if="hasChildren">
            <item v-for="model in model.children" :model="model" :key="model.id" :selected="selected"></item>
        </ul>
    </li>
</template>

<script>
    import eventHub from '../eventHub.js';

    export default {
        name: 'Item',
        props: {
            model: Object,
            selected: Object
        },
        data () {
            return {
                isOpened: false
            }
        }, 
        computed: {
            hasChildren: function() {
                return this.model.children && this.model.children.length
            },
            isActive: function () {
                
                if(this.selected && this.selected.name == this.model.name) {
                    return true
                } else {return false }
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
            }
        }
    }
</script>

