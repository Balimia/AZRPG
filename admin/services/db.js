const waitPort = require('wait-port');
const { createPool } = require('mysql2');

const {
	PRODUCTION,
	MYSQL_DATABASE: DB,
	MYSQL_HOST: HOST,
	MYSQL_PORT: PORT,
	MYSQL_USER: USER,
	MYSQL_PASSWORD: PASSWORD,
} = require('../config.json');

let pool;

async function init() {
	const host = PRODUCTION ? HOST : 'localhost';
	await waitPort({ host, port: PORT, output: 'silent' });

	pool = createPool({
		connectionLimit: 5,
		host,
		user: USER,
		password: PASSWORD,
		database: DB,
	});

	return new Promise((res, rej) =>
		execute('SELECT 1')
			.then(() => console.log(`Connected to ${host}:${PORT}`))
			.then(() => res())
			.catch((err) => rej(err))
	);
}

function execute(query) {
	return new Promise((res, rej) =>
		pool
			.promise()
			.query(query)
			.then((r) => res(r))
			.catch((err) => rej(err))
	);
}

// async function destroy() {
// 	return new Promise((res, rej) => {
// 		pool.end((err) => {
// 			if (err) return rej(err);
// 			return res();
// 		});
// 	});
// }

module.exports = {
	init,
	execute,
	// destroy,
};
