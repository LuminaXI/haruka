module.exports = {
    name: 'support',
    description: 'sends the bot\'s support server link!',
    usage: '!!support',
    async execute(client, message, args) {
        message.channel.send(`hey! ${message.author} | The support server link will be added later since this bot is still in beta...`);
    },
};