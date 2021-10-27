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

function openFullPageArticle(id) {

  let articleWrapper = createFullPageArticle(articles.find(el => el.index === id))

  main.innerHTML = ''

  main.append(articleWrapper)
}

function locationResolver(loc) {

  let locType = loc.match(/\w+/)[0]
  switch (locType) {
    case 'getArticle':
      let id = loc.match(/\d+/) || 1
      openFullPageArticle(+id)
      break
    case 'search':
      let tag = (loc.match(/\w+$/) || '')[0]
      createFullPageSearch(tag)
      break
    case 'login':
      createLoginPage()
      break
    default:
      createFullPageSearch('')
  }
}