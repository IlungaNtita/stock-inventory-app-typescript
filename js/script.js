var productName = document.getElementById('productName');
var productQuantity = document.getElementById('productQuantity');
var productEmail = document.getElementById('productEmail');
var productPrice = document.getElementById('productPrice');
var productBtn = document.getElementById('submit');
var formControl = document.getElementsByClassName('form-control');
var dataRow = document.getElementById('dataRow');
var productContainer = [];
var currentIndex = 0;
// Manually creating our 3 ptoducts
var Product1 = {
    name: 'Product 1',
    email: '',
    quantity: 35,
    avgprice: 200
};
var Product2 = {
    name: 'Product 2',
    email: '',
    quantity: 23,
    avgprice: 208
};
var Product3 = {
    name: 'Product 3',
    email: '',
    quantity: 23,
    avgprice: 20
};
//check for local storage at begining if items exist
if (localStorage.getItem('itemsStorage') == null) {
    productContainer.push(Product1);
    productContainer.push(Product2);
    productContainer.push(Product3);
}
else {
    productContainer = JSON.parse(localStorage.getItem('itemsStorage'));
}
function updateProduct(index) {
    var quantity;
    console.log('clicked update' + index);
    productQuantity.value = productContainer[index].productQuantity;
    currentIndex = index;
}
console.log(currentIndex);
function saveAddForm() {
    console.log('saved');
    var input = document.getElementById("productQuantity").value;
    var price = document.getElementById("productPrice").value;
    var avarage = (parseInt(price) + parseInt(productContainer[currentIndex].avgprice)) / 2;
    var quantitysum = parseInt(input) + parseInt(productContainer[currentIndex].quantity);
    productContainer[currentIndex].avgprice = avarage;
    productContainer[currentIndex].quantity = quantitysum;
    localStorage.setItem('itemsStorage', JSON.stringify(productContainer));
    location.reload();
}
function saveSellForm() {
    var input2 = document.getElementById("productQuantity2").value;
    var email = document.getElementById("productEmail").value;
    if (input2 > productContainer[currentIndex].quantity) {
        alert("Not enough items in store");
    }
    else if (email === productContainer[currentIndex].email) {
        alert("Email exists. You cannot sell to the same person twice.");
    }
    else {
        var quantitysum1 = parseInt(productContainer[currentIndex].quantity) - parseInt(input2);
        productContainer[currentIndex].quantity = quantitysum1;
        productContainer[currentIndex].email = email;
        localStorage.setItem('itemsStorage', JSON.stringify(productContainer));
        location.reload();
    }
}
// displaying storage information
document.getElementById('name1').innerHTML = productContainer[0].name;
document.getElementById('name3').innerHTML = productContainer[2].name;
document.getElementById('name2').innerHTML = productContainer[1].name;
document.getElementById('quantity1').innerHTML = productContainer[0].quantity;
document.getElementById('price1').innerHTML = productContainer[0].avgprice;
document.getElementById('name2').innerHTML = productContainer[1].name;
document.getElementById('quantity2').innerHTML = productContainer[1].quantity;
document.getElementById('price3').innerHTML = productContainer[2].avgprice;
document.getElementById('name3').innerHTML = productContainer[2].name;
document.getElementById('quantity3').innerHTML = productContainer[2].quantity;
document.getElementById('price2').innerHTML = productContainer[1].avgprice;
//our hidden forms
function add() {
    var x = document.getElementById("myForm");
    if (x
        .style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function sell() {
    var x = document.getElementById("myForm2");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function sellNo() {
    var x = document.getElementById("myForm2");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}
function addNo() {
    var x = document.getElementById("myForm");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}
