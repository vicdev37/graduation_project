function calc() {
let popupCalcForm = document.querySelector('.popup_calc'),
	popupCalcFormInputs = document.querySelectorAll('.popup_calc input'),
	popupCalcFormBtn = document.querySelector('button.popup_calc_button'),
	popupCalcFormBtns = document.querySelectorAll('button.glazing_price_btn.text-uppercase.popup_calc_btn'),
	popupCalcFormClose = document.querySelector('.popup_calc_close'),
	previewIcons = document.querySelectorAll("img[class^=type"),
	previewImage = document.querySelectorAll("img[id^=type"),
	popupCalcProfile = document.querySelector(".popup_calc_profile"),
	popupCalcProfileClose = document.querySelector(".popup_calc_profile_close"),
	checkBoxLabels = document.querySelectorAll(".popup_calc_profile_content label"),
	checkBoxInputs = document.querySelectorAll(".popup_calc_profile_content input"),
	showEndCalcFormBtn = document.querySelector(".button.popup_calc_profile_button"),
	inputHeight = document.getElementById('height'),
	inputWidth = document.getElementById('width'),
	popupCalcEndForm = document.querySelector(".popup_calc_end");

let currentCheckBox = 0;
let objData = {
	'width': undefined,
	'height': undefined,
	'formBalcon': undefined,
	'glazingProfile': undefined,
	'glazingType': undefined,
	'name': undefined,
	'phone': undefined
};

function clearObjData() {
	for (let key in objData) {
		objData[key] = undefined;
	}
}

showPreviewIcon(0);


function showPreviewIcon(index) {
	for (let i = 0; i < previewIcons.length; ++i) {
		previewIcons[i].classList.remove('do_image_more');
		previewImage[i].style.display = 'none';
	}
	previewIcons[index].classList.add('do_image_more');
	previewImage[index].style.display = 'inline-block';
}

function getActivePreviewIcon() {
	for (let i = 0; i < previewIcons.length; ++i) {
		if (previewIcons[i].classList.contains('do_image_more')) {
			return i;
		}
	}
}
popupCalcFormInputs.forEach(function (item) {
	item.addEventListener('keypress', function (event) {
		event.preventDefault();
		if (/\d/.test(event.key)) {
			this.value += event.key;
			return;
		} else {
			return;
		}
	});
	item.addEventListener('change', function (event) {
		event.preventDefault();
		if (/\D/.test(this.value)) {
			item.value = "";
			return;
		} else {
			return;
		}
	});
});
popupCalcFormBtns.forEach(item => {

	item.addEventListener('click', () => {
		popupCalcForm.style.display = 'block';
		document.body.style.overflow = "hidden";

		popupCalcFormClose.addEventListener('click', () => {
			clearObjData();

			popupCalcFormInputs[0].value = null;
			popupCalcFormInputs[1].value = null;
			showPreviewIcon(0);

			popupCalcForm.style.display = 'none';
			document.body.style.overflow = "";
		});
		previewIcons.forEach((item, index) => {
			item.addEventListener('click', function (event) {
				event.preventDefault();
				showPreviewIcon(index);
			});
		});

		popupCalcFormBtn.addEventListener('click', () => {
			 if (inputHeight.validity.valid && inputWidth.validity.valid) {
			 	popupCalcForm.style.display = 'none';
			 	objData.width = +popupCalcFormInputs[0].value;
			 	objData.height = +popupCalcFormInputs[1].value;
			 	objData.formBalcon = previewIcons[getActivePreviewIcon()].getAttribute('alt');
			 	showPreviewIcon(0);

			 	popupCalcProfile.style.display = 'block';
			 }
			 inputHeight.value = null;
			 inputWidth.value = null;

		});
	});
});
popupCalcProfileClose.addEventListener('click', () => {
	clearObjData();
	document.getElementById('view_type').selectedIndex = 0;
	for (let i = 0; i < checkBoxInputs.length; ++i) {
		checkBoxInputs[i].checked = false;
	}

	popupCalcProfile.style.display = 'none';
	document.body.style.overflow = "";
});
checkBoxLabels.forEach(function (item, index) {
	item.addEventListener('click', () => {
		currentCheckBox = index;
		checkBoxInputs[(index + 1) % 2].checked = false;
	});
});

let popupCalcEndClose = document.querySelector('.popup_calc_end_close'),
	popupCalcEndFormForm = document.querySelector(".popup_calc_end form");


showEndCalcFormBtn.addEventListener('click', () => {
	let selectedGlazingType = document.getElementById('view_type').value,
		glazingProfile = document.querySelectorAll('.checkbox-custom')[currentCheckBox].getAttribute('id'),
		checkBox = document.querySelectorAll('.checkbox');

	if (!checkBox[0].checked && !checkBox[1].checked) {
		alert('Укажите профиль!');
	} else {
		objData.glazingProfile = glazingProfile;
		objData.glazingType = selectedGlazingType;

	if (selectedGlazingType == 'plastic' && glazingProfile == 'cold') {
		alert('Для данного типа остекления можно вырать только теплый профиль');
		return;
	}

	popupCalcProfile.style.display = 'none';
	document.getElementById('view_type').selectedIndex = 0;
	for (let i = 0; i < checkBoxInputs.length; ++i) {
		checkBoxInputs[i].checked = false;
	}


	popupCalcEndForm.style.display = 'block';
	document.body.style.overflow = "hidden";
	}
});


popupCalcEndClose.addEventListener('click', () => {
	clearObjData();
	popupCalcEndForm.style.display = 'none';
	document.body.style.overflow = "";
});

let popupCalcEndSubmitBtn = document.querySelector('.popup_calc_end button[name="submit"]');

popupCalcEndSubmitBtn.addEventListener('click', (event) => {	
	event.preventDefault();
	objData.name = document.querySelector('.popup_calc_end input[name="user_name"]').value;
	objData.phone = document.querySelector('.popup_calc_end input[name="user_phone"]').value;
	postData(objData, popupCalcEndFormForm);
});


function postData(obj, form) {
	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!!!',
		failure: 'Что-то пошло не так'
	};
	let inputs = document.querySelectorAll(".popup_calc_end form input");
	let statusMessage = document.createElement('div');
	statusMessage.classList.add('status');
	form.appendChild(statusMessage);
	statusMessage.style.display = 'block';

	let request = new XMLHttpRequest();
	request.open('POST', '../server.php');

	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	let jsonData = JSON.stringify(obj);

	if (!inputs[0].validity.valid || !inputs[1].validity.valid) {
		alert('Заполните данные');
	} else {
		request.send(jsonData);
	}

	request.addEventListener('readystatechange', () => {
		if (request.readyState < 4) {
			statusMessage.innerHTML = message.loading;
		} else if (request.readyState === 4 && request.status == 200) {
			statusMessage.innerHTML = message.success;
		}
		else {
			statusMessage.innerHTML = message.failure;
		}
	

		clearInput();

		function clearInput() {
		for (let i = 0; i < inputs.length; ++i) {
			inputs[i].value = '';
		}
		}
		});
		if (statusMessage.classList == 'status') {

		 setTimeout(() => {
		 	form.removeChild(statusMessage);
		}, 3000);
	}
}

}

export default calc;