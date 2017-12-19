// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Powders (Pulv.) or dusting powders (Consper.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "FOR EXTERNAL USE ONLY.",
                labelVerb: "Dust on affected areas",
                labelDose: "",
                labelMeta: "",
                labelFrequency: "3 times daily",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md'),
}
