export default {
    name: "Vaginal creams and gels",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "CAUTION: NOT TO BE TAKEN.",
                labelVerb: "Insert the contents of",
                labelDose: "1 applicator",
                labelMeta: "into the vagina",
                labelFrequency: "ONCE daily",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md'),
}
