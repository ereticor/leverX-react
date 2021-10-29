import fs from 'fs'
import status from '../constants.js'

const usersList = JSON.parse(fs.readFileSync('./public/usersList.json'))

export default function sign(req, res, next) {

  res.type('json')

  const { email, password } = req.query

  const user = usersList.find(el => el.email === email)

  if (!user) {
    res.sendStatus(status.noSuch)
  }
  
  return user?.password === password
    ? res.send(JSON.stringify(user))
    : res.sendStatus(status.unauthorized)
}