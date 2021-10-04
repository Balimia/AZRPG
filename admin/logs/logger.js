const { appendFile } = require('fs');

const write = (log) => {
	const date = new Date();
	const formattedLog = `# ${date.toLocaleDateString()} - ${date.toLocaleTimeString()}\n${log}\n`;
	appendFile(`${__dirname}/logs.md`, formattedLog, (err) => {
		if (err) throw err;
	});
};

const error = (err, player, reason = 'something') =>
	write(`An error occured on ${reason} for ${player.identity.id}:\n${err.stack}`);

module.exports = { error, write };
