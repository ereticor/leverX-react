const main = document.querySelector('.main');

['load', 'hashchange'].forEach(el => {

  window.addEventListener(el, () => {

  const location = window.location.hash

  if (location) {
    locationResolver(location)
  } else {
    createFullPageSearch('')
  }

  })

})