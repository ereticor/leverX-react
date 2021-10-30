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

['load', 'hashchange'].forEach(el => {

  window.addEventListener(el, () => {

  const location = window.location

  if (location) {
    locationResolver(location)
  }

  })

})

/**
 * calls functions based on page URL and hash
 * @param   {string} loc        window.location for path resolving
 * @event                       called functions based on window load & hash change
 * @override                    redirects unauthorized users from createPost page
 * @override                    redirects logged users from log in page
*/
function locationResolver(loc) {

  let path = loc.pathname

  let hash = loc.hash

  let locType = (hash.match(/\w+/) || '')[0]
  switch (locType) {
    case 'getArticle':
        let id = hash.match(/(?<=id=)(.*?)(?=&|$)/)[0] || 1
        getURL(`getArticles?index=${id}`, createFullPageArticle)
      break
    case 'search':
        let tag = (hash.match(/(?<=tags=)(.*?)(?=&|$)/) || '')[0]
        getURLthrottle(`getArticles?tags=${tag}`, createFullPageSearch)
      break
    case 'createPost':
      if (!checkLogged()) {
        window.location = 'index.html'
        break
      }
      getURL(`getTags`, createPostPage)
      break
    case 'login':
      if (checkLogged()) {
        window.location = 'index.html'
        break
      }
      createLoginPage()
      break
    default:
      if (path === '/project/article.html') {
        getURLthrottle(`getArticles?tags=`, createFullPageSearch)
      } else {
        getURL(`${server}/getTags`, getTags)
        getURLthrottle(`getArticles?page=${page}&tags=`, searchInput)
      }
  }
}