<!-- Typically seen inside of InfoView -->
<template v-if="description">
    <div id="RenderedDescription" class="component">
        {{ description }}
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
