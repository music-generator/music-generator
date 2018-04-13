const express = require('express')
const router = express.Router()
const multer = require('multer')
const {getAll,getOne,add,update,remove,addComment,uploadFile, getLike} =  require('../controllers/music.controller')
const {sendFileGCS} = require('../middleware/uploadGCS')
const {loginAuth} = require('../middleware/auth')
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024
  }
})
router.get('/',getAll)
router.get('/:id', loginAuth, getOne)
router.post('/add', loginAuth, add)
router.put('/update/:id', loginAuth, update)
router.delete('/delete/:id', loginAuth, remove)
router.post('/addComment/:id', loginAuth, addComment)
router.put('/getLike/:id', loginAuth, getLike)
// router.post('/upload', upload.single('music'),sendFileGCS, uploadFile)
router.post('/upload', loginAuth, upload.fields([{name: 'music', maxCount: 1},{name: 'picture', maxCount: 1}]),sendFileGCS, uploadFile)


module.exports = router
