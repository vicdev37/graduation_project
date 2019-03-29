function timer() {
	// Timer

	let deadline = '2019-04-05';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / 1000 / 60 / 60) % 24),
			days = Math.floor(t / 1000 / 60 / 60 / 24);

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);



		function updateClock() {
			let t = getTimeRemaining(endtime);
			days.textContent = formatDate(t.days);
			hours.textContent = formatDate(t.hours);
			minutes.textContent = formatDate(t.minutes);
			seconds.textContent = formatDate(t.seconds);




			if (t.total <= 0) {
				days.textContent = "00";
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";
				clearInterval(timeInterval);



			}

		}

	}
	const formatDate = function (num) {
		if (num < 10) {
			num = '0' + num;
		}
		return num;
	}

	setClock('timer', deadline);

}

export default timer;