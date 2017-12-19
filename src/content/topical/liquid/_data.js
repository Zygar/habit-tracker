import solutions from './solutions/_data.js';
import collodion from './collodion/_data.js';
import liniments from './liniments/_data.js';
import lotions from './lotions/_data.js';
import oils from './oils/_data.js';
import paints from './paints/_data.js';
import sprays from './sprays/_data.js';
import shampoos from './shampoos/_data.js';
import applications from './applications/_data.js';

export default {
    name: "Liquid topical dose forms",
    children: [
        solutions,
        collodion,
        liniments,
        shampoos,
        applications,
        lotions,
        oils,
        paints,
        sprays
    ]
}
