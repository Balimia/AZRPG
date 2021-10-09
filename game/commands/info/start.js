// const help = require('./help');
// const { sendMsg } = require('../../utils/helpers');

module.exports = {
	name: 'Start',
	alias: ['start', 's'],
	description: '',
	help() {
		// const { usage } = require('../../assets/embeds');
		// return usage(this.name, this.alias, this.description);
	},
	execute: (message, player, args = []) => {
		console.log('start');
		// if (player) return await help.execute(message);
		// const { start } = require('../../assets/embeds');
		// return await sendMsg(message, start(message));
	},
};
