export default {
    name: "Eye drops (Guttae; Gtt.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "NOT TO BE TAKEN.",
                labelVerb: "Instil",
                labelDose: "2 drops",
                labelMeta: "in eye",
                labelFrequency: "3 times daily",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md'),
}
