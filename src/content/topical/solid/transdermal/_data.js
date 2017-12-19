// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Transdermal delivery systems",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "",
                labelVerb: "Apply",
                labelDose: "1 patch",
                labelMeta: "to clean, dry non-hairy skin",
                labelFrequency: "ONCE daily",
                labelSecondMeta: "Remove the patch after x hours. Alter application site with each new patch."
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}
