import meteredDose from './metered-dose/_data.js';
import dryPowder from './dry-powder/_data.js';
import nebules from './nebules/_data.js';

export default {
    name: "Inhaled dose forms",
    description: require('./desc.md'),
    children: [
        meteredDose,
        dryPowder,
        nebules
    ]
}
