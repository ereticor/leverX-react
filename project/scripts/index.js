const sliderWrapper = document.querySelector('.main__intro__slider')
const slider = document.querySelector('.slider__list')
const sliderItems = document.getElementsByClassName('slider__item')

const sliderBtns = document.querySelectorAll('.slider__btn')

const pagination = document.querySelectorAll('.pagination__label input')

slide(slider, sliderItems, sliderBtns, pagination)

function slide(slider, items, btns, pagination, index = 1) {
  
  const sliderLength = items.length
  
  const firstClone = items[0].cloneNode(true)
  const lastClone = items[items.length - 1].cloneNode(true)
  
  slider.append(firstClone)
  slider.prepend(lastClone)
  
  let transition = false
  let interacted = false
  
  const left = btns[0]
  const right = btns[1]
  
  left.addEventListener('click', (e) => transformSlide(-1, e))
  right.addEventListener('click', (e) => transformSlide(1, e))
  
  for (let i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener('click', (e) => {
      
      if (i + 1 == index) return
      
      transformSlide(i, e)
    })
  }
  
  slider.addEventListener('transitionend', checkSLide)
  
  function transformSlide(dir, e) {
    
    if (e) {
      interacted = true
      
      setTimeout(() => interacted = false, 3000)
    }
    
    slider.classList.add('slider__list_transition')
    
    if (!transition) {
      if (dir == 1) {
        slider.style.transform = `translateX(-${++index}00%)`
      } else {
        slider.style.transform = `translateX(-${--index}00%)`
      }
    }
    
    transition = true
  }
  
  function checkSLide() {
    slider.classList.remove('slider__list_transition')
    
    if (index == 0) {
      slider.style.transform = `translateX(-${sliderLength}00%)`
      index = sliderLength
    }
    
    if (index == sliderLength + 1) {
      slider.style.transform = `translateX(-${1}00%)`
      index = 1      
    }
    
    pagination[index - 1].checked = true
    
    transition = false
  }
  
  function autoSlide() {
    if (!interacted) {
      transformSlide(1)
    }
    setTimeout(autoSlide, 3000)
  }
  
  autoSlide()
}

const articleSection = document.querySelector('.main__articles')
const articleList = document.querySelector('.articles__list')
articleList.setAttribute('data-article-count', 0)
const loadBtn = document.querySelector('.articles__load')
let articleDefaultSize = 8;

articles.sort(() => Math.random() - 0.5)

const searchTags = document.querySelector('.main__articles__checkbar')

createMultiTags(articles, searchTags)

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

loadArticles(articles, articleList, loadBtn)

loadBtn.addEventListener('click', () => {
  loadArticles(articles, articleList, loadBtn)
  search(searchBar, articles, articleList, 'checkbar__label', loadBtn)
})

function loadArticles(list, pageList, loadBtn) {
  
  let count = +pageList.getAttribute('data-article-count')
  
  for (let i = 0; i < 8 && i + count < list.length; i++) {
    pageList.append(createArticle(list[i + count]))
    
    pageList.setAttribute('data-article-count', i + count + 1)
    
    if (i + count === list.length - 1) {
      loadBtn.remove()
    }
  }

  
}


function createArticle(articleObj) {
  let article = document.createElement('li')
  
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
  
  return article
}


const searchBar = document.querySelector('.search__input')
const checkBoxes = document.querySelectorAll('.checkbar__input')

checkBoxes.forEach(el => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('checkbar__label_checked')
    articleList.setAttribute('data-article-count', articleDefaultSize)
    search(searchBar, articles, articleList, 'checkbar__label', loadBtn)
  })
})

searchBar.addEventListener('input', searchInput)

function searchInput() {
  articleList.setAttribute('data-article-count', articleDefaultSize)
  search(searchBar, articles, articleList, 'checkbar__label', loadBtn)
}

function search(input, articleObj , articleList, checkClass, btn) {

  let count = +articleList.getAttribute('data-article-count')

  articleList.innerHTML = ''

  const checkboxes = document.querySelectorAll('.' + checkClass)

  let params = ''

  for (let i = 0; i < checkboxes.length; i++) {
      const keyword = checkboxes[i].innerText.trim().toLowerCase()

      if (checkboxes[i].classList.contains(`${checkClass}_checked`)) {
        params += `${keyword}, `
      } else {
        params = params.replaceAll(`${keyword}, `, '')
      }
  }

  let inputValue = input.value.trim().toLowerCase()

  for (let j = 0; j < count; j++) {

    const title = articleObj[j].title.toLowerCase()
    const keywords = articleObj[j].keywords.join('|').toLowerCase()
    const keywordsReg = new RegExp(keywords)

    if (title.indexOf(inputValue) !== -1 && (params === '' || keywordsReg.test(params))) {
      articleList.append(createArticle(articleObj[j]))
    }

  }

  const rest = articleObj.slice(count)

  const restInput = rest.filter(el => el.title.toLowerCase().indexOf(inputValue) !== -1)
  const restTags = params === '' 
    ? rest
    : rest.filter(el => new RegExp(el.keywords.join('|').toLowerCase()).test(params))

  const restMap = restTags.filter(el => restInput.includes(el))

  if (restMap.length !== 0) {
    if (!articleSection.contains(btn)) {
      articleSection.append(btn)
    }
  } else {
    btn.remove()
  }
}