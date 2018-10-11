(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var idols = require('../DALayer/idols.json');


var arr = new Array(idols.length);
var table = document.getElementById('table');

function loadIdols() {
    var img;
    for (var i = 0; i < idols.length; i++) {
        img = document.createElement('img');
        arr[i] = table.insertRow();
        arr[i].insertCell().innerHTML = idols[i].name;
        arr[i].insertCell().innerHTML = idols[i].phone;
        arr[i].insertCell().innerHTML = idols[i].description;
        img.src = idols[i].img;
        img.classList.add('imgIdol');
        arr[i].insertCell().appendChild(img);
    };
}
loadIdols();

var imgIdols = document.getElementsByClassName('imgIdol'); // 0 1 2 3
function getIndex(ev) {
    var els = Array.prototype.slice.call(document.getElementsByClassName('imgIdol'), 0);
    console.log(els.indexOf(ev.target));
}
getIndex();
},{"../DALayer/idols.json":2}],2:[function(require,module,exports){
module.exports=[
  {
    "_id": "5bbf3e7647fc422058ce21fe",
    "name": "Elly Trần",
    "phone": "090xxxxx09",
    "description": "Da trắng, ngực khủng",
    "img": "https://i.imgur.com/bLcYlrM.jpg",
    "__v": 0
  },
  {
    "_id": "5bbf3e7647fc422058ce21ff",
    "name": "Minh Tú",
    "phone": "090xxxxx09",
    "description": "Da ngâm, nóng bỏng và môi cong",
    "img": "https://i.imgur.com/75warp7.jpg",
    "__v": 0
  },
  {
    "_id": "5bbf3e7647fc422058ce2200",
    "name": "Phạm Hương",
    "phone": "090xxxxx09",
    "description": "Da trắng, ngực nở",
    "img": "https://i.imgur.com/aOr0TQ0.jpg",
    "__v": 0
  },
  {
    "_id": "5bbf3e7647fc422058ce2201",
    "name": "Thủy Top",
    "phone": "090xxxxx09",
    "description": "Da trắng, ngực nở, béo múp",
    "img": "https://i.imgur.com/6XdYHw0.jpg",
    "__v": 0
  }
]
},{}]},{},[1]);
