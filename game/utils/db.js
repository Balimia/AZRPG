const logger = require('./logger');
const helpers = require('./db.helpers');

const getPlayer = async (message) => {
	try {
		const player = await helpers.searchPlayer(message);
		return player ? [false, player] : [true, await helpers.createPlayer(message)];
	} catch (error) {
		logger.write(error?.stack);
	}
};

const getCooldown = async (message, name) => {
	try {
		const cooldown = await helpers.searchCooldown(message.author.id, name);
		if (!cooldown) await helpers.createCooldown(message.author.id, name);
		return cooldown || null;
	} catch (error) {
		logger.write(error?.stack);
	}
};

const executeCommand = async (message, player, args, command) => {
	try {
		if (isMissingArgs(command, args))
			return await sendMsg(message, embedMissingArg(message, command));
		if (command.name === 'Help') args = isHelpCommand(args);
		return await command.execute(message, player, args);
	} catch (error) {
		return console.error(error); // DEBUGGING ONLY
	}
};

module.exports = {
	getPlayer,
	getCooldown,
};
