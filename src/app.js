const express  = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();


//importing router 
const customerRoutes = require('./routes/customer');

//setting
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views') );

//Midlewares
app.use(morgan('dev')); 
app.use(myConnection(mysql,{
    host:'localhost', 
    user:'root',
    password:'Password',
    port: 3306,
    database:'crudnode'
},'single'))
app.use(express.urlencoded({extended : false}));


//Routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public'))); 


app.listen(app.get('port'), () => {
    console.log('Server sudah berjalan....');
})