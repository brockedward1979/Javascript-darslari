////? TRANSFORMATSIYA (YANGI MASSIV QAYTARADI) METODLARI  ////

//?1. map(fn)yangi massiv
//   Har bir elementga fn ni qo'llab, yangi massiv qaytaradi.
//*2. filter(fn)yangi massiv
//   fn shartini qoniqtirgan elementlardan yangi massiv hosil qiladi.
//*3. flat(depth?)yangi massiv
//   Ichma-ich massivlarni berilgan chuqurlikka yassilaydi.
//*4. flatMap(fn)yangi massiv
//   map + flat(1) ni birga bajaradi.
//*5. concat(...arrays)yangi massiv
//   Bir yoki bir nechta massivni birlashtirib yangi massiv qaytaradi.
//*6. slice(start?, end?)yangi massiv
//   Berilgan oraliqdan yangi massiv kesib oladi (asl o'zgarmaydi).
//*7. toSorted(fn?)yangi massiv
//   Saralangan nusxasini qaytaradi (ES2023, asl o'zgarmaydi).
//*8. toReversed()yangi massiv
//   Teskari tartibdagi nusxasini qaytaradi (ES2023).
//*9. toSpliced(start, del, ...)yangi massiv
//   splice ning o'zgartirmaydigan versiyasi (ES2023).
//*10 with(index, value)yangi massiv
//   Indeksdagi elementni almashtirgan nusxasini qaytaradi (ES2023).

//*************************************************************** */

//* map() Metodi
//? map() metodi massivni har bir elementga qo'liq va qaytaradi.

// let numbers = [1, 2, 3, 4, 5];

// let natija = numbers.map((son)=> {
//   let ism = "Umidbek";
//   let familiya = "Qodirov";

//   return son + "-" + ism + " " + familiya
// });

// console.log(natija)

// let studentlar = [
//   { id: 1, ism: "Umidbek", ball: 86 },
//   { id: 2, ism: "Alisher", ball: 79 },
//   { id: 3, ism: "Rashidbek", ball: 93 },
//   { id: 4, ism: "Feruzbek", ball: 99 },
//   { id: 5, ism: "Shavkat", ball: 100 },
// ]

// let natija = studentlar.map((student, indeks_nomeri, massiv) => {
//   return massiv

// })

// console.log(natija)

// let maxsulotlar = [
//   {name: "Macbook", narxi: 1200000},
//   {name: "Asus", narxi: 800000},
//   {name: "Lenovo", narxi: 700000},
//   {name: "HP", narxi: 600000},
//   {name: "Dell", narxi: 3000000},
// ]

// let narxlar = maxsulotlar.map((maxsulot) =>{
//   return maxsulot.narxi

// }
// )
// console.log(narxlar);

// let qimmatlari = narxlar.filter((qimmati) => {
//   return qimmati > 900000
// })
// console.log(qimmatlari);

//* map() metodi

// let ismlar = ["Hasanboy", "Shohjahon", "Umidbek", "Rashidbek", "Feruzbek", "Shavkat"]

// let natija = ismlar.map((ism) => {
//   return ismlar.ism
// })
// console.log(ismlar);

// let maxsulotlar = [
//   {name: "olma", narxi: 15000 },
//   {name: "banan", narxi: 10000 },
//   {name: "anjir", narxi: 18000 },
//   {name: "qovun", narxi: 20000 },
//   {name: "uzum", narxi: 12000 },
// ]
// let narxlar = maxsulotlar.map((maxsulot) => {
//   return maxsulot.narxi
// })
// console.log(narxlar);

// let qimmatlari = narxlar.filter((qimmati) => {
//   return qimmati > 15000
// })
// console.log(qimmatlari);

// let qimmatlari = maxsulotlar.filter((maxsulot) => {
//   return maxsulot.narxi > 15000
// })

// console.log(qimmatlari)

//* flat() metodi

// let massiv = [
//   25,
//   [75, 89],
//   809,
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   100,
//   200,

// ]

// let natija = massiv.flat(2)

// console.log(massiv)

// console.log(natija)
//
// let massiv = [
//   25,
//   [75, 89],
//   809,
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   100,
//   200,
// ]

// let natija = massiv.flat()
// console.log(natija)

// let natija2 = massiv.flat(Infinity)
// console.log(natija2)

// //* with() metodi

// let massiv = [2025, 27, 78, 103, 4, 89, 100, 200]

// let natija = massiv.with(2, "Umidbek")
// console.log(natija)

//* flatMap() metodi

// const sonlar = [1, 2, 3];

// let natija = sonlar.flatMap((son) => {
//   return [son * 2]
// })

// console.log(natija)

// let massiv = [10, -3, 15, -9, 20, -7, 25, -5, 30, -1];

// let natija = massiv.map((son) => {
// 	return -son
// });

// console.log(natija);

//************************************* */

// 1. Ismlar massividagi barcha ismlarni faqat katta harflar bilan yozing.

// let ismlar = ["Hasanboy", "Shohjahon", "Umidbek", "Rashidbek", "Feruzbek", "Shavkat"]













// 2. Ismlar massividagi barcha ismlarni faqat kichik harflar bilan yozing.


// let ismlar = ["Hasanboy", "Shohjahon", "Umidbek", "Rashidbek", "Feruzbek", "Shavkat"]

// let natija= ismlar.map((ism)=>{
// 	return ism.toLowerCase()
// })

// console.log(natija)





// 3. Har bir so‘zning uzunligini (length) aniqlab, yangi massivga yig‘ing.



// let ismlar = ["Hasanboy", "Shohjahon", "Umidbek", "Rashidbek", "Feruzbek", " Shavkat "]


// let natija = ismlar.map((ism)=>{
// 	return ism.length
// })


// console.log(natija)







// 4. Har bir so‘zning faqat birinchi harfini ajratib oling.

// let ismlar = ["Hasanboy", "Shohjahon", "Umidbek", "Rashidbek", "Feruzbek", "Shavkat"]

// let natija = ismlar.map((ism) => {
// 	return ism.slice(3, 8)

// })

// console.log(natija)










// 5. Ismlar oldiga "Janob " yoki "Xonim " so‘zini qo‘shib chiqing.



// let ismlar = ["Hasanboy", "Shohjahon", "Saida", "Umidbek", "Rashidbek", "Feruzbek", "Shavkat"] 

// let natija = ismlar.map((ism) => {
	
// 	return `${ism} == Saida ? Xonim ${ism} : Janob ${ism}`
	
// })

// console.log(natija)














// 6. Matnlardagi ortiqcha bo‘shliqlarni (trim) olib tashlang.


// let matnlar = ["   Hasanboy   ", "   Shohjahon   ", "   Umidbek   ", "   Rashidbek   ", "   Feruzbek   ", "   Shavkat   "]

// let natija = matnlar.map((matn) => {
// 	return matn.trimStart()
// })

// console.log(natija)
















// 7. Har bir so‘zning oxiriga "!" belgisini qo‘shing.


// let ismlar = ["Hasanboy", "Shohjahon", "Umidbek", "Rashidbek", "Feruzbek", "Shavkat"]

// let natija = ismlar.map((ism) => {
// 	return `${ism}!`
// })

// console.log(natija)














// 8. Berilgan so‘zlarni teskari tartibda (masalan: "abc" -> "cba") o‘giring.



// let ismlar = ["Hasanboy", "Shohjahon", "Umidbek", "Rashidbek", "Feruzbek", "Shavkat"]

// let natija = ismlar.map((ism) => {
// 	return ism.split("").join("")	
// })

// console.log(natija)



// let soz = "Hasanboy"
// let natija = soz.split("a").reverse().join("a")

// console.log(natija)









// 9. Har bir so‘zning faqat dastlabki 3 ta harfini kesib oling.


// let ismlar = ["Hasanboy", "Shohjahon", "Umidbek", "Rashidbek", "Feruzbek", "Shavkat"]

// let natija = ismlar.map((ism) => {
// 	return ism.slice(2, 5)
// })

// console.log(natija)














// 10.Massivdagi so‘zlarni HTML <li> teglari ichiga o‘rab chiqing.


let ul = document.getElementById("ul")
let btn = document.getElementById("btn")

btn.onclick = () =>{
	let ismlar = ["Hasanboy", "Shohjahon", "Umidbek", "Rashidbek", "Feruzbek", "Shavkat"]

let natija = ismlar.map((ism)=>{
return "<li>" + ism + "</li>"
})

ul.innerHTML = natija.join("")
}














