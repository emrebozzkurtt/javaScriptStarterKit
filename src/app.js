console.log("Merhaba JS")

var dolarDun = 9.20

console.log("(var) dolarDun: " + dolarDun)
let dolarBugun
console.log("(let) dolarBugun: " + dolarBugun)
{
    var dolarDun = 9.10
    let dolarBugun = 10.20
}

console.log("(var) dolarDun: " + dolarDun)
console.log("(let) dolarBugun: " + dolarBugun)
console.log("-- var ayraç içlerinden etkilenir --")
console.log("-- let ayraç içlerinden etkilenmez --")

const sabitKur = 15
console.log("(const) sabitKur: " + sabitKur)
console.log("-- const üzerinde değişiklik yapılamaz --")


let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
console.log(konutKredileri)

console.log("<ul>")
for(let i=0; i<konutKredileri.length; i++){
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")