import creams from './creams/_data.js';
import ointments from './ointments/_data.js';
import gels from './gels/_data.js';
import pastes from './pastes/_data.js';

export default {
    name: "Semi-solid topical dose forms",
    children: [
        creams,
        ointments,
        gels,
        pastes
    ]
}
