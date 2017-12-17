export default {
    name: "Capsules (Cap)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "",
                labelVerb: "Take",
                labelDose: "1 capsule",
                labelMeta: "",
                labelFrequency: "twice daily",
                labelSecondMeta: ""
            }
        ]
    },
    advicetoClient: require('./advice.md')
}
