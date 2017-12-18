import buccal from './buccal/_data.js'
import chewableTablets from './chewable-tablets/_data.js'
import coated from './coated/_data.js'
import controlledRelease from './controlled-release/_data.js'
import effervescent from './effervescent/_data.js'
import sublingual from './sublingual/_data.js'
import uncoated from './uncoated/_data.js'
import wafersDispersibles from './wafers-dispersibles/_data.js'

export default {
    name: "Tablets",
    description: require('./desc.md'),
    children: [
        buccal,
        chewableTablets,
        coated,
        controlledRelease,
        effervescent,
        sublingual,
        uncoated,
        wafersDispersibles
    ]
}
