// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Pre-filled syringes",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelVerb: "Inject",
        labelDose: "1ml (100mg) subcutaneously",
        labelFrequency: "once daily as directed"
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
