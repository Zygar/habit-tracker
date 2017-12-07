// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Implants",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        // labelVerb: "Take",
        // labelDose: "2 tablets",
        // labelFrequency: "twice daily"
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
