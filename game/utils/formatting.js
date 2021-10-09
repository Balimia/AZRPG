const formatTime = (ms, full = false) => {
	if (typeof ms !== 'number') return;
	let seconds = Math.floor((ms / 1000) % 60),
		minutes = Math.floor((ms / (1000 * 60)) % 60),
		hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
	if (full) {
		hours = hours < 10 ? '0' + hours : hours;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;
		return `${hours}h ${minutes}mn ${seconds}s`;
	}
	if (hours === 0) {
		if (minutes === 0) return `${seconds > 0 ? seconds : 1} second${seconds > 1 ? 's' : ''}`;
		if (seconds === 0) return `${minutes} minute${minutes > 1 ? 's' : ''}`;
		return `${minutes}mn ${seconds}s`;
	}
	minutes = minutes < 10 ? '0' + minutes : minutes;
	return `${hours}h ${minutes}mn ${seconds}s`;
};

module.exports = {
	formatTime,
};
