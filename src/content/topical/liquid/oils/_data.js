// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Oils",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "CAUTION: NOT TO BE TAKEN.",
                labelVerb: "Add",
                labelDose: "10ml",
                labelMeta: "to bathwater and bathe or soak",
                labelFrequency: "once daily",
                labelSecondMeta: "as necessary"
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
