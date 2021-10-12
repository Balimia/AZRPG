const getIdFromDiscordId = 'SELECT id FROM User WHERE discord_id = ?';
const getIdFromCooldown = 'SELECT id FROM Cooldown WHERE name = ?';
// const getUserById = 'SELECT * FROM User WHERE discord_id = ?';
const getProfile =
	'SELECT discord_id, username, membership, banned, current_city, highest_city, level, experience FROM User JOIN UserStats ON User.id = id_User WHERE discord_id = ?';
const getSpecificCooldown = `SELECT * FROM UserCooldown WHERE id_User = (${getIdFromDiscordId}) AND id_Cooldown = (${getIdFromCooldown})`;

const setUserCooldown = `INSERT INTO UserCooldown (id_User, id_Cooldown, cooldown) VALUES ((${getIdFromDiscordId}), (${getIdFromCooldown}), now()) ON DUPLICATE KEY UPDATE cooldown = now()`;

const createUser = 'INSERT INTO User (discord_id, username) VALUES (?, ?)';
const createUserStats = `INSERT INTO UserStats (id_User) VALUES ((${getIdFromDiscordId}))`;
const createUserCombat = `INSERT INTO UserCombat (id_User, id_Combat, current, max) VALUES ((${getIdFromDiscordId}), ?, ?, ?)`;
const createUserSkills = `INSERT INTO UserSkills (id_User, id_Skill) VALUES ((${getIdFromDiscordId}), ?)`;

module.exports = {
	createUser,
	createUserStats,
	createUserCombat,
	createUserSkills,
	getProfile,
	getSpecificCooldown,
	setUserCooldown,
};
