// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Collodion (Collod.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "FLAMMABLE.",
                labelVerb: "Apply carefully to affected area and allow to dry",
                labelDose: "",
                labelMeta: "",
                labelFrequency: "3 times daily.",
                labelSecondMeta: "KEEP AWAY FROM FLAME."
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
