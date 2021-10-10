const { interface, logger, commands, filter } = require('../utils');

module.exports = async (message) => {
	if (filter.invalid(message)) return;

	try {
		const filter = await filter.handle(message);
		if (filter.failure) return interface.notify(message, filter.failure);
		if (filter.fresh) return commands.get('Start').execute(message, filter.player);
		if (filter.target) return console.log('Help with param: ', target); // TODO
		if (filter.cooldown) return interface.notify(message, filter.failure, remaining); // can add command if necessary
		if (filter.command) return console.log(filter);
		// return await command.execute(message, player, args);
	} catch (error) {
		console.log('error from main thread');
		logger.write(error?.stack);
	}
};
