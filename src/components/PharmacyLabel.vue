<template v-if="label">
    <div id="PharmacyLabel" class="component">
        <h2>Label</h2>
        <div class="label-description  markdown-content" v-html="label.labelDescription"></div>
        <div class="label-example" v-if="label.labelVerb">
            <h3>Sample Label</h3>
            <div class="label-example__sample">
                {{label.labelVerb}} <span class="label-meta  labelDose">{{label.labelDose}}</span> <span class="label-meta  labelFrequency">{{label.labelFrequency}}</span>.
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'PharmacyLabel',
    props: ['label']
}
</script>
