// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Ear drops (Aurist.; Otic gtt.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "NOT TO BE TAKEN.",
                labelVerb: "Place",
                labelDose: "2 drops",
                labelMeta: "into the ear(s)",
                labelFrequency: "3 times daily.",
                labelSecondMeta: ""
            }
        ]
    },
}
