const canvas = document.querySelector('#draw')
const context = canvas.getContext('2d')
const width = window.innerWidth
const height = window.innerHeight

canvas.style.border = '1px solid black'
context.strokeStyle = '#000'
context.lineWidth = 1
context.lineJoin = 'round'
context.lineCap = 'round'

let isDrawing = false
let direction = true
let lastX = 0
let lastY = 0
let hue = 0

function draw(e) {
	if (!isDrawing) return
	context.strokeStyle = `hsl(${hue++}, 100%, 50%)`
	canvas.style.border = `5px solid hsl(${hue}, 100%, 50%)`
	context.beginPath()
	context.moveTo(lastX, lastY)
	context.lineTo(e.offsetX, e.offsetY)
	context.stroke()
	;[lastX, lastY] = [e.offsetX, e.offsetY]

	if (hue >= 360) {
		hue = 0
	}

	if (context.lineWidth > 100 || context.lineWidth <= 1) {
		direction = !direction
	}
	if (direction) {
		context.lineWidth++
	} else {
		context.lineWidth--
	}
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => {
	isDrawing = false
	context.lineWidth = 1
})
canvas.addEventListener('mouseout', () => (isDrawing = false))
canvas.addEventListener('mousedown', e => {
	isDrawing = true
	;[lastX, lastY] = [e.offsetX, e.offsetY]
})