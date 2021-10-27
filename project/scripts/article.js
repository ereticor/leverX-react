function loadArticles(list, pageList, fullLoad = false) {
  const oldBtn = pageList.parentNode.querySelector('.articles__load')
  if (oldBtn) oldBtn.remove()

  pageList.innerHTML = ''
  
  if (fullLoad) {
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

let COUNTER = 0

function search(input, articleObj, checkClass, singleTag = false) {

  console.log(++COUNTER)

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

function openFullPageArticle(articleObj) {
  const main = document.querySelector('.main')

  main.innerHTML = ''

  let articleWrapper = createFullPageArticle(articleObj)

  main.append(articleWrapper)
}

function locationResolver(loc) {

  console.log(loc)

  let path = loc.pathname

  let hash = loc.hash

  let locType = hash.match(/\w+/)[0]
  switch (locType) {
    case 'getArticle':
      if (path === '/article.html') {
        let id = hash.match(/\d+/) || 1
        getURL(`http://localhost:3228/getArticles?index=${id}`, openFullPageArticle) //* done
      } else {

      }
      break
    case 'search':
      if (path === '/article.html') {
        let tag = (hash.match(/\w+$/) || '')[0]
        getURL(`http://localhost:3228/getArticles?tags=${tag}`, createFullPageSearch) //? done
      } else {
        
      }
      break
    case 'createPost':
      createPostPage() //! will do
      break
    case 'login':
      createLoginPage()//* done
      break
    default:
      getURL(`http://localhost:3228/getArticles?tags=`, createFullPageSearch) //? done
  }
}