import Tablets from './tablets/_data.js'
import Capsules from './capsules/_data.js'
import Lozenges from './lozenges/_data.js'
import Granules from './granules/_data.js'
import Powders from './powders/_data.js'

export default {
    name: "Solid oral dose forms",
    children: [
        Tablets,
        Capsules,
        Lozenges,
        Granules,
        Powders
    ]
}
