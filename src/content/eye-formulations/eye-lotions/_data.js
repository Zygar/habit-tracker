export default {
    name: "Eye lotions (Collyr.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "NOT TO BE TAKEN.",
                labelVerb: "",
                labelDose: "Fill eye bath with solution",
                labelMeta: "and use to wash eye",
                labelFrequency: "TWICE daily.",
                labelSecondMeta: "Discard solution from bath after each use"
            }
        ]
    },
    adviceToClient: require('./advice.md')
}
