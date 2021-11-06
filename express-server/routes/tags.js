import fs from 'fs'

const articleList = JSON.parse(fs.readFileSync('./public/articleList.json'))

export default function tagsSearch(req, res, next) {

  res.type('json')

  let tags = new Set(articleList.map(el => el.keywords).flat())

  res.send(JSON.stringify({ tags: [...tags], meta: {} }))
}