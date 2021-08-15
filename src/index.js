console.clear();
const Client = require('./Structures/client.js');
const config = require('./Data/config.json');
const client = new Client();
client.start(config.token);