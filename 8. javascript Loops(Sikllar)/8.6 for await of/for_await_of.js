// 1. Ma'lumotni "kechikish" bilan qaytaruvchi funksiya (serverga so'rov kabi)
let malumot = document.getElementById("malumot");
let btn = document.getElementById("btn");


function obHavoMalumoti(viloyat) {
	return new Promise((resolve) => {
		// Har bir so'rov har xil vaqt olishi mumkin, biz 2 sekund qildik
		setTimeout(() => {
			resolve(`${viloyat}da bugun havo quyoshli.`);
		}, 2000);
	});
}

// 2. Viloyatlar ro'yxati
const viloyatlar = ["Toshkent", "Samarqand", "Buxoro"];

// 3. Asinxron siklni ishga tushiruvchi funksiya
async function malumotlarniChiqar() {
	console.log("Ma'lumotlar yuklanmoqda...");

	// Viloyatlarni birma-bir aylanamiz va har birini "kutib" chiqamiz
	for await (let viloyat of viloyatlar) {
		const natija = await obHavoMalumoti(viloyat);
		malumot.innerHTML += `${natija} <br>`;
		// Natija: Har 2 sekundda bitta viloyat chiqadi.
		// Hammasi birdaniga emas, navbati bilan chiqadi.
	}

	console.log("Barcha ma'lumotlar olindi.");
}

btn.onclick = malumotlarniChiqar();
