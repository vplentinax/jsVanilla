const buttons = document.querySelectorAll('button')

const imgs = [
  "<img src='./img/img1.jpg'/>",
  "<img src='./img/img2.jpg'/>",
  "<img src='./img/img3.jpg'/>",
  "<img src='./img/img4.jpg'/>",
  "<img src='./img/img5.jpg'/>",
  "<img src='./img/img6.jpg'/>"
]

window.onload = () => {
  let img = ''
  imgs.forEach(img => {
    let node = new DOMParser().parseFromString(img, 'text/html').querySelector('img')
    container.appendChild(node)
  })
}

buttons.forEach(button => button.addEventListener('click', (e) => {
  const container = document.querySelector('#container');
  if(e.target.id === 'prev'){
    container.scrollLeft -= window.innerWidth;
    e.preventDefault();
  }
  if(e.target.id === 'next') {
    container.scrollLeft += window.innerWidth;
    e.preventDefault();
  }
}))




