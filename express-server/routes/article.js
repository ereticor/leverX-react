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

// window.location = `article.html#search?tag=${articleObj.keywords[i]}`

// link.href = `article.html#article?id=${articleObj.index}`

import articleList from '../public/articleList.js'

export default function articleSearch(req, res, next) {
  // console.log(req.query)
  // console.log(articleList)

  let params = req.query

  let filtered = articleList

  if (params.index) {
    filtered = filtered.find(el => el.index == params.index)
    res.send(JSON.stringify(filtered))
  }

  if (params.singleTag) {
    filtered = filtered.filter(el => new RegExp(el.keywords.join('|').toLowerCase()).test(params.singleTag.toLowerCase()))
    res.send(JSON.stringify(filtered))
  }

  if (params.title) {
    let title = params.title.toLowerCase()

    filtered = filtered.filter(el => el.title.toLowerCase().indexOf(title) !== -1)
  }

  if (params.tags) {
    const tags = params.tags.replaceAll('+', ', ')

    filtered = tags === ''
    ? filtered
    : filtered.filter(el => new RegExp(el.keywords.join('|').toLowerCase()).test(tags))
  }

  res.send(JSON.stringify(filtered))
}