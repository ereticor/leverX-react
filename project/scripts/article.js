const articleSection = document.querySelector('.main__articles')
const articleList = document.querySelector('.articles__list')
const loadBtn = document.querySelector('.articles__load')

articles.sort(() => Math.random() - 0.5)

const tagsList = document.querySelector('.main__articles__checkbar')

createMultiTags(articles, tagsList)

function createMultiTags(articleObj, parent) {

  // let tags = new Set(articleObj.reduce((acc, next) => acc.concat(next.keywords), []))
  let tags = new Set(articleObj.map(el => el.keywords).flat())

  tags.forEach(tag => createTag(tag, parent))
  
}

function createTag(text, parent) {
  let tag = document.createElement('label')
  tag.classList.add('checkbar__label')
  tag.innerText = text

  let input = document.createElement('input')
  input.classList.add('checkbar__input')
  input.type = 'checkbox'

  tag.prepend(input)

  parent.append(tag)
}

function createLoadBtn() {
  let btn = document.createElement('button')
  btn.classList.add('articles__load', 'btn')
  btn.innerText = "Load more"

  return btn;
}

loadArticles(articles, articleList)

function loadArticles(list, pageList) {
  const oldBtn = pageList.parentNode.querySelector('.articles__load')
  if (oldBtn) oldBtn.remove()
  const newBtn = createLoadBtn()

  pageList.innerHTML = ''

  const articlesPerPage = 8
  let page = 0;

  function loadOnPage() {
      const articlesToAppend = list.slice(page * articlesPerPage, (page + 1) * articlesPerPage);
      page++;

      articlesToAppend.forEach(article => {
          pageList.append(createArticle(article))
      })


      if (pageList.children.length >= list.length) {
        newBtn.remove()
      } else if (!pageList.contains(newBtn)) {
        pageList.parentNode.append(newBtn)
      }
  }
  loadOnPage()

  newBtn.addEventListener('click', loadOnPage)
}

function createArticle(articleObj, type = 'li', fullPage = false) {
  let article = document.createElement(type)
  
  article.setAttribute('data-keywords', articleObj.keywords.join(', '))
  article.classList.add('articles__item')
  
  let figure = document.createElement('figure')
  figure.classList.add('item__figure')
  
  let img = document.createElement('img')
  img.src = articleObj.src
  
  let cap = document.createElement('figcaption')
  cap.classList.add('item__cap')
  
  let capHead = document.createElement('h6')
  capHead.classList.add('cap__head')
  capHead.innerHTML = articleObj.title
  
  let capText = document.createElement('p')
  capText.classList.add('cap__text')
  capText.title = articleObj.summary
  capText.innerHTML = articleObj.summary

  
  cap.append(capHead, capText)
  
  figure.append(img, cap)
  
  article.append(figure)

  if (!fullPage) {
    article.addEventListener('click', () => {
      openFullPageArticle(articleObj)
    })
  }

  if (fullPage) {
    let capCred = document.createElement('div')
    capCred.classList.add('cap__credits')

    let author = document.createElement('p')
    author.classList.add('credits__author')
    author.innerText = articleObj.author

    let date = document.createElement('time')
    date.classList.add('credits__date')
    date.innerText = articleObj.date

    capCred.append(author, date)

    cap.append(capCred)

    let tags = document.createElement('div')
    tags.classList.add('item__tags')

    articleObj.keywords.forEach(key => {
      createTag(key, tags)
    })

    figure.append(tags)
  }
  
  return article

}


const searchBar = document.querySelector('.search__input')
const checkBoxes = document.querySelectorAll('.checkbar__input')

checkBoxes.forEach(el => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('checkbar__label_checked')
    searchInput()
  })
})

searchBar.addEventListener('input', searchInput)

function searchInput() {
  let filtered = search(searchBar, articles, 'checkbar__label')
  loadArticles(filtered, articleList)
}

function search(input, articleObj, checkClass) {

  let filtered = articleObj

  if (input.value.trim()) {

    let inputValue = input.value.trim().toLowerCase()

    filtered = filtered.filter(el => el.title.toLowerCase().indexOf(inputValue) !== -1)
  }

  const checkboxes = Array.from(document.querySelectorAll('.' + checkClass))

  if (checkboxes.some(el => el.classList.contains(`${checkClass}_checked`))) {

    let params = ''

    for (let i = 0; i < checkboxes.length; i++) {
        const keyword = checkboxes[i].innerText.trim().toLowerCase()
  
        if (checkboxes[i].classList.contains(`${checkClass}_checked`)) {
          params += `${keyword}, `
        } else {
          params = params.replaceAll(`${keyword}, `, '')
        }
    }

    filtered = params === '' 
    ? filtered
    : filtered.filter(el => new RegExp(el.keywords.join('|').toLowerCase()).test(params))
  }

  return filtered

}

const main = document.querySelector('.main')

function createFullPageArticle(articleObj) {
  
  let wrapper = document.createElement('div')
  wrapper.classList.add('main__paper__wrapper', 'wrapper')
  
  let section = document.createElement('section')
  section.classList.add('main__paper')
  
  let pagination = document.createElement('div')
  pagination.classList.add('paper__pagination')
  
  let homeBtn = document.createElement('span')
  homeBtn.classList.add('pagination__link')
  homeBtn.innerText = 'Home Page'
  
  pagination.append(homeBtn, '> Article')
  
  let article = createArticle(articleObj, 'article', true)
  
  section.append(pagination, article)

  wrapper.append(section)
  
  return wrapper
}

function openFullPageArticle(articleObj) {
  const mainContent = Array.from(document.querySelectorAll('.main > *'))
  
  let article = createFullPageArticle(articleObj)

  let link = article.querySelector('.pagination__link')

  link.addEventListener('click', () => {
    article.remove()
    main.append(...mainContent)
  })

  main.innerHTML = ''

  main.append(article)
}