// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Solutions and liquids (Soln. and Liq.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "",
                labelVerb: "Apply to affected area",
                labelDose: "",
                labelMeta: "",
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
