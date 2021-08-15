/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/** @format */

const Discord = require('discord.js');

const fs = require('fs');

const Command = require('./command.js');

const Event = require('./Event.js');

const config = require('../Data/config.json');

const intents = new Discord.Intents(32767);

class Client extends Discord.Client {
	constructor() {
		super({ intents, allowedMentions: { repliedUser: false } });

		/**
         * @type {Discord.Collection<string, Command>}
         */
		this.commands = new Discord.Collection();

		this.prefix = config.prefix;
	}

	start(token) {
		// command Handler
		const commandFiles = fs.readdirSync('./src/commands')
			.filter(file => file.endsWith('.js'));
			/**
			 * @type {Command[]}
			 */

		const commands = commandFiles.map(file => require(`../commands/${file}`));

		commands.forEach(cmd => {
			console.log(`🧰 >>> Command ${cmd.name} loaded.`);
			this.commands.set(cmd.name, cmd);
		});

		const slashCommands = commands
			.filter(cmd => ['BOTH', 'SLASH'].includes(cmd.type))
			.map(cmd => ({
				name: cmd.name.toLowerCase(),
				description: cmd.description,
				Permissions: [],
				options: cmd.slashCommandOptions,
				defaultPermission: true,
			}));


		// .forEach(file => {
		//	/**
     	// 	 * @type {Command}
     	// 	 */
		// 	const command = require(`../commands/${file}`);
		// 	console.log(`🟢 >>> Command ${command.name} loaded.`);
		// 	this.commands.set(command.name, command);
		// });

		// Event handler

		this.removeAllListeners();
		this.on('ready', async () => {
			const cmds = await this.application.commands.set(slashCommands);
			cmds.forEach(cmd => console.log(`✅ >>> Slash command ${cmd.name} registered.`));
		});

		fs.readdirSync('./src/Events')
			.filter(file => file.endsWith('.js'))
			.forEach(file => {
				/**
                 * @type {Event}
                 */
				const event = require(`../Events/${file}`);
				console.log(`🟢 >>> Event ${event.event} loaded.`);
				this.on(event.event, event.run.bind(null, this));
			});

		this.login(token);
	}
}

module.exports = Client;