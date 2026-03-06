//////////?       FOR ... OF SIKLI      ///////////

// for...of sikli JavaScript-da ma'lumotlar to'plami (massivlar, satrlar va boshqalar) ustida ketma-ket yurish va har bir elementni to'g'ridan-to'g'ri qiymat sifatida olish uchun ishlatiladi.

// SINTAKSISI:

// for (let element of toplam) {
//    element bilan bajariladigan amal
// }

// let yozuv = "Aslbek Nasriddinov qarab o'tir";

// for(let harf of yozuv){
// 	console.log(harf)
// }

// let sertifikatlar = [16, 6, 5, 3, 2, 1, 0]

// for(let sertifikat of sertifikatlar){
// 	console.log(sertifikat)
// }

// let foydalanuvchilar = [
//  {
// 	ism: "Umidbek",
// 	familya: "Qurbonov",
// 	yosh: 15,
// 	balandlik: 1.8
// },

//  {
// 	ism: "Aslbek",
// 	familya: "Nasriddinov",
// 	yosh: 16,
// 	balandlik: 1.75
// },

//  {
// 	ism: "Anvar",
// 	familya: "Ibraximov",
// 	yosh: 38,
// 	balandlik: 1.85
// }
// ]


// for(let obyektlar of foydalanuvchilar){
// 	console.log(`${obyektlar.ism} 9-a sinf o'quvchilsi`);
// }


// misol-1: for...of tsikli yordamida massiv elementlarini konsolga chiqarish:

//! for va for ... of sikllari o'rtasidagi farq:

// for sikli bilan mevalarni aylanib chiqish va indeks orqali murojaat qilish:

// let mevalar = ["Olma", "Banan", "Uzum"];
// for (let i = 0; i < mevalar.length; i++) {
// 	console.log(mevalar[i]); // Indeks orqali murojaat
// }

// for...of sikli bilan mevalarni aylanib chiqish va har bir elementni to'g'ridan-to'g'ri qiymat sifatida olish:

// for (let meva of mevalar) {
// 	console.log(meva); // To'g'ridan-to'g'ri qiymat
// }

// misol-2: for...of tsikli yordamida satrning har bir harfini konsolga chiqarish:

// let yozuv = "Bugun for ... of sikli haqida gaplashamiz";

// for (let harf of yozuv) {
// 	console.log(harf);
// }

// misol-3: for...of tsikli yordamida obyektlar massivini aylanib chiqish va har bir obyektning xususiyatlarini konsolga chiqarish:

// const foydalanuvchilar = [
// 	{ ism: "Ali", yosh: 25 },
// 	{ ism: "Vali", yosh: 30 },
// 	{ ism: "Sami", yosh: 22 },
// 	{ ism: "Olim", yosh: 35 },
// 	{ ism: "Hasan", yosh: 28 },
// ];


// for (let foydalanuvchi of foydalanuvchilar) {
// 	console.log(`${foydalanuvchi.ism} ning yoshi ${foydalanuvchi.yosh} da ${foydalanuvchi.nomi}`);
// }

// const ranglar = ["Qizil", "Yashil", "Ko'k"];


// for (let rang of ranglar) {
// 	console.log(`Rang: ${rang}`);
// }


//////////////////////////////////?





