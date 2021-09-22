let productName = document.getElementById('productName');
let productQuantity = document.getElementById('productQuantity');
let productEmail = document.getElementById('productEmail');
let productPrice = document.getElementById('productPrice');

let productBtn = document.getElementById('submit');
let formControl = document.getElementsByClassName('form-control');
let dataRow = document.getElementById('dataRow');
let productContainer = [];
let currentIndex = 0;

// Manually creating our 3 ptoducts
let Product1 = {
  name: 'Product 1',
  email: '',
  quantity: 35,
  avgprice: 200,
};

let Product2 = {
  name: 'Product 2',
  email: '',
  quantity: 23,
  avgprice: 208,
};

let Product3 = {
  name: 'Product 3',
  email: '',
  quantity: 23,
  avgprice: 20,
};

//check for local storage at begining if items exist
if (localStorage.getItem('itemsStorage') == null) {
  productContainer.push(Product1);
  productContainer.push(Product2);
  productContainer.push(Product3);
} else {
  productContainer = JSON.parse(localStorage.getItem('itemsStorage'));
}

function updateProduct(index) {
  let quantity: number;
  console.log('clicked update'+ index );
  (<HTMLInputElement>productQuantity).value = productContainer[index].productQuantity;
  currentIndex = index;
}
console.log(currentIndex)


function saveAddForm() {
  console.log('saved');
  let input: string = (<HTMLInputElement>document.getElementById("productQuantity")).value;
  let price: string = (<HTMLInputElement>document.getElementById("productPrice")).value;

  let avarage: number = (parseInt(price) + parseInt(productContainer[currentIndex].avgprice)) / 2
  let quantitysum: number = parseInt(input) + parseInt(productContainer[currentIndex].quantity) 

  productContainer[currentIndex].avgprice = avarage;
  productContainer[currentIndex].quantity = quantitysum;
  localStorage.setItem('itemsStorage', JSON.stringify(productContainer));
  location.reload();
}

function saveSellForm() {
  let input2: string = (<HTMLInputElement>document.getElementById("productQuantity2")).value;

  let email: string = (<HTMLInputElement>document.getElementById("productEmail")).value;

  if (input2 > productContainer[currentIndex].quantity) {
    alert("Not enough items in store");
  } else if(email === productContainer[currentIndex].email) {
    alert("Email exists. You cannot sell to the same person twice.");
  } else {
    let quantitysum1 = parseInt(productContainer[currentIndex].quantity) - parseInt(input2)
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
  let x: HTMLElement = document.getElementById("myForm");

  if (x
    .style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function sell() {
  let x: HTMLElement = document.getElementById("myForm2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function sellNo() {
  let x: HTMLElement = document.getElementById("myForm2");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}

function addNo() {
  let x: HTMLElement = document.getElementById("myForm");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}


