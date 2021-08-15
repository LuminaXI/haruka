const Event = require('../Structures/Event.js');

module.exports = new Event('ready', (client) => {
	client.user.setActivity('!help for list of commands | haruka.re64.tk ', { type: 'WATCHING' });
});