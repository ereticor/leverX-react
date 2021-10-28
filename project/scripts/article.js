function loadArticles({articles, meta}, pageList, fullLoad = false) {
  const oldBtn = pageList.parentNode.querySelector('.articles__load')
  if (oldBtn) oldBtn.remove()
  
  articles.forEach(article => {
    pageList.append(createArticle(article))
  })

  if (fullLoad) {
    return
  }

  const newBtn = createLoadBtn()

  function loadOnPage() {
     ++page
     getArticles(false)
  }

  if (page + 1 >= meta.maxPage)  {
    newBtn.remove()
  } else if (!pageList.parentNode.contains(newBtn)) {
    pageList.parentNode.append(newBtn)
  }

  newBtn.addEventListener('click', loadOnPage)
}

function openFullPageArticle({ articles }) {
  const main = document.querySelector('.main')

  main.innerHTML = ''

  let articleWrapper = createFullPageArticle(articles)

  main.append(articleWrapper)
}

['load', 'hashchange'].forEach(el => {

  window.addEventListener(el, () => {

  const location = window.location

  if (location) {
    locationResolver(location)
  }

  })

})

function locationResolver(loc) {

  let path = loc.pathname

  let hash = loc.hash

  let server = 'http://localhost:3228'

  let locType = (hash.match(/\w+/) || '')[0]
  switch (locType) {
    case 'getArticle':
        let id = hash.match(/(?<=id=)(.*?)(?=&|$)/)[0] || 1
        getURL(`${server}/getArticles?index=${id}`, openFullPageArticle)
      break
    case 'search':
        let tag = (hash.match(/(?<=tags=)(.*?)(?=&|$)/) || '')[0]
        getURLthrottle(`${server}/getArticles?tags=${tag}`, createFullPageSearch)
      break
    case 'createPost':
      if (!checkLogged()) {
        window.location = 'index.html'
        break
      }
      getURL(`${server}/getTags`, createPostPage)
      break
    case 'login':
      if (checkLogged()) {
        window.location = 'index.html'
        break
      }
      createLoginPage()//* done
      break
    default:
      if (path === '/project/article.html') {
        getURLthrottle(`${server}/getArticles?tags=`, createFullPageSearch)
      } else {
        getURL(`${server}/getTags`, getTags)
        getURLthrottle(`${server}/getArticles?page=${page}&tags=`, searchInput) //! look at this
      }
  }
}