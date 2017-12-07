<template>
    <div id="AdviceToClient" class="component">
        <h2>Advice to Client</h2>
        <div v-html="advice" class="markdown-content"></div>
    </div>
</template>

<script>
export default {
    name: 'AdviceToClient',
    props: ['advice']
}
</script>
