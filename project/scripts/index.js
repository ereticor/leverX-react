const articleSection = document.querySelector('.main__articles')
const articleList = document.querySelector('.articles__list')
const loadBtn = document.querySelector('.articles__load')

const tagsList = document.querySelector('.main__articles__checkbar')

function searchInput() {
  let filtered = search(searchBar, articles, 'checkbar__label')
  loadArticles(filtered, articleList)
}

createMultiTags(articles, tagsList)

loadArticles(articles, articleList)

const searchBar = document.querySelector('.search__input')
const checkBoxes = document.querySelectorAll('.checkbar__input')

checkBoxes.forEach(el => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('checkbar__label_checked')
    searchInput()
  })
})

searchBar.addEventListener('input', searchInput);

['load', 'hashchange'].forEach(el => {

  window.addEventListener(el, () => {

  const location = window.location.hash

  if (location) {
    locationResolver(location)
  }

  })

})