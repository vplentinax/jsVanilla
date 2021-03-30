const viewer = document.querySelector('#viewer')
const menu = document.querySelector('.menu-wrap')
const imgs = menu.querySelectorAll('img')
let previousImage = ''

window.onload = () => {
	imgs.forEach(el => {
		if (el.classList.contains('selected')) {
			previousImage = el
		}
	})
}

imgs.forEach(img => {
	img.addEventListener('click', e => {
		if (e.isTrusted) {
			e.target.classList.add('selected')
			previousImage.classList.remove('selected')
			let image = viewer.querySelector('img')
			let div = viewer.querySelector('#title')
			let source = img.src
			let title = img.alt
			image.src = source
			div.textContent = title
		}
		previousImage = e.target
	})
})
