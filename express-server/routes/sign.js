import fs from 'fs'

const usersList = JSON.parse(fs.readFileSync('./public/usersList.json'))

export default function sign(req, res, next) {
  console.log(req.query)
  console.log(usersList)
  res.send(usersList)
}