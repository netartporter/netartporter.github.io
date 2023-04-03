let bar = document.querySelector('#bar');
let object = document.querySelector('.object');
let gameHeight = document.querySelector('#game').offsetHeight;
let barWidth = bar.offsetWidth;
let objectTop = -50;
let objectLeft = 50;

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
	let x = event.gamma; // In degree in the range [-90,90]

	barWidth += x / 10;
	if (barWidth < 0) {
		barWidth = 0;
	}

	if (barWidth > 100) {
		barWidth = 100;
	}

	bar.style.width = barWidth + '%';

	objectTop += 5;

	if (objectTop > gameHeight - 70) {
		objectTop = -50;
		objectLeft = Math.random() * 100;
	}

	if (objectTop > gameHeight - 120 && objectLeft > barWidth - 10 && objectLeft < barWidth + 10) {
		objectTop = -50;
		objectLeft = Math.random() * 100;
	}

	object.style.top = objectTop + 'px';
	object.style.left = objectLeft + '%';
}
