////////?   FUNKSIYALAR    ////////

//*  Funksiyaning sintaktik tarkibi:

/*
function funksiya_ismi() 
{
bu funksiya tanasi bo'lib, bu yerda kerakli amallar bajariladi.
}

yoki

function funksiya_ismi(parametr1, parametr2, parametr3, ...) 
{ 
bu funksiya tanasi bo'lib, bu yerda parametrlar ishlatiladi va kerakli amallar bajariladi.
} 
*/

//------------------------------------------------------------//

// Funksiyalar parametr qabul qilish yoki qilmasligiga qarab 2 ta turga bo'linadi.

//! 1) Parametr qabul qilmaydigan funksiyalar(void funksiyalar)

//! 2) Parametr qabul qiladigan funksiyalar(return funksiyalar)

//------------------------------------------------------------//

// 1. Parametr qabul qilmaydigan funksiyalar

// Misol:

// bu funksiyaning e'lon qilinishi(ya'ni formulaning o'zi)
// function salomlash() {
// 	console.log("Salomlashish funksiyasi ishga tushdi");
// }

// salomlash()





// salomlash(); // bu esa funksiyani chaqirilishi(ya'ni o'sha formuladan foydalanish). E'tibor bering, bunda funksiyaning tanasi bo'lmaydi(ya'ni {} qavsli qismi bo'lmaydi)

// 2. Parametr qabul qiladigan funksiyalar

// Misol:

function salomlash_parametrli(parametr1, parametr2) {
	console.log("Salomlashish funksiyasi " + parametr1 + " va " + parametr2 + " parametrlari uchun ishga tushdi");
}

// salomlash_parametrli("Sobirjon", "Abror");
// salomlash_parametrli(5555555555, 9999999999);
// salomlash_parametrli("Sobirjon")

// Bu yerda parametrlar soni cheklanmagan. Hohlagancha parametr berish mumkin(to'g'rirog'i, amaliyotda bu chegara siz foydalanayotgan JavaScript motoriga (V8, SpiderMonkey, JavaScriptCore) va kompyuteringizning stek (stack) xotirasiga bog'liq. Sodda qilib aytganda: chegara bor, lekin u juda katta.).

/* 
Ma'lumot uchun:

Dvigatellar bo'yicha taxminiy chegaralar
Turli brauzerlar va muhitlarda bu raqam turlicha:

V8 (Chrome, Node.js): Taxminan 65,535 ta parametr.

Safari (JavaScriptCore): Taxminan 65,536 ta.

Firefox (SpiderMonkey): Taxminan 500,000 tagacha yetishi mumkin. 
*/

/* 
Dasturlashda "Clean Code" (Toza kod) qoidalariga ko'ra, funksiyaga 3-4 tadan ortiq parametr berish tavsiya etilmaydi. Buning bir qancha sabablari bor:

Tushunarsizlik: meningFunksiyam(1, true, "Ali", 500, 0, "Toshkent") - bu yerda qaysi qiymat nimaligini eslab qolish juda qiyin.

Ketma-ketlik muammosi: Agar 5-parametrni o'zgartirmoqchi bo'lsangiz, undan oldingi 4 tasini ham (kerak bo'lmasa ham) yozishga majbur bo'lasiz.

Xatolarga moyillik: Parametrlar o'rni almashib ketsa, dastur noto'g'ri ishlaydi va buni topish qiyin bo'ladi. 
*/

/* 
Yechim: Obyektlardan foydalanish
Agar funksiyaga haqiqatdan ham juda ko'p ma'lumot uzatish kerak bo'lsa, eng yaxshi yo'l — obyekt (Object) uzatishdir:


YOMON KOD:
function foydalanuvchiYarat(ism, familiya, yosh, shahar, tel, email) { ... }

YAXSHI KOD: (Destructuring)
function foydalanuvchiYarat({ ism, familiya, yosh, shahar, tel, email }) {
  console.log(ism, shahar);
}

Chaqirish oson va tartib muhim emas

foydalanuvchiYarat({
  ism: "Ali",
  shahar: "Toshkent",
  yosh: 25
  qolganlarini tashlab ketish mumkin
}); 

*/

// function foydalanuvchiYarat( ism, familiya, yosh, shahar, tel, email ) {
// 	console.log(ism, familiya, yosh, shahar, tel, email);
// }

// foydalanuvchiYarat("Ali", "Toshkent", 25, 21211, 121212, "a@b.com");

// let foydalanuvchilar = {
// 	ism: "Ali",
// 	familiya: "Toshkent",
// 	yosh: 25,
// 	shahar: 21211,
// 	tel: 121212,
// 	email: "a@b.com"
// }

// function foydalanuvchi_yarat(foydalanayotgan) {
// 	console.log(foydalanayotgan.ism, foydalanayotgan.shahar, foydalanuvchilar.yosh);
	
// }

// foydalanuvchi_yarat(foydalanuvchilar);





// let user1 = {
// 	name: "Ali",
// 	city: "Toshkent",
// 	age: 25,
// 	surname: 21211,
// 	phone: 121212,
// 	email: "a@b.com",
// 	hobbies: "dokjokjxfvipojf"
// }

// let user2 = {
// 	name: "Valii",
// 	city: "Yangiariq",
// 	age: 25,
// 	surname: 21211,
// 	phone: 121212,
// 	email: "a@b.com",
// 	hobbies: "dokjokjxfvipojf"

// }


// function foydalanuvchi(name, age, city, email){

// }


// function foydalanuvchi_haqida(x) {

	
	
// 	console.log(x.name, x.city, x.age);

// }


// foydalanuvchi_haqida(user1);
// foydalanuvchi_haqida(user2);



//******************************************************** *//

// Funksiyalar qiymat qaytarishi yoki qaytarmasligiga qarab 2 ta turga bo'linadi.

//! 1) Qiymat qaytarmaydigan funksiyalar(void funksiyalar)

//! 2) Qiymat qaytaradigan funksiyalar(return funksiyalar)

//--------------------------------------------------------//

// 1. Qiymat qaytarmaydigan funksiyalar

// Buni tushunishning eng oson yo'li qiymat qaytarmaydigan va qiymat qaytaradigan funksiyalarni solishtirib o'rganish.

// function ismni_chiqar() {
// 	console.log("O'quvchining ismi: Alisher");
// }

// let natija = ismni_chiqar(); // O'quvchining ismi:Alisher

// console.log(natija)

// function ismni_chiqar_ikkinchi() {
// 	return ["Alisher", "Sobirjon", "Abror", "Asilbek", "Shoxjaxon"];
// }

// let natija = ismni_chiqar_ikkinchi();

// console.log("Bu o'lar " + natija);
// console.log("Eng yaxshi natija ko'rsatgan o'quvchilar:" + natija)

//console.log("O'quvchining ismi: " + ismni_chiqar_ikkinchi()); // Bu xatning yoniga qaytgan qiymatni chiqarish:son 10 ga teng

// Yoki

// let qaytgan_qiymat = ismni_chiqar_ikkinchi();
// console.log(qaytgan_qiymat + " - shu qiymat qaytdi"); // son 10 ga teng - shu qiymat qaytdi

// Ya'ni, qiymat qaytadigan funksiyalarda qaytgan qiymatni boshqa bir o'zgaruvchiga tayinlashimiz mumkin.

// function salomlash() {
// 	return function salom1() {
// 		return function salom2() {
// 			return "Salomlash funksiyasi ishga tushdi";
// 		};
// 	};
// }


// function kopaytirish(){
// 		return function c_ni_qush(){
// 			return 100;
// 		}
// }

// console.log(kopaytirish()())

// let x = 100;

// function yozuv_chiqar(x){
// 	if(x === 100){
//     return;
// 	}
// 	console.log("Salom")
// }

// yozuv_chiqar(100)





//salomlash();

// console.log(salomlash()()());

// a = 10;
// var a;
// console.log(a);

// b = 20;

// console.log(window.b);

// console.log(0.1 + 0.2 === 0.3);

// console.log(0.1 + 0.4)
// console.log(0.3 + 0.6 === 0.9);
// console.log(0.1 + 0.6 === 0.7);
// console.log(0.3 + 0.1 === 0.4);

//***************************************************** */

////////////?  FUNKSIYALARNI YOZILISH USLUBLARI  ////////////////

// JavaScriptda funksiyalarni yozilish uslubi (sintaksisi) bo‘yicha 4 ta asosiy guruhga bo‘lish mumkin. Har birining o‘z o‘rni va qoidalari bor.

// 1. Function Declaration (Funksiya e'loni)

// 2. Function Expression (Funksiya ifodasi)

// 3. Anonymous Function (Nomsiz funksiya)

// 4. Arrow Function (O'qsimon funksiya)

//----------------------------------------------------------//

// Bularning kelib chiqishi - vaqt o'tishi bilan Javascript ning rivojlanishi, kamchiliklarning to'g'irlanishi va o'zgaruvchilar bilan ishlashning qo'llanmasi bilan bog'liq.

//----------------------------------------------------------//

//////?    FUNCTION DECLARATION (Funksiya e'loni)    ///////

// Yaratilishi bo'yicha FUNCTION DECLORATION birinchi bo'lib yaratilgan va uni ishlatishda quyidagi kamchiliklar kelib chiqqan:

// hisoblash();


// function hisoblash() {
// 	console.log(5 + 10);
// }

// function hisoblash() {
// 	console.log(6 + 2026);
// }

// endi esa funksiyani chaqiramiz:



// Ko'rib turganingizdek bir xil nomli ikkita funksiyani FUNCTION DECLORATION yordamida yaratishimiz mumkin va uni chaqirganda eng pastda joylashgan funksiya ishga tushadi.
// Bir xil nomli ikkita funksiyaning yaratish ehtimoli - loyiha kattalashgan sari oshadi va chalkashliklarga olib keladi.

//? Nimaga ikkita bir xil nomli funksiyani yaratish mumkin?
//? Javob: Buning sababi HOISTING hisoblanadi. Hoiisting bu funksiya e'lon qilinganda, u js faylimizning eng tepa qismiga chiqib oladi va undan keyingi shu nom bilan yaratilgan funksiyalar yana huddi shu usulda tepaga chiqadi va oldingi yaratilgan funksiyaning ustiga yoziladi. Umuman olganda HOISTING bu - o'zgaruvchi yoki funksiyaning e'loni js faylning eng ustiga chiqish demakdir.

// O'zgaruvchilarda - o'zgaruvchilarning e'lon qilinishining o'ziga yarasha qoidalari bor:
// var bilan e'lon qilingan o'zgaruvchi ham huddi FUNCTION DECLORATION kabi hususiyatga ega. Bu muammoni yechish uchun esa let va const o'ylab topilgan.

// Bu muammodan qutulish uchun FUNCTION EXPRESSION g'oyasi kelgan va bu ikkita bir xil nomli funksiya yaratish muammosini yechgan.

//*********************************************************** */

////////?   FUNCTION EXPRESSION (Funksiya ifodasi)   ////////


// function hisoblash(){
// 	console.log(5 + 10);
// }








// let hisoblash = function(){
// 	console.log(5 + 10);
// }

// hisoblash();

// let studentlar = ["Umidbek", "Feruzbek", "Rashidbek", "Sobirjon"];

// studentlar.forEach(function (student, nomeri, massiv){
// 	console.log(student)
// })






// let hisoblash_expression_bilan = function () {
// 	console.log(5 + 10);
// };

// let hisoblash_expression_bilan = function () {
// 	console.log(5 + 10);
// };

// Ko'rib turganingizdek bir xil nomli ikkita funksiyani FUNCTION EXPRESSION bilan mumkin emas.

// Uning chaqirilishi esa hisoblash_expression_bilan(); kabi usulda yoziladi.

// Endi bu yerda bir qismiga ahamiyat berish kerak. Ya'ni, funksiyani o'ziga qabul qilib oluvchi o'zgaruvchi let bilan e'lon qilingan. Demak, bu funksiyaga yangi funksiya berib yuborish mumkin:

// hisoblash_expression_bilan = function () {
// 	console.log("Salom men yangi funksiyaman");
// };

// Ko'rib turganingizdek hisoblash_expression_bilan() funksiyasi endi yangi yangi tanaga ega bo'ldi va u chaqirilganda "Salom men yangi funksiyaman" chiqdi.
// Bu muammodan qutulish uchun esa FUNCTION EXPRESSION ni o'zgaruvchiga qabul qilib olganda, o'zgaruvchini const(o'zgartirib bo'lmaydi) bilan elon qilish maqsadga muvofiq. Bunday holatda o'zgaruvchiga yangi funksiyani tayinlab bo'lmaydi.

//*********************************************************** */

//////////?  ANONIM(NOMSIZ) FUNKSIYALAR (ANONIMOUS FUNCTIONS)  //////////

// Funksiyaning bunday e'lon qilinish usulida funksiyaning nomi bo'lmaydi. Ya'ni, funksiyaning o'zini boshqa yondashuvlar kabi ishlatib bo'lmaydi. Bu degani funksiya yoki qandaydir o'zgaruvchiga tayinlanishi kerak, yoki qaysidir bir funksiyaning ichida parametr sifatida ishlatilishi kerak. Buning misolini FUNCTION EXPRESSION da ko'rdik, ya'ni unda o'zgaruvchiga tayinlangan funksiya nomsiz(anonim funksiya) funksiyadir.

// misol1:

// let hisoblash_anonim = function () {
// 	console.log(5 + 10);
// };

// misol2:
// Bu misolimizda forEach() funksiyasining ichida anonim funksiya ishlatilgan.
//const mevalar = ["Olma", "Banan", "Gilos"];

// forEach ichidagi function() - bu nomsiz funksiya
// mevalar.forEach(function (meva) {
// 	console.log(meva);
// });

//********************************************************** */

//////////?  ARROW FUNKSIYALAR (O'QSIMON FUNKSIYALAR)  //////////

// Arrow funksiyalar — bu Function Expressionning yanada ixcham, zamonaviy va "aqlliroq" ko'rinishidir.

//Buni FUNCTION EXPRESSION bilan solishtirib o'rganamiz:

// FUNCTION EXPRESSION
// const natija_chiqarish = function () {
// 	console.log(5 + 10);
// };

// ARROW FUNKSIYALAR
// const natija_chiqarish_arrow = () => {
// 	console.log(5 + 10);
// };


// let natija_chiqar = () =>	console.log("Bu ");


// natija_chiqar()

// console.log(a)
// var a;
// a = 5;



// // console.log(b)
// console.log(c)

// let b = 10;
// const c = 25;

// let a;
// console.log(object)


// let son = 10;

// console.log(son)

// son = 2026;



// const malumot_chiqarish = ()=>{
// 	console.log("Malumot chiqarildi")
// }




