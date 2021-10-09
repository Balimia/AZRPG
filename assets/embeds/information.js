const Embed = require('./Embed');
const assets = require('../assets.json');

const help = (message) => new Embed().setDescription('welp');

const start = (message) =>
	new Embed({ title: assets.title, logo: true })
		.setDescription(
			`Welcome ${message.author.username}\n\nYour adventure begins in **Asmeria**, a city that was destroyed by elder dragons during the great war.\n\nYour goal is to travel through the **Kingdom of Az**. Each of its cities will be increasingly difficult to attain, but you will stop at nothing to get your revenge...\n\n**Start your journey with one of these commands:**\n${assets.icons.arrow}\`dh help\` - view the list of commands.\n${assets.icons.arrow}\`dh cd\` - look at your cooldowns.\n\n**__Links__:**\n[**Discord**](${assets.url.discord})⠀|⠀[**Wiki**](https://www.google.com)⠀|⠀[**Patreon**](https://www.google.com)`
		)
		.setImage(assets.art.start)
		.setFooter(assets.title, assets.art.logo)
		.setTimestamp(new Date().toISOString());

module.exports = { help, start };
