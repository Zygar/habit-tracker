// Import subtypes here and reference them in children

export default {
    name: "Ampoules, vials for reconstitution, multi-dose vials",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelVerb: "Inject",
        labelDose: "xxxx (the dose in mg, grams or units) ",
        labelFrequency: "intravenously (or Intramuscularly or subcutaneously) every xxxxx hours (or weekly, daily, three times daily) "
    },
    adviceToClient: require('./advice.md'),
    // children: []
}
