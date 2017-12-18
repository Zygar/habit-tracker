import eyeDrops from './eye-drops/_data.js';
import eyeOintments from './eye-ointments/_data.js';
import eyeLotions from './eye-lotions/_data.js';

export default {
    name: "Eye formulations",
    children: [
        eyeDrops,
        eyeOintments,
        eyeLotions
    ]
}
