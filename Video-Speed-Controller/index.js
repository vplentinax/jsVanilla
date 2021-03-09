const  speed =  document.querySelector('.speed')
const bar = speed.querySelector('.speed-bar')
const video = document.querySelector('.flex')

speed.addEventListener('mousemove', function(e) {
  const y = e.pageY - this.offsetTop
  const percent = y / this.offsetHeight
  const min = 0.4
  const max = 4
  const placebackRate =  percent * (max - min) + min 
  const height = Math.round(percent * 100) + '%'
  bar.style.height = height
  bar.textContent = `${placebackRate.toFixed(2)}x`
  video.playbackRate = placebackRate
 })