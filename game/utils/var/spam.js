const playersSpam = new Set();

const getPlayer = ({ author: { id } }) => (playersSpam.has(id) ? true : false);

const setPlayer = ({ author: { id } }) => {
	playersSpam.add(id);
	setTimeout(() => {
		playersSpam.delete(id);
	}, 1000);
};

module.exports = {
	getPlayer,
	setPlayer,
};
