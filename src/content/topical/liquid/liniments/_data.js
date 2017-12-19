// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Liniments (Lin.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "CAUTION: NOT TO BE TAKEN.",
                labelVerb: "Rub into affected area",
                labelDose: "",
                labelMeta: "",
                labelFrequency: "TWICE daily.",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
