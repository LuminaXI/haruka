const { MessageEmbed } = require('discord.js');
const Command = require('../Structures/command.js');

module.exports = new Command({
	name: 'sinfo',
	description: 'sends the server info.',
	permission: 'SEND_MESSAGES',
	async run(message, args, client) {
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Server Info')
			.setImage(message.guild.iconURL)
			.setDescription(`**${message.guild}**'s information`)
			.addField('Owner', `The owner of this server is <@${message.guild.ownerId}>`)
			.addField('Member Count', `This server has ${message.guild.memberCount} members`)
			.addField('Emoji Count', `This server has ${message.guild.emojis.cache.size} emojis`)
			.addField('Roles Count', `This server has ${message.guild.roles.cache.size} roles`)
			.setFooter('Haruka! | LuminaNet 2021', 'https://cdn.discordapp.com/attachments/863427833144803371/875654377451442176/animepfp3.jpg');
		message.channel.send({ embeds: [embed] });
	},
});