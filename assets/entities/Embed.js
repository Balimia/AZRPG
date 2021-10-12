const { MessageEmbed } = require('discord.js');
const settings = require('../assets.json');

class Embed extends MessageEmbed {
	constructor(data) {
		super();
		this.color = settings.color;
		if (data) {
			this.author = {
				name: `${data.author?.username || ''}${data.title || ''}`,
				icon_url: data.author?.avatarURL({ dynamic: true }) || settings.art.logo,
				proxy_icon_url: data.author?.defaultAvatarURL || settings.art.logo,
			};
		}
	}
}

module.exports = Embed;
