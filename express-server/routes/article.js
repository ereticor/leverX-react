// window.location = `article.html#search?tag=${articleObj.keywords[i]}`
// link.href = `article.html#article?id=${articleObj.index}`

import fs from 'fs'

const articleList = JSON.parse(fs.readFileSync('./public/articleList.json'))

export default function articleSearch(req, res, next) {

  res.type('json')
  
  let params = req.query
  
  let filtered = articleList
  
  if (params.index) {
    filtered = filtered.find(el => el.index == params.index)

    res.send(JSON.stringify(filtered))
    return
  }

  if (params.title) {
    let title = params.title.toLowerCase()

    filtered = filtered.filter(el => el.title.toLowerCase().indexOf(title) !== -1)
  }

  // if (params.singleTag) {
  //   filtered = filtered.filter(el => new RegExp(el.keywords.join('|').toLowerCase()).test(params.singleTag.toLowerCase()))
  //   res.send(JSON.stringify(filtered))
  //   return
  // }

  if (params.tags) {
    const tags = params.tags.replaceAll('_', ' ').toLowerCase()

    filtered = tags === ''
    ? filtered
    : filtered.filter(el => new RegExp(el.keywords.join('|').toLowerCase()).test(tags))
  }

  res.send(JSON.stringify(filtered))
}