<!-- Typically seen inside of InfoView -->
<template v-if="description">
    <div id="RenderedDescription" class="component">
        <h2>Description</h2>
        <div v-html="description"  class="markdown-content"></div>
    </div>
</template>

<script>

const dataSample = {
    description: "Lorem ipsum dolor sit amet."
}

export default {
    name: 'RenderedDescription',
    props: ['description']
}
</script>
