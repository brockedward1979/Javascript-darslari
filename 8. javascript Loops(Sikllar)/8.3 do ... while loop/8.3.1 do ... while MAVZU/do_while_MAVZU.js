// //////?        DO ... WHILE SIKLI         /////

// //? getElementByClassName ni qisqacha o'tamiz.

// /*
// getElementsByClassName — bu JavaScript-da HTML hujjatidagi elementlarni ularning klass (class) nomi orqali topish uchun ishlatiladigan metod.

// U nima qaytaradi?
// Bu metod bitta element emas, balki bir nechta elementdan iborat HTMLCollection (HTML to'plami) qaytaradi. Bu to'plam massivga juda o'xshaydi: elementlarning o'z tartib raqami (indeksi) bo'ladi va ularning sonini .length orqali bilish mumkin.
// Indekslar 0 dan boshlanadi.

// */

// /* do while sikli — bu harakatni kamida bir marta bajarib, keyin shartni tekshiradigan sikl turidir. Oddiy while dan farqi ham aynan shunda: while avval eshikni taqillatadi, do while esa avval ichkariga kirib, keyin "kirish mumkinmi?" deb so'raydi.
//  */

// //boolean context 0, -0, null, undefined, NaN, false qiymatlari false ga teng hisoblanadi. Boshqa barcha qiymatlar true ga teng hisoblanadi.

// // null - false
// // undefined - false
// // 0 - false
// // -0 - false
// // NaN - false
// // false - false
// // "" - false
// // 0n - false
// // -0n - false

// // "  " - true
// // 2026 - true

// // 10>5 - true
// // 25 == 30 - false

// // let son = 10;

// // do {

// // 	son++; // 2, 3
// // 	console.log("Sobirjon" + son)
// // 	console.log("------")

// // }
// // while (son<=2);

// // do {
// // 	// Bajariladigan kod
// // } while (shart);

// // Bu yerda kod bloki ishga tushadi, keyin while ichidagi shart tekshiriladi. Agar shart true bo'lsa, sikl yana takrorlanadi. Shart false bo'lsa, sikl to'xtaydi.

// // misol-1:

// // let son = 5;

// // do {
// // 	console.log(`${son}`);
// // 	son++;
// // } while (son <= 3);

// let malumot = document.getElementById("malumot");
// let btn = document.getElementById("btn");

// let students = document.getElementsByClassName("students");

// // [div, p, div]

// let soni = 0;

// btn.onclick = function tekshirish(){

// while(soni<students.length){

// 		students[2*soni].style.backgroundColor = "orange"
// 		students[2*soni].style.color = "white"
// 		students[2*soni].style.borderRadius = "10px"
// 		students[2*soni + 1].style.backgroundColor = "blue"

// 		soni++;
// 	}

// }

// 		students[i].style.backgroundColor = "red";


