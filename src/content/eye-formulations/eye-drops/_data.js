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
                labelMeta: "to left eye",
                labelFrequency: "3 times daily.",
                labelSecondMeta: "Discard 30 days after opening."
            }
        ]
    },
    adviceToClient: require('./advice.md'),
}
