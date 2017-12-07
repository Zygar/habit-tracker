<!-- ITEM.
     This deprecates SubType. 
     -->

<template>
    <li class="item"  v-bind:id="cleanName">
        <div class="item__wrapper" :class="{active: isActive, expandable: hasChildren, isTop: isTopLevel}"  >
            <div class="item__name" @click="emitNavRequest(model)">{{model.name}}</div>
            <button v-if="hasChildren" @click="toggle">[{{isOpened ? '-' : '+'}}]</button>
        </div>
        <ul v-show="isOpened"  v-if="hasChildren"  class="hasItems">
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
            isTopLevel: function() {
                if (this.$options.name != this.$parent.$options.name) {
                    console.log( this.$options.name, this.$parent.$options.name)
                    this.isOpened = true;
                    return true
                }
            },
            hasChildren: function() {
                return this.model.children && this.model.children.length
            },
            isActive: function () {
                
                if(this.selected && this.selected.name == this.model.name) {
                    return true
                } else {return false }
            },
            cleanName: function() {
                if (this.model.name) {
                    var str = this.model.name;
                    str = str.replace(/\s+/g, '-').toLowerCase();
                    return str    
                }
                else return false               
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

