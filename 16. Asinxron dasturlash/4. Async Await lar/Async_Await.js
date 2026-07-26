// Haqiqiy internetdagi foydalanuvchilar obyekti manzili
// const url = "https://jsonplaceholder.typicode.com/users/1";

// async function foydalanuvchiniOlish() {
// 	console.log("1. Internetdan ma'lumot so'ralmoqda...");

// 	// Tarmoqdan ma'lumot kelguncha KOD SHU YERDA TO'XTAB TURADI (await)
// 	const javob = await fetch(url);

// 	// Kelgan ma'lumotni JS obyektiga o'giramiz (bunga ham biroz vaqt ketadi)
// 	const foydalanuvchiObyekti = await javob.json();

// 	console.log(foydalanuvchiObyekti);

// 	// Ma'lumot to'liq kelgandan keyingina ushbu qatorlar ishlaydi:
// 	console.log("3. Ma'lumot muvaffaqiyatli keldi!");
// 	console.log("Foydalanuvchi ismi:", foydalanuvchiObyekti.name);
// }

// // Funksiyani ishga tushiramiz
// foydalanuvchiniOlish();

// console.log("2. Men internetdan ma'lumot kelishini kutmasdan srazu ishlayman!");

console.log("1-sinxron kod ishga tushdi...");

let url = "https://jsonplaceholder.typicode.com/users/1";

function foydalanuvchiniOlish() {
	console.log("1. Internetdan ma'lumot so'ralmoqda...");
	let javob = fetch(url);

	console.log(javob);
}

console.log("2-sinxron kod ishga tushdi...");











// async function foydalanuvchiniOlish() {
// 	console.log("1. Internetdan ma'lumot so'ralmoqda...");

// 	let javob = fetch(url);
// 	console.log(javob);
// }

// foydalanuvchiniOlish();

// console.log("2-sinxron kod ishga tushdi...");


