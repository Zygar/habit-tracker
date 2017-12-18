import suppositories from './suppositories/_data.js';
import enemas from './enemas/_data.js';
import pessaries from './pessaries/_data.js';
import vaginalCream from './vaginal-cream/_data.js';

export default {
    name: "Rectal and vaginal dose forms",
    children: [
        suppositories,
        enemas,
        pessaries,
        vaginalCream
    ]
}
