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