const secondHand = document.querySelector('.second-hand')
const minutsHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')
function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegree = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondsDegree}deg)`
  const minuts = now.getMinutes()
  const minutsDegree = (minuts / 60) * 360 + 90
  minutsHand.style.transform = `rotate(${minutsDegree}deg)`
  const hour = now.getHours()
  const hoursDegree = (hour / 12) * 360 + 90
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`
}
setInterval(setDate, 1000)