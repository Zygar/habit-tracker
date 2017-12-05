<!-- Typically seen inside of App -->
<template>
    <section id="InfoView" class="component">
        <InfoViewHeader :name="selected.name" />
        <RenderedDescription v-if="selected.description" :description="selected.description" />
        <PharmacyLabel v-if="selected.label" :label="selected.label" /> 
        <AdviceToClient v-if="selected.adviceToClient" :advice="selected.adviceToClient"/> 
        <SubTypes v-if="selected.children" :children="selected.children" />
    </section>
</template>

<script>

import InfoViewHeader from './InfoViewHeader.vue';
import RenderedDescription from './RenderedDescription.vue';
import PharmacyLabel from './PharmacyLabel.vue';
import AdviceToClient from './AdviceToClient.vue';
import SubTypes from './SubTypes.vue';


export default {
    name: 'InfoView',
    components: { InfoViewHeader, RenderedDescription, PharmacyLabel, AdviceToClient, SubTypes },
    props: ['selected']
}
</script>
