const express = require('express');
const app = express();
var fs = require('fs');
const port = 9999;

app.set('view engine', 'ejs');
app.use('/dist', express.static('dist'));
app.use('/public', express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://Idol:a123456@ds123783.mlab.com:23783/idol-management');

// create schema
var Idolschema = new mongoose.Schema({
    name: String,
    phone: String,
    description: String,
    img: String,
});
// store idol document in a collection called Idol
var Idol = mongoose.model('Idol', Idolschema);

/* var idolOne = Idol({
    name: "Elly Trần",
    phone: "090xxxxx09",
    description: "Da trắng, ngực khủng",
    img: "https://i.imgur.com/bLcYlrM.jpg",
}).save(function(err){
    if(err) throw err;
    console.log('saved idol');
});

var idolTwo = Idol({
    name: "Minh Tú",
    phone: "090xxxxx09",
    description: "Da ngâm, nóng bỏng và môi cong",
    img: "https://i.imgur.com/75warp7.jpg",
}).save(function(err){
    if(err) throw err;
    console.log('saved idol');
});


var idolThree = Idol({
    name: "Phạm Hương",
    phone: "090xxxxx09",
    description: "Da trắng, ngực nở",
    img: "https://i.imgur.com/aOr0TQ0.jpg",
}).save(function(err){
    if(err) throw err;
    console.log('saved idol');
});

var idolFour = Idol({
    name: "Thủy Top",
    phone: "090xxxxx09",
    description: "Da trắng, ngực nở, béo múp",
    img: "https://i.imgur.com/6XdYHw0.jpg",
}).save(function(err){
    if(err) throw err;
    console.log('saved idol');
}); */


app.get('/contact', (req, res)=>{
    Idol.find({},function(err, data){
        if(err) throw err;
        saveIdols(data, function(err){
            console.log(data);
            if(err){
                console.log('err');
                return;
            }
        });
        res.render('contact');
        //res.sendFile(__dirname+'/views/contact.html','utf8');
    });
    
    function saveIdols(idol) {
        fs.writeFileSync(__dirname+'/DALayer/idols.json', JSON.stringify(idol, null, 2));
      }
});


app.listen(9999, function(){
    console.log(`you are listening from port: ${port}`);
});