//////////////////?  TYPE CONVERSION - MALUMOT TURLARINI O'ZGARTIRISH ///////////////

// String() yoki toString() yoki JSON.stringify() - Stringga o'zgartirish
// Number() yoki parseInt(), parseFloat() - Numberga o'zgartirish
// Boolean() yoki !! - Booleanga o'zgartirish

//! Qoidalar:
// 1. String() bu funksiya qiymatni stringga aylantiradi
// 2. toString() bu funksiya qiymatni stringga aylantiradi
// 3. Number() bu funksiya qiymatni numberga aylantiradi
// 4. parseInt() bu funksiya qiymatni numberga(integer) aylantiradi
// 5. parseFloat() bu funksiya qiymatni numberga(float) aylantiradi
// 6. Boolean() bu funksiya qiymatni booleanga(true yoki false) aylantiradi

//?        String() — bu global konstruktor-funksiya bo‘lib, u har qanday qiymatni (hatto null va undefinedni ham) xavfsiz ravishda string (matn) turiga o‘tkazadi.

//?       .toString() — bu esa prototip metodi bo‘lib, u null va undefined dan tashqari barcha qiymatlarda mavjuddir. Uning afzalligi shundaki, u sonlarni turli sanoq tizimlarida (ikkilik, o‘n oltilik va h.k.) matnga o‘girish imkoniyatini beradi.





let a = ""

let b = 2026


console.log(!(Boolean(a) + Boolean(b)))  






















// let Umidbek = {
// 	ism: "Umidbek",
// 	familya: "Qurbonov",
// 	yosh: 16,
// 	bir_kunlik_ish_haqqisi: 12000,
// 	bir_haftada_qancha_kun_ishlashi: 5,
// 	balandlik: 1.7,

// 	toString() {
// 		return (
// 			this.ism +
// 			" " +
// 			this.familya +
// 			" " +
// 			this.yosh +
// 			" " +
// 			this.bir_kunlik_ish_haqqisi * this.bir_haftada_qancha_kun_ishlashi
// 		);
// 	},
// };

// console.log(JSON.stringify(Umidbek));
// console.log(Umidbek.toString());

// let a = 2026;

// console.log(a + 5)
// console.log(String(a) + 5)
// console.log(a.toString() + 5)

// let son = null;

//? Agar har qanday turni string ga o'zgartirish kerak bo'lsa, String() ishlatamiz(null va undefined larni ham "null", "undefined" ga aylantiradi)
//? toString() metodi null va undefined larni string ga aylantira olmaydi.

// console.log(String(son));
// console.log(son.toString());

// let students = ["Abror", "Sobirjon", "Asilbek", "Shavkat"]

// console.log(students.toString())

// let Abror = {
//   name: "Abror",
//   age: 20,
//   hobby: "Coding",

// }

// let studentmi = false;

// let converted = String(studentmi);  "false"

// console.log(typeof converted)
// console.log(typeof studentmi)

// if(converted){
//   console.log("Ha student")
// }
// else{
//   console.log("yo'q")

// }

// let son = "salom  ";

// console.log(son.toString(2));
// console.log(Object(son));

// let y = undefined;

// console.log(String(y));
// // console.log(y.toString());

// let a = 5;

// console.log(String(a)); // natijada 5 chiqadi
// console.log(typeof String(a)); // natijada string chiqadi

// console.log(String(a) + "5"); // natijada 55 chiqadi
// console.log(typeof (String(a) + "5")); // natijada string chiqadi

// console.log(String(a) + 5); // natijada 55 chiqadi
// console.log(typeof (String(a) + 5)); // natijada string chiqadi

// console.log(String(a) + a); // natijada 55 chiqadi
// console.log(typeof (String(a) + a)); // natijada string chiqadi

// console.log(String(a) + Boolean(a)); // natijada 5true chiqadi
// console.log(typeof (String(a) + Boolean(a))); // natijada string chiqadi

// console.log(String(a) + !!a); // natijada 5true chiqadi
// console.log(String(a) + !a); // natijada 5true chiqadi
// console.log(typeof (String(a) + !!a)); // natijada string chiqadi

// console.log(String(a) + !Boolean(a)); // natijada string chiqadi
// console.log(typeof (String(a) + !Boolean(a))); // natijada string chiqadi

// console.log(String(a) + !!!a); // natijada string chiqadi
// console.log(typeof (String(a) + !!!a)); // natijada string chiqadi

// let m = "5.29";

// console.log(parseInt(m)); // natijada 5 chiqadi
// console.log(typeof parseInt(m)); // natijada number chiqadi

// console.log(parseFloat(m)); // natijada 5.29 chiqadi
// console.log(typeof parseFloat(m)); // natijada number chiqadi

// console.log(parseInt(-m));

// let x = -6.8;

// console.log(parseInt(x)); // natijada -6 chiqadi
// console.log(parseFloat(x)); // natijada -6.8 chiqadi

// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let date1 = document.getElementById("date1");
// let btn = document.getElementById("btn");
// let natija1 = document.getElementById("natija1");
// let natija2 = document.getElementById("natija2");
// let natija3 = document.getElementById("natija3");
// let natija4 = document.getElementById("natija4");
// let natija_date1 = document.getElementById("natija_date1");

// btn.onclick = function () {
// 	natija1.innerText = Boolean(input1.value) && Boolean(input2.value);
// };
