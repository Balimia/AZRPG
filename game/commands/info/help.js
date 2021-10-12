const { information } = require('../../../assets/embeds');
const interface = require('../../utils/interface');

module.exports = {
	name: 'Help',
	alias: ['help', 'h', 'info'],
	description: '',
	args: true,
	usage: ['[command name]'],
	execute: (message, player = null, args = null) => {
		if (!args) return interface.display(message, information.help(message));

		return interface.display(message, information.info(message, args));
	},
};
