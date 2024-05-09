const multer = require('multer')
const path = require('path')
const express = require('express')
const fs = require('fs')

const router = express.Router()

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination(req, file, cb){
    cb(null, path.join(__dirname, '..', 'static', 'userAvatar'))
  },
  filename(req, file, cb){
    const uniqueFileName = req.body.userName + path.extname(file.originalname);
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

router.post('/userAvatarUpload', fileMiddleware.single('avatar'), (req, res) => {
  console.log(`router.post: ${req.body.userName}`)
    try {
      if(req.file){
        const oldPath = path.join(__dirname, '..', 'static', 'userAvatar', 'undefined.png')
        const newPath = path.join(__dirname, '..', 'static', 'userAvatar', `${req.body.userName}.png`)

        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error('Ошибка при переименовании файла:', err);
          } else {
            console.log('Файл успешно переименован.');
          }
        });
        res.json({status: '200'})
      }
    } catch (e) {
      console.log(`storageRouter Error: ${e}`)
    }
});

module.exports = router

// const { dirname, join } = require('path')
// const { fileURLToPath } = require('url')
// const __dirname = dirname(fileURLToPath(import.meta.url));