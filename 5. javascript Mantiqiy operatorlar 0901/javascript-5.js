//?TAQQOSLASH OPERATORLARI(COMPARISON OPERATORS)//
//
// 1. == teng operatori
// 2. != teng emas operatori
// 3. > katta operatori
// 4. < kichik operatori
// 5. >= katta yoki teng operatori
// 6. <= kichik yoki teng operatori

// console.log(null == 0); // false
// console.log(null != 0); // true

// console.log(5 + null);

// console.log(5 != null);

// console.log(5 == "5");

// console.log(5 == "5.0");

// console.log(5 === 5);

// console.log(5 === "5");

// console.log(5 !== 10);

// console.log(undefined == 0); // false
// console.log(undefined != 0); // true

// console.log(10 > null);

// console.log(undefined < 12);
// console.log(undefined > 12);

// console.log(null >= 0);

// console.log(null > 0);

//! Qoida: solishtirishlar qiymat turi bilan bo'ladi.

//! Bunda shunday qoida bor:
//! Agar NULL yoki UNDEFINED lar boshqa qiymatlar bilan == yoki != operatorlari bilan solishtirilsa qiymatlar number ga aylantirilmasdan solishtiriladi. UNDEFINED va NULL har doim bir biriga teng va ular boshqa hech bir qiymatga teng emas.
//! NULL va UNDEFINED lardan tashqari boshqa hamma qiymatlar songa o'tqazilib qiymatlari solishtiriladi.

//! Agar >,<,>=,<= operator ishlatilsa qiymatlar number ga aylantirilib solishtiriladi solishtiriladi(bu NULL va UNDEFINED lar uchun ham bajariladi).

// Bunga misollar:

// console.log(0 == false); // true
// console.log(0 == null); // false
// console.log(0 != null); // true
// console.log(0 == undefined); // false
// console.log(0 == ""); // true
// console.log(undefined == null); //true
// console.log(0 > null); //false
// console.log(0 > undefined); //false
// console.log(0 < null); //false
// console.log(0 < undefined); //false
// console.log(0 > undefined); //false

// console.log(0 >= null); //true

// console.log(0 >= undefined); //false, chunki undefined songa o'tqazilganda NaN ga aylantiriladi

// console.log(0 <= null); //true

// console.log(0 <= undefined); //false, chunki undefined songa o'tqazilganda NaN ga aylantiriladi

// 1. == teng operatori (loose equality
//(yumshoq tenglik))

// Bunda faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirilmaydi.

// console.log(5 == "5"); // true
// console.log(5 === "5");
// console.log(5 == "4"); // false
// console.log(5 == "6"); // false
// console.log(5 == "5.0"); // true
// console.log(0 == false); // true
// console.log(0 === false);
//console.log(0 == null); //? false, bu holat == operatori null da ishlatilishi qoidasi tushadi.
//console.log(0 == undefined); //? false, bu holat == operatori undefined da ishlatilishi qoidasi tushadi.

// console.log(0 == ""); // true
// console.log(0 > "");
// console.log(0 < "");
// console.log(0 >= "");
// console.log(0 <= "");

//"" ni songa aylantirganda uning qiymati 0 ga teng bo'ladi.

// 2. != teng emas operatori (loose not equal)
// Bunda ham faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirilmaydi.

// console.log(5 != "5"); // false
// console.log(5 != "4"); // true
// console.log(5 != "6"); // true
// console.log(5 != "5.0"); // false
// console.log(0 != false); // false
// console.log(0 != null); //? true, bu holat != operatori null da ishlatilishi qoidasi tushadi.
// console.log(0 != undefined); //? true, bu holat != operatori undefined da ishlatilishi qoidasi tushadi.
// console.log(0 != ""); // false

//! >,<,>=,<= operator ishlatilsa qiymatlar number ga aylantirilib solishtiriladi, HATTOKI NULL va UNDEFINED lar uchun ham bajariladi. NULL songa aylantirilsa 0 ga teng. UNDEFINED songa aylantirilsa NaN ga teng. Muhim eslatma: NaN bilan taqqoslash har doim false bo'ladi.

// 3. > katta operatori (greater than)
// Bunda faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirishdan ma'no yo'q.

// console.log(5 > "4"); // true
// console.log(5 > "5"); // false
// console.log(5 > "6"); // false
// console.log(5 > "5.0"); // false
// console.log(0 > false); // false
// console.log(0 > null); // false
// console.log(0 > undefined); // false
// console.log(0 > ""); // false

// 4. < kichik operatori (less than)
//Bunda faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirishdan ma'no yo'q.

// console.log(5 < "4");
// console.log(5 < "5");
// console.log(5 < "6");
// console.log(5 < "5.0");
// console.log(0 < false);
// console.log(0 < null);
// console.log(0 < undefined);
// console.log(0 < "");

// 5. >= katta yoki teng operatori (greater than or equal)
// Bunda ham faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirilmaydi.

// console.log(5 >= "4");
// console.log(5 >= "5");
// console.log(5 >= "6");
// console.log(5 >= "5.0");
// console.log(0 >= false);
// console.log(0 >= null);
// console.log(0 >= undefined);
// console.log(0 >= "");
// console.log(null >= undefined); //!
// console.log(null == undefined); //!
// console.log(null === undefined); //!

// console.log(typeof undefined);

// 6. <= kichik yoki teng operatori (less than or equal) Bunda ham faqat qiymati tekshiriladi, ma'lumot turi bilan tekshirilmaydi.

// console.log(5 <= "4");
// console.log(5 <= "5");
// console.log(5 <= "6");
// console.log(5 <= "5.0");
// console.log(0 <= false);
// console.log(0 <= null);
// console.log(0 <= undefined);
// console.log(0 <= "");

//! QAT'IY TENGLIK(STRICT EQUALITY)
//! Bunda qiymati ham ma'lumot turi ham taqqoslanadi.
// 7. === teng teng operatori (strictly equal(qat'iy tenglik))

// console.log(5 === "5");
// console.log(5 === "4");
// console.log(5 === "6");
// console.log(5 === "5.0");
// console.log(0 === "");
// console.log(0 === false);
// console.log(0 === null);
// console.log(0 === undefined);

// 8. !== teng emas operatori (strictly not equal(qat'iy teng emaslik))

// console.log(5 !== "5");
// console.log(5 !== "4");
// console.log(5 !== "6");
// console.log(5 !== "5.0");
// console.log(0 !== "");
// console.log(0 !== false);
// console.log(0 !== null);
// console.log(0 !== undefined);

//*************** MISOLLAR ***************//

// console.log(5 == 5);
// console.log(5 > 10);
// console.log(5 < 10);
// console.log(5 >= 10);
// console.log(5 <= 10);
// console.log(5 != 10);
// console.log(5 != 5);
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 !== "5");
// console.log(5 === 5);
// console.log(5 !== 5);
// console.log(5 >= 5);
// console.log(5 <= 5);
// console.log(2025 !== undefined);
// console.log(2025 === undefined);
// console.log(2025 == undefined);
// console.log(2025 != undefined);
// console.log(2025 > undefined);
// console.log(2025 < undefined);
// console.log(2025 >= undefined);
// console.log(2025 <= undefined);

// console.log(5 === "4");
// console.log(5 !== "4");

//? =======BOOLEAN CONTEXT=======//

// console.log(5);
// console.log(5 > 4);

// console.log(!5)

// console.log(5);
// console.log(5 > 4);
// console.log(!5);
// console.log(!!5);

// console.log(!!0n);

//? Boolean context har safar dastur biror ifodani true yoki false sifatida baholashi kerak bo'lganda paydo bo'ladi.

//* Shartli tuzilmalar (Conditional statements)if, else if, while, for kabi tuzilmalar ichidagi shartlar avtomatik ravishda Boolean kontekstda baholanadi.

//? Mantiqiy operatorlar (Logical operators)(!, &&, ||). Bu operatorlar operandlarni Boolean kontekstda baholaydi.

//? Ternary operator (?:). Shart qismi Boolean kontekstda tekshiriladi.

//* Sikl(Loop) shartlari while (expr) yoki do { ... } while (expr) ichidagi expr Boolean kontekstda avtomatik ravishda baholanadi.

//? Boolean tipiga majburan o‘tkazish (Boolean() yoki !! yoki !). Qiymatni to‘g‘ridan-to‘g‘ri Boolean kontekstga o‘tkazadi.

//? 1. Falsy qiymatlar
//? 2. Truthy qiymatlar

//? Agar taqqoslash operatorlari bo'lmasa, biror qiymatning o'zining true yoki false qiymatlarini tekshirmoqchi bo'lsak !! belgini shu qiymatning oldiga qo'yish orqali yoki Boolean() funksiyasi orqali Boolean kontekstga o'tkazish mumkin. Bular qiymatni majburan boolean turga(true yoki false ga) aylantiradi.

// ! — bu logical NOT operatori. U har doim Boolean qiymat qaytaradi (true yoki false).

//? Demak ! qiymatning boolean context ga inkor qilib o'tkazsa, !! belgi ifodaning inkor inkor varianti bilan asl qiymatni beradi.

//? Falsy qiymatlar(Bular boolean kontekstda false qiymat qaytaradi):

// false
// 0
// -0
// 0n
// -0n
// ""
// null
// undefined
// NaN

// console.log(false);
// console.log(0);
// console.log(-0);
// console.log(0n);
// console.log(-0n);
// console.log("");
// console.log(null);
// console.log(undefined);
// console.log(NaN);

// console.log(!!false);
// console.log(!!0);
// console.log(!!-0);
// console.log(!!0n);
// console.log(!!-0n);
// console.log(!!!"!");
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!NaN);

// console.log(!!false);

// console.log(!!null);
// console.log(null > -5);

// console.log(!!0);
// console.log(!!false);
// console.log(!!"false");
// console.log(0n);
// console.log(!0n);
// console.log(!!NaN);

// console.log(!!100);

// console.log(!!"");
// console.log(!!" ");
// console.log(!!"  ");
// console.log(!!!!!null);
// console.log(10 > 25);

// console.log(!"");
// console.log(!!"");
// console.log(!0);
// console.log(!!0);
// console.log(!!0);
// console.log(!false);
// console.log(!!false);
// console.log(!null);
// console.log(!!null);
// console.log(!undefined);
// console.log(!!undefined);
// console.log(!NaN);
// console.log(!!NaN);
// console.log(!0n);
// console.log(!!0n);
// console.log(!-0n);
// console.log(!!-0n);

// console.log(!!false);
// console.log(!!0);
// console.log(!!-0);
// console.log(!!"");
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!NaN);
// console.log(!!0n);
// console.log(!!-0n);

// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));
// console.log(Boolean(-0n));

//? Truthy qiymatlar(Bular Boolean kontekstda true qiymatni qaytaradi):

// Har qanday 0,-0, 0n, -0n bo'lmagan har qanday sonlar, malasalan: -12.3, 2025, ...
// " ", "  ", "   ", ...
// "Anvar" (Har qanday bo'sh bo'lmagan string)
// "0" (String ichida 0)
// "false" (String ichida false)
// 'false'
// true
// 1
// {}  // bo'sh obyekt

// function(){}
// {
//     ism: "Umid",
//     yoshi: 15,               // bo'sh bo'lmagan obyekt
//     manzili: "Xorazm"
// }

// []  bo'sh array
// [0]  bo'sh bo'lmagan array
// [1, 1015, "Anvar"]  bo'sh bo'lmagan array

// console.log(!!"0");
// console.log(!!0);
// console.log(0);

// console.log(!!-125);
// console.log(!"Abror");
// console.log(!!"Abror");

// console.log(!!" "); // true
// console.log(!!""); // false
// console.log(!""); //true
// console.log(!" "); //false

// console.log(!!"0");
// console.log(!"0");
// console.log(!!"false");
// console.log(!!false);
// console.log(!false);
// console.log(!!true);
// console.log(!!1);
// console.log(!!{});
// console.log(!![]);
// console.log(!!function () {});

// function qidir(){
// qidiruv bo'yicha algoritmlar
// }

// console.log(Boolean(-125));
// console.log(Boolean("Anvar"));
// console.log(Boolean(" "));
// console.log(Boolean("0"));
// console.log(Boolean("false"));
// console.log(Boolean(true));
// console.log(Boolean(1));
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(function () {}));

//! Misollani ishlangla!!!

// console.log(!5 > 3); //!
// console.log(!!5 > 3); //!
// console.log(!5 < 3); //!
// console.log(!!5 < 3); //!
// console.log(!5 == 3); //!
// console.log(!!5 == 3); //!
// console.log(!5 === 3); //!
// console.log(!!5 === 3); //!
// console.log(!5 >= 3); //!
// console.log(!!5 >= 3); //!
// console.log(!5 <= 3); //!
// console.log(!!5 <= 3); //!
// console.log(!5 != 3); //!
// console.log(!!5 != 3); //!
// console.log(!5 !== 3); //!
// console.log(!!5 !== 3); //!

//? =MANTIQIY OPERATORLAR(LOGICAL OPERATORS)=//

//? 1. && and operatori (VA operatori)
//? 2. || or operatori (YOKI operatori)
//? 3. ! not operatori (EMAS operatori)

// let ismi = "Anvar";
// let parol = "12345";
// let yoshi = 15;

// console.log(ismi == "anvar");
// console.log(parol == "12345");
// console.log(yoshi >= 15);

let ism = "Anvar";
let parol = "12345";
let yosh = 15;

// console.log(ism == "Anvar")
// console.log(ism == "anvar");

// console.log(parol == "12345");
// console.log(parol == 12345);
// console.log(parol === 12345);
// console.log(parol == "123456");
// console.log(yosh == 15);

//////? SHORT CIRCUITING (QISQA UCHUNLIK) //////////////

//!1-misol:---------------------------------------------
let isLogged = false;

// "if" ishlatmasdan:
isLogged && console.log("Xush kelibsiz!"); // Hech narsa chiqmaydi, xato ham bermaydi

// Aks holda (Short-circuit):
isLogged = true;
isLogged && console.log("Xush kelibsiz!"); // Natija: "Xush kelibsiz!"

//!2-misol:---------------------------------------------
let user = {
	isLogged: true,
	name: "Ali",
};

//Agar isLogged true bo'lsa, ISMNI CHIQAR
user.isLogged && console.log("Salom, " + user.name); // Natija: "Salom, Ali"

// Aks holda (Short-circuit):
user.isLogged = false;
user.isLogged && console.log("Salom, " + user.name); // Hech narsa chiqmaydi, xato ham bermaydi

//////? default (standart) qiymat berish //////////////

//!1-misol:---------------------------------------------
let kiritilganIsm = ""; // Foydalanuvchi hech narsa yozmadi (falsy)

let foydalanuvchi = kiritilganIsm || "Mehmon"; // Agar foydalanuvchi ism kiritmagan bo'lsa, "Mehmon" ni ishlat

console.log(foydalanuvchi); // Natija: "Mehmon"

// Aks holda (Short-circuit):
kiritilganIsm = "Jasmina"; // Foydalanuvchi ism kiritdi
foydalanuvchi = kiritilganIsm || "Mehmon"; // Endi foydalanuvchi ismi ishlatiladi

console.log(foydalanuvchi); // Natija: "Jasmina"

//!2-misol:----------------------------------------------
let isAdmin = true;
let userName = "Asadbek";

// Agar admin bo'lsa "Admin", bo'lmasa ismini ko'rsat
let statusi = (isAdmin && "Tizim boshqaruvchisi") || userName;

console.log("Status: " + statusi); // Natija: "Status: Tizim boshqaruvchisi"

// Aks holda (Short-circuit):
isAdmin = false;
statusi = (isAdmin && "Tizim boshqaruvchisi") || userName;

console.log("Status: " + statusi); // Natija: "Status: Asadbek"

//////? "Zanjir" (Chain) mashqi (topshiriq) //////////////

/* O'quvchilar uchun "Zanjir" (Chain) mashqi:


1. isOnline degan o'zgaruvchi ochish.

2. hasPermission degan o'zgaruvchi ochish.

3. Agar foydalanuvchi ham onlayn bo'lsa, ham ruxsati bo'lsa — "Faylni yuklab olish mumkin" degan xabarni && orqali chiqarsin. */

//? && (Guard Operator) – "Himoya" operatori
/* Funksiyani chaqirishdan oldin obyekt mavjudligini tekshirish. Bu xatolarni (Error) oldini oladi.

Trick: obyekt && obyekt.metod()

Real holat: API-dan ma'lumot kelyapti, lekin u kechikishi yoki kelmasligi mumkin. */

let settings = null;

// settings.theme() deb yozsak error beradi (chunki settings null)
// Himoyalangan usul:
settings && settings.theme(); // Hech narsa sodir bo'lmaydi, error ham bermaydi.

//?           ?? (Nullish Coalescing) – "Aniq" nol yoki bo'sh matn bilan ishlash //////////////
/* Qiymat null yoki undefined bo'lsa, standart qiymatni qaytarish.
Bu || operatorining aqlliroq varianti. || operatori 0 yoki "" (bo'sh matn) ni ham false deb hisoblaydi. Lekin ?? faqat null yoki undefined bo'lsagina ishlaydi.

qiymat ?? standart

Real holat: O'yinda ochko 0 bo'lishi mumkin.
*/

let score = 0;

let result1 = score || 10; // 10 qaytaradi (chunki 0 - falsy)
let result2 = score ?? 10; // 0 qaytaradi (chunki 0 null yoki undefined emas)

console.log(result1, result2); // 10, 0

//!      Asosiy qoida: "Dasturchilikda && — 'birinchi yolg'onchini', || — 'birinchi haqgo'yni' qidiradi".

//!      Mantiqiy VA (&&) operatorining qoidasi: U chapdan o'ngga qarab birinchi yolg'onchini (falsy qiymatni) qidiradi. Agar && (VA) operatori zanjir ichida birorta ham yolg‘onchini (falsy) topa olmasa, u eng oxirgi tekshirilgan qiymatni qaytaradi.

console.log("Salom" && 0 && "Xayr");
console.log("Salom" && 2026 && "Xayr");
// Natija: "Xayr" (chunki barcha qiymatlar truthy)

console.log(!!("Salom" && 0 && "Xayr"));

//!      Mantiqiy YOKI (||) operatorining qoidasi: U chapdan o'ngga qarab birinchi haqgo'yni (truthy qiymatni) qidiradi. Agar || (YOKI) operatori zanjir ichida birorta ham haqgo'yni (truthy) topa olmasa (ya'ni barcha qiymatlar falsy bo'lsa), u eng oxirgi tekshirilgan falsy qiymatni qaytaradi.

console.log("" || "Asosiy" || "Zaxira");
console.log(false || null || 0 || undefined);
// Natija: undefined (chunki barcha qiymatlar falsy)

console.log(!!("" || "Asosiy" || "Zaxira"));

//? Real misol:

let homePhone = null;
let workPhone = undefined;
let mobilePhone = ""; // Bo'sh qoldirilgan

//!O‘quvchilar ko‘pincha: "Nega biz bo‘sh o‘zgaruvchilar yaratamiz?" deb so‘rashadi. Buni "Ma'lumotlar kutish zali" deb tushunish mumkin. Bu o‘zgaruvchilar kelajakda quyidagi 3 ta asosiy manbadan qiymat olishi mumkin:

//------------------------------------------------------//

// 1. Foydalanuvchi tomonidan kiritilgan ma'lumot (Input)
// Dastur boshlanganda biz foydalanuvchi nima yozishini bilmaymiz.

// Reallikda: Foydalanuvchi saytdagi "Profilni tahrirlash" sahifasiga kiradi va telefon raqamini yozadi.

// Kodda: mobilePhone = document.querySelector('#phone-input').value;

// Shunda boyagi "" (bo'sh string) foydalanuvchi yozgan "998901234567" ga almashadi.

//------------------------------------------------------//

// 2. Tashqi Ma'lumotlar Ombori yoki API (Database/Backend)
// Eng ko‘p uchraydigan holat. Ma'lumotlar internetdan (serverdan) kelguncha bizda "bo‘shliq" turadi.

// Reallikda: Sahifa yuklanganda serverga "Aslbekning telefon raqamlarini ber!" deb so‘rov yuboramiz. Server javob qaytarguncha o‘zgaruvchilarimiz null bo‘lib turadi.

/* 
Kodda:
 
fetch("https://api.example.com/user/1")
	.then((res) => res.json())
	.then((data) => {
		homePhone = data.home_phone; // Serverdan kelgan raqamni o'zlashtiradi
	}); 
  
*/

//? 1. fetch("https://api.example.com/user/1")
//Vazifasi: Serverga "so‘rov" (Request) yuborish.
//Muhim nuqta: fetch funksiyasi Promise (va’da) qaytaradi. Ya’ni, u: "Hozir javobni berolmayman, lekin albatta natija bilan qaytishga va’da beraman", deydi.

//? 2. .then((res) => res.json())
//Vazifasi: Serverdan kelgan "xom" javobni biz tushunadigan JSON (obyekt) formatiga o‘tkazish.

//Nega kerak? Serverdan ma'lumotlar bizga tushunarsiz bo'lgan paketlar (baytlar) ko'rinishida keladi.

//res (Response): Bu serverdan qaytgan umumiy javob (status kodlari bilan birga).

//!JSON nima?
// JSON (JavaScript Object Notation) — bu ma'lumotlarni saqlash va bir joydan ikkinchi joyga (masalan, serverdan(backend dan) brauzerga(frontend ga)) yuborish uchun ishlatiladigan matnli format.

/* JSON formatida ma'lumotlar quyidagi ko'rinishda bo'ladi:
{
  "ism": "Asadbek",
  "yosh": 20,
  "student": true,
  "fanlar": ["JavaScript", "React", ".NET"],
  "manzil": {
            "shahar": "Toshkent",
            "kocha": "Amir Temur"
            }
} 
*/

/* 
Ikki muhim metod: parse va stringify

Dasturchi JS ichida JSON bilan ishlashi uchun ikki xil "tarjimon"dan foydalanadi:

JSON.parse(matn): Serverdan kelgan JSON matnini JavaScript obyektiga aylantiradi (kodda ishlatishimiz uchun).

JSON.stringify(obyekt): JavaScript obyektini serverga yuborish uchun JSON matniga aylantiradi.

"JSON — bu xuddi konteyner kabi. Agar siz mebel sotib olsangiz, u do‘konda yig‘ilgan holatda bo‘ladi (JS Obyekti). Lekin uni uyingizga tashish uchun qismlarga ajratib, qutiga solishadi (JSON). Uyga kelgach, qutini ochib yana yig‘ib olasiz (JSON.parse)". 
*/

// U JavaScript obyektiga juda o‘xshash, lekin u shunchaki oddiy matn. Uni har qanday dasturlash tili (Python, PHP, Java, C#) tushuna oladi.

//? 3. .then((data) => { ... })
//Vazifasi: Endi bizda tayyor ma'lumot (obyekt) bor. Bu qator ichida o‘sha ma'lumot bilan xohlagan ishimizni qilamiz.

//data: Bu yuqoridagi qatorda JSON qilingan tayyor ma'lumot. Uning ichida name, id, home_phone kabi xususiyatlar bor.

//? homePhone = data.home_phone;
//Vazifasi: Serverdan kelgan aniq bitta qiymatni (uy telefonini) biz avvalroq yaratib qo‘ygan bo‘sh o‘zgaruvchimizga yuklash.

//Natija: Shu daqiqadan boshlab, boyagi null yoki undefined bo'lib turgan homePhone o‘zgaruvchisi real raqamga (masalan, "+998711234567") ega bo'ladi.

//------------------------------------------------------//

// 3. Dasturiy mantiqiy hisob-kitoblar (Logic)
// Ba'zida o‘zgaruvchi boshqa bir amalning natijasiga qarab qiymat oladi.

// Reallikda: Tizim tekshiradi: "Agar foydalanuvchi 'Ish joyi' degan katakni to‘ldirgan bo‘lsa, workPhone ga qiymat ber, aks holda u undefined bo‘lib qolaversin".

/* 
Kodda: 
let userHasJob = true; // Foydalanuvchida ish borligini tekshirish uchun

if (userHasJob) {
  workPhone = "+998712001122";
} 
*/

//let contact = homePhone || workPhone || mobilePhone;

//console.log(contact); // Natija: "" (chunki barcha qiymatlar falsy)

//? Misollarni ishlangla!!!

console.log("Anvar" && undefined && 2025 && null);
console.log("Anvar" && 2025 && "Xorazm" && true);
console.log("Anvar" || undefined || 2025 || null);
console.log("" || 0 || null || undefined);
console.log("" && 0 && null && undefined);
console.log("Salom" && 0 && "Xayr");
console.log("Salom" || 0 || "Xayr");
console.log(0 || "Asosiy" || "Zaxira");
console.log(-0n && "Asosiy" && "Zaxira");
console.log(false || null || 0 || undefined);
console.log(false && null && 0 && undefined);
console.log(true || "Hello" || 2025);
console.log(true && "Hello" && 2025);
console.log(5 > 3 && "To'g'ri" && 2025);
console.log(2026 && "To'g'ri" && 5 > 3);
console.log(5 < 3 || "Noto'g'ri" || 2025);
console.log(2026 || "Noto'g'ri" || 5 < 3);
console.log(!0 && "Ha" && 2025);
console.log(!0 || "Ha" || 2025);
console.log(!!0 && "Yo'q" && 2025);
console.log(!!0 || "Yo'q" || 2025);
console.log(null || "Mehmon" || "Foydalanuvchi");
console.log(undefined && "Mehmon" && "Foydalanuvchi");
console.log("" || "Mehmon" || "Foydalanuvchi");
console.log(0 && "Mehmon" && "Foydalanuvchi");
console.log("Anvar" && "Xorazm" && "Uzbekistan");
console.log("Anvar" || "Xorazm" || "Uzbekistan");
console.log(false && "Xorazm" && "Uzbekistan");
console.log(false || "Xorazm" || "Uzbekistan");
console.log(true && "Xorazm" && "Uzbekistan");
console.log(true || "Xorazm" || "Uzbekistan");
console.log("0" && "Xorazm" && "Uzbekistan");
console.log("0" || "Xorazm" || "Uzbekistan");
console.log(NaN && "Xorazm" && "Uzbekistan");
console.log(NaN || "Xorazm" || "Uzbekistan");
console.log([] && "Array" && {});
console.log([] || "Array" || {});
console.log({} && "Object" && []);
console.log({} || "Object" || []);
console.log(function () {} && "Function" && 2025);
console.log(function () {} || "Function" || 2025);
console.log("Hello" && "World" && "!");
console.log("Hello" || "World" || "!");
console.log(0n && "BigInt" && -0n);
console.log(0n || "BigInt" || -0n);
console.log(-0n && "BigInt" && 0n);
console.log(-0n || "BigInt" || 0n);
console.log(2026 && "To'g'ri" && 5 > 3);
console.log(2026 || "To'g'ri" || 5 > 3);
console.log(5 < 3 && "Noto'g'ri" && 2026);
console.log(5 < 3 || "Noto'g'ri" || 2026);
console.log(!"" && "Ha" && 2025);
console.log(!"" || "Ha" || 2025);
console.log(!!"" && "Yo'q" && 2025);
console.log(!!"" || "Yo'q" || 2025);
console.log(null && "Mehmon" && "Foydalanuvchi");
console.log(null || "Mehmon" || "Foydalanuvchi");
console.log(undefined && "Mehmon" && "Foydalanuvchi");
console.log(undefined || "Mehmon" || "Foydalanuvchi");
console.log("" && "Mehmon" && "Foydalanuvchi");
console.log("" || "Mehmon" || "Foydalanuvchi");
console.log(0 && "Mehmon" && "Foydalanuvchi");
console.log(0 || "Mehmon" || "Foydalanuvchi");
