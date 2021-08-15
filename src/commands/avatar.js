/* eslint-disable no-undef */
const Command = require('../Structures/command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
	name: 'avatar',
	description: 'Sends the mentioned user\'s avatar.',
	permission: 'SEND_MESSAGES',
	async run(message, args, client) {
		const user = message.mentions.users.first() || message.author;
		const avatar = new MessageEmbed()
			.setImage(user.avatarURL())
			.setTitle(`${user.username}'s avatar.`)
			.setTimestamp()
			.setFooter('Haruka! | LuminaNet 2021', 'https://cdn.discordapp.com/attachments/863427833144803371/875654377451442176/animepfp3.jpg');
		message.channel.send({ embeds: [avatar] });
	},
});