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

function openFullPageArticle(articleObj) {
  const main = document.querySelector('.main')

  main.innerHTML = ''

  let articleWrapper = createFullPageArticle(articleObj)

  main.append(articleWrapper)
}

function locationResolver(loc) {

  let path = loc.pathname

  let hash = loc.hash

  let server = 'http://localhost:3228'

  let locType = (hash.match(/\w+/) || '')[0]
  switch (locType) {
    case 'getArticle':
      if (path === '/project/article.html') {
        let id = hash.match(/(?<=id=)(.*?)(?=&|$)/)[0] || 1
        getURLthrottle(`${server}/getArticles?index=${id}`, openFullPageArticle) //* done
      } else {

      }
      break
    case 'search':
      if (path === '/project/article.html') {
        let tag = (hash.match(/(?<=tags=)(.*?)(?=&|$)/) || '')[0]
        // let title = (hash.match(/(?<=title=)(.*?)(?=&|$)/) || '')[0]
        getURLthrottle(`${server}/getArticles?tags=${tag}`, createFullPageSearch) //* done
      } else {
        getURLthrottle(`${server}/getArticles?tags=`, searchInput)
      }
      break
    case 'createPost':
      getURLthrottle(`${server}/getTags`, createPostPage)
      // createPostPage() //! will do
      break
    case 'login':
      createLoginPage()//* done
      break
    default:
      if (path === '/project/article.html') {
        getURLthrottle(`${server}/getArticles?tags=`, createFullPageSearch) //* done
      } else {
        getURLthrottle(`${server}/getArticles?tags=`, firstSearch) //? done
      }
  }
}

