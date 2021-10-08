const { client, db } = require('./admin');
const { readdir } = require('fs/promises');
const { TOKEN } = require('./config.json');
const { logger } = require('./game/utils');

readdir('./game/events/')
	.then((files) =>
		files
			.filter((f) => f.endsWith('.js'))
			.forEach((f) => client.on(f.split('.')[0], require(`./game/events/${f}`)))
	)
	.catch((err) => logger.write(`Error while handling events:\n${err?.stack}`));

// const startDB = require('./zDevDump/startDB');
db.init()
	// .then(() => startDB())
	.then(() => client.login(TOKEN))
	.catch((err) => logger.write(`Error while starting up.\n${err?.stack}`));
