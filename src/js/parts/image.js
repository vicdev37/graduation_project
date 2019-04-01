function image() {
	let imgPopup = document.createElement('div'),
		image = document.createElement('img'),
		imgLink = document.querySelectorAll('.img-link');

	imgPopup.classList.add('img-popup');
	image.classList.add('img-content');
	document.body.appendChild(imgPopup);
	imgPopup.appendChild(image);

	imgLink.forEach(item => {
		item.addEventListener('click', function (event) {
			event.preventDefault();
			imgPopup.style.display = 'flex';
			image.src = this.href;
		});
	});

	imgPopup.addEventListener('click', event => {
		if (event.target && event.target.classList.contains('img-popup')) {
			imgPopup.style.display = 'none';
		}
	});
}



export default image;