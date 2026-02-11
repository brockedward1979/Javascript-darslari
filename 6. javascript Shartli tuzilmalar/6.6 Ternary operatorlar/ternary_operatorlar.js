//? TERNARY OPERATORLAR //

// Ternary operator - bu shartli ifoda bo'lib, u uchta qismdan iborat:
//1. shart
//2. agar shart rost bo'lsa bajariladigan kod
//3. agar shart yolg'on bo'lsa bajariladigan kod.

// Ternary operator Sintaksisi quyidagicha:

// shart ? ifoda1 : ifoda2;

// Agar shart rost bo'lsa ifoda1 bajariladi, aks holda ifoda2 bajariladi.
// Misol uchun:

// let yosh = 25;
// let natija = yosh >= 18 ? "Siz kattasiz" : "Siz voyaga yetmagansiz";

// console.log(natija); // "Siz kattasiz"

// Yuqoridagi misolda, agar yosh 18 yoki undan katta bo'lsa, natija "Siz kattasiz" bo'ladi, aks holda "Siz voyaga yetmagansiz" bo'ladi.
// Ternary operatorlar ko'pincha qisqa shartli ifodalar uchun ishlatiladi va kodni yanada ixcham va o'qilishi oson qiladi.
// Biroq, murakkab shartlar uchun if-else tuzilmalari afzalroq bo'lishi mumkin, chunki ular ko'proq o'qilishi oson va tushunarli bo'ladi.

// Misol:

// let baho = 85;

// let reyting = baho >= 80 ? "Siz A'LO darajadigi sertifikatsiyaga ega bo'ldingiz" : "o'z ustingizda ishlang, siz A'LO darajadagi sertifikatni ola olmadingiz!!!";

// console.log(reyting); // "Siz A'LO darajadigi sertifikatsiyaga ega bo'ldingiz"

// let buyurtma_summasi = 45000; // Buyurtma summasi

// // Agar summa 50,000 dan ko'p bo'lsa yetkazib berish 0 (tekin), bo'lmasa 5000 so'm
// let yetkazib_berish_tolovi = (buyurtma_summasi >= 50000) ? 0 : 5000;

// console.log("Yetkazib berish narxi: " + yetkazib_berish_tolovi + " so'm");

//?              shart ? ifoda1 : ifoda2;

// let soni = 3;

// let gaplashuvchilar = soni > 5 ? "Gaplashuvchilar guruhi": "Shaxsiy suhbat";

// console.log(gaplashuvchilar);

// let mashina = [
// {
// 	rangi: "qizil",
// 	modeli: "Toyota",
// 	yili: 2020,
// 	narxi: 25000,
// 	tezligi: 280,
// },
// {
// 	rangi: "oq",
// 	modeli: "Honda",
// 	yili: 1985,
// 	narxi: 22000,
// 	tezligi: 260,
// },
// {
// 	rangi: "qora",
// 	modeli: "BMW",
// 	yili: 1998,
// 	narxi: 30000,
// 	tezligi: 300,
// },
// {
// 	rangi: "ko'k",
// 	modeli: "Mercedes",
// 	yili: 2010,
// 	narxi: 28000,
// 	tezligi: 290,
// },

// ];

// let texnik_holat1 =
// 	mashina[0].yili >= 2000
// 		? "Mashinani haydash mumkin"
// 		: "Bu mashina eskirgan, haydama bu mashinani";

// let texnik_holat2 =
// 	mashina[1].yili >= 2000
// 		? "Mashinani haydash mumkin"
// 		: "Bu mashina eskirgan, haydama bu mashinani";



// console.log(mashina[0].modeli, texnik_holat1);
// console.log(mashina[1].modeli, texnik_holat2);


function ichini_uzgartir(){

	let div = document.getElementById("natija");
	div.innerHTML = "<a href='https://www.google.com/'>link</a>";

}




