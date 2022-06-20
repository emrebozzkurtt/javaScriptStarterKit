let sayi = 10
function sayiTopla(number) {
    number = number + 1
    return number
}
sayiTopla(sayi)
console.log(sayi)
console.log(sayiTopla(sayi))

let cart = [
    {id:1, productName:"Telefon", quantity:3,unitPrice:4000},
    {id:2, productName:"Buzdolabı", quantity:1,unitPrice:5000},
    {id:3, productName:"Kulaklık", quantity:1,unitPrice:1000},
    {id:4, productName:"Elma", quantity:5,unitPrice:10},
    {id:5, productName:"Kitap", quantity:2,unitPrice:50},
    {id:6, productName:"Kalem", quantity:2,unitPrice:200},
]

console.warn("Cart Array")
console.log(cart)

cart.push({id:7, productName:"Kılık", quantity:1,unitPrice:300})
console.warn("Cart Array (Push)")
console.log(cart)

function addToCart(sepet) {
    sepet.push({id:8, productName:"Test", quantity:1,unitPrice:300})
}
addToCart(cart)

console.warn("Cart Array (Function)")
console.log(cart)

cart.map(product => console.log(product.productName))

console.warn("product totalPrice Calculate")
cart.map(product => {
    console.log(product.productName + "\t Toplam Fiyat = " + product.unitPrice*product.quantity + " TL")
})

console.warn("unitPrice > 1000 olanlar")
cart.filter(product => product.unitPrice > 1000).map(product => console.log(product.productName + " - " + product.unitPrice))

console.warn("newArray'e atama ile unitPrice > 1000 olanlar")
let quantityOver2000 = cart.filter(product => product.unitPrice > 2000)
console.log(...quantityOver2000)

console.warn("reduce ile array dolaşma")
//degiskenler, yapılan islem, baslangic degeri
let total = cart.reduce((total, product) => total + product.unitPrice*product.quantity, 0)
console.log("Sepet Toplam = " + total + " TL")