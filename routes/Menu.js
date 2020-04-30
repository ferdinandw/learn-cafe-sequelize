const express = require('express')
const router = express.Router()

const menuController = require('./../controllers/Menu')

router.get('/show', menuController.getData)
router.post('/create', menuController.createData)
router.get('/show/:menuId', menuController.getDataById)
router.delete('/delete/:menuId', menuController.deleteData)
router.put('/edit/:menuId', menuController.updateData)

module.exports = router