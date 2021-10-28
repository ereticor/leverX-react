const articleSection = document.querySelector('.main__articles')
const articleList = document.querySelector('.articles__list')
const loadBtn = document.querySelector('.articles__load')

const tagsList = document.querySelector('.main__articles__checkbar')

function firstSearch(articleObj) {
  createMultiTags(articleObj, tagsList)
  loadArticles(articleObj, articleList)
}

function searchInput(articleObj) {
  loadArticles(articleObj, articleList)
}


const searchBar = document.querySelector('.search__input')
const checkBar = document.querySelector('.main__articles__checkbar');

searchBar.addEventListener('input', getArticles)

checkBar.addEventListener('click', getArticles)

function getArticles() {
  console.log(searchBar.value)
  const checkBoxes = document.querySelectorAll('.checkbar__label_checked')
  let tags = [...checkBoxes].map(el => el.innerText.replaceAll(' ', '_')).join('+')
  console.log(tags)

  getURL(`http://localhost:3228/getArticles?tags=${tags}&title=${searchBar.value.trim() || ''}`, searchInput)
}

searchBar.addEventListener('input', searchInput);

['load', 'hashchange'].forEach(el => {

  window.addEventListener(el, () => {

  const location = window.location

  if (location) {
    locationResolver(location)
  }

  })

})