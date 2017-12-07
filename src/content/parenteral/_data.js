import ampoules from './ampoules/_data.js'
import disposables from './disposables/_data.js'
import implants from './implants/_data.js'
import prefilled from './prefilled/_data.js'
import autoinjectors from './autoinjectors/_data.js'
import cartridges from './cartridges/_data.js'

export default {
    name: "Parenteral",
    description: require('./desc.md'), 
    children: [
        ampoules, 
        disposables,
        implants,
        prefilled,
        autoinjectors,
        cartridges
    ]
}
