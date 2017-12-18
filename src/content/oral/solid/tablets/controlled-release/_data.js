import delayedRelease from './delayed-release/_data.js'
import repeatAction from './repeat-action/_data.js'
import sustainedRelease from './sustained-release/_data.js'

export default {
    name: "Controlled/modified release tablets",
    description: require('./desc.md'),
    children: [
        delayedRelease,
        repeatAction,
        sustainedRelease
    ]
}
