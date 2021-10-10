const logger = require('./logger');
const { db } = require('../../admin/index');
const mysql = require('./var/mysql');
const { COMBAT_STATS, SKILLS } = require('../lib/globals');

const getPlayer = async (message) => {
	try {
		const player = await searchPlayer(message);
		return player ? [false, player] : [true, await createPlayer(message)];
	} catch (error) {
		logger.write(error?.stack);
	}
};

const getCooldown = async (message, name) => {
	try {
		const cooldown = await searchCooldown(message.author.id, name);
		if (!cooldown) await createCooldown(message.author.id, name);
		return cooldown || null;
	} catch (error) {
		logger.write(error?.stack);
	}
};

const searchPlayer = (message) =>
	new Promise((res, rej) => {
		db.execute(mysql.getProfile, [message.author.id])
			.then((r) => res(r[0]))
			.catch((err) => rej(err));
	});

const createPlayer = (message) =>
	new Promise((res, rej) => {
		db.execute(mysql.createUser, [message.author.id, message.author.username])
			.then(() => setUserStats(message))
			.then(() => setUserCombat(message))
			.then(() => setUserSkills(message))
			.then(() => searchPlayer(message))
			.then((r) => res(r))
			.catch((err) => rej(err));
	});

const searchCooldown = (id, name) =>
	new Promise((res, rej) => {
		db.execute(mysql.getSpecificCooldown, [id, name])
			.then((r) => res(r[0]))
			.catch((err) => rej(err));
	});

const createCooldown = (id, name) =>
	new Promise((res, rej) => {
		db.execute(mysql.createUserCooldown, [id, name])
			.then((r) => res(r))
			.catch((err) => rej(err));
	});

const setUserStats = (message) => db.execute(mysql.createUserStats, [message.author.id]);

const setUserCombat = (message) =>
	COMBAT_STATS.forEach((e, index) =>
		db.execute(mysql.createUserCombat, [message.author.id, index + 1, e.default, e.default])
	);

const setUserSkills = (message) =>
	SKILLS.forEach((s, index) => db.execute(mysql.createUserSkills, [message.author.id, index + 1]));

module.exports = {
	getPlayer,
	getCooldown,
};
