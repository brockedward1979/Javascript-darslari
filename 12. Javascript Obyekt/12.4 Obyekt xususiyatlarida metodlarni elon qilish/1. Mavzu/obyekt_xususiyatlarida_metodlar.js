//////?  OBYEKT XUSUSIYATLARIDA METODLARNI ELON QILISH  ////////

// Obyekt xususiyatlarida metodlarni elon qilish uchun, biz xususiyatga funksiya qiymatini berishimiz kerak. Bu funksiya obyektning metodiga aylanadi va obyekt orqali chaqirilishi mumkin bo'ladi.

// Obyektlarga metod qo'shishning bir necha usullari mavjud:

// 1. Obyekt ichida e'lon qilish (Klassik usul)
// 2. Qisqartirilgan metod yozuvi (ES6 Shorthand)
// 3. Nuqta (.) orqali tashqaridan qo'shish
// 4. Qavs ([]) orqali tashqaridan qo'shish
// 5. Prototype (Prototip) orqali qo'shish
// 6. Object.assign() yordamida qo'shish
// 7. Object.defineProperty() orqali qo'shish
// 8. Factory Functions (Fabrika funksiyalari) yordamida qo'shish
// 9. Object.create() yordamida qo'shish
// 10. Class (Sinflar) orqali qo'shish

//************************************************************ */

//* 1. Obyekt ichida e'lon qilish (Klassik usul)

//! Qayerda ishlatiladi?

//* Ishlatish holati
//  Bitta obyekt kerak bo'lganda. Takrorlanmaydigan, sodda holatlarda.
//* Real loyihada qayerda
//  Config obyektlari, bir martalik utility obyektlari, kichik skriptlar.

// let student = {
//   ismi: "Ali",
//   yoshi: 20,
//   tabrikla: function (){
//     console.log(this.ismi + " " + this.yoshi + " yoshga kirdi, tabriklaymiz!!!");
//   }

// }

// let foydalanuvchi = {
//   ismi: "Sobirjon",
//   yoshi: 20,
//   tabrikla(){
//     console.log(this.ismi + " " + this.yoshi + " yoshga kirdi, tabriklaymiz!!!")
//   }

// }

// foydalanuvchi.tabrikla()

// let student = {
//   name: "Ali",
//   age: 20,
//   greet: function() {
//     console.log("Salom, mening ismim " + this.name);
//   }
// }

// console.log(student)

//--------------------------------------------------------------//

//* 2. Qisqartirilgan metod yozuvi (ES6 Shorthand)

//! Qayerda ishlatiladi?

//* Ishlatish holati
//  Har doim — klassik usulning o'rnida foydalaning. Yangi kodda standart usul.
//*Real loyihada qayerda
// React/Vue komponentlari, Express route handlerlari, har qanday zamonaviy kod.

// let student = {
//   name: "Ali",
//   age: 20,
//   greet() {
//     console.log("Salom, mening ismim " + this.name);
//   }
// }

// console.log(student)

//--------------------------------------------------------------//

//* 3. Nuqta (.) orqali tashqaridan qo'shish

//! Qayerda ishlatiladi?

//* Ishlatish holati
//  Mavjud obyektni o'zgartirish kerak bo'lganda yoki test/debug paytida.
//* Real loyihada qayerda
//  Testing (mock qo'shish), middleware pattern, polyfill yaratishda.

// let student = {
//   ismi: "Shoxjahon",
//   yoshi: 20
// }

// student.miltiqniOl = function(){
//   console.log("Paq paq")
// }

// student.miltiqniOl()

//************************************************************ */

// 1. Ma'lumotlar bazasi (Imitatsiya)
let users = [
	{ id: 1, name: "Shoxjahon", role: "user" },
	{ id: 2, name: "Olimjon", role: "user" },
	{ id: 3, name: "Maftuna", role: "user" },
];

// 2. Superadmin obyekti
const superAdmin = {
	name: "Anvar Otabekovich",
	// Superadmin metodni keyinchalik qo'shish (Siz o'rgangan usul)
	giveAdminStatus: function (targetUser) {
		targetUser.role = "admin";

		// Foydalanuvchiga AMALIYOT bajaruvchi metod qo'shamiz
		targetUser.deleteUser = function (userId) {
			users = users.filter((u) => u.id !== userId);
			updateLog(`${this.name} ID:${userId} bo'lgan foydalanuvchini o'chirdi.`);
			renderUI();
		};

		updateLog(`${targetUser.name} endi Admin!`);
		renderUI();
	},
};

// 3. UI-ni yangilash funksiyasi
function renderUI() {
	const list = document.getElementById("user-list");
	list.innerHTML = "";

	users.forEach((u) => {
		const li = document.createElement("li");
		li.style.marginBottom = "10px";
		li.style.padding = "5px";
		li.style.borderBottom = "1px solid #eee";

		// Agar u oddiy foydalanuvchi bo'lsa - Superadmin uni Admin qila oladi
		let actionButtons = "";
		if (u.role === "user") {
			actionButtons = `<button onclick="makeHimAdmin(${u.id})">Admin qilish</button>`;
		}
		// Agar u Admin bo'lsa - u boshqalarni o'chira oladi (O'zidan tashqari)
		else if (u.role === "admin") {
			actionButtons = `<b style="color:red;">[Admin]</b> <button onclick="adminAction(${u.id})">Birovni o'chirish</button>`;
		}

		li.innerHTML = `ID: ${u.id} | <strong>${u.name}</strong> ${actionButtons}`;
		list.appendChild(li);
	});
}

// 4. Global funksiyalar (Tugmalar uchun)
window.makeHimAdmin = function (id) {
	const target = users.find((u) => u.id === id);
	superAdmin.giveAdminStatus(target);
};

window.adminAction = function (adminId) {
	const admin = users.find((u) => u.id === adminId);
	// Tasodifiy bitta foydalanuvchini o'chirish (Admin metodi orqali)
	const userToDelete = users.find((u) => u.role === "user");

	if (userToDelete) {
		admin.deleteUser(userToDelete.id);
	} else {
		alert("O'chirishga oddiy foydalanuvchi qolmadi!");
	}
};

function updateLog(msg) {
	document.getElementById("log").innerText = "Log: " + msg;
}

// Dasturni boshlash
renderUI();

//************************************************************* */

// let student = {
//   name: "Ali",
//   age: 20
// }

// student.malumotlariniChiqar = function() {
//   console.log("Ism: " + this.name + ", Yoshi: " + this.age);
// }

// console.log(student)

// student.malumotlariniChiqar()

//--------------------------------------------------------------//

//* 4. Qavs ([]) orqali tashqaridan qo'shish

//! Qayerda ishlatiladi?

//* Ishlatish holati
//  Metod nomi runtime'da belgilanganida — o'zgaruvchidan yoki API javobidan.
//* Real loyihada qayerda
//  Plugin tizimlar, metaprogramming, dynamic dispatch, API-driven UI.

// let yangilash = "magazinniYangila"

// let student = {
//   ismi: "Feruzbek",
//   yoshi: 20
// }

// student[yangilash] = function(){
//   console.log("Magazin yangilandi")
// }

// student.magazinniYangila()

// let student = {
//   ismi: "Ali",
//   yoshi: 20
// }

// let metodNomi = "aaaaaaaaa";

// student[metodNomi] = function() {
//   console.log("Ism: " + this.ismi + ", Yoshi: " + this.yoshi);
// }

// console.log(student)

// let student = {
//   name: "Ali",
//   age: 20
// }

// student["malumotlariniChiqar"] = function() {
//   console.log("Ism: " + this.name + ", Yoshi: " + this.age);
// }

// console.log(student)

// student["malumotlariniChiqar"]()

//--------------------------------------------------------------//

//* 5. Prototype (Prototip) orqali qo'shish

//! Qayerda ishlatiladi?

//* Ishlatish holati
//  Eski JavaScript (ES5 va undan oldin). Hozir CLASS bilan almashtirilgan.
//* Real loyihada qayerda
//  jQuery kabi eski kutubxonalar, IE-compatible kod. Yangi loyihada ishlatmang.

// let hisobla = function(ismi, yoshi){
//   this.ismi = ismi;
//   this.yoshi = yoshi;
// }

// let student = new hisobla("Nurbek", 20)

// hisobla.prototype.malumot_ber = function(){
//   console.log("Men prototipdan kelgan funksiyaman")
// }

// console.log(student.malumot_ber())

// let student = {
//   ismi: "Abror",
//   yoshi: 20
// }

// console.log(student)
// console.log(student.toString())

// let hisobla = function(ism, yosh) {
//   this.ism = ism;
//   this.yosh = yosh;
// }

// hisobla.prototype.malumotlariniChiqar = function() {
//   console.log("Ism: " + this.ism + ", Yoshi: " + this.yosh);
// }

// let student1 = new hisobla("Ali", 20);
// let student2 = new hisobla("Vali", 22);

// console.log(student1)
// console.log(student2)

// let student = function(name, age) {
//   this.name = name;
//   this.age = age;
// }

// student.prototype.malumotlariniChiqar = function() {
//   console.log("Ism: " + this.name + ", Yoshi: " + this.age);
// }

// let student1 = new student("Ali", 20);
// let student2 = new student("Vali", 22);

// console.log(Object.getPrototypeOf(student1)) // student1 ning prototipini ko'rsatadi

// console.log(student1)
// console.log(student2)

// student konstruktor funksiyasi yordamida yangi student obyektlari yaratamiz. Har bir student obyektida 'name' va 'age' xususiyatlari bo'ladi, va ular prototip orqali 'malumotlariniChiqar' metodiga ega bo'ladi.
// Bu metod har bir student obyektida mavjud bo'ladi, chunki u prototipda saqlanadi.
// Bu usul xotira samaradorligini oshiradi, chunki har bir obyekt uchun alohida metod yaratilmaydi, balki barchasi prototipda saqlanadi.
// new kalit so'zi esa student konstruktor funksiyasini chaqiradi va yangi obyekt yaratadi, bu obyekt konstruktor funksiyasining prototipiga ulanadi.

//? Orqa fondagi jarayon:

// let student = function(name, age) {
//   1. (Fonda) this = {};

//   this.name = name; // 2. Bo'sh obyektga 'name' xususiyati qo'shildi
//   this.age = age;   // 3. Bo'sh obyektga 'age' xususiyati qo'shildi

//   4. (Fonda) return this;
// }

// student.prototype.malumotlariniChiqar = function() {
//   console.log("Ism: " + this.name + ", Yoshi: " + this.age);
// }

// console.log(student)

// Lekin:

//let student1 = new student("Ali", 20); // holatida esa new kalit so'zi student konstruktor funksiyasini chaqiradi va yangi obyekt yaratadi, bu obyekt konstruktor funksiyasining prototipiga ulanadi. Bu jarayon quyidagicha amalga oshadi:
// 1. (Fonda) this = {}; // Yangi bo'sh obyekt yaratiladi
// 2. this.name = name; // Yangi obyektga 'name' xususiyati qo'shildi
// 3. this.age = age;   // Yangi obyektga 'age' xususiyati qo'shildi
// 4. (Fonda) return this; // Yangi obyekt qaytariladi

//--------------------------------------------------------------//

//* 6. Object.assign() yordamida qo'shish

//! Qayerda ishlatiladi?

//* Ishlatish holati
//  Bir nechta obyektni birlashtirish yoki mixin pattern uchun.
//* Real loyihada qayerda
//  Mixin pattern, default qiymatlar birlashtirish, config merge qilish.

// let student = {
//   ismi: "Abror",
//   yoshi: 20
// }

// Object.assign(student,{
//   maktabi: "26-maktab",

// })

// console.log(student)

// let student1 = {
//   ismi: "Ali",
//   yoshi: 20
// }

// console.log(student1)

// Object.assign(student1, {
//   malumotlarniChiqar: function() {
//     console.log("Ism: " + this.name + ", Yoshi: " + this.age);
//   }
// })

// console.log(student1)

// let student1 = {
//   name: "Ali",
//   age: 20
// }

// let student2 = {
//   name: "Vali",
//   age: 22
// }

// Object.assign(student1, {
//   malumotlariniChiqar: function() {
//     console.log("Ism: " + this.name + ", Yoshi: " + this.age);
//   }})

// Object.assign(student2, {
//   malumotlariniChiqar: function() {
//     console.log("Ism: " + this.name + ", Yoshi: " + this.age);
//   }})

// console.log(student1)
// console.log(student2)

// Bu usul yordamida biz bir nechta metodlarni bir vaqtning o'zida qo'shishimiz mumkin, bu esa kodni yanada toza va samarali qiladi. Object.assign() metodi bir yoki bir nechta manba obyektlaridan ma'lumotlarni maqsad obyektiga nusxalash uchun ishlatiladi. Bu usul yordamida biz student obyektiga 'malumotlariniChiqar' metodini qo'shdik, bu metod studentning ismi va yoshini konsolga chiqaradi.

// let profil = { id: 1 };
// let sozlamalar = { tema: "qorong'u" };
// let manzil = { shahar: "Toshkent" };

// Har xil strukturalar bitta "super-obyekt"ga aylandi
// let natija =Object.assign(profil, sozlamalar, manzil);

// console.log(natija)

// Prototip bilan farqi:

// Object.assign: Metodni obyektning o'ziga (own property) yopishtiradi.

// Prototype: Metodni obyektning otasiga (parent) qo'yadi, obyektlar esa uni shunchaki "ishlatib turadi".

// Object.assign yordamida qo'shilgan metodlar har bir obyekt uchun alohida nusxa bo'ladi, bu esa xotira samaradorligini kamaytirishi mumkin. Prototip orqali qo'shilgan metodlar esa barcha obyektlar tomonidan umumiy ravishda ishlatiladi, bu esa xotira samaradorligini oshiradi.

//--------------------------------------------------------------//

//* 7. Object.defineProperty(target, property_name, descriptor) orqali qo'shish

// 1-parametr: target — metod qo'shmoqchi bo'lgan obyekt.
// 2-parametr: property_name — metod nomi (string yoki symbol).
// 3-parametr: descriptor — metod qiymati va xususiyatlari.

// let student = {}

// Object.defineProperties(student,{

//   ismi: {
//     value: "Aslbek",
//     writable: true,
//     configurable: false,
//     enumerable: true
//   },
//   familyasi:{
//     value: "Nasriddinov",
//     enumerable: true
//   },
//   yoshi:{
//     value: 50
//   },
//   maktabi: {
//     value: "29-maktab"
//   }

// })

// console.log(student)

//! Qayerda ishlatiladi?

//* Ishlatish holati
//  Metodni o'zgartirib/o'chirib bo'lmasin desangiz. Kutubxona API yaratishda.
//* Real loyihada qayerda
//  Vue.js reaktivlik tizimi, ORM kutubxonalari, API SDK'lar, xavfsiz kutubxona yaratishda.

// let student = {
//   ismi: "Ali",
//   yoshi: 20
// }

// Object.defineProperty(student, "hisobla", {
//   value: function(){
//     console.log("Ism: " + this.ismi + ", Yoshi: " + this.yoshi);
//   },
//   writable: false, // Metod qiymatini o'zgartirishga ruxsat beradi
//   enumerable: true, // Metod xususiyatlarini enumeratsiya qilishga ruxsat beradi
//   configurable: true // Metod xususiyatlarini o'zgartirish yoki o'chirishga ruxsat beradi
// } )

// student.hisobla()

// student.hisobla = function() {
//   console.log("Bu metod o'zgartirildi!");
// }

// student.hisobla()

// for(let kalit in student){
//   console.log(kalit)
// }

// let student = {
//   name: "Ali",
//   age: 20
// }

// Object.defineProperty(student, "malumotlariniChiqar", {
//   value: function() {
//     console.log("Ism: " + this.name + ", Yoshi: " + this.age);
//   },
//   writable: true, // Metod qiymatini o'zgartirishga ruxsat beradi
//   enumerable: true, // Metod xususiyatlarini enumeratsiya qilishga ruxsat beradi
//   configurable: true // Metod xususiyatlarini o'zgartirish yoki o'chirishga ruxsat beradi

// })

// console.log(student)

// Bu usul yordamida biz metodning xususiyatlarini aniq belgilashimiz mumkin, masalan, metodni o'zgartirishga yoki o'chirishga ruxsat berish yoki bermaslik. Object.defineProperty() metodi obyektga yangi xususiyat qo'shish yoki mavjud xususiyatni o'zgartirish uchun ishlatiladi. Bu usul yordamida biz student obyektiga 'malumotlariniChiqar' metodini qo'shdik, bu metod studentning ismi va yoshini konsolga chiqaradi. Metodning xususiyatlari ham aniq belgilangan, bu esa kodni yanada nazorat qilish imkonini beradi.

//--------------------------------------------------------------//

//* 8. Factory Functions (Fabrika funksiyalari) yordamida qo'shish

//* Avvalambor factory function nimaligini tushunaylik:
// Factory function — bu yangi obyektlar yaratish uchun ishlatiladigan oddiy funksiya. U konstruktor funksiyasiga o'xshash, lekin new kalit so'zini talab qilmaydi. Factory function ichida biz yangi obyekt yaratamiz, unga xususiyatlar va metodlar qo'shamiz, va oxirida bu obyektni qaytaramiz. Keyin esa bu funksiyani chaqirib o'zgaruvchilarga tayinlasak har bir o'zgaruvchi yangi obyektga ega bo'ladi.

// Uni xuddi mahsulot chiqaradigan fabrika deb tasavvur qiling: siz unga xomashyo (argumentlar) berasiz, u esa sizga tayyor mahsulot (obyekt) qaytaradi.

// let student = function(ismi, yoshi, maktabi){

//   return {
//     ismi: ismi,
//     yoshi: yoshi,
//     maktabi: maktabi,
//     jami_malumot_chiqar: function(){
//       console.log(`${this.ismi} ${this.yoshi} ${this.maktabi}`)
//     }
//   }

// }

// let student1 = student("Anvar", 38, "11-son")
// let student2 = student("Malika Budur", 7, "25-bog'cha")

// student1.jami_malumot_chiqar()
// student2.jami_malumot_chiqar()

//! Qayerda ishlatiladi?

//* Ishlatish holati
//  Class ishlatish shart emas yoki this muammolaridan qochmoqchi bo'lsangiz.
//* Real loyihada qayerda
//  Functional programming uslubi, closure kerak bo'lganda, sodda obyekt yaratishda.

// function studentYarat(ismi, yoshi){
//   return {
//     ismi: ismi,
//     yoshi: yoshi,
//     malumotlarniChiqar: function() {
//       console.log("Ism: " + this.ismi + ", Yoshi: " + this.yoshi);
//     }
//   }
// }

// let student1 = studentYarat("Ali", 20);
// let student2 = studentYarat("Vali", 22);

// console.log(student1)
// console.log(student2)

// Funksiya ichida yangi obyekt yasab qaytarish.

// function createStudent(name, age) {
//   return {
//     name: name,
//     age: age,
//     malumotlariniChiqar: function() {
//       console.log("Ism: " + this.name + ", Yoshi: " + this.age);
//     }
//   }
// }

// let student1 = createStudent("Ali", 20);
// let student2 = createStudent("Vali", 22);

// console.log(student1)
// console.log(student2)

// Bu usul yordamida biz bir nechta student obyektlarini yaratishimiz mumkin, har biri o'ziga xos xususiyatlarga ega bo'ladi. Factory funksiyalari yordamida biz kodni yanada toza va samarali qilamiz, chunki biz bir xil struktura va metodlarni qayta-qayta yozishimiz shart emas. createStudent funksiyasi yangi student obyektlarini yaratadi, har bir obyekt 'name', 'age' xususiyatlariga ega bo'ladi va 'malumotlariniChiqar' metodini o'z ichiga oladi, bu metod studentning ismi va yoshini konsolga chiqaradi.

// Factory function larda:
// Metodlar har safar yangidan yaratiladi (nusxalanadi)

// Class larda:
// Metodlar prototipda turadi (xotira tejaladi)

//--------------------------------------------------------------//

//* 9. Object.create() yordamida qo'shish

//! Qayerda ishlatiladi?

//* Ishlatish holati
//  ES5 da prototype-based meros uchun. Hozir class extends bilan almashtirilgan.
//* Real loyihada qayerda
//  Eski kodda uchraydi. Yangi loyihada class ishlatish ancha tushunarli.

// let student_prototipi = {
//   malumot_chiqar: function(){
//     console.log("Ism: " + this.name + ", Yoshi: " + this.age);
//   }
// }

// let student1 = Object.create(student_prototipi);

// student1.name = "Ali";
// student1.age = 20;

// console.log(student1)

// student1.malumot_chiqar()

// let studentProto = {
//   malumotlariniChiqar: function() {
//     console.log("Ism: " + this.name + ", Yoshi: " + this.age);
//   }
// }

// let student1 = Object.create(studentProto);
// student1.name = "Ali";
// student1.age = 20;

// let student2 = Object.create(studentProto);
// student2.name = "Vali";
// student2.age = 22;

// console.log(student1)
// console.log(student2)

// Bu usul yordamida biz studentProto prototipiga asoslangan yangi student obyektlarini yaratishimiz mumkin. Har bir student obyektida 'name' va 'age' xususiyatlari bo'ladi, va ular prototip orqali 'malumotlariniChiqar' metodiga ega bo'ladi. Object.create() metodi yangi obyekt yaratadi va unga ko'rsatilgan prototipni belgilaydi, bu esa kodni yanada toza va samarali qiladi. studentProto prototipi yordamida biz 'malumotlariniChiqar' metodini barcha student obyektlariga umumiy ravishda taqdim etamiz, bu esa xotira samaradorligini oshiradi.

// let student = {
//   name: "Ali",
//   age: 20,

// }

// console.log(student)

// student.malumotlariniChiqar = function() {
//   console.log("Ism: " + this.name + ", Yoshi: " + this.age);
// }

// console.log(student)

//--------------------------------------------------------------//

//* 10. Class (Sinflar) orqali qo'shish

//! Qayerda ishlatiladi?

//* Ishlatish holati
//  Ko'p obyekt kerak bo'lganda, meros kerak bo'lganda, har qanday OOP vazifasida.
//* Real loyihada qayerda
//  React komponentlari (class-based), ORM modellari (Mongoose, TypeORM), servislar, NestJS kontrollerlari.

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   malumotlariniChiqar() {
//     console.log("Ism: " + this.name + ", Yoshi: " + this.age);
//   }
// }

// let student1 = new Student("Ali", 20);
// let student2 = new Student("Vali", 22);

// console.log(student1)
// console.log(student2)

// let student = {}

// Object.defineProperties(student, {
//   ismi: {
//     value: "Ali",
//     writable: true,
//     configurable: true,
//     enumerable: true
//   },
//   yoshi: {
//     value: 20,
//     writable: true,
//     configurable: false,
//     enumerable: true
//   }
// })

// console.log(student.yoshi)

// for(let kalit in student) {
//   console.log(kalit)
// }

// let yangi = student.yoshi = 35;

// console.log(student.yoshi)

// delete student.yoshi;

// console.log(student.yoshi)
