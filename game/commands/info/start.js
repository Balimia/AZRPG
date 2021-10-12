const { information } = require('../../../assets/embeds');
const interface = require('../../utils/interface');
const help = require('./help');

module.exports = {
	name: 'Start',
	alias: ['start', 's'],
	description: '',
	execute: (message, player = null, args = null) => {
		if (!player) return interface.display(message, information.start(message));

		return help.execute(message);
	},
};
