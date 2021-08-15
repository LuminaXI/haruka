const Event = require('../Structures/Event.js');

module.exports = new Event('ready', (client) => {
	console.log(`🤖 >>> ${client.user.tag} Online!`);
});