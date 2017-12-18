// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Suppositories (Supp.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "FOR RECTAL USE ONLY.",
                labelVerb: "Insert",
                labelDose: "ONE suppository",
                labelMeta: "into the rectum",
                labelFrequency: "TWICE daily",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
