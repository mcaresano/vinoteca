module.exports = function(req,res,next){

    if(req.session.usuarioLogueado !== undefined){
        res.redirect("/");
    }
    next()
}