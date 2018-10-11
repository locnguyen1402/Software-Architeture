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