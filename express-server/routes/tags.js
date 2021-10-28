import fs from 'fs'

const articleList = JSON.parse(fs.readFileSync('./public/articleList.json'))

export default function tagsSearch(req, res, next) {

  let tags = new Set(articleList.map(el => el.keywords).flat())

  console.log(tags)

  res.send(JSON.stringify([...tags]))
}