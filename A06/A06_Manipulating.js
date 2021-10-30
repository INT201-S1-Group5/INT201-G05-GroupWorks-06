//import product from "./uniqoProduct.js";
let product = [{
    productId: 'P001',
    productname: 'iphone',
    price: 15000,
    stocks: 10
}, {
    productId: 'P002',
    productname: 'ipad',
    price: 10000,
    stocks: 5
}, {
    productId: 'P003',
    productname: 'ipod',
    price: 5000,
    stocks: 1
}, {
    productId: 'P004',
    productname: 'ip',
    price: 1000,
    stocks: 3
}, {
    productId: 'P005',
    productname: 'ipod2',
    price: 10000,
    stocks: 4
}]





const productEle = document.querySelector('#products');

for (let i = 0; i < product.length; i++) {
    let createDiv = document.createElement('div');
    createDiv.className = product[i].productId;
    let append = productEle.appendChild(createDiv);
    let createP = document.createElement('p');
    createP.textContent = product[i].productname;
    append.appendChild(createP);
}