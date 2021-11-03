import fs from 'fs'

const articleList = JSON.parse(fs.readFileSync('./public/articleList.json'))

export default function articleSearch(req, res, next) {

  res.type('json')
  
  let params = req.query
  
  let filtered = articleList
  
  if (params.index) {
    filtered = filtered.find(el => el.index == params.index)

    res.send(JSON.stringify({ articles: [filtered], meta: {} }))
    return
  }

  if (params.title) {
    let title = params.title.toLowerCase()

    filtered = filtered.filter(el => el.title.toLowerCase().indexOf(title) !== -1)
  }

  if (params.tags) {
    const tags = params.tags.replaceAll('_', ' ').toLowerCase()

    filtered = tags === ''
    ? filtered
    : filtered.filter(el => new RegExp(el.keywords.join('|').toLowerCase()).test(tags))
  }

  if (params.page) {
    const allPageCount = Math.round(filtered.length / 8)
    filtered = filtered.slice(params.page * 8 , params.page * 8 + 8)
    res.send(JSON.stringify({ articles: filtered, meta: { maxPage: allPageCount } }))
    return  
  }

  res.send(JSON.stringify({ articles: filtered, meta: {} }))
}