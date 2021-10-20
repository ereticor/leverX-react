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

const articleList = document.querySelector('.articles__list')
const loadBtn = document.querySelector('.articles__load')

loadArticles(articles, articleList, loadBtn)

loadBtn.addEventListener('click', () => {
  loadArticles(articles, articleList, loadBtn)
})

function loadArticles(list, pageList, loadBtn) {
  
  let count = pageList.children.length
  
  for (let i = count; i < count + 8 && i < list.length; i++) {
    pageList.append(createArticle(list[i]))
  }
  
  if (pageList.children.length === list.length) {
    loadBtn.classList.add('btn_hidden')
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
  capText.innerHTML = articleObj.summary
  
  cap.append(capHead, capText)
  
  figure.append(img, cap)
  
  article.append(figure)
  
  return article
}


const searchBar = document.querySelector('.search__input')
const checkBoxes = document.querySelectorAll('.checkbar__input')
const articleTitles = articleList.querySelectorAll('.cap__head')

checkBoxes.forEach(el => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('checkbar__label_checked')
  })
})

searchBar.addEventListener('input', searchInput)

function searchInput() {
  search(searchBar, articleTitles, articleList)
}

function search(input, searchList, articleList) {

  let inputValue = input.value.trim().toLowerCase()

  for (let i = 0; i < searchList.length; i++) {

    let title = searchList[i].innerText.toLowerCase()

    if (title.indexOf(inputValue) !== -1) {
      articleList.children[i].classList.remove('hidden')
      continue
    }
    articleList.children[i].classList.add('hidden')
  }
}