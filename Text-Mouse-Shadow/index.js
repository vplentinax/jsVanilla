const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 300

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height } = hero
	let { offsetX: x, offsetY: y } = e

	if (this !== e.target) {
		x = x + e.target.offsetLeft
		y = y + e.target.offsetTop
	}

	const xWalk = Math.round((x / width) * walk) - walk / 2
	const yWalk = Math.round((y / height) * walk) - walk / 2

	text.style.textShadow = `
   ${xWalk}px ${yWalk}px 0  rgba(53, 139, 252, 0.8),
   ${xWalk * -1}px ${yWalk * -1}px 0  rgba(245, 69, 142, 0.5),
   ${yWalk}px ${xWalk}px 0  rgba(241, 202, 72, 0.7),
   ${yWalk * -1}px ${xWalk * -1}px 0 rgba(198, 56, 241, 0.7)
 `
}

hero.addEventListener('mousemove', shadow)
