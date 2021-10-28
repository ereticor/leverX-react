/*____________________________TAGS____________________________*/
function createMultiTags(articleObj, parent, tagServe = false) {

  let tags

  if (tagServe) {
    tags = articleObj
  } else {
    tags = articleObj.keywords 
      ? articleObj.keywords
      : new Set(articleObj.map(el => el.keywords).flat())
  }

  let tagsHTML = [...tags].reduce( (acc, tag) => acc + createTag(tag), '')

  parent.innerHTML = tagsHTML

  let checkboxes = parent.querySelectorAll('.checkbar__input')

  checkboxes.forEach(el => {
    el.addEventListener('click', () => {
      el.parentNode.classList.toggle('checkbar__label_checked')
    })
  })
  
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
    <img class="login__user" src="${userImg}" title="click to log out">
  `

  let postBtn = logInWrapper.querySelector('.login__create')

  postBtn.addEventListener('click', () => {
    window.location = 'article.html#createPost'
  })

  let userProfile = logInWrapper.querySelector('.login__user')

  userProfile.addEventListener('click', () => {
    localStorage.removeItem('logged')
    setTimeout(() => {
      window.location.reload()
    }, 500)
  })

  head.append(logInWrapper)
}

/*____________________________ARTICLES____________________________*/
/**
 * return article node with it's data
 * @param   {array} articleObj  Object from which the node is created
 * @param   {string} type       type of article container for usage in list or section for full-page article
 * @param   {string} fullPage   adds additional information for article if rendered in full-page mode
 * @event                       link to full-page article if rendered in list
 * @event                       link on tag click to search page with predefined tag
 * @return  {nodeElement}       created article node
*/
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
        window.location = `article.html#search?tags=${articleObj.keywords[i].replaceAll(' ', '_')}`
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
function createFullPageSearch(articleObj) {
  const main = document.querySelector('.main')

  let hashTag = (window.location.hash.match(/(?<=tags=)(.*?)(?=&|$)/) || '')[0]

  let tag = hashTag.replaceAll('_', ' ')

  let template = `
    <div class="main__articles__wrapper wrapper main__search__wrapper">
      <section class="main__articles">
        <h3 class="main__articles__head">Searching by tag : ${tag || 'All'}</h3>
        <div class="main__articles__search">
          <input type="search" class="search__input" placeholder="Search for article">
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
    getURLthrottle(`http://localhost:3228/getArticles?tags=${tag}&title=${searchBar.value.trim() || ''}`, searchInput)

    function searchInput(articleObj) {
      loadArticles(articleObj, pageList, true)
    }
  }

  searchSingleTag()

}

/**
 * renders post page with form for new article creation on server
 * @param   {array} tags        array for creation of tags wrapper
 * @event                       input file checker for images preview
 * @event                       add story button for creating new subTitle
 * @event                       cancel & submit buttons for form sending
 * @override                    replaces footer with it's own for form
 * @return  {nodeElement}       created article node
*/
function createPostPage(tags) {
  const main = document.querySelector('.main')

  let postTemplate = `
  <div class="main__create__wrapper wrapper">
    <form class="main__create">
      <label class="create__cover__wrapper">
        <input type="file" class="create__cover" accept="image/*" required>
        <img src="#" alt="uploaded" class="create__preview">
        <span>+</span> Add Cover
      </label>
      <h6 class="create__head">Enter the title of your article</h6>
      <input type="text" class="create__title create__text" placeholder="Enter Title" required>
      <div class="create__sub__wrapper">
      </div>
      <h6 class="create__head">Add tag information</h6>
      <div class="create__tags"></div>
    </form>
  </div>
  `

  main.innerHTML = postTemplate

  let fileInput = main.querySelector('.create__cover')

  let filePreview = main.querySelector('.create__preview')

  fileInput.addEventListener('change', function() {
    preview(this)
  })

  function preview(input) {
    let reader = new FileReader()

    reader.readAsDataURL(input.files[0])

    reader.addEventListener('load', () => {
      filePreview.src = reader.result
      filePreview.classList.add('show')

      filePreview.parentElement.classList.add('show')
    })
  }

  let subWrapper = main.querySelector('.create__sub__wrapper')

  createStory()

  function createStory() {
    let subStory = document.createElement('div')
    subStory.classList.add('create__sub__story')
  
    let subTemplate = `
      <h6 class="create__head">Enter the subtitle of your article</h6>
      <input type="text" class="create__sub create__text" placeholder="Enter Subtitle" required>
      <h6 class="create__head">Tell your story...</h6>
      <textarea class="create__area" rows="25" required></textarea>
      <button class="create__btn btn">Add new block</button>
    `

    subStory.innerHTML = subTemplate

    subWrapper.append(subStory)

    let addBtn = subStory.querySelector('.create__btn')

    addBtn.addEventListener('click', changeStatus)

    function changeStatus() {

      if (!subStory.nextElementSibling) {
        createStory()
        addBtn.classList.add('remove__story')
        addBtn.innerText = 'Remove next block'
      } else {
        if (subWrapper.lastElementChild === subStory.nextElementSibling) {
          addBtn.classList.remove('remove__story')
          addBtn.innerText = 'Add new block'
        }
        subStory.nextElementSibling?.remove()
      }

    }

  }

  let tagsWrapper = main.querySelector('.create__tags')

  createMultiTags(tags, tagsWrapper, true)

  const foot = document.querySelector('.foot__wrapper')
  foot.remove()

  const form = main.querySelector('.main__create')

  let formFoot = document.createElement('div')
  formFoot.classList.add('form__foot')

  formFoot.innerHTML = `
    <button class="btn btn_cancel">Cancel</button>
    <button class="btn btn_submit" type="submit">Publish</button>
  `

  let cancelBtn = formFoot.querySelector('.btn_cancel')

  cancelBtn.addEventListener('click', () => {
    window.location = 'index.html'
  })

  form.append(formFoot)

  form.addEventListener('submit', (e) => {

    e.preventDefault()

    if (form.querySelectorAll('.checkbar__label_checked').length > 1) {

      let newPost = createPOST(form)
  
      let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newPost
      }
  
      getURL(`http://localhost:3228/createPost`, formStatus, options)

      function formStatus() {
        alert('success')
        setTimeout(() => {
          window.location.reload
        }, 500)
      }
    }
  })


  function createPOST(form) {
    let obj = {

      title: form.querySelector('.create__title').value.trim(),
  
      content: [],
  
      picture: filePreview.src,
  
      author: 'some guy',
  
      date: Date.now(),
  
      keywords: []

    }

    let subTitles = form.querySelectorAll('.create__sub')
    let subTexts = form.querySelectorAll('.create__area')

    for (let i = 0; i < subTitles.length; i++) {
      obj.content.push(
        {
          head: subTitles[i].value.trim(),
          text: [subTexts[i].value.trim()]
        }
      )
    }

    let tags = form.querySelectorAll('.checkbar__label_checked')
  
    tags.forEach(tag => obj.keywords.push(tag.innerText.replaceAll(' ', '_')))

    return JSON.stringify(obj)

  }

}

/**
 * renders log in page with form
 * @param                       no parameters required
 * @event  inputs checker for email & password
 * @event  checkbox for showing/hiding password
 * @override                    replaces main content in index.html with it's own
*/
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

    e.preventDefault()
    
    let check = (el) => el.parentElement.classList.contains('form_success')

    if (check(mailInput) && check(passInput)) {
      logIn(mailInput.value, passInput.value)
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
}