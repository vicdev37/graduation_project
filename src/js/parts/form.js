function form() {

	let message = {
		loading: 'Загрузка',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};


	let forms = document.querySelectorAll('.form, .main_form'),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	function sendForm(elem) {
	  elem.addEventListener('submit', function (e) {
	    e.preventDefault();
	    elem.appendChild(statusMessage);
	    let formData = new FormData(elem);

	    function postData(data) {
	      return new Promise(function (resolve, reject) {

	        let request = new XMLHttpRequest();

	        request.open('POST', '../server.php');

	        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	        request.onreadystatechange = function () {
	          if (request.readyState < 4) {
	            resolve();
	          } else if (request.readyState === 4) {
	            if (request.status == 200 && request.status < 300) {
	              resolve();
	            } else {
	              reject();
	            }
	          }
	        };

	        request.send(data);
	      });
	    }

	    function clearInput() {
	      for (let i = 0; i < input.length; i++) {
	        input[i].value = '';
	      }
	    }
	    postData(formData)
	      .then(() => statusMessage.textContent = message.loading)
	      .then(() => {
	        statusMessage.textContent = message.success;
	      })
	      .catch(() => statusMessage.textContent = message.failure)
	      .then(clearInput);
	  });
	}
	
	
	Array.from(forms).forEach(form => {
		sendForm(form);
	})  
}

export default form;