const { interface, logger, commands, filter, db } = require('../utils');

module.exports = async (message) => {
	if (filter.invalid(message)) return;

	try {
		const f = await filter.handle(message);
		if (f.failure) return await interface.notify(message, f.failure);
		if (f.cooldown) return await interface.notify(message, 'cooldown', f.remaining); // can add command if necessary
		if (f.fresh) return await commands.get('Start').execute(message);
		if (f.target) return await commands.get('Help').execute(message, null, f.target);
		if (f.command) {
			if (f.command.cooldown) await db.setCooldown(message, f.command.name);
			return await f.command.execute(message, f.player, f.args);
		}
	} catch (error) {
		logger.write(error?.stack);
	}
};
