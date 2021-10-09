const getIdFromDiscordId = 'SELECT id FROM User WHERE DiscordId = ?';
const getIdFromCooldown = 'SELECT id FROM Cooldown WHERE Name = ?';
// const getUserById = 'SELECT * FROM User WHERE DiscordId = ?';
const getProfile =
	'SELECT DiscordId, Username, Membership, Banned, CurrentCity, HighestCity, Level, Experience FROM User JOIN UserStats ON User.id = id_User WHERE DiscordId = ?';
const getSpecificCooldown = `SELECT * FROM UserCooldown WHERE id_User = (${getIdFromDiscordId}) AND id_Cooldown = (${getIdFromCooldown})`;

const createUser = 'INSERT INTO User (DiscordId, Username) VALUES (?, ?)';
const createUserStats = `INSERT INTO UserStats (id_User) VALUES ((${getIdFromDiscordId}))`;
const createUserCombat = `INSERT INTO UserCombat (id_User, id_Combat, Current, Max) VALUES ((${getIdFromDiscordId}), ?, ?, ?)`;
const createUserSkills = `INSERT INTO UserSkills (id_User, id_Skill) VALUES ((${getIdFromDiscordId}), ?)`;
const createUserCooldown = `INSERT INTO UserCooldown (id_User, id_Cooldown, Cooldown) VALUES ((${getIdFromDiscordId}), (${getIdFromCooldown}), now())`;

module.exports = {
	createUser,
	createUserStats,
	createUserCombat,
	createUserSkills,
	getProfile,
	getSpecificCooldown,
	createUserCooldown,
};
