const Embed = require('./Embed');
const { formatTime } = require('../../game/utils/format');
const assets = require('../assets.json');

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

module.exports = { busy, cooldown, spam };