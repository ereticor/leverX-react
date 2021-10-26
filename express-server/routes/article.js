// window.location = `article.html#search?tag=${articleObj.keywords[i]}`
// link.href = `article.html#article?id=${articleObj.index}`

import articleList from '../public/articleList.js'

export default function articleSearch(req, res, next) {
  // console.log(req.query)
  // console.log(articleList)
  let x = Date.now()

  let params = req.query

  let filtered = articleList

  if (params.index) {
    filtered = filtered.find(el => el.index == params.index)
    console.log(1)
    res.send(JSON.stringify(filtered))
    return
  }

  if (params.title) {
    let title = params.title.toLowerCase()

    filtered = filtered.filter(el => el.title.toLowerCase().indexOf(title) !== -1)
  }

  if (params.singleTag) {
    filtered = filtered.filter(el => new RegExp(el.keywords.join('|').toLowerCase()).test(params.singleTag.toLowerCase()))
    console.log(2)
    res.send(JSON.stringify(filtered))
    return
  }

  if (params.tags) {
    const tags = params.tags.replaceAll('+', ', ')

    filtered = tags === ''
    ? filtered
    : filtered.filter(el => new RegExp(el.keywords.join('|').toLowerCase()).test(tags))
  }

  res.send(JSON.stringify(filtered))
}