import oral from './oral/_data.js'
import parenteral from './parenteral/_data.js'
import inhaled from './inhaled/_data.js'
import eyeFormulations from './eye-formulations/_data.js'

export default {
    name: "Dose forms",
    children: [
        oral,
        parenteral,
        inhaled,
        eyeFormulations
    ]
}
