const Command = require('../Structures/command.js');
const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
	name: 'slap',
	description: 'slaps the mentioned member.',
	permission: 'SEND_MESSAGES',
	async run(message, args, client) {
		async function getIMG() {
			const { image } = await API.sfw.slap();
			const member = message.mentions.members.first();
			if(message.mentions.members.size == 1) {
				const exampleEmbed = new MessageEmbed()
					.setColor('RANDOM')
					.setTitle('VIOLATED')
					.setDescription(`${member} got slapped by ${message.author}.`)
					.setImage(image)
					.setFooter('Haruka! | LuminaNet 2021', 'https://cdn.discordapp.com/attachments/863427833144803371/875654377451442176/animepfp3.jpg')
					.setTimestamp();
				message.channel.send({ embeds: [exampleEmbed] });
			}
		}
		getIMG();
	},
});