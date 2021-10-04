const { PREFIX } = require('../admin/config.json');
const filter = require('../game/utils/filterMessage');

module.exports = (message) => {
	if (valid(message)) return filter(message);
};

const valid = (message) => {
	if (message.author.bot || message.channel.type !== 'GUILD_TEXT') return false;
	message.content = message.content.toLowerCase();
	if (!message.content.startsWith(PREFIX)) return false;
	return true;
};
