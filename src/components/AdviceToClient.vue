<template>
    <div id="AdviceToClient" class="component">
        <h2 :class="{isHidden: !isOpened}" class="toggler" @click="toggle()">Advice to Client <span class="toggleStatus">{{isOpened ? '-' : '+'}}</span></h2>
        <div v-html="advice" class="markdown-content" v-show="isOpened"></div>
    </div>
</template>

<script>
export default {
    name: 'AdviceToClient',
    props: ['advice'],
    data() {
        return {
            isOpened: false
        }
    },
    methods: {
        toggle: function () {    
            this.isOpened = !this.isOpened
        }
    }
}
</script>
