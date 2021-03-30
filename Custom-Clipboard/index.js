function copyData() {
	const text1 = document.querySelector('.text1')
	const text2 = document.querySelector('.text2')
	const text3 = document.querySelector('.text3')

	text1.style.backgroundColor = 'lightgrey'
	text2.style.backgroundColor = 'lightgrey'
	text3.style.backgroundColor = 'lightgrey'

	text1.style.color = 'black'
	text2.style.color = 'black'
	text3.style.color = 'black'

	navigator.clipboard
		.writeText(
			`
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ${text1.value}, ${text2.value} ${text3.value}
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  `
		)
		.then(
			() => {
				document.querySelector('.copy').style.backgroundColor = ' #f7ff4a'
				document.querySelector('.copy').textContent = 'COPIED!'
				setTimeout(() => {
					text1.style.backgroundColor = 'white'
					text2.style.backgroundColor = 'white'
					text3.style.backgroundColor = 'white'

					text1.style.color = '#4c7c53'
					text2.style.color = '#4c7c53'
					text3.style.color = '#4c7c53'
					document.querySelector('.copy').textContent = 'Copy'
					document.querySelector('.copy').style.backgroundColor = '#4c7c53'
				}, 500)
			},
			() => {
				console.log('Something went wrong')
			}
		)
}
