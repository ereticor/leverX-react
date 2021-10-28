import express, { urlencoded } from 'express'
import article from './article.js'
import tags from './tags.js'
import sign from './sign.js'
import post from './post.js'

const router = express.Router()

router.get('/getArticles', article)
router.get('/getTags', tags)
router.get('/sign', sign)
router.post('/createPost', post)

export default router