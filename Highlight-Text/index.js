const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink() {
  const linksCoor = this.getBoundingClientRect()
  const coords = {
    width: linksCoor.width,
    height: linksCoor.height,
    top: linksCoor.top + window.scrollY,
    left: linksCoor.left + window.scrollX
  }
  highlight.style.width = `${coords.width}px`
  highlight.style.height = `${coords.height}px`
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))