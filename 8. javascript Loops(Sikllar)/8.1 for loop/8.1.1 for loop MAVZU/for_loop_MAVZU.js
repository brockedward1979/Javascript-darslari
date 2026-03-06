// //////!        LOOPS (Sikllar)      ////////////

// JavaScriptda Loops (Sikllar) — bu bir xil kod blokini bir necha marta, ma'lum bir shart bajarilguncha takroran ishlatish usulidir. Masalan, 1 dan 100 gacha sonlarni ekranga chiqarish uchun 100 marta console.log yozilmaydi, balki bitta sikldan foydalaniladi.

// JavaScriptda 7 ta loop (sikl) mavzusini o'rganamiz:

// STANDART(KLASSIK) SIKLLAR:
// 1. for
// 2. while
// 3. do ... while

// TO'PLAMLAR (MASSIV VA OBYEKT) BILAN ISHLOVCHI SIKLLAR:
// 4. for in
// 5. for of

// MAXSUS "ITERATSIA" METODI:
// 6. forEach

// ASINXRON SIKLLAR:
// 8. for await of

// ////////?   FOR LOOP (FOR SIKLI)   ///////////////
// ================================================//

// let students = [
// 	"Umidbek",
// 	"Sobirjon",
// 	"Feruzbek Erkinov",
// 	"Rashidbek",
// 	"Shavkat",
// 	"Shohjahon",
// 	"Nurbek",
// 	"Feruzbek Qodirov",
// 	"Sardor",
// 	"Saida",
// 	"Aslbek",
// ];

// console.time("1-holat")

// for(let i = 0; i < students.length; i++) {
// 	console.log(students[i])
// }
// console.timeEnd("1-holat")

// console.time("2-holat")

// let soni = students.length;

// for(let i = 0; i < soni; i++) {
// 	console.log(students[i])
// }

// console.timeEnd("2-holat")

// for (let i = 0; i < students.length; i++) {

// 	if (students[i] === "Nurbek") {

// 		continue;
// 	}

// 	console.log(students[i]);

// }

// for sikli - u ma'lum bir kod blokini necha marta takrorlash kerakligini aniq bilganimizda ishlatiladi.

// SINTAKSISI:
// /*

// for (boshlanish; shart; o'zgarish) {
//   Takrorlanadigan kod
// }

// */

// misol:

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// misol natijasi:

// 1-qadam i = 1 dan boshlanadi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 1 <= 10 shartini tekshiradi true
// 3-qadam 1 chiqadi
// 4-qadam i++ i ni 1 qo'shaydi va i = 2 bo'ladi

// 1-qadam i = 2 bo'ladi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 2 <= 10 shartini tekshiradi true
// 3-qadam 2 chiqadi
// 4-qadam i++ i ni 1 qo'shaydi va i = 3 bo'ladi

// 1-qadam i = 3 bo'ladi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 3 <= 10 shartini tekshiradi true
// 3-qadam 3 chiqadi
// 4-qadam i++ i ni 1 qo'shaydi va i = 4 bo'ladi

// 1-qadam i = 4 bo'ladi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 4 <= 10 shartini tekshiradi true
// 3-qadam 4 chiqadi
// 4-qadam i++ i ni 1 qo'shaydi va i = 5 bo'ladi

// 1-qadam i = 5 bo'ladi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 5 <= 10 shartini tekshiradi true
// 3-qadam 5 chiqadi
// 4-qadam i++ i ni 1 qo'shaydi va i = 6 bo'ladi

// 1-qadam i = 6 bo'ladi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 6 <= 10 shartini tekshiradi true
// 3-qadam 6 chiqadi
// 4-qadam i++ i ni 1 qo'shaydi va i = 7 bo'ladi

// 1-qadam i = 7 bo'ladi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 7 <= 10 shartini tekshiradi true
// 3-qadam 7 chiqadi
// 4-qadam i++ i ni 1 qo'shaydi va i = 8 bo'ladi

// 1-qadam i = 8 bo'ladi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 8 <= 10 shartini tekshiradi true
// 3-qadam 8 chiqadi
// 4-qadam i++ i ni 1 qo'shaydi va i = 9 bo'ladi

// 1-qadam i = 9 bo'ladi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 9 <= 10 shartini tekshiradi true
// 3-qadam 9 chiqadi
// 4-qadam i++ i ni 1 qo'shaydi va i = 10 bo'ladi

// 1-qadam i = 10 bo'ladi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 10 <= 10 shartini tekshiradi true
// 3-qadam 10 chiqadi
// 4-qadam i++ i ni 1 qo'shaydi va i = 11 bo'ladi

// 1-qadam i = 11 bo'ladi
// 2-qadam i <= 10 shartini tekshiradi ya'ni 11 <= 10 shartini tekshiradi false
// 3-qadam for sikli tugadi

// Demak natija 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 chiqadi

// ? for siklining boshqacha yozilishi:

// let i = 1;
// for (; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; ) {
//   console.log(i);
//   i++; // O'zgarishni shu yerda qildik
// }

// let i = 9;
// for (;;) {
//   console.log(i);
//   if (i >= 10) break; // To'xtash sharti
//   i++;
// }

// for(let i = 1; i <= 10; i++) {

//   if(i % 2 == 0) {
//     console.log(i);  // 2, 4, 6, 8, 10
//   }

// }

// for(let i = 1; i <= 10; i++) {
//   if(i % 2 == 1) {
//     console.log(i);    // 1, 3, 5, 7, 9
//   }
// }

// ? let siz e'lon qilish mumkinmi?
// ? Javob: Agar "strict mode" yoqilmagan bo'lsa let siz e'lon qilish mumkin, lekin bu kelajakda ko'p xatolarga sabab bo'ladi. Agar "strict mode" yoqilsa let siz e'lon qilish mumkin emas.

// strict mode ni yoqish:
// "use strict";  bu ko'rsatma faqat shu faylning yoki funksiyaning eng birinchi qatorida (izohlarni hisobga olmaganda) tursa ishlaydi.
// buning teskarisi sloppy mode(standart mode, default mode) deb aytiladi, lekin "use sloppy", "use standart", "use default" degan buyruqlar yo'q. Default da o'zi sloppy mode bo'ladi.

// for(i = 1; i <= 10; i++) {
//   if(i % 3 == 0) {
//     console.log(i);  // 2, 4, 6, 8, 10
//   }

// }

// ! CHEKSIZ SIKLLARDAN EHTIYOT BO'LING!!!

// Cheksiz siklga misol:

// for(let i = 1; i > 0; i++) {
//   console.log(i);  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ..... cheksiz davom etadi va kompyuter xotirasini bir necha sekund yoki minutlarda tugatadi.
// }

/*
Cheksiz sikllar (infinite loops) ko'pincha dasturlashdagi xatolik deb qaralsa-da, aslida real loyihalarda ular ongli ravishda va juda muhim vazifalar uchun ishlatiladi. Dastur to'xtab qolmasligi va doimiy ravishda ma'lum bir amalni bajarib turishi kerak bo'lgan joylarda ular ajralmasdir.
Mana cheksiz sikllarning asosiy qo'llanilish sohalari:

1. Operatsion tizimlar va Dasturlar interfeysi
2. Mikrokontrollerlar va Robototexnika (Arduino, IoT)
3. Serverlar va Tarmoq aloqalari
4. O'yinlar (Game Engine)
5. Ma'lumotlar bazasi va Monitoring

*/

// ? SIKLLARNI BOSHQARISH:
// 1. break
// 2. continue

// for (let i = 1; i <= 10; i++) {
// 	console.log(i);

// 	if (i == 7) {
// 		break;  // Agar i == 7 bo'lsa for sikli to'xtaydi
// 	}
// }

// for (let i = 1; i <= 10; i++) {
// 	if (i == 7) {
// 		continue;  // Agar i == 7 bo'lsa for sikli shu 7 qiymatini tashlab o'tib yana davom etadi
// 	}
// 	console.log(i);
// }

// ? SIKLLAR OPTIMIZATSIYASI(SIKLLARNI TEZROQ ISHLASHINI TAMINLASH)

// let students = [
// 	"Abror",
// 	"Sobirjon",
// 	"Asilbek",
// 	"Shavkat",
// 	"Shoxjaxon",
// 	"Shohjahon",
// 	"Kumushbibi",
// 	"Alisher",
// 	"Haydarbek",
// 	"Hasanboy",
// 	"Suxrob",
// 	"Umidbek",
// 	"Sirojiddin",
// 	"Aslbek",
// 	"Feruzbek",
// 	"Kumushoy",
// 	"Behruz",
// ];

// console.time("1-holat");

// for(let i = 0; i < students.length; i++) {
// 	console.log(students[i]);

// }

// console.timeEnd("1-holat");

// soni = students.length;

// console.time("2-holat");

// for(let i = 0; i < soni ; i++) {
// 	console.log(students[i]);

// }

// console.timeEnd("2-holat");

// const users = [
// 	{ id: 1, name: "Ali" },
// 	{ id: 57, name: "Vali" },
// 	{ id: 100, name: "Gani" },
// 	{ id: 2, name: "Olim" },
// 	{ id: 3, name: "Aslbek" },
// 	{ id: 4, name: "Behruz" },
// 	{ id: 5, name: "Sirojiddin" },
// 	{ id: 6, name: "Feruzbek" },
// 	{ id: 7, name: "Kumushoy" },
// 	{ id: 8, name: "Shohjahon" },
// 	{ id: 9, name: "Asilbek" },
// 	{ id: 10, name: "Shavkat" },
// ];

// console.log(object)

// for (let i = 0; i < users.length; i++) {
// 	if (users[i].id === 57) {
// 		console.log("Topildi:", users[i].name);
// 		break; // Kerakli odam topildi, siklni darhol to'xtatamiz!
// 	} else {
// 		// console.log("Bunday odam yo'q");
// 	}
// }

//**********  Aslbek talabiga binoan dastur.  ************//

let input = document.getElementById("input");
let btn_plus = document.getElementById("btn_plus");
let btn_random = document.getElementById("btn_random");
let malumot = document.getElementById("malumot");
let random_joyi = document.getElementById("random");

let students = [];

// 1. Funksiya massiv uzunligiga qarab random index qaytarishi kerak
let get_random_index = function () {
	// 0 dan massiv uzunligigacha bo'lgan ixtiyoriy butun son
	return Math.floor(Math.random() * students.length);
};

// 2. Talaba qo'shish
btn_plus.onclick = function () {
	if (input.value.trim() !== "") {
		students.push(input.value);
		malumot.innerHTML = "Ro'yxat: " + students.join(", "); // Chiroyli ko'rinish uchun join
		input.value = ""; // Inputni tozalash
		input.focus(); // Kursorni yana inputga qaytarish
	} else {
		alert("Iltimos, ism kiriting!");
	}
};

// 3. Tasodifiy talabani tanlash
btn_random.onclick = function () {
	if (students.length > 0) {
		// Funksiyani () bilan chaqiramiz!
		let index = get_random_index();
		random_joyi.innerHTML = "Tanlandi: " + students[index];
	} else {
		random_joyi.innerHTML = "Ro'yxat bo'sh! Avval talaba qo'shing.";
	}
};
