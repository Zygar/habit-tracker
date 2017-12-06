<template>
    <div id="AdviceToClient" class="component" v-html="advice">
    </div>
</template>

<script>
export default {
    name: 'AdviceToClient',
    props: ['advice']
}
</script>
