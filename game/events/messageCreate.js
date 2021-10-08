const { invalid, filter, notify } = require('../validation/filter');
const { commands } = require('../validation/var');
const { playerData } = require('../utils');

module.exports = async (message) => {
	if (invalid(message)) return;

	const { command, args, failure } = filter(message);
	if (failure) return notify(failure);

	const [status, player] = await playerData.getPlayer(message);
	if (status === 1) return commands.get('help').execute(message, player); // start

	// if (status === 0) return; // existing player
};
