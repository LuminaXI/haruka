module.exports = {
	name: 'ping',
	description: 'sends the bot\'s ping!',
	usage: '!!ping',
	async execute(client, message, args) {
		message.channel.send(`🏓 | Latency is: **${Date.now() - message.createdTimestamp}ms.**`);
	},
};