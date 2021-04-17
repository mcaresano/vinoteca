const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require ('method-override');
const session = require('express-session')
const vistaUsuario = require ('./middelwares/vistaUsuario')
const indexRouter = require('./routers/index');
const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');
const cartRouter = require ('./routers/cart');
const permisos = require ('./middelwares/permisos')
const morgan = require ('morgan');
let port = process.env.PORT || 5000;

// Api
const apiProductsRouter = require ('./routers/api/productsRouter');
const apiUsersRouter = require ('./routers/api/usersRouter');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({secret:'un mensaje'}));
app.use(vistaUsuario);

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));



// routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);
app.use('/cart',cartRouter);

app.use ('/api/products', apiProductsRouter);
app.use ('/api/users', apiUsersRouter);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Server
app.listen (port, ()=> console.log(`conectado en puerto ${port}`));


