// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';
import solutions from './solutions/_data.js';
import suspensions from './suspensions/_data.js';
import mixtures from './mixtures/_data.js';
import drops from './drops/_data.js';
import powders from './powders/_data.js';
import mouthwashGargle from './mouthwash-gargle/_data.js';
import sprays from './sprays/_data.js';


export default {
    name: "Liquid oral dose forms",
    children: [
        solutions,
        suspensions,
        mixtures,
        drops,
        powders,
        mouthwashGargle,
        sprays
    ]
}
