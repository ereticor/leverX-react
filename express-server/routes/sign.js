import usersList from '../public/usersList.js'

export default function sign(req, res, next) {
  console.log(req.query)
  console.log(usersList)
  res.send(usersList)
}