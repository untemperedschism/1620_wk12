const parentDiv = document.querySelector('.outer')

parentDiv.addEventListener('click', (evt) => {
  console.log(evt.target.textContent)
})