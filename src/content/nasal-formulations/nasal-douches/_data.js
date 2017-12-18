// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Nasal douches",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        // labelSampleInstructions: [
        //     {
        //         labelWarning: "",
        //         labelVerb: "",
        //         labelDose: "",
        //         labelMeta: "",
        //         labelFrequency: "",
        //         labelSecondMeta: ""
        //     }
        // ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
