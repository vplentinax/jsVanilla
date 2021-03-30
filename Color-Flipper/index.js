const box = document.querySelector('.color')
const button = document.querySelector('button')
const body = document.querySelector('body')
const color = document.querySelector('.color')

const colors = [
	'#E1CDB5',
	'#90708C',
	'#ACE4AA',
	'#42CAFD',
	'#F6EFA6',
	'#F39189',
	'#046582',
	'#99FD8D',
	'#9A8194',
	'#FFCDA3',
	'#C0E218',
	'#FFABE1',
	'#98ACF8',
]

button.addEventListener('click', () => {
	let numRandom = Math.floor(Math.random() * 12)
	body.style.backgroundColor = colors[numRandom]
	color.style.color = colors[numRandom]
	color.textContent = colors[numRandom]
	color.style.fontWeight = 'bold'
})
