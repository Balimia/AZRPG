const { PREFIX } = require('../../config.json');
const commands = require('./var/commands');
const busy = require('./var/busy');
const spam = require('./var/spam');
const db = require('./db');

const invalid = (message) => {
	if (message.author.bot || message.channel.type !== 'GUILD_TEXT') return true;
	message.content = message.content.toLowerCase();
	if (!message.content.startsWith(PREFIX)) return true;
	return false;
};

const handle = async (message) => {
	const { command, args, failure } = organize(message);
	if (failure) return { failure };

	const [fresh, player] = await db.getPlayer(message);
	if (fresh) return { fresh, player };

	if (command.args) {
		if (command.name === 'Help') {
			const target = commands.find((c) => c.alias.includes(args[0]));
			if (target) return { target };
			return { failure: 'help' };
		}

		if (command.usage.length !== args.length) return { failure: 'args' };
	}

	if (command.cooldown) {
		const cooldown = await db.getCooldown(message, command.name);

		if (cooldown) {
			const date = new Date();
			const delta = date - cooldown.Cooldown;

			if (delta < command.cooldown) {
				const remaining = command.cooldown - Math.floor(delta);
				return { cooldown, delta, remaining };
			}
		}
	}
	return { command, player, args };
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

module.exports = { invalid, handle };
