// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Inhalations (Vap.; Vapour)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "CAUTION: NOT TO BE TAKEN.",
                labelVerb: "Add",
                labelDose: "5ml",
                labelMeta: "to hot but not boiling water and inhale vapour",
                labelFrequency: "3 times daily",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
