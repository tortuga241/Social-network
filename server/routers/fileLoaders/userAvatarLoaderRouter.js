const multer = require('multer')
const path = require('path')
const express = require('express')
const fs = require('fs')

const UsersTab = require('../../database/users')

const router = express.Router()

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination(req, file, cb){
    cb(null, path.join(__dirname, '..', '..','static', 'userAvatars'))
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

router.post('/userAvatarUpload', fileMiddleware.single('avatar'), async(req, res) => {
  console.log(`router.post: ${req.body.userName}`)
    try {
      console.log();
      if(req.file){
        console.log(`!!!!!`);
        const oldPath = path.join(__dirname, '..', '..', 'static', 'userAvatars', '..png')
        const newPath = path.join(__dirname, '..', '..', 'static', 'userAvatars', `${req.body.userName}.png`)

        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error('Ошибка при переименовании файла:', err);
            res.json({status:400, error: 'Avatar Loader: rename error'})
            fs.unlink(oldPath)
            res.end()
            return
          } else {
            console.log('Файл успешно переименован.');
          }
        });
        
        await UsersTab.update(
          { avatarPath: `userAvatars/${req.body.userName}.png` },
          { where: { login: req.body.userName } }
        )
        res.json({status: '200'})
      }
    } catch (e) {
      console.log(`Background Loader Error: ${e}`)
      res.json({status: 400, error: `Avatar Loader Error: ${e}`})
      res.end()
      return
    }
});

module.exports = router