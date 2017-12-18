import enteric from './enteric/_data.js'
import filmCoated from './film-coated/_data.js'
import sugarCoated from './sugar-coated/_data.js'

export default {
    name: "Coated tablets",
    description: require('./desc.md'),
    children: [
        enteric,
        filmCoated,
        sugarCoated
    ]
}
