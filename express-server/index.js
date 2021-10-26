import path from 'path'
const __dirname = path.resolve()
import express from 'express'
import {requestTime, logger} from './func.js'

import router from './routes/router.js'

import articleList from './public/articleList.js'

const app = express()
const port = 3228


// app.use(express.static(path.join(__dirname, 'public')))
app.use(requestTime)
app.use(logger)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept')
  next();
});

app.use('/', router)

app.listen(port, (err) => {
  if (err) {
    console.log('You broke my hurt', err)
  } else {
    console.log(`Guess who's back on ${port}`)
    console.log(path.join(__dirname,'public'))
  }
})