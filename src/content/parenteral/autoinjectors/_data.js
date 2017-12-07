// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Pre-filled pens and auto-injectors",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelVerb: "Inject the contents of",
        labelDose: "ONE syringe",
        labelFrequency: "ONCE a FORTNIGHT as directed"
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
