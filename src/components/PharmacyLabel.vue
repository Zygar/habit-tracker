<template v-if="label">
    <div id="PharmacyLabel" class="component">
        <p>{{label.labelDescription}}</p>
        <p>{{label.labelVerb}} <span class="label-meta  labelDose">{{label.labelDose}}</span> <span class="label-meta  labelFrequency">{{label.labelFrequency}}</span>.</p>
    </div>
</template>

<script>
export default {
    name: 'PharmacyLabel',
    props: ['label']
}
</script>
