<template>
    <div id="SubTypes" class="component">
        <div v-for="child in children">
            {{child.name}}
            <SubTypes v-if="child.children" :children="child.children"/>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SubTypes',
    props: ['children']
}
</script>
