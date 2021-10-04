// const { sendMsg } = require('../../utils/helpers');
// const { isPlayerBusy } = require('../handlers/playerBusy');

module.exports = {
	name: 'help',
	alias: ['help', 'h', 'info'],
	desc: '',
	args: true,
	usage: ['<command name>'],
	help() {
		return 1;
		// const { usage } = require('../../assets/embeds');
		// return usage(this.name, this.alias, this.desc, this.usage);
	},
	execute: async (message, player, args) => {
		// if (isPlayerBusy(message)) return;
		// if (!args || !args.help) return await sendMsg(message, generalHelp(message));
		// return await sendMsg(message, args.help());
	},
};

/* 
TODO
General help message:
*/
const generalHelp = (message) => {
	return 'Display Help Embed.';
};
