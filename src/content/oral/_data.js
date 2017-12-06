import Tablets from './tablets/_data.js'
import Capsules from './capsules/_data.js'

export default {
    name: "Oral",
    description: require('./desc.md'), 
    children: [
        Tablets,
        Capsules
    ]
}
