module.exports = {
	name: 'say',
	description: 'says the message that the user included.',
	usage: '!!say (message here).',
	async execute(client, message, args) {

		const sayMessage = args.join(' ');
		message.delete().catch(O_o => {});

		message.channel.send(`${sayMessage}`);
	},
};
