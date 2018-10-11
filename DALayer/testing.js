/* var a = {
    id : 1223,
    name: "loc",
    age: 22,
};
module.exports = a;
 */
var mongoose = require('mongoose');


var ShoesSchema = new mongoose.Schema({
    id: Number,
    brand: String,
    color: String,
    price: Number  
});
var Shoes = mongoose.model('Shoes', ShoesSchema);
var shoesMap = [];
/* ShoesSchema.findById("1", function (err, shoe) {
    shoesMap.push(shoe);
} ); */
shoesMap = Shoes.find({});
module.exports = { shoesMap:shoesMap, mongoose:mongoose};

