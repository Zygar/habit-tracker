<!-- Typically seen inside of InfoView -->
<template>
    <header id="InfoViewHeader" class="component">
        <h1>{{name}}</h1>
    </header>
</template>

<script>

export default {
    name: 'InfoViewHeader',
    props: ['name']
}
</script>
