const viewer = document.querySelector('.viewer')
const title = document.querySelector('.title')

const imgs = [
	"<img src='./img/img2.jpg' alt='Cheetah'/>",
	"<img src='./img/img3.jpg' alt='Tucan'/>",
	"<img src='./img/img4.jpg' alt='Panther'/>",
	"<img src='./img/img5.jpg' alt='Butterfly'/>",
	"<img src='./img/img7.jpg' alt='Wolf dog'/>",
]

let nextCount = 1
let prevCount = 1

function createNode(b, n) {
	let node = new DOMParser().parseFromString(n, 'text/html').querySelector('img')
	node.classList.add('now')
	viewer.removeChild(b)
	viewer.appendChild(node)
	title.textContent = node.alt
}

function rall(n) {
	let before = viewer.querySelector('img')
	let img = ''
	if (n === 0) {
		img = imgs[0]
		nextCount = 1
		prevCount = 1
	} else {
		img = imgs[imgs.length - 1]
		prevCount = imgs.length - 1
		nextCount = 4
	}
	createNode(before, img)
}

function next() {
	let before = viewer.querySelector('img')
	let img = ''
	if (nextCount >= 0 && nextCount <= imgs.length) {
		img = imgs[nextCount]
		createNode(before, img)
		nextCount = nextCount + 1
		prevCount = nextCount - 1
	}
}

function prev() {
	let before = viewer.querySelector('img')
	let img = ''
	if (prevCount >= 0 && prevCount < imgs.length) {
		img = imgs[prevCount - 1]
		createNode(before, img)
		prevCount = prevCount - 1
		nextCount = prevCount + 1
	}
}
