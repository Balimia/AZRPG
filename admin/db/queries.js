const CHECK_TABLES = `SELECT table_name FROM information_schema.tables WHERE table_schema="az"`;

module.exports = {
	CHECK_TABLES,
};
