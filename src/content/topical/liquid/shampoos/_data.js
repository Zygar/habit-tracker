// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Shampoos (Shamp.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "CAUTION: NOT TO BE TAKEN.",
                labelVerb: "Use",
                labelDose: "10ml",
                labelMeta: "as a shampoo",
                labelFrequency: "3 times weekly",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
