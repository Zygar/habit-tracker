import syrups from './syrups/_data.js';
import linctuses from './linctuses/_data.js';
import elixirs from './elixirs/_data.js';

export default {
    name: "Solutions (Liq.)",
    description: require('./desc.md'),
    children: [
        elixirs,
        linctuses,
        syrups
    ]
}
