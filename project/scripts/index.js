let page = 0;

const articleSection = document.querySelector('.main__articles')
const articleList = document.querySelector('.articles__list')
const loadBtn = document.querySelector('.articles__load')

const tagsList = document.querySelector('.main__articles__checkbar')

function getTags({ tags }) {
  createMultiTags(tags, tagsList)
}

function searchInput(articlesData) {
  // articleList.innerHTML = ''
  loadArticles(articlesData, articleList)
}


const searchBar = document.querySelector('.search__input')
const checkBar = document.querySelector('.main__articles__checkbar');


searchBar.addEventListener('input', getArticles)

checkBar.addEventListener('click', getArticles)

function getArticles(isUpdateList = true) {
  if (isUpdateList) {
    articleList.innerHTML = ''
    page = 0
  }
  
  const checkBoxes = document.querySelectorAll('.checkbar__label_checked')
  let tags = [...checkBoxes].map(el => el.innerText.replaceAll(' ', '_')).join('+')

  getURLthrottle(`http://localhost:3228/getArticles?tags=${tags}&title=${searchBar.value?.trim() || ''}&page=${page}`, searchInput)
}