//////?  OBYEKT YARATISH USULLARI //////

//*1. new Object()            (1995 JavaScript tug'ilganda birinchi usul)

//*2. Konstruktor funksiya    (1995 OOP qilish uchun)

//*3. Object.create()         (2009 (ES5)Prototypeni aniq boshqarish uchun)

//*4. Literal {}              (1999+ (keng tarqaldi) new Object() juda uzun edi)

//*5. class                   (2015 ((ES6)Boshqa tillardan kelgan dasturchilar uchun qulay)

//************************************************************************* */

//? 1. new Object()



// let student = new Object();

// console.log(student);

// student.ismi = "Anvar"
// student.parol = "12345"
// student.yoshi = 15

// console.log(student);










// let mashina = new Object();

// mashina.nomi="BMW";
// mashina.tezlik=320;
// mashina.rangi="Qora";
// mashina.yili=2020;

// console.log(mashina);

// const car = new Object();
// car.brand = "Nexia";
// car.speed = 120;
// car.color = "Blue";
// car.year = 2020;

// console.log(car);

//  Nima uchun chiqdi? — JavaScript yaratilganda Java'ga o'xshatishga harakat qilishgan.
//  Muammosi — Har safar xususiyat qo'shish uchun alohida qator yozish kerak. Juda uzun, ortiqcha yozuvi ko'p.
//! Hozir ishlatiladimi? — Deyarli yo'q. Faqat ba'zi dinamik holatlarda.

//-------------------------------------------------------------------------//

//? 2. Konstruktor funksiya













// function Student(ismi, parol, yoshi){

// 	this.ismi = ismi;
// 	this.parol = parol;
// 	this.yoshi = yoshi;
	
// }


// ismi: "Umidbek",
// parol: "12345",
// yoshi: 16


// let umidbek = new Student(15000000, "12345", 16)
// let feruzbek = new Student("Feruzbek", "12345", 16)




// console.log(umidbek);
// console.log(feruzbek);






// function Mashina(brend, tezlik, rangi, yili) {
// 	this.brend = brend;
// 	this.tezlik = tezlik;
// 	this.rangi = rangi;
// 	this.yili = yili;
// }

// let mashina1 = new Mashina("BMW", 320, 2020, "Qora");

// console.log(mashina1);

// function Mashina({brend, tezlik, rangi, yili}) {
// 	this.brend = brend;
// 	this.tezlik = tezlik;
// 	this.rangi = rangi;
// 	this.yili = yili;
//  this.hisobla = function () { return this.tezlik * 1000; };
// }

// let mashina1 = new Mashina({
// 	brend: "BMW",
// 	tezlik: 320,
// 	yili: 2020,
// 	rangi: "Qora",
// 	});
// console.log(mashina1);

// let mashina1 = new Mashina("BMW", 320, "Qora", 2020);
// console.log(mashina1);

// let mashina2 = new Mashina("Mustang", 280, "Ko'k", 2020);
// console.log(mashina2);

//todo Nima uchun chiqdi? — Bir xil strukturada ko'p obyekt yaratish kerak bo'lganda literal {} bilan kod takrorlanardi.

// new kalit so'zi nima qiladi?


// function Mashina(brend, tezlik, rangi, yili) {
// 	this.brend = brend;
// 	this.tezlik = tezlik;
// 	this.rangi = rangi;
// 	this.yili = yili;
// }




// let mashina1 = new Mashina("BMW", 320, "Qora", 2020);

// let mashina2 = new Mashina("Mustang", 280, "Ko'k", 2020);

// console.log(mashina1);
// console.log(mashina2);



//1. Bo'sh obyekt yaratadi {}
//2. this = shu obyektga ishora qiladi
//3. Xususiyatlarni yozadi
//4. Obyektni qaytaradi

//todo Kamchiligi — class chiqqunga qadar standart edi, hozir class bilan almashtirildi.

//-------------------------------------------------------------------------//

//? 3. Object.create() — Eng kuchli, eng kam ishlatiladigan





// let ota = {
// 	mashina: "Nexia",
// 	telefon: "Samsung",	
// };

// let bola1 = Object.create(ota)
// let bola2 = Object.create(ota)

// bola1.kompyuter = "HP";
// bola1.yil = 2010;

// bola2.kompyuter = "Lenovo";
// bola2.yil = 2015;

// console.log(bola1);


// console.log(bola2);





















// let ota = {
// 	mashina: "Nexia",
// 	telefon: "Samsung",
	
// };

// let bola = Object.create(ota)

// bola.kompyuter = "HP";
// bola.yil = 2010;

// console.log(bola);

// console.log(bola.mashina)








// let ota = {
// 	brand: "Nexia",
// 	speed: 120,
// 	color: "Blue",
// 	year: 2020,
// };

// let bolasi = Object.create(ota);

// bolasi.nomi = "Bolasi";

// console.log(bolasi);

//todo Nima uchun chiqdi? — Prototypal inheritance'(prototipdan meros olish)ni to'g'ridan-to'g'ri, aniq boshqarish uchun.

//-------------------------------------------------------------------------//

//? 4. Literal {} — Eng qulay, eng keng tarqalgan

// let car = {
// 	brand: "Nexia",
// 	speed: 120,
// 	color: "Blue",
// 	year: 2020,
// };

// console.log(car);

//* Nima uchun chiqdi? — new Object() juda ko'p yozuv talab qilardi. {} ixcham va o'qilishi oson.

// O'ziga xos jihatlari:

// Bir marta ishlatiladigan obyekt uchun ideal
// JSON bilan ishlash juda oson
// Tez yoziladi, tez o'qiladi

// Kamchiligi — Bir xil strukturada ko'p obyekt kerak bo'lsa, har birini qayta yozish kerak (takrorlanish).

//-------------------------------------------------------------------------//

//? 5. class — Zamonaviy va tavsiya etilgan

// class Hayvon {
// 	constructor(name, sound) {
// 		this.name = name;
// 		this.sound = sound;
// 	}


// 	speak() {
// 		return `${this.name}: ${this.sound}!`;
// 	}
// }

// class Kuchuk extends Hayvon {
// 	constructor(name) {
// 		super(name, "Vov");
// 	}

// 	olib_kelish() {
// 		return `${this.name} to'pni olib keldi`;
// 	}
// }

// const reks = new Kuchuk("Rex");
// reks.speak(); // "Rex: Vov!"
// reks.olib_kelish(); // "Rex to'pni olib keldi"

// Nima uchun chiqdi? — Java, C++, C# dan kelgan dasturchilar uchun qulay sintaksis. Aslida ichida konstruktor funksiya ishlaydi (syntactic sugar).

// class Mashinalar{

// 	constructor(brend, tezlik, rangi, yili){
// 		this.brend = brend;
// 		this.tezlik = tezlik;
// 		this.rangi = rangi;
// 		this.yili = yili;
// 	}
// }

// class elektromashina extends Mashinalar{

// 	constructor(brend, tezlik, rangi, yili, elektr){
// 		super(brend, tezlik, rangi, yili);
// 		this.elektr = elektr;
// 	}
// }
