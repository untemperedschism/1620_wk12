const paragraph = document.querySelector('.paragraph')
const duckLnk = document.querySelector('.duck')

function logClckToConsole(evt) {
  //evt.preventDefault()
  console.log(evt.target, evt.currentTarget)
}

paragraph.addEventListener('click', logClckToConsole)
duckLnk.addEventListener('click', logClckToConsole)

const txt = document.querySelector('#text')

txt.addEventListener('input', (evt) => {
  console.log(evt.target.value)
})