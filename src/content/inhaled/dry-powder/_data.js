// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Dry powder (breath-activated) inhalers",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "",
                labelVerb: "Inhale",
                labelDose: "1 dose",
                labelMeta: "",
                labelFrequency: "twice daily",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md')
}
