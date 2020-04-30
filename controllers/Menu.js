const Menu = require('./../models/Menu')

module.exports = ({
    createData: (req, res, next) => {
        Menu
        .create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image
        })
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
    },
    getData : (req,res) => {
        Menu
        .findAll()
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
    },
    getDataById: (req,res) => {
        Menu
        .findOne({where :{ id : req.params.menuId}})
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
    },
    deleteData: (req,res) => {
        Menu
        .destroy(({where : {id: req.params.menuId}}))
        .then(resp => res.json({status : "sukses", resp}))
        .catch(err => res.json(err))
    },
    updateData : (req, res) => {
        Menu
        .update({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image
        },{where: {id: req.params.menuId}})
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
    }
})