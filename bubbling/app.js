const innerDiv = document.querySelector('.three')
const middleDiv = document.querySelector('.two')
const outerDiv = document.querySelector('.one')

innerDiv.addEventListener('click', (evt) => {
  console.log(evt.target)
  console.log('div three received a click event')
})

middleDiv.addEventListener('click', (evt) => {
  console.log(evt.target)
  console.log('div two received a click event')
})

outerDiv.addEventListener('click', (evt) => {
  console.log(evt.target)
  console.log('div one received a click event')
})