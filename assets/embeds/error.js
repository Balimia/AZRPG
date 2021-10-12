const Embed = require('../entities/Embed');
const { formatTime } = require('../../game/utils/formatting');
const assets = require('../assets.json');

const args = ({ author }) => new Embed({ author });

const busy = ({ author }) => new Embed({ author, title: `Please finish what you are doing.` });

const cooldown = ({ author }, remaining) =>
	new Embed({ author, title: "'s cooldown" }).setDescription(
		`Please wait another **${formatTime(remaining)}**.\n\n${
			assets.icons.arrow
		}\`dh cd\` to see all your cooldowns.`
	);

const spam = ({ author }) =>
	new Embed({ author, title: "'s spam notice" }).addField(
		'You are going too fast!',
		'Please wait a second before using another command.'
	);

module.exports = { args, busy, cooldown, spam };
