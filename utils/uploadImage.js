const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //destination path is relative to project folder
        cb(null, './upload/products')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

exports.productUpload = multer({
    storage: storage,
    limits: {
        files: 1,
        fileSize:10000000
        },
    fileFilter: (req, file, cb)  => {
        if(!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)) {
            return cb(new Error('Picture format is not valid'), false)
        }
       return cb(null, true)
    }
})

exports.upload = multer({storage: storage})

