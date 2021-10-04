const { Collection } = require('discord.js');
const fs = require('fs');

const directory = fs.readdirSync(`${__dirname}/../commands`);
const commands = new Collection();

for (const folder of directory) {
	const files = fs
		.readdirSync(`${__dirname}/../commands/${folder}`)
		.filter((file) => file.endsWith('.js'));
	for (const file of files) {
		const command = require(`${__dirname}/../commands/${folder}/${file}`);
		commands.set(command.name, command);
	}
}

module.exports = commands;
