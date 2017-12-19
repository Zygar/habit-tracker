// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Sprays or aerosols (Spr. or Aeros.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "CAUTION: NOT TO BE TAKEN",
                labelVerb: "Spray onto affected area",
                labelDose: "",
                labelMeta: "",
                labelFrequency: "ONCE daily.",
                labelSecondMeta: "Spray in short bursts."
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
