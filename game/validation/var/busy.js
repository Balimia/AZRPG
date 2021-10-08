const playersBusy = new Set();

const getPlayer = ({ author: { id } }) => (playersBusy.has(id) ? true : false);

const togglePlayer = ({ author: { id } }) =>
	getPlayer(id) ? playersBusy.delete(id) : playersBusy.add(id);

module.exports = {
	getPlayer,
	togglePlayer,
};
