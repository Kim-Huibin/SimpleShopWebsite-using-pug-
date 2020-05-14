const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//tell express to set template engine
app.set('view engine', 'pug'); 
//tell app where to find the views. This one in our case is not neccesary. Because views folder
//is default in pug engine.
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle:'Page Not Found'});
});

app.listen(3000);

/**
 In this excersise, we installed three packeages
 npm install --save ejs pug express-handlebars

 app.set()
 set any value globally on our app configuration
 */
