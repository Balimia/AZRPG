const client = require('./admin/services/client');
const db = require('./admin/services/db');

const { write } = require('./admin/logs/logger');
const { readdir } = require('fs/promises');

const { TOKEN } = require('./admin/config.json');
// const startDB = require('./zDevDump/startDB');

readdir('./events/')
	.then((files) =>
		files
			.filter((f) => f.endsWith('.js'))
			.forEach((f) => client.on(f.split('.')[0], require(`./events/${f}`)))
	)
	.catch((err) => write(`Error while handling events:\n${err?.stack}`));

db.init()
	// .then(() => startDB())
	.then(() => client.login(TOKEN))
	.catch((err) => write(`Error while starting up.\n${err?.stack}`));
