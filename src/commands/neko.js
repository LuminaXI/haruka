const { MessageEmbed } = require('discord.js');
const Command = require('../Structures/command.js');
const HMfull = require('hmfull');

module.exports = new Command({
	name: 'neko',
	description: 'sends a catgirl picture.',
	permission: 'SEND_MESSAGES',
	async run(message, args, client) {
		const res = HMfull.HMtai.sfw.neko();
		const embed = new MessageEmbed()
			.setTitle('neko image:')
			.setImage(res.url)
			.setTimestamp()
			.setFooter('Haruka! | LuminaNet 2021', 'https://cdn.discordapp.com/attachments/863427833144803371/875654377451442176/animepfp3.jpg');
		message.channel.send({ embeds: [embed] });
	},
});