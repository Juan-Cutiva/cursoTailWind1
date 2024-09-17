const button = document.getElementById('burger');
const header = document.getElementById('header');

button.addEventListener('click', activate);

function activate() {
	if (button.classList.toggle('active') === true) {
		header.style.display = 'flex';
        header.style.animation='fade-in .5s forwards'
	} else {
        header.style.animation='fade-out .5s forwards'
	}
}
