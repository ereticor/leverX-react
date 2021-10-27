/*____________________________TAGS____________________________*/
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

/*____________________________BUTTONS____________________________*/
function createLoadBtn() {
  let btn = document.createElement('button')
  btn.classList.add('articles__load', 'btn')
  btn.innerText = "Load more"

  return btn;
}

function createLoginHeader() {

  let userImg = JSON.parse(localStorage.getItem('logged')).picture

  let head = document.querySelector('.head')

  let headBtn = head.querySelector('.head__btn')

  headBtn?.remove()

  let logInWrapper = document.createElement('div')
  logInWrapper.classList.add('head__login')

  logInWrapper.innerHTML = `
    <button class="head__btn login__create">Create a Post</button>
    <img class="login__user" src="${userImg}">
  `

  head.append(logInWrapper)
}

/*____________________________ARTICLES____________________________*/
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
    link.href = `article.html#getArticle?id=${articleObj.index}`

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

/*____________________________FULL PAGE____________________________*/
function createFullPageSearch(tag) {
  const main = document.querySelector('.main')

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

function createPostPage() {
  const main = document.querySelector('.main')

  let postTemplate = `
  <div class="main__create__wrapper">
    <section class="main__create">
      <input type="file" name="" id="" class="create__cover">
      <h6 class="create__head">Enter the title of your article</h6>
      <input type="text" name="" id="" class="create__title create__text">
      <div class="create__sub__wrapper">
      </div>
      <h6 class="create__head">Add tag information</h6>
      <div class="create__tags"></div>
    </section>
  </div>
  `

  main.innerHTML = postTemplate

  let subWrapper = main.querySelector('.create__sub__wrapper')

  let subTemplate = `
    <h6 class="create__head">Enter the subtitle of your article</h6>
    <input type="text" name="" id="" class="create__sub create__text">
    <h6 class="create__head">Tell your story...</h6>
    <input type="text" name="" id="" class="create__text">
    <button class="create__btn btn">Add new block</button>
  `
  
  subWrapper

}

function createLoginPage() {
  const main = document.querySelector('.main')

  let headBtn = document.querySelector('.head__sign')

  headBtn?.remove()

  let template = `
  <div class="main__login__wrapper wrapper">
    <section class="main__login">
      <h3 class="main__login__head">Welcome to course</h3>
      <form class="main__login__form">
        <div class="form__input__wrapper">
          <input class="form__mail form__input" type="email" placeholder="E-mail" required>
        </div>
        <div class="form__input__wrapper">
          <input class="form__password form__input" type="password" placeholder="password" required>
        </div>
        <label class="form__show">
          <input type="checkbox">
          show password
        </label>
        <button class="form__submit" type="submit">login</button>
      </form>
    </section>
  </div>`

  main.innerHTML = template

  let form = main.querySelector('.main__login__form')

  let mailInput = form.querySelector('.form__mail')
  let passInput = form.querySelector('.form__password');

  [mailInput, passInput].forEach(el => {
    el.addEventListener('input', () => checkInput(el))
  })

  let checkbox = form.querySelector('.form__show input')
  checkbox.addEventListener('click', () => {

    if (passInput.type === 'password') {
      passInput.type = 'text'
    } else {
      passInput.type = 'password'
    }
  })


  form.method = 'GET'
  form.addEventListener('submit', (e) => {
    let check = (el) => el.parentElement.classList.contains('form_success')

    console.log(1)

    if (check(mailInput) && check(passInput)) {
      logIn(mailInput.value, passInput.value)
    } else {
      e.preventDefault()
    }
  })

  function checkInput(input) {

    const inputValue = input.value.trim()
  
    if(inputValue === '') {
      setErrorFor(input, `${input.type} cannot be blank`)
    } else {
      setSuccessFor(input)
    }
  
    function setErrorFor(input, message) {
      const formControl = input.parentElement
      formControl.classList.add('form_error')
      formControl.classList.remove('form_success')
      formControl.setAttribute('data-message', message)
    
      formControl.classList.add('form_light')
      setTimeout(() => {
        formControl.classList.remove('form_light')
      }, 1000);
    }
    
    function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.classList.add('form_success')
      formControl.classList.remove('form_error')
    }
  
  }
  // form.action = getURL('http://localhost:3228/sign?email=nicholswyatt@medicroix.com&password=DONJS5X6SXXF6H1BNWUMO4TVHND52784nlYHe', saveUser)
}