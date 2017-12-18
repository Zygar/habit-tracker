import Solid from './solid/_data.js'
import Liquid from './liquid/_data.js'

export default {
    name: "Oral",
    description: require('./desc.md'), 
    children: [
        Solid,
        Liquid
    ]
}
