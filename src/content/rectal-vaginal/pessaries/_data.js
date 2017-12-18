export default {
    name: "Pessaries (Pess.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "FOR VAGINAL USE ONLY. ",
                labelVerb: "Insert",
                labelDose: "1 pessary",
                labelMeta: "into the vagina",
                labelFrequency: "TWICE daily",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md'),
}
