function modal() {
	const headerBtn = document.querySelector('.header_btn'),
		popupEngineer = document.querySelector('.popup_engineer'),
		phoneLink = document.querySelector('.phone_link'),
		popupCallback = document.querySelector('.popup'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelectorAll('.popup_close'),
		popupsAll = document.querySelectorAll('.popup, .popup_engineer, .popup_calc_end ');
		


	function styleToggle(popup) {
		if (!overlay.style.display || overlay.style.display === 'none') {
			overlay.style.display = 'block';
			popup.style.display = 'block';
			document.body.style.overflow = 'hidden';
		} else {
			overlay.style.display = 'none';
			popup.style.display = 'none';
			document.body.style.overflow = '';
		}
	}

	function closePopup(popup) {
		overlay.style.display = 'none';
		popup.style.display = 'none';
		document.body.style.overflow = '';
	}

	headerBtn.addEventListener('click', function (event) {
	    styleToggle(popupEngineer);
	  });

	phoneLink.addEventListener('click', function (event) {
		styleToggle(popupCallback);
	});
	
	Array.from(close).forEach(el => {
		el.addEventListener('click', function () {
			Array.from(popupsAll).forEach(popup => {
				closePopup(popup)
			})
		});
	});


	overlay.addEventListener('click', function (event) {
		Array.from(popupsAll).forEach(popup => {
			closePopup(popup);
		})
	});

	function func() {
		overlay.style.display = 'block';
		popupCallback.style.display = 'block';
	}

	setTimeout(func, 61000);

}

export default modal;