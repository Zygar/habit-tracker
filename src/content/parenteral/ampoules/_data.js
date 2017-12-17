// Import subtypes here and reference them in children

export default {
    name: "Ampoules, vials for reconstitution, multi-dose vials",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "",
                labelVerb: "Inject",
                labelDose: "1 unit",
                labelMeta: "intravenously",
                labelFrequency: "every 4 hours",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: []
}
