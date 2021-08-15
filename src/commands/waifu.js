const Command = require('../Structures/command.js');
const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
	name: 'waifu',
	description: 'Sends a waifu image.',
	permission: 'SEND_MESSAGES',
	async run(message, args, client) {
		async function getIMG() {
			const { image } = await API.sfw.waifu();
			const exampleEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('Your waifu')
				.setDescription(`requested by: ${message.author.username}`)
				.setImage(image)
				.setTimestamp()
				.setFooter('Haruka! | LuminaNet 2021', 'https://cdn.discordapp.com/attachments/863427833144803371/875654377451442176/animepfp3.jpg');
			message.channel.send({ embeds: [exampleEmbed] });
		}
		getIMG();
	},
});