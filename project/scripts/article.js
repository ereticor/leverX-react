function loadArticles(list, pageList, fullLoad = false) {
  const oldBtn = pageList.parentNode.querySelector('.articles__load')
  if (oldBtn) oldBtn.remove()

  pageList.innerHTML = ''
  
  if (fullLoad || list.length < 8) {
    list.forEach(article => {
      pageList.append(createArticle(article))
    })

    return
  }

  const newBtn = createLoadBtn()

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

function openFullPageArticle({ articles }) {
  const main = document.querySelector('.main')

  main.innerHTML = ''

  let articleWrapper = createFullPageArticle(articles)

  main.append(articleWrapper)
}

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
      getURL(`${server}/getTags`, createPostPage)
      break
    case 'login':
      createLoginPage()//* done
      break
    default:
      if (path === '/project/article.html') {
        getURLthrottle(`${server}/getArticles?tags=`, createFullPageSearch)
      } else {
        let page = (hash.match(/(?<=page=)(.*?)(?=&|$)/) || 0)[0]
        getURL(`${server}/getTags`, getTags)
        getURLthrottle(`${server}/getArticles?page=${page}&tags=`, searchInput) //! look at this
      }
  }
}