const fs = require('fs');
const path = require('path');
const db = require('../dataBase/models')
const bcrypt= require ('bcrypt');
const {validationResult}= require('express-validator');
const session = require('express-session');


module.exports ={
  login: function(req, res) {
        res.render('login') 
    },
  
  logueado: function(req,res){
    let errors = validationResult(req);
    if(errors.isEmpty()){
          db.Usuarios.findOne({where:{email: req.body.email}})
              .then((usuario)=>{   
                
                  if(bcrypt.compareSync(req.body.pasword, usuario.pasword) == true ){
                      req.session.usuarioLogueado = {
                          id: usuario.id,
                          nombre: usuario.nombre,
                          admin: usuario.administrador,
                          avatar : usuario.avatar
                          }
                          res.redirect ('/');
                  }
                
              })
    }else{
      return res.render("login", { errors: errors.mapped() })
    }  
    
  },
              
  register: function(req, res) {
        res.render('register')         
    },
  
  crear: function (req, res) {
    console.log("ACA ESTA EL VALOR " + req.session.usuarioLogueado) 
    if( typeof req.session.usuarioLogueado != 'undefined'){ 
      db.Usuarios.findOne({ where: { email : req.body.email } })
      .then(function(val){
        if(val !=null){
          res.render('register', {
            errors:
                {msg: "Email ya registrado"},
            })
        }
      })
      let errors = validationResult(req);
      
      if (errors.isEmpty()) {
            db.Usuarios.create({
              apellido :req.body.apellido,
              nombre : req.body.nombre,       
              email : req.body.email,
              avatar : req.files[0].filename,
              administrador : req.body.select,
              pasword : bcrypt.hashSync(req.body.pasword,12),
                }).then(function(user){
                  res.redirect("/")
                })
            } 
       else {
        return res.render("register", { errors: errors.mapped(), old: req.body })
      }
    }else {
      db.Usuarios.findOne({ where: { email : req.body.email } })
      .then(function(val){
        if(val !=null){
          res.render('register', {
            errors:
                {msg: "Email ya registrado"},
            })
        }
      })
      let errors = validationResult(req);
      if (errors.isEmpty()) {
            db.Usuarios.create({
              apellido :req.body.apellido,
              nombre : req.body.nombre,       
              email : req.body.email,
              avatar : req.files[0].filename,
              administrador : 0,
              pasword : bcrypt.hashSync(req.body.pasword,12),
                }).then(function(user){
                  res.redirect("login")
                })
            } 
       else {
        return res.render("register", { errors: errors.mapped(), old: req.body })
      }
    }

    
      
  },
  profile: (req, res)=>{
    db.Usuarios.findByPk(req.params.id)
    .then(usuario=>{ 
       return res.render ('perfil', {usuario :usuario});
    })
  },
  
  actualizar: (req,res )=>{
  
   var imagen;
   if (req.files.length >0){
    imagen = req.files[0].filename;
   }else {
    imagen = req.body.avatarActual;
   }

   db.Usuarios.update({
    apellido :req.body.apellido,
    nombre : req.body.nombre,       
    avatar : imagen,
    }, { where : {id : req.params.id}
    }).then (()=>{
      db.Usuarios.findByPk(req.params.id)
       .then(usuario=>{ 
        req.session.usuarioLogueado = {
          id: usuario.id,
          nombre: usuario.nombre,
          admin: usuario.administrador,
          avatar : usuario.avatar,
          cart: []
          }
      return res.redirect('/')
        })
      })
  },
  list: (req, res)=>{
    db.Usuarios.findAll()
                .then((usuarios)=>{
                res.render('AdminUsuarios',{usuarios:usuarios});
            })
  }
}
    
    

