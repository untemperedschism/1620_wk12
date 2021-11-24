const outer = document.querySelector('.outer')
const middle = document.querySelector('.middle')
const inner = document.querySelector('.inner')


outer.addEventListener('click', (evt) => {
  console.log(evt.target, evt.currentTarget)
})

middle.addEventListener('click', (evt) => {
  //evt.stopPropagation()
  //evt.stopImmediatePropagation()
  console.log(evt.target, evt.currentTarget)
})

middle.addEventListener('click', (evt) => {
  console.log("middle")
})

inner.addEventListener('click', (evt) => {
  console.log(evt.target, evt.currentTarget)
})