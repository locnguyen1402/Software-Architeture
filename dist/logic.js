(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var shoe = require('../DALayer/shoes.json');
/* fs.readFile('../DALayer/shoes.json',(err, data)=>{
    if(err) throw err;
    shoe = JSON.parse(data);
    //console.log(shoe);
});
 */
var temp = new Array(shoe.length);
var table = document.getElementById('table');
var button = document.getElementById('abc');
//alert(shoe.length);
 function a(){
    for (let i = 0; i < shoe.length; i++) {
        temp[i] = table.insertRow();
            temp[i].insertCell().innerHTML = shoe[i].id;
            temp[i].insertCell().innerHTML = shoe[i].brand;
            temp[i].insertCell().innerHTML = shoe[i].color;
            temp[i].insertCell().innerHTML = shoe[i].price;
    };    
}
button.addEventListener('click', function(){
    a();
});
},{"../DALayer/shoes.json":2}],2:[function(require,module,exports){
module.exports=[
  {
    "_id": "5bbe30fef1704221fccbd94c",
    "id": 1,
    "brand": "adidas",
    "color": "blue",
    "price": 1500,
    "__v": 0
  },
  {
    "_id": "5bbe30fef1704221fccbd94e",
    "id": 3,
    "brand": "bitis",
    "color": "blue",
    "price": 1500,
    "__v": 0
  },
  {
    "_id": "5bbe30fef1704221fccbd94d",
    "id": 2,
    "brand": "nike",
    "color": "blue",
    "price": 1500,
    "__v": 0
  },
  {
    "_id": "5bbe30fef1704221fccbd94f",
    "id": 4,
    "brand": "adidas",
    "color": "blue",
    "price": 1500,
    "__v": 0
  },
  {
    "_id": "5bbe30fef1704221fccbd950",
    "id": 5,
    "brand": "puma",
    "color": "blue",
    "price": 1500,
    "__v": 0
  }
]
},{}]},{},[1]);
