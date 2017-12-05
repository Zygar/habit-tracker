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
                            description: "Tablets contain medicine and other additives that are compressed to form suitable shapes.",
                            children: [
                                {
                                    name: "Uncoated tablets",
                                    description: "Uncoated tablets are intended to break up readily when swallowed and to release the medicine. They are usually used for medicines required to produce a systemic effect because their rapid break up helps the medicine to dissolve and be absorbed.",
                                    label: {
                                        labelDescription: "",
                                        labelVerb: "Take",
                                        labelDose: "2 tablets",
                                        labelFrequency: "twice daily"
                                    },
                                    adviceToClient: "Uncoated tablets do not have to be administered in any particular way. These tablets may be halved with a tablet cutter if the client has difficulty swallowing them. Talk through any relevant CALs or References."
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
                                    adviceToClient: "Clients should be reminded that these tablets do not work properly when they are swallowed; they need to be placed under the tongue for the medicine to be absorbed. These tablets should be protected from moisture and prolonged exposure to light. Clients may also require specific instruction on how to remove the tablet from the blister pack (for example, pull the foil back from where the seal is lifted)."
                                },
                            ]
                        },
                        {
                            name: "Capsules (Cap.)",
                            description: "Capsules have a gelatin-based case enclosing either an oily liquid or a dry powder or granules. A hard casing is used for dry fillings and a soft casing is used for liquids. These latter formulations are called soft gels.",
                            label: {
                                labelDescription: "",
                                labelVerb: "Take",
                                labelDose: "2 tablets",
                                labelFrequency: "twice daily"
                            },
                            adviceToClient: "Clients should be reminded that these tablets do not work properly when they are swallowed; they need to be placed under the tongue for the medicine to be absorbed. These tablets should be protected from moisture and prolonged exposure to light. Clients may also require specific instruction on how to remove the tablet from the blister pack (for example, pull the foil back from where the seal is lifted)."
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
