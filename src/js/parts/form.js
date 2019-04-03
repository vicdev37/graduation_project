function form() {

// 	let message = {
// 		loading: 'Загрузка',
// 		success: 'Спасибо! Скоро мы с вами свяжемся!',
// 		failure: 'Что-то пошло не так...'
// 	};


// 	let forms = document.querySelectorAll('.form, .main_form'),
// 		input = document.getElementsByTagName('input'),
// 		statusMessage = document.createElement('div');
// 		statusMessage.classList.add('status');

// 	function sendForm(elem) {
// 	  elem.addEventListener('submit', function (e) {
// 	    e.preventDefault();
// 	    elem.appendChild(statusMessage);
// 	    let formData = new FormData(elem);

// 	    function postData(data) {
// 	      return new Promise(function (resolve, reject) {

// 	        let request = new XMLHttpRequest();

// 	        request.open('POST', '../server.php');

// 	        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// 	        request.onreadystatechange = function () {
// 	          if (request.readyState < 4) {
// 	            resolve();
// 	          } else if (request.readyState === 4) {
// 	            if (request.status == 200 && request.status < 300) {
// 	              resolve();
// 	            } else {
// 	              reject();
// 	            }
// 	          }
// 	        };

// 	        request.send(data);
// 	      });
// 	    }

// 	    function clearInput() {
// 	      for (let i = 0; i < input.length; i++) {
// 	        input[i].value = '';
// 	      }
// 	    }
// 	    postData(formData)
// 	      .then(() => statusMessage.textContent = message.loading)
// 	      .then(() => {
// 	        statusMessage.textContent = message.success;
// 	      })
// 	      .catch(() => statusMessage.textContent = message.failure)
// 	      .then(clearInput);
// 	  });
// 	}
	
	
// 	Array.from(forms).forEach(form => {
// 		sendForm(form);
// 	})  
// }
let mainForms = document.querySelectorAll('.main_form'),
	formInput = document.querySelectorAll('.form_input'),
	message = {
		sending: 'Выполняется отправка...',
		success: 'Данные успешно отправлены!',
		failure: 'Что-то пошло не так...'
	},
	statusMessage = document.createElement('div'),
	popupForm = document.querySelector('.popup .form'),
	popupEngineerForm = document.querySelector('.popup_engineer .form'),
	calcEndForm = document.querySelector('.popup_calc_end .form');
statusMessage.classList.add('status-message');

for (let i = 0; i < formInput.length; i++) {
	if (formInput[i].getAttribute('name') === 'user_phone') {
		formInput[i].addEventListener('keyup', function () {
			if (this.value.length > 11) {
				this.value = this.value.substring(0, 12);
			}
			this.value = this.value.replace(/[^0-9]+/g, '');
		});
	}
}

mainForms.forEach((form) => {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		Send(form);
	})
});

popupForm.addEventListener('submit', (event) => {
	event.preventDefault();
	Send(popupForm);
});

popupEngineerForm.addEventListener('submit', (event) => {
	event.preventDefault();
	Send(popupEngineerForm);
});

calcEndForm.addEventListener('submit', (event) => {
	event.preventDefault();
	Send(calcEndForm);
});

function Send(form) {
	let SendForm = form,
		SendFormInput = SendForm.querySelectorAll('input');

	SendForm.appendChild(statusMessage);

	let formData = new FormData(SendForm);

	function postData() {
		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

			let obj = {};
			formData.forEach(function (value, key) {
				obj[key] = value;
			});

			let json = JSON.stringify(obj);
			request.send(json);

			request.addEventListener('readystatechange', () => {
				if (request.readyState < 4) {
					resolve();
				} else if (request.readyState === 4 && request.status == 200) {
					resolve();
				} else {
					reject();
				}
			});
		});
	}

	function clearInput() {
		SendFormInput.forEach((input) => {
			input.value = '';
		});
	}

	postData()
		.then(() => statusMessage.innerHTML = message.sending)
		.then(() => statusMessage.innerHTML = message.success)
		.catch(() => statusMessage.innerHTML = message.failure)
		.then(clearInput());
}
}
export default form;