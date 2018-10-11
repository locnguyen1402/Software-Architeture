const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const port = 9999;
var bodyParser = require('body-parser');
var fs = require('fs');
app.use('/dist', express.static('dist'));
var mongoose = require('mongoose');
mongoose.connect('mongodb://locnguyen:loveyou171@ds125673.mlab.com:25673/shoesshop');

var ShoesSchema = new mongoose.Schema({
    id: Number,
    brand: String,
    color: String,
    price: Number  
});
var Shoes = mongoose.model('Shoes', ShoesSchema);

//const mongoose = require('mongoose');
//app.use('/public',express.static('public'));

/* mongoose.connect('mongodb://locnguyen:loveyou171@ds125673.mlab.com:25673/shoesshop');

var ShoesSchema = new mongoose.Schema({
    id: Number,
    brand: String,
    color: String,
    price: Number  
});

var Shoes = mongoose.model('Shoes', ShoesSchema);
var Shoes1 = Shoes({ 
        id: 1,
        brand: "adidas",
        color: "blue",
        price: Math.floor(Math.random()+1000)+500,
    }).save( (err)=> {
        if(err) throw err;
        console.log("shoes saved");
    }); */

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req,res)=>{
    console.log('request url: '+req.url);
    //console.log(__dirname,__filename);
    res.render('index');
    
});

app.get('/contact', (req, res)=>{
    Shoes.find({},function(err, data){
        if(err) throw err;
        saveShoes(data, function(err){
            console.log(data);
            if(err){
                console.log('err');
                return;
            }
        });
        res.render('contact');
        //res.sendFile(__dirname+'/views/contact.html','utf8');
    });
    
    function saveShoes(shoe) {
        fs.writeFileSync(__dirname+'/DALayer/shoes.json', JSON.stringify(shoe, null, 2));
      }
});

/* app.get('/home', (req,res)=>{
    console.log('request url: '+req.url);
    //console.log(__dirname,__filename);
    res.render(__dirname + '/index.ejs');
});
app.get('/contact', (req,res)=>{
    console.log('request url: '+req.url);
    //console.log(__dirname,__filename);
    res.render(__dirname + '/contact.ejs');
});
app.post('/contact', urlencodedParser , (req,res)=>{
    console.log('request url: '+req.url);
    console.log(req.body);
    res.render(__dirname + '/contact-success.ejs', {user : req.body});
});
app.get('*', (req,res)=>{
    console.log('request url: '+req.url);
    //console.log(__dirname,__filename);
    res.render(__dirname + '/404.ejs');
}); */


app.listen(9999, function(){
    console.log(`you are listening from port: ${port}`);
});