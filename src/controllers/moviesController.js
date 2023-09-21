const db = require('../database/models')

module.exports={
    list: (req,res)=>{

        db.movie.findAll()
        .then(movies => {
            res.render('moviesList', {movies: movies})
        }) 
    },
    detail: (req,res)=>{

        db.movie.findByPk(req.params.id)
        .then(movie => {
            res.render('moviesDetail', {movie: movie})
        }) 
    },
    new: (req,res)=>{

        db.movie.findAll({
            order:[
                ['release_date','DESC']
            ]
        })
        .then(movies => {
            res.render('newestMovies', {movies: movies})
        }) 
    },
    recomended: (req,res)=>{

        db.movie.findAll({
            order:[
                ['rating','DESC']
            ],
            limit: 5
        })
        .then(movies => {
            res.render('newestMovies', {movies: movies})
        }) 
    }

}