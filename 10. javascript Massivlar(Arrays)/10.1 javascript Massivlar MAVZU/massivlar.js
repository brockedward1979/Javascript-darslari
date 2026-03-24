////////?    MASSIVLAR(ARRAYS)     //////////

// JavaScriptda massiv aslida obyektdir. Uning indekslari esa kalit (key) vazifasini bajaradi.

// Masalan:

let array = ["salom", "dunyo", "javascript", "arrays"];

// bu yerda massivning 0 indeksi - massivning kaliti va uning qiymati shu 0-indeksda turgan elementning qiymatidir
// bu yerda massivning 1 indeksi - massivning kaliti va uning qiymati shu 1-indeksda turgan elementning qiymatidir
// bu yerda massivning 2 indeksi - massivning kaliti va uning qiymati shu 2-indeksda turgan elementning qiymatidir
// bu yerda massivning 3 indeksi - massivning kaliti va uning qiymati shu 3-indeksda turgan elementning qiymatidir

// let massiv = [2026, 29, 3, 47, 5]

// console.log("Massivning elementlar soni: " + massiv.length)

// massiv[100] = 2040;
// massiv[50] = 2030;

// console.log(massiv)

// console.log(massiv.length)

// console.log(massiv[30])

// for(let i = 0; i < massiv.length; i++) {
//     console.log(massiv[i])
// }

// let massiv_tashqi = ["Umidbek", "Aslbek", "Sirojiddin", ["IT Park", 2025, "salom", "dunyo", true], "Haydarbek", "Rashidbek"]

// console.log(massiv_tashqi[3][2])

// let aralash = [
// 	2026,
// 	"salom",
// 	true,
// 	null,
// 	undefined,
// 	[65456546, 298789, "javascript", "arrays"],
// 	{
// 		name: "John",
// 		age: 30,
// 	},
// ];

// console.log(aralash[5][2])

// let obyektlar = [
//   {name: 'John', age: 30},
//   {name: 'Jane', age: 25},
//   {name: 'Bob', age: 40},
//   {name: 'Alice', age: 35},
//   {name: 'Charlie', age: 28}
// ]

// obyektlar.forEach((elementlar, nomer)=> {
//   console.log(nomer + 1 + "." +"Ismi: " + elementlar.name)
// })

// console.log(massiv)
// console.log(massiv[0]) // 1
// console.log(massiv[1]) // 29

// massiv[3] = 1000000;

// console.log(massiv)
// console.log(massiv[3]) // 1000000

// console.log(massiv[12]) // undefined

// console.log(massiv.length) // 5

// let massiv2 = ['salom', 'dunyo', 'javascript', 'arrays']
// console.log(massiv2)
// console.log(massiv2[0]) // salom
// console.log(massiv2[1]) // dunyo
// massiv2[2] = 'massivlar'
// console.log(massiv2)

// let massiv3 = [2026, 'salom', true, null, undefined, [1, 2, 3], {name: 'John', age: 30}]

// console.log(massiv3)

// console.log(massiv3[2]) // true
// console.log(massiv3[5]) // [1, 2, 3]
// console.log(massiv3[6]) // {name: 'John', age: 30}

// console.log(massiv3[6].name) // John
// console.log(massiv3[6].age) // 30

// console.log(massiv3[6].name, massiv3[6].age)

// massiv3[6].name = 'Jane';

// console.log(massiv3)
// console.log(massiv3[6].name) // Jane

// console.log(massiv3[6].name, massiv3[6].age)

// for(let i = 0; i < massiv3.length; i++) {
//     massiv3[i] = "salom" + i;

// }

// console.log(massiv3)

// //? DESTRUCTURING QILISH

// // Massivlarni destructuring qilish orqali massiv elementlarini alohida o'zgaruvchilarga ajratish mumkin.

// let [,ikkinchi, uchinchi] = ["Aslbek Nasriddinov", "Sirojiddin", 2026]

// console.log(ikkinchi) //
// console.log(uchinchi) //

// let massiv4 = ['Sobirjon', 'Asilbek', 'Alisher', 'Haydarbek', 'Rashidbek']

// let [a, b, c, d, e] = massiv4;

// console.log(a) // salom0
// console.log(b) // salom1
// console.log(c) // salom2
// console.log(d) // salom3
// console.log(e) // salom4

// let [, , z] = massiv4;

// console.log(z) // salom2
