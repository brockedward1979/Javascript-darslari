////?          forEach() metodi MAVZU         //////

//? Nomsiz funksiyalar(anonim funksiyalar) haqida qisqacha:

// Nomsiz funksiyalar (Anonymous functions) — bu aniq bir nomga ega bo'lmagan funksiyalardir. Odatda ular o'zgaruvchiga biriktiriladi yoki boshqa funksiyalarning ichida (masalan, forEach funksiyasining ichida) argument sifatida ishlatiladi.

// Nomsiz funksiyalarni yaratish uchun function kalit so'zidan foydalaniladi, lekin ular nomga ega bo'lmaydi. Uning qiymatini esa boshqa bir o'zgaruvchiga yuklab olishimiz mumkin. Masalan:
// const yigindi = function (a, b) {
// 	return a + b;
// };

// function yigindi(a, b, c){
// 	console.log(a + b + 10)
// }

// yigindi(5,12) //47

// yigindi("Salom", "Dunyo", "26") //SalomSalom10

// forEach() metodi - bu massiv elementlari ustida birma-bir harakat qilish uchun ishlatiladi.

// Savol: forEach() metodi faqat massivlar bilan ishlaydimi?
// Javob: NodeList (DOM elementlari), Map va Set lar bilan ham ishlaydi.

//! Eslatma: foreach metodi to'g'ridan-to'g'ri obyektlar yoki string lar  bilan ishlay olmaydi.

// forEach() metodi massivning har bir elementiga berilgan funksiyani chaqiradi va hech qanday qiymat qaytarmaydi.

//Misol:
let studentlar = [
	{ id: 1, name: "Umidbek" },
	{ id: 2, name: "Sobirjon" },
	{ id: 3, name: "Feruzbek Erkinov" },
	{ id: 4, name: "Rashidbek" },
	{ id: 5, name: "Shavkat" },
];

// studentlar.forEach(function chiqar(massiv_elementlari, massiv_indeksi, massivning_uzi){
// 	// console.log(massiv_elementlari)
// 	// console.log(massiv_indeksi)
// 	console.log(massivning_uzi)

// });

studentlar.forEach(function aylanib_chiq(qiymat) {
	if (qiymat.name === "Sobirjon") {
		return;
	}
	console.log(qiymat);
});

// Yuqoridagi misolda, forEach() metodi sonlar massivining har bir elementini konsolga chiqaradi.

// forEach() metodi, massiv elementlari ustida harakat qilish uchun qulay va oson usuldir. U massivning har bir elementiga berilgan funksiyani chaqiradi va hech qanday qiymat qaytarmaydi. Bu metod, massiv elementlarini o'zgartirish yoki yangi massiv yaratish uchun ishlatilmaydi, balki faqat harakat qilish uchun mo'ljallangan.

// let studentlar = [
// 	{ id: 1, name: "Umidbek" },
// 	{ id: 2, name: "Sobirjon" },
// 	{ id: 3, name: "Feruzbek Erkinov" },
// 	{ id: 4, name: "Rashidbek" },
// 	{ id: 5, name: "Shavkat" },
// ];

// studentlar.forEach(function (element, index, array) {
// 	console.log(`Bu elementning indexi: ${index}, va qiymati: ${element.name}"`);
// });

//* forEach() metodida break (to‘xtatish) va continue (sakrab o‘tish) operatorlarini ishlatib bo‘lmaydi.
//* Nima uchun?
//* Chunki forEach() bu oddiy sikl emas, u — "konveyer". U massivning har bir elementi uchun alohida kichkina funksiyani ishga tushiradi. Siz bitta element uchun funksiyani to‘xtatganingiz bilan, keyingi element uchun yangi funksiya baribir ochilaveradi. Uni tashqaridan boshqarib, "to‘xta" deb bo‘lmaydi.

/* Qisqacha qoidalar:

break kerakmi? (Ya'ni ma'lum bir shart bajarilsa, sikldan butunlay chiqib ketmoqchimisiz?) — Unda for yoki for...of ishlating.

continue kerakmi? (Shu elementni tashlab o‘tib, keyingisiga o‘tmoqchimisiz?) — Unda for ishlating yoki forEach ichida shunchaki return yozib keting (bu faqat o‘sha qadamni tugatadi). 
*/

// forEach() ning ichida return yozilganiga misol:

// const ballar = [50, 35, 80, 20, 95];

// ballar.forEach(function balni_hisobla(ball) {
// 	if (ball < 40) {
// 		return; // Bu "continue" kabi ishlaydi: shu talabani tashlab ketadi
// 	}

// 	console.log("Tabriklaymiz! Sizning ballingiz: " + ball);
// });
