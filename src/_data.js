function importMarkdown(name, type) {
    return require('./content/'+ type +'-'+ name +'.md');
};

const sourceData = {
    name: "Dose Forms",
    description: "This is the description of the activity that you will see if you click on the central node.",
    children: [
        {
            name: "Oral",
            description: "Oral dose forms are taken by mouth, and are absorbed through the mucosal lining of the gastrointestinal tract.",
            children: [
                {
                    name: "Solid Oral Dose Forms",
                    children: [
                        {
                            name: "Tablets (Tab.)",
                            description: importMarkdown('tablets', 'desc'),
                            children: [
                                {
                                    name: "Uncoated tablets",
                                    description: importMarkdown('uncoated-tablets', 'desc'),
                                    label: {
                                        labelDescription: "",
                                        labelVerb: "Take",
                                        labelDose: "2 tablets",
                                        labelFrequency: "twice daily"
                                    },
                                    adviceToClient: importMarkdown('uncoated-tablets', 'advice')
                                },
                                {
                                    name: "Sublingual tablets",
                                    description: "Sublingual tablets are dissolved under the tongue. The skin under the tongue is easily penetrated so medicines are rapidly absorbed. The medicine is absorbed through the oral mucosa (lining of the mouth) to give rapid systemic effects.",
                                    label: {
                                        labelDescription: "",
                                        labelVerb: "Take",
                                        labelDose: "2 tablets",
                                        labelFrequency: "twice daily"
                                    },
                                    adviceToClient: importMarkdown('sublingual-tablets', 'advice')
                                },
                            ]
                        },
                        {
                            name: "Capsules (Cap.)",
                            description: importMarkdown('capsules', 'desc'),
                            label: {
                                labelDescription: "",
                                labelVerb: "Take",
                                labelDose: "2 tablets",
                                labelFrequency: "twice daily"
                            },
                            adviceToClient: importMarkdown('capsules', 'advice')
                        }
                    ]
                },
                {
                    name: "Liquid Oral Dose Forms",
                    children: [
                        {
                            name: "Solutions",
                            description: "Solutions are preparations of one or more medicines dissolved in a solvent, usually water, to produce a clear liquid. They can have systemic or local effects.",
                            children: [
                                {
                                    name: "Syrups (Syr.)",
                                    description: "Syrups are concentrated aqueous solutions of sucrose or other sugars to which medicines and flavouring agents may be added.",
                                    label: {
                                        labelDescription: "",
                                        labelVerb: "Take",
                                        labelDose: "2 tablets",
                                        labelFrequency: "twice daily"
                                    },
                                    adviceToClient: ""
                                },
                                {
                                    name: "Linctuses (Linct.)",
                                    description: "A linctus is a thick, syrupy solution containing medicines to treat coughs and often aromatic substances to soothe the throat.",
                                    label: {
                                        labelDescription: "",
                                        labelVerb: "Take",
                                        labelDose: "2 tablets",
                                        labelFrequency: "twice daily"
                                    },
                                    adviceToClient: ""
                                }
                            ]
                        },
                        {
                            name: "Suspensions",
                            description: "Suspensions are preparations of insoluble powders suspended in liquid. The undissolved particles may float or settle down to the bottom of the container. They need shaking to evenly disperse the powders before use. Examples include paracetamol suspension and some antacid preparations. Some suspensions are prepared at the time of dispensing, for example an antibiotic suspension.",
                            label: {
                                labelDescription: "",
                                labelVerb: "Take",
                                labelDose: "2 tablets",
                                labelFrequency: "twice daily"
                            },
                            adviceToClient: ""
                        }
                    ]
                }
            ]
        },
        {
            name: "Parenteral"
        }
    ]
}

export default sourceData;
