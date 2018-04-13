const express = require('express')
const router = express.Router()

const {getAll,getOne,add,update,remove,addComment,getLike} =  require('../controllers/music.controller')

router.get('/',getAll)
router.get('/:id',getOne)
router.post('/add',add)
router.put('/update/:id',update)
router.delete('/delete/:id',remove)
router.post('/addComment/:id',addComment)
router.put('/getLike/:id',getLike)

module.exports = router