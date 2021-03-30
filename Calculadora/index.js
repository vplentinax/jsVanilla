const screen = document.querySelector('#textScreen')

let actualNumber = 0
let comma = 0
let num = 0
let op = 0
let solution = 0

function number(n) {
	if (screen.textContent === '0') {
		actualNumber = ''
	}
	if (n === '.') {
		comma++
	}
	if (n === '.' && comma > 1) {
		n = ''
	}
	actualNumber += n
	screen.textContent = actualNumber
}

function operation(n) {
	num = actualNumber
	actualNumber = ''
	op = n
}

function equal() {
	if (op !== 0) {
		solution = eval(num + op + actualNumber)
		screen.textContent = solution
		op = 0
		actualNumber = solution
	} else {
		screen.textContent = actualNumber
	}
}

function sroot() {
	let root = Math.sqrt(actualNumber)
	screen.textContent = root
	op = 0
	actualNumber = root
	equal()
}

function percent() {
	let percent = actualNumber / 100
	screen.textContent = percent
	actualNumber = percent
	equal()
}

function opos() {
	let n = Number(actualNumber)
	let opn = -n
	let sopn = String(opn)
	screen.textContent = sopn
	actualNumber = sopn
}

function inv() {
	let n = Number(actualNumber)
	let opn = 1 / n
	let sopn = String(opn)
	screen.textContent = sopn
	actualNumber = sopn
}

function back() {
	let long = actualNumber.length
	let inf = actualNumber.substr(long - 1, long)
	let sopn = actualNumber.substr(0, long - 1)
	if (sopn === '') {
		sopn = '0'
	}
	if (inf === '.') {
		comma = 0
	}
	screen.textContent = sopn
	actualNumber = sopn
}

function parcialClean() {
	screen.textContent = '0'
	actualNumber = 0
	comma = 0
}

function cleanAll() {
	screen.textContent = '0'
	actualNumber = 0
	comma = 0
	num = 0
	op = 0
	solution = 0
}
