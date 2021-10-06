const { PREFIX } = require('../../config.json');
const collection = require('../utils/commands');
const { isPlayerSpam, isPlayerBusy, setSpam } = require('./sets');

const filterMessage = async (message) => {
	const [commandName, args] = sanitize(message);
	const command = findCommand(commandName);
	const reason = notifyError(message, command);

	if (reason) return console.log(`Send embed: ${reason}`); // TODO REPLACE BY EMBED

	setSpam(message);
	findDBPlayer(message, command, args);
};

const sanitize = (message) => {
	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
	const commandName = args.shift();
	return [commandName, args];
};

const findCommand = (name) => collection.find((cmd) => cmd.alias?.includes(name));

const notifyError = (message, command) => {
	if (!command) return 'help';
	if (isPlayerSpam(message)) return 'spam';
	if (command.busy && isPlayerBusy(message)) return 'busy';
	return null;
};

const findDBPlayer = (a, b, c) => console.log('searching DB'); // TODO FOLLOW THE THREAD

module.exports = filterMessage;
