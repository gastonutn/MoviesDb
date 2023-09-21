const db = require('../database/models')

module.exports={
    list: (req,res)=>{

        db.genre.findAll()
        .then(genres => {
            res.render('genresList', {genres})
        }) 
    },
    detail: (req,res)=>{

        db.genre.findByPk(req.params.id)
        .then(genres => {
            res.render('genresDetail', {genres})
        }) 
    } 
    }

