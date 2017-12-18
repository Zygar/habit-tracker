import inhalations from './inhalations/_data.js';
import nasalDrops from './nasal-drops/_data.js';
import nasalDouches from './nasal-douches/_data.js';

export default {
    name: "Nasal formulations",
    children: [
        inhalations,
        nasalDrops,
        nasalDouches
    ]
}
