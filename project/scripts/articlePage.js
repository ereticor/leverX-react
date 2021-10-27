['load', 'hashchange'].forEach(el => {

  window.addEventListener(el, () => {

  const location = window.location

  if (location) {
    locationResolver(location)
  }

  })

})