const { write } = require('./logger');
const embeds = require('../../assets/embeds');

const display = async ({ channel }, data) => {
	try {
		return await channel.send({ embeds: [data] });
	} catch (error) {
		return write(error?.stack);
	}
};

const notify = async (message, failure, data = null) => {
	try {
		switch (failure) {
			case 'spam':
				await display(message, embeds.error.spam(message));
				break;
			case 'help':
				await display(message, embeds.information.help(message)); // TODO
				break;
			case 'busy':
				await display(message, embeds.error.busy(message)); // TODO
				break;
			case 'cooldown':
				await display(message, embeds.error.cooldown(message, data));
			default:
				// TODO
				break;
		}
	} catch (error) {
		return write(error?.stack);
	}
};

module.exports = {
	display,
	notify,
};
