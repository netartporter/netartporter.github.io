let ball = document.querySelector('.ball');
let gameHeight = document.querySelector('#game').offsetHeight;
let ballTop = 0;
let ballLeft = 50;

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
	let x = event.beta; // In degree in the range [-180,180]
	let y = event.gamma; // In degree in the range [-90,90]

	ballTop += y / 10;
	ballLeft += x / 10;

	if (ballTop > gameHeight - 50) {
		ballTop = gameHeight - 50;
	}

	if (ballLeft < 0) {
		ballLeft = 0;
	}

	if (ballLeft > 100) {
		ballLeft = 100;
	}

	ball.style.top = ballTop + 'px';
	ball.style.left = ballLeft + '%';
}
