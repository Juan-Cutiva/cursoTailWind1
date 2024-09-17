const button = document.getElementById('burger');
const header = document.getElementById('header');
const ulItem = document.getElementById('ulItem')

button.addEventListener('click', activate);

function activate() {
	if (button.classList.toggle('active') === true) {
		header.style.display = 'flex';
		ulItem.style.display = 'flex';
        header.style.animation='fade-in .5s forwards'
	} else {
		ulItem.style.display = 'none';
        header.style.animation='fade-out .5s forwards'
	}
}
