const multer = require('multer')
const Storage = require('@google-cloud/storage')
const config = {
  cloud_bucket: 'music-generator',
  project_id: 'phase2project'
}

const storage = Storage({
  projectId: config.project_id,
  keyFilename: 'phase2project-0dbbeaee5689.json'
})

const bucket = storage.bucket(config.cloud_bucket)

function getPublicUrl (filename) {
  return `https://storage.googleapis.com/${config.cloud_bucket}/${filename}`
}

function sendFileGCS (req, res, next) {
  console.log('===masuk sendfilegcs', req.files)
  if(!req.files) {
    return next('upload file could be failed!')
  }
  const promiseMusic = new Promise((resolve, reject)=>{
    console.log("split=====",req.files.music[0].originalname)

    const gcsname = Date.now() + '.' + req.files.music[0].originalname.split('.').pop()
    const file = bucket.file(gcsname)
  
    const stream = file.createWriteStream({
      metadata: {
        contentType: req.files.music[0].mimetype
      }
    })
    stream.on('error', (error) => {
      console.log('masuk stream erorr')
      req.files.music[0].cloudStorageError = error
      reject(error)
    })
  
    stream.on('finish', () => {
      console.log('masuk stream finish')
      req.files.music[0].cloudStorageObject = gcsname
      file.makePublic().then(()=>{
        req.files.music[0].cloudStoragePublicUrl = getPublicUrl(gcsname)
        resolve()
      })
    })
  
    stream.end(req.files.music[0].buffer)
  })
  const promisePicture = new Promise((resolve, reject)=>{

    const gcsname = Date.now() + '.' + req.files.picture[0].originalname.split('.').pop()
    const file = bucket.file(gcsname)
  
    const stream = file.createWriteStream({
      metadata: {
        contentType: req.files.picture[0].mimetype
      }
    })
    stream.on('error', (error) => {
      console.log('masuk stream erorr')
      req.files.picture[0].cloudStorageError = error
      reject(error)
    })
  
    stream.on('finish', () => {
      console.log('masuk stream finish')
      req.files.picture[0].cloudStorageObject = gcsname
      file.makePublic().then(()=>{
        req.files.picture[0].cloudStoragePublicUrl = getPublicUrl(gcsname)
        resolve()
      })
    })
  
    stream.end(req.files.picture[0].buffer)
  })

  Promise.all([promiseMusic, promisePicture]).then(allready=>{
    console.log('masuk promise all======')
    next()
    })
    .catch(err=>{
      next(err)
  })
}

module.exports = {
  sendFileGCS
}