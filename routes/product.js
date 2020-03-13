const { Router } = require('express');
const controllers = require('../controllers/product')
let utils = require('../utils/uploadImage').productUpload
const router = Router();

router.post('/product', utils.single('imageUrl'), controllers.createProduct)
router.get('/products', controllers.getAllProducts)
router.patch('/product/:id', controllers.editProduct)
router.get('/product/:id/delete', controllers.deleteProduct)
router.get('/product/:id', controllers.getAProduct)



module.exports = router