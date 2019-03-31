function calc() {
	// Калькулятор		
	// let calcBtn = document.querySelectorAll('.glazing_price_btn'),
	// 	calcPopup = document.querySelector('.popup_calc'),
	// 	overlay = document.querySelector('.overlay'),
	// 	closeCalcPopup = document.querySelectorAll('.popup_calc_close');


	// function styleToggle(modal) {
	// 	if (!overlay.style.display || overlay.style.display === 'none') {
	// 		calcPopup.style.display = 'block';
	// 		document.body.style.overflow = 'hidden';
	// 	} else {
	// 		calcPopup.style.display = 'none';
	// 		document.body.style.overflow = '';
	// 	}
	// }

	// calcBtn.forEach(el => {
	// 	el.addEventListener('click', function (event) {
	// 		styleToggle(this);
	// 	});
	// });

	// closeCalcPopup.addEventListener('click', function () {
	// 	styleToggle(this);
		
	// });

	// closeCalcPopup.forEach(close => {
	// 	close.addEventListener('click', function () {
	// 				styleToggle(this);
	// 	})
	// });


	// function styleToggle(popup) {
	// 	if (!overlay.style.display || overlay.style.display === 'none') {
	// 		overlay.style.display = 'block';
	// 		popup.style.display = 'block';
	// 		document.body.style.overflow = 'hidden';
	// 	} else {
	// 		overlay.style.display = 'none';
	// 		popup.style.display = 'none';
	// 		document.body.style.overflow = '';
	// 	}
	// }

	// function closePopup(popup) {
	// 	overlay.style.display = 'none';
	// 	popup.style.display = 'none';
	// 	document.body.style.overflow = '';
	// }

	// calcBtn.addEventListener('click', function () {
	// 	styleToggle(calcPopup);
	// });

	

	// Array.from(close).forEach(el => {
	// 	el.addEventListener('click', function () {
	// 		Array.from(popupsAll).forEach(popup => {
	// 			closePopup(popup)
	// 		})
	// 	});
	// });


	
	


	// let persons = document.querySelectorAll('.counter-block-input')[0],
	//   restDays = document.querySelectorAll('.counter-block-input')[1],
	//   place = document.getElementById('select'),
	//   totalValue = document.getElementById('total'),

	//   personsSum = 0,
	//   daysSum = 0,
	//   total = 0;



	// totalValue.textContent = 0;

	// const countTotal = function () {
	//   total = 0;
	//   total = (daysSum + personsSum) * 4000 * place.options[place.selectedIndex].value;

	// }

	// persons.addEventListener('change', function () {
	//   personsSum = +this.value;
	//   if (restDays.value == '' || persons.value == '') return
	//   countTotal();

	//   if (restDays.value == '' || this.value == 0) {
	//     totalValue.textContent = 0;
	//   } else {
	//     totalValue.textContent = total;
	//   }
	// });

	// restDays.addEventListener('change', function () {
	//   daysSum = +this.value;
	//   if (restDays.value == '' || persons.value == '') return
	//   countTotal();

	//   if (persons.value == '' || this.value == 0) {
	//     totalValue.textContent = 0;
	//   } else {
	//     totalValue.textContent = total;
	//   }
	// });

	// place.addEventListener('change', function () {
	//   if (restDays.value == '' || persons.value == '') {
	//     totalValue.textContent = 0;
	//   } else {
	//     countTotal();
	//     totalValue.textContent = total;

	//   }
	// })

	// let a;
	// if (restDays.value != '') {
	//   a = restDays.value;
	// }

}

export default calc;