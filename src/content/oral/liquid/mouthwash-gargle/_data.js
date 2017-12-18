// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Mouthwashes (Collut.) and gargles (Garg.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "NOT TO BE SWALLOWED. ",
                labelVerb: "Add",
                labelDose: "5ml",
                labelMeta: "to a glass of warm water and gargle",
                labelFrequency: "3 times daily. ",
                labelSecondMeta: "Spit out. Do not swallow."
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
