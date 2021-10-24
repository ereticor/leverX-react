const main = document.querySelector('.main')

window.addEventListener('load', () => {

  const location = window.location.hash

  if (location) {
    locationResolver(location)
  } else {
    openFullPageArticle(1)
  }

})