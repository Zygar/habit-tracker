import oral from './oral/_data.js'
import parenteral from './parenteral/_data.js'
import inhaled from './inhaled/_data.js'
import eyeFormulations from './eye-formulations/_data.js'
import earFormulations from './ear-formulations/_data.js'
import nasalFormulations from './nasal-formulations/_data.js'
import rectalVaginal from './rectal-vaginal/_data.js'
import topical from './topical/_data.js'

export default {
    name: "Dose forms",
    children: [
        oral,
        parenteral,
        inhaled,
        eyeFormulations,
        earFormulations,
        nasalFormulations,
        rectalVaginal,
        topical
    ]
}
