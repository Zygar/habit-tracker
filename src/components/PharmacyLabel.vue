<template v-if="label">
    <div id="PharmacyLabel" class="component">
        <div class="label-description" v-html="label.labelDescription"></div>
        <div class="label-example" v-if="label.labelVerb">
        <p>{{label.labelVerb}} <span class="label-meta  labelDose">{{label.labelDose}}</span> <span class="label-meta  labelFrequency">{{label.labelFrequency}}</span>.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PharmacyLabel',
    props: ['label']
}
</script>
