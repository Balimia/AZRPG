const { PREFIX } = require('../../config.json');
const commands = require('./var/commands');
const busy = require('./var/busy');
const spam = require('./var/spam');

const invalid = (message) => {
	if (message.author.bot || message.channel.type !== 'GUILD_TEXT') return true;
	message.content = message.content.toLowerCase();
	if (!message.content.startsWith(PREFIX)) return true;
	return false;
};

const organize = (message) => {
	const [command, args] = sanitize(message);
	const failure = analyze(message, command);
	spam.setPlayer(message);
	return { command, args, failure };
};

const sanitize = (message) => {
	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
	const commandName = args.shift();
	const command = commands.find((cmd) => cmd.alias?.includes(commandName));
	return [command, args];
};

const analyze = (message, command) => {
	if (spam.getPlayer(message)) return 'spam';
	if (!command) return 'help';
	if (command.busy && busy.getPlayer(message)) return 'busy';
	return null;
};

module.exports = { invalid, organize };