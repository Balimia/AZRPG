// const Enemy = require('../../models/Enemy');
// const { sendMsg } = require('../../utils/helpers');
// const combat = require('../../utils/combat');

module.exports = {
	name: 'Training',
	alias: ['training', 'tr'],
	description: '',
	cooldown: 5000, //60000
	help() {
		// const { usage } = require('../../assets/embeds');
		// return usage(this.name, this.alias, this.description);
	},
	execute: async (message, player, args) => {
		// player.setCooldown('training');
		// const embedTraining = await training(message, player);
		// await player.save();
		// return await sendMsg(message, embedTraining);
	},
};

// const training = (message, player) => {
// 	const city = player.getCity();
// 	const enemy = new Enemy(city);
// 	return combat(message, player, enemy, 'training');
// };
