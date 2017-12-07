<!-- Typically seen inside of App -->
<template>
    <section id="InfoView" class="component">
        <InfoViewHeader :name="selected.name" />
        <RenderedDescription 
            v-if="selected.description" 
            :description="selected.description" />
        <PharmacyLabel 
            v-if="selected.label" 
            :label="selected.label" /> 
        <AdviceToClient 
            v-if="selected.adviceToClient" 
            :advice="selected.adviceToClient" /> 
        <ul class="hasItems">
            <item :model="selected" />  
        </ul>
        
    </section>
</template>

<script>
import InfoViewHeader from './InfoViewHeader.vue';
import RenderedDescription from './RenderedDescription.vue';
import PharmacyLabel from './PharmacyLabel.vue';
import AdviceToClient from './AdviceToClient.vue';
import Item from './Item.vue';


export default {
    name: 'InfoView',
    components: { InfoViewHeader, RenderedDescription, PharmacyLabel, AdviceToClient, Item },
    props: ['selected']
}
</script>
