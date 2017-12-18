// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Film-coated tablets",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "",
                labelVerb: "Take",
                labelDose: "2 tablets",
                labelMeta: "",
                labelFrequency: "twice daily.",
                labelSecondMeta: "Swallow whole. Do not crush or chew."
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
