const Command = require('../Structures/command.js');
const { MessageEmbed } = require('discord.js');
module.exports = new Command({
	name: 'help',
	description: 'help command',
	permission: 'SEND_MESSAGES',
	async run(message, args, client) {
		const exampleEmbed = new MessageEmbed()
			.setColor('BLURPLE')
			.setTitle('Haruka\'s commands')
			.addFields(
				{ name: 'ping', value: 'sends the bot\'s ping.' },
				{ name: 'waifu', value: 'sends a waifu.' },
				{ name: 'kill', value: 'kills the mentioned user.' },
				{ name: 'avatar', value: 'sends the mentioned user avatar.' },
				{ name: 'neko', value: 'sends a catgirl picture.' },
				{ name: 'slap', value: 'slaps the mentioned user.' },
				{ name: 'sinfo', value: 'sends the server info.' },
			)
			.setTimestamp()
			.setFooter('Haruka! | LuminaNet 2021', 'https://cdn.discordapp.com/attachments/863427833144803371/875654377451442176/animepfp3.jpg');

		message.channel.send({ embeds: [exampleEmbed] });
	},
});