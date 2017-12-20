<template v-if="label">
    <div id="PharmacyLabel" class="component">
        <h2>Label</h2>
        <div class="label-description  markdown-content" v-html="label.labelDescription"></div>
        <div class="label-example" v-if="label.labelSampleInstructions">
            <h3>Sample Label Instructions</h3>
            <div v-for="sample in label.labelSampleInstructions">
                <div class="label-example__sample">
                    {{sample.labelWarning}} {{sample.labelVerb}} <span v-tippy="{arrow:true}" v-if="sample.labelDose" title="Dosage" class="label-meta  labelDose">{{sample.labelDose}}</span> {{sample.labelMeta}} <span v-tippy="{arrow:true}" title="Frequency" v-if="sample.labelFrequency" class="label-meta  labelFrequency">{{sample.labelFrequency}}</span> {{sample.labelSecondMeta}}.
                </div>
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
