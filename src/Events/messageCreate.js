/* eslint-disable curly */
const Event = require('../Structures/Event.js');

module.exports = new Event('messageCreate', (client, message) => {
	if (!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} is not a vaild command!`);

	if (!['BOTH', 'TEXT'].includes(command.type))
		return message.channel.send(
			'That command is only avalable via slash command!',
		);

	const permission = message.member.permissions.has(command.permission, true);

	if (!permission) message.channel.send(`You do not have the permission ${command.permission} to run this command!`);

	command.run(message, args, client);
});