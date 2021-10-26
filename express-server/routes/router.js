import express from 'express'
import article from './article.js'
import sign from './sign.js'

const router = express.Router()

router.get('/getArticles', article)
router.get('/sign', sign)

export default router