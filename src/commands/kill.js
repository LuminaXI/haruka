const Command = require('../Structures/command.js');
const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
	name: 'kill',
	description: 'kills the mentioned user.',
	permission: 'SEND_MESSAGES',
	async run(message, args, client) {
		async function getIMG() {
			const { image } = await API.sfw.kill();
			const member = message.mentions.members.first();
			if(message.mentions.members.size == 1) {
				const exampleEmbed = new MessageEmbed()
					.setColor('RANDOM')
					.setTitle('WASTED')
					.setDescription(`${member} got killed by ${message.author}.`)
					.setImage(image)
					.setFooter('Haruka! | LuminaNet 2021', 'https://cdn.discordapp.com/attachments/863427833144803371/875654377451442176/animepfp3.jpg')
					.setTimestamp();
				message.channel.send({ embeds: [exampleEmbed] });
			}
		}
		getIMG();
	},
});