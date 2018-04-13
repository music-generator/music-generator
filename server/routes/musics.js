const express = require('express')
const router = express.Router()
const multer = require('multer')
const {getAll,getOne,add,update,remove,addComment,uploadFile, getLike} =  require('../controllers/music.controller')
const {sendFileGCS} = require('../middleware/uploadGCS')
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024
  }
})
router.get('/',getAll)
router.get('/:id',getOne)
router.post('/add',add)
router.put('/update/:id',update)
router.delete('/delete/:id',remove)
router.post('/addComment/:id',addComment)
router.put('/getLike/:id',getLike)
// router.post('/upload', upload.single('music'),sendFileGCS, uploadFile)
router.post('/upload', upload.fields([{name: 'music', maxCount: 1},{name: 'picture', maxCount: 1}]),sendFileGCS, uploadFile)


module.exports = router