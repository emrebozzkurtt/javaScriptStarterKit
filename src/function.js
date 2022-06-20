function addToCart(product, quantity = 1) {
    console.log("Ürün sepete eklendi: " + product + ", " + quantity + " adet")
}
addToCart()
addToCart("Çiçek",6)
addToCart("Araba") 

//degiskene tanımlı function
let sayHello = (param)=>{
    console.log("Merhaba JS " + param)
}

sayHello("asd")

let asd = () => 0.18
console.log(asd())
console.log(asd)

let product1 = {productName:"Elma",unitPrice:10,quantity:5}
let product2 = {productName:"Karpuz",unitPrice:20,quantity:18}

function addToCart2(product) {
    console.log("Ürün sepete eklendi: " + product.productName + ", " + product.quantity + " adet, Birim Fiyat: " + product.unitPrice)
    console.log("Toplam Fiyat: " + product.unitPrice * product.quantity)
}


addToCart2(product1)

product1 = product2
product1.productName = "Çiçek"
console.log(product2.productName)

let sayi1 = 10, sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

let products = [ 
    {productName:"Elma",unitPrice:10,quantity:5}, 
    {productName:"Karpuz",unitPrice:20,quantity:18},
    {productName:"Muz",unitPrice:30,quantity:10}
 ]

 function addToCart3(x) {
    console.log(x)
}

addToCart2(products[0])
addToCart3(products)

function add(...numbers) {
    let total = 0
    let total2 = 0

    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    console.log("total = " + total)

    for(let number of numbers) {
        total2 += number
    }
    console.log("total2 = " + total2)
}

add(10,25)
add(10,25,30,40)

let numberArray = [10,25,30,40,50]

console.warn("Ayrıştıma olmadan")
console.log(numberArray)
add(numberArray)

//array elemanları ayrıştırma içinde kullanılır
console.warn("Ayrıştıma varken")
add(...numberArray)
console.log(...numberArray)

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]] = [
    {name:"İç Anadolu", population:"12.5M", capital:"Ankara"},
    {name:"Marmara", population:"35M"},
    "Karadeniz",
    [
        ["Ankara","Sivas","Konya"],
        ["İstanbul","Sakarya","Bursa"],
        ["Trabzon","Artvin"]
    ]
]

console.log(icAnadolu)
console.log(marmara)
console.log(icAnadoluSehirleri)
console.log([icAnadoluSehirleri,marmaraSehirleri])

