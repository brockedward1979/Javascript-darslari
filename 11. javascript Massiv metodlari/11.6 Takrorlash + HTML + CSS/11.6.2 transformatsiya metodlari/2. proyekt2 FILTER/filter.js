////? TRANSFORMATSIYA (YANGI MASSIV QAYTARADI) METODLARI  ////

//*1. map(fn)yangi massiv
//   Har bir elementga fn ni qo'llab, yangi massiv qaytaradi.
//?2. filter(fn)yangi massiv
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

//! MISOLLAR

// 1. Musbat sonlarni filterlang

// 2. 18 yoshdan katta foydalanuvchilarni filterlang

// 3. Bo'sh stringlarni olib tashlang

// let ismlar = ["", "Shohjahon", "Umidbek", "Rashidbek", "Feruzbek", ""]
// let natija = ismlar.filter((ism	) => {
// 	return ism !== ""
// }
// )

// console.log(natija)

// 4. Takrorlanuvchi elementlarni olib tashlang

// 5. null va undefined larni olib tashlang

// let sonlar = [10, 20, 30, 40, 50, null, undefined, 60, 70, 80, 90, 100]

// let natija = sonlar.filter((son) => {
// 	return son !== null && son !== undefined

// }
// )

// console.log(natija)

// 6. Narxi 100 000 dan yuqori mahsulotlarni filterlang

// let mahsulotlar = [
// 	{ id: 1, name: "Phone", price: 100000 },
// 	{ id: 2, name: "Computer", price: 200000 },
// 	{ id: 3, name: "Keyboard", price: 50000 },
// 	{ id: 4, name: "Mouse", price: 15000 },
// 	{ id: 5, name: "Monitor", price: 300000 },
// ]

// let natija = mahsulotlar.filter((mahsulot) => {
//  return mahsulot.price > 100000
// })

// console.log(natija)

// 7. Faqat juft sonlarni qaytaring

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let natija = sonlar.filter((son) => {
// 	return son % 3 === 0
// })

// console.log(natija)

// 8. Ismi 4 harfdan uzun foydalanuvchilarni filterlang

// let foydalanuvchilar = [
// 	{ id: 1, ism: "Ali", familiya: "Valiyev", yosh: 25, shahar: "Toshkent" },
// 	{ id: 2, ism: "Vali", familiya: "Valiyev", yosh: 27, shahar: "Toshkent" },
// 	{ id: 3, ism: "Hasan", familiya: "Valiyev", yosh: 30, shahar: "Toshkent" },
// 	{ id: 4, ism: "Olim", familiya: "Valiyev", yosh: 32, shahar: "Toshkent" },
// 	{ id: 5, ism: "Murod", familiya: "Valiyev", yosh: 35, shahar: "Toshkent" },
// 	{ id: 6, ism: "Hasan", familiya: "Valiyev", yosh: 37, shahar: "Toshkent" },
// 	{ id: 7, ism: "Olim", familiya: "Valiyev", yosh: 39, shahar: "Toshkent" },
// 	{ id: 8, ism: "Murod", familiya: "Valiyev", yosh: 41, shahar: "Toshkent" },
// 	{ id: 9, ism: "Ali", familiya: "Valiyev", yosh: 43, shahar: "Toshkent" },
// 	{ id: 10, ism: "Vali", familiya: "Valiyev", yosh: 45, shahar: "Toshkent" },
// ]

// let natija = foydalanuvchilar.filter((foydalanuvchi) => {
// 	return foydalanuvchi.ism.length > 3

// }
// )
// console.log(natija)

// 9. Aktiv (isActive: true) foydalanuvchilarni filterlang

// let foydalanuvchilar = [
// 	{ id: 1, ism: "Ali", familiya: "Valiyev", yosh: 25, shahar: "Toshkent", isActive: true },
// 	{ id: 2, ism: "Vali", familiya: "Valiyev", yosh: 27, shahar: "Toshkent", isActive: false },
// 	{ id: 3, ism: "Hasan", familiya: "Valiyev", yosh: 30, shahar: "Toshkent", isActive: true },
// 	{ id: 4, ism: "Olim", familiya: "Valiyev", yosh: 32, shahar: "Toshkent", isActive: false },
// 	{ id: 5, ism: "Murod", familiya: "Valiyev", yosh: 35, shahar: "Toshkent", isActive: true },
// 	{ id: 6, ism: "Hasan", familiya: "Valiyev", yosh: 37, shahar: "Toshkent", isActive: false },
// 	{ id: 7, ism: "Olim", familiya: "Valiyev", yosh: 39, shahar: "Toshkent", isActive: true },
// ]

// let natija = foydalanuvchilar.filter((foydalanuvchi) => {
// 	return foydalanuvchi.isActive
// }
// )
// console.log(natija)

// 10. Qoldig'i 4 dan yuqori mahsulotlarni filterlang

// console.log(natija);

// 11. Massivdan faqat stringlarni filterlang

// 12. Qoldiq (stock) 0 dan katta mahsulotlarni filterlang

// 13. Familiyasi "ov" bilan tugaydigan foydalanuvchilarni filterlang

// 14. Ikki massivda ham bor elementlarni toping (intersection)

// 15. Birinchi massivda bor, ikkinchisida yo'q elementlarni toping (difference)

// 16. Admin roli bo'lgan foydalanuvchilarni filterlang

// 17. So'nggi 30 kunda ro'yxatdan o'tgan foydalanuvchilarni filterlang

// 18. Kamida bitta buyurtmasi bor foydalanuvchilarni filterlang

// 19. Narxi eng yuqori mahsulotning yarmidan qimmat mahsulotlarni filterlang

// 20. Har ikki shartni bajaradigan elementlarni filterlang (narxi 50 000 dan yuqori va soni 4 dan yuqori)





// let taomlar = [
// 	{ id: 1, nomi: "Sho'rva", narx: 12000, soni: 0, rasm: "./rasmlar/pishloqli-1.jpg", batafsil: "Bu ovqat juda mazali ovqat" },
// 	{ id: 2, nomi: "Osh", narx: 15000, soni: 40, 
// 	rasm: "./rasmlar/go'sht-1.jpg" },
// 	{ id: 3, nomi: "Manti", narx: 13000, soni: 30,
// 	rasm: "./rasmlar/go'sht-2.jpg"},
// 	{ id: 4, nomi: "Somsa", narx: 10000, soni: 50,
// 	rasm: "./rasmlar/milk-4.jpg"},
// 	{ id: 5, nomi: "Chuchvara", narx: 11000, soni: 20, 
// 	rasm: "./rasmlar/milk-5.jpg"},
// 	,
// ]


// let natija = taomlar.map((taom) => {

// 	return `<div class="taom">
// 	<img src="${taom.rasm}" alt="Essiz mazali edi" class="rasm">
// 	<div class="info">
// 		<h2>${taom.nomi}</h2>
// 		<p>${taom.narx}</p>
// 		<p>${taom.soni}</p>
// 	</div>
	
// </div>`
	
// })

// let html = document.getElementById("taomlar")
// let input = document.getElementById("input")
// let btn = document.getElementById("btn")

// html.innerHTML = natija.join("")


// input.oninput = () => {
// 	let qidirlayotgan = taomlar.filter((taom) => {
// 		return taom.nomi.toLowerCase().startsWith(input.value.trim().toLowerCase())
	
// 	}
// 	) 
	
// 	let oxirgi = qidirlayotgan.map((taom) => {
// 		return `<div class="taom">
// 	<img src="${taom.rasm}" alt="Xatolik bo'ldi" class="rasm">
// 	<div class="info">
// 		<h2">${taom.nomi}</h2>
// 		<p>${taom.narx}</p>
// 		<p>${taom.soni}</p>
		
// 	</div>
	
// </div>`
// 	})
// 	html.innerHTML = oxirgi.join("")
// }







let ishchilar = [
  {ismi: "Aslbek", jinsi: "erkak", olgan_ulushi: 15000},
  {ismi: "Kumush", jinsi: "ayol", olgan_ulushi: 20000},
  {ismi: "Saida", jinsi: "ayol", olgan_ulushi: 10000},
  {ismi: "Umidbek", jinsi: "erkak", olgan_ulushi: 35000},
  {ismi: "Rashidbek", jinsi: "erkak", olgan_ulushi: 30000},
]

// 110000 so'm


let erkaklar = ishchilar.filter((ishchi) => {

    return ishchi.jinsi == "erkak"
}
).map((ishchi, indeks, massivning_ozi) => {


  let jami = massivning_ozi.reduce((yiguvchi, qiymat) => {
    return yiguvchi + qiymat.olgan_ulushi
  }, 0
  )

  return {
    ishchi: ishchi.ismi,
    olgan_ulushi: (ishchi.olgan_ulushi/jami)*100
  }
}
)

console.log(erkaklar)














