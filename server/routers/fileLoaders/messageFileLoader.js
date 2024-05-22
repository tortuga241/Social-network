const multer = require('multer')
const path = require('path')
const express = require('express')
const fs = require('fs')

const router = express.Router()

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination(req, file, cb){
    cb(null, path.join(__dirname, '..', 'static', 'messageFiles'))
  },
  filename(req, file, cb){
    const uniqueFileName = '..png'
    cb(null, `${uniqueFileName}`)
  }
});

const types = ['image/png', 'image/jpeg', 'image/jpg']
const fileFilter =  (req,file,cb) => {
  if(types.includes(file.mimetype)){
    cb(null, true)
  }else{
    cb(null, false)
  }
}

const fileMiddleware = multer({storage, fileFilter});

router.post('/messageFileUpload', fileMiddleware.single('file'), (req, res) => {
  console.log(`router.post: ${req.body.messageId}`)
    try {
      if(req.file){
        const oldPath = path.join(__dirname, '..', 'static', 'messageFiles', '..png')
        const newPath = path.join(__dirname, '..', 'static', 'messageFiles', `${req.body.messageId}.png`)

        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error('Ошибка при переименовании файла:', err);
            res.json({status:400, error: 'Message File Loader: rename error'})
            fs.unlink(oldPath)
            res.end()
            return
          } else {
            console.log('Файл успешно переименован.');
          }
        });
        res.json({status: '200'})
      }
    } catch (e) {
      console.log(`Message File Loader Error: ${e}`)
      res.json({status: 400, error: `Message File Loader Error: ${e}`})
      res.end()
      return
    }
});

module.exports = router
