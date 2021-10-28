import fs from 'fs'

import status from '../constants.js'

const articleList = JSON.parse(fs.readFileSync('./public/articleList.json'))

export default function addPost(req, res, next) {

  let newPost = req.body

  newPost._id = generateId()

  newPost.index = articleList[articleList.length - 1].index + 1

  articleList.push(newPost)
  console.log(newPost)
  
  function generateId() {
    function* generateSequence(start = 48, end = 57) {
      for (let i = start; i <= end; i++) yield Math.random() * (end - start) + start
    }
    
    let str = ''
    
    for(let code of generateSequence()) {
      str += String.fromCharCode(code);
    }
    
    return str.split('').sort(el => Math.random() - 0.5).join('')
  }

  let newList = JSON.stringify(articleList, null, 2)
  
  fs.writeFile('./public/articleList.json', newList, 'utf8', sendResp)
  
  function sendResp(data, err) {
    if (err) {
      res.sendStatus(status.internalServerError)
    } else {
      res.sendStatus(status.ok)
    }
  }
}