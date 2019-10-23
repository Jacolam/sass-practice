document.addEventListener('DOMContentLoaded',() => {

  console.log('i have been loaded')

  let btn = document.querySelector('.item')
  btn.addEventListener('click', e => {
    console.log('i got pushed ')
  })

  let btn2 = document.querySelector('.item2')
  btn2.addEventListener('click', e => {
    console.log('i got pushed 2 ')
  })

})
