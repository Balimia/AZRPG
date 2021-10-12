const Embed = require('../entities/Embed');
const assets = require('../assets.json');
const { PREFIX } = require('../../config.json');

const help = (message) => new Embed().setDescription('welp');

const info = (message, target) =>
	new Embed()
		.setAuthor(`${target.name} command`, assets.art.logo)
		.setDescription(target.description)
		.addFields([
			{ name: 'USAGE', value: usages(target.name, target.alias) },
			{ name: 'ALIASES', value: enumerateAliases(target.alias) },
		]);

const start = (message) =>
	new Embed()
		.setAuthor(assets.title, assets.art.logo)
		.setDescription(
			`Welcome ${message.author.username}\n
			Your adventure begins in **Asmeria**, a city that was destroyed by elder dragons during the great war.\n
			Your goal is to travel through the **Kingdom of Az**. Each of its cities will be increasingly difficult to attain, but you will stop at nothing to get your revenge...\n
			**Start your journey with one of these commands:**
			${assets.icons.arrow}\`dh help\` - view the list of commands.
			${assets.icons.arrow}\`dh cd\` - look at your cooldowns.\n
			**__Links__:**\n[**Discord**](${assets.url.discord}) | [**Wiki**](https://www.google.com) | [**Patreon**](https://www.google.com)`
		)
		.setImage(assets.art.start)
		.setFooter(assets.title, assets.art.logo)
		.setTimestamp(Date.now());

module.exports = {
	help,
	start,
	info,
};

const usages = (name, usage) => {
	if (!Array.isArray(usage)) return `\`${PREFIX}${name}\``;
	return `\`${PREFIX}${name} ${usage.join(' ')}\``;
};

const enumerateAliases = (alias) => {
	if (!Array.isArray(alias)) return;
	return `\`${alias.join('`, `')}\``;
};
