import express from 'express'
import article from './article.js'
import tags from './tags.js'
import sign from './sign.js'

const router = express.Router()

router.get('/getArticles', article)
router.get('/getTags', tags)
router.get('/sign', sign)

export default router