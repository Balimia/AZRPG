const playersSpam = new Set();
const playersBusy = new Set();

const isPlayerSpam = ({ author: { id } }) => (playersSpam.has(id) ? true : false);

const isPlayerBusy = ({ author: { id } }) => (playersBusy.has(id) ? true : false);

const setSpam = ({ author: { id } }) => {
	playersSpam.add(id);
	setTimeout(() => {
		playersSpam.delete(id);
	}, 1000);
};

const toggleBusy = ({ author: { id } }) =>
	isPlayerBusy(id) ? playersBusy.delete(id) : playersBusy.add(id);

module.exports = {
	isPlayerSpam,
	isPlayerBusy,
	setSpam,
	toggleBusy,
};
