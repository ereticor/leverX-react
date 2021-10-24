function createMultiTags(articleObj, parent) {

  // let tags = new Set(articleObj.reduce((acc, next) => acc.concat(next.keywords), []))
  let tags = articleObj.keywords 
    ? articleObj.keywords
    : new Set(articleObj.map(el => el.keywords).flat())

  let tagsHTML = [...tags].reduce( (acc, tag) => acc + createTag(tag), '')

  parent.innerHTML = tagsHTML
  
}

function createTag(text) {

  let tag = `<label class="checkbar__label">
               <input class="checkbar__input" type="checkbox">${text}
             </label> `

  return tag
}

function createLoadBtn() {
  let btn = document.createElement('button')
  btn.classList.add('articles__load', 'btn')
  btn.innerText = "Load more"

  return btn;
}

function loadArticles(list, pageList, fullLoad = false) {
  const oldBtn = pageList.parentNode.querySelector('.articles__load')
  if (oldBtn) oldBtn.remove()

  if (fullLoad) {
    list.forEach(article => {
      pageList.append(createArticle(article))
    })

    return
  }

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
  img.src = articleObj.picture
  
  let cap = document.createElement('figcaption')
  cap.classList.add('item__cap')
  
  let capHead = document.createElement('h6')
  capHead.classList.add('cap__head')
  capHead.innerHTML = articleObj.title
  
  let capText = document.createElement(fullPage ? 'div' : 'p')

  let link
  
  if (!fullPage) {
    capText.classList.add('cap__text')
    capText.title = articleObj.content[0].text
    capText.innerHTML = articleObj.content[0].text

    link = document.createElement('a')
    link.href = `article.html#article?id=${articleObj.index}`

    link.append(figure)

    article.append(link)
  }

  cap.append(capHead, capText)
  
  figure.append(img, cap)  

  if (fullPage) {
    capText.classList.add('cap__content')
    createContent(articleObj, capText)

    let capCred = document.createElement('div')
    capCred.classList.add('cap__credits')

    let author = document.createElement('p')
    author.classList.add('credits__author')
    author.innerText = articleObj.author

    let date = document.createElement('time')
    date.classList.add('credits__date')
    date.innerText = dateToHuman(articleObj.date)

    capCred.append(author, date)

    cap.append(capCred)

    let tags = document.createElement('div')
    tags.classList.add('item__tags')

    createMultiTags(articleObj, tags)

    for (let i = 0; i < tags.children.length; i++) {
      tags.children[i].addEventListener('click', () => {
        window.location = `article.html#search?tag=${articleObj.keywords[i]}`
      })
    }

    figure.append(tags)

    article.append(figure)
  }
  
  return article


  function createContent(articleObj, parent) {
    let contentArr = articleObj.content
    for (let i = 0; i < contentArr.length; i++) {
      let head = document.createElement('h6')
      head.innerText = contentArr[i].head
      head.classList.add('content__head')
      parent.append(head)

      contentArr[i].text.forEach(el => {
        let text = document.createElement('p')
        text.classList.add('content__text')
        text.innerText = el

        parent.append(text)
      })
      
    }
  }

  function dateToHuman(stamp) {

    const formatter = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    return formatter.format(stamp)
  }
}

function search(input, articleObj, checkClass, singleTag = false) {

  let filtered = articleObj

  if (input.value.trim()) {

    let inputValue = input.value.trim().toLowerCase()

    filtered = filtered.filter(el => el.title.toLowerCase().indexOf(inputValue) !== -1)
  }

  if (checkClass) {
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
  } else if (singleTag) {
    filtered = filtered.filter(el => new RegExp(el.keywords.join('|').toLowerCase()).test(singleTag.toLowerCase()))
  }

  return filtered

}

function createFullPageArticle(articleObj) {
  
  let wrapper = document.createElement('div')
  wrapper.classList.add('main__paper__wrapper', 'wrapper')
  
  let section = document.createElement('section')
  section.classList.add('main__paper')
  
  let pagination = document.createElement('div')
  pagination.classList.add('paper__pagination')

  let paginationContent = `
    <div class="paper__pagination">
      <a href="index.html" class="pagination__link">
        Home page
      </a>
      <span>
        <span>&gt;</span>Article
      </span>
    </div>`

  pagination.innerHTML = paginationContent
    
  let article = createArticle(articleObj, 'article', true)
  
  section.append(pagination, article)

  wrapper.append(section)
  
  return wrapper
}

function openFullPageArticle(id) {

  let articleWrapper = createFullPageArticle(articles.find(el => el.index === id))

  main.innerHTML = ''

  main.append(articleWrapper)
}

function createFullPageSearch(tag) {
  let template = `
    <div class="main__articles__wrapper wrapper main__search__wrapper">
      <section class="main__articles">
        <h3 class="main__articles__head">Searching by tag : ${tag || 'All'}</h3>
        <div class="main__articles__search">
          <input type="search" name="" id="" class="search__input" placeholder="Search for article">
        </div>
        <ul class="articles__list">
        </ul>
      </section>
    </div>`

  main.innerHTML = template

  let searchBar = main.querySelector('.search__input')

  let pageList = main.querySelector('.articles__list')

  searchBar.addEventListener('input', searchSingleTag)

  function searchSingleTag() {
    let filtered = search(searchBar, articles, null, tag)
    loadArticles(filtered, pageList, true)
  }

  searchSingleTag()

}

function locationResolver(loc) {

  let locType = loc.match(/\w+/)[0]
  switch (locType) {
    case 'article':
      let id = loc.match(/\d+/) || 1
      openFullPageArticle(+id)
      break
    case 'search':
      let tag = (loc.match(/\w+$/) || '')[0]
      createFullPageSearch(tag)
      break
    default:
      createFullPageSearch('')
  }
}