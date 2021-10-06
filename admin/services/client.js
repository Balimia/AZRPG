const { Client } = require('discord.js');

const client = new Client({
	presence: {
		status: 'online',
		activities: [
			{
				name: 'AZ RPG',
				type: 'PLAYING',
			},
		],
	},
	intents: [
		'GUILDS',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS',
		'DIRECT_MESSAGES',
		'DIRECT_MESSAGE_REACTIONS',
	],
});

module.exports = client;
