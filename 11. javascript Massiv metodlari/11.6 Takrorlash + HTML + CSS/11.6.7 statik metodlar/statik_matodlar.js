////////////? STATIK METODLAR ////////////

//*1. Array.isArray(val)
//    val massiv ekanligini tekshiradi.
//*2. Array.from(iter, fn?)
//    Iterable yoki massivsimon ob'ektdan massiv hosil qiladi.
//*3. Array.of(...items)
//    Berilgan argumentlardan yangi massiv yaratadi.
//*4. Array.fromAsync(iter)
//    Asinxron iterable dan massiv (ES2024).

//***************************************************************/

//? Array.isArray(qiymat) metodi

// Array.isArray() metodi, berilgan qiymat o'zgaruvchisining massiv ekanligi yoki massiv emasligini tekshiradi.

Array.isArray([1, 2, 3]); // true
Array.isArray({}); // false
Array.isArray(null); // false
Array.isArray(undefined); // false
Array.isArray(NaN); // false
Array.isArray("string"); // false
Array.isArray(123); // false
Array.isArray(true); // false
Array.isArray(false); // false
Array.isArray("1, 2, 3"); // false




// let student = document.getElementsByClassName("student")

// let massiv = Array.from(student, (element, indeks) => {
//   return element.textContent
// }
// )

// console.log(massiv)
















// let massiv = Array.from({length: 100}, (_, indeks) => {
//   return indeks*7 + 5
// }
// )

// console.log(massiv)

// let studentlar = document.getElementsByClassName("studentlar")

// let massiv = [...studentlar]

// console.log(massiv)

//************************************************************* */

//? Array.from() metodi

// Array.from(array_ga_uxshash_yoki_array, map_funksiya) metodi, iterable(ya'ni aylanib chiqiladigan) yoki massivsimon ob'ektdan massiv hosil qiladi.

// Mavjud iterable yoki array-like obyektdan yangi array yaratadi.

// let student_klasslilar = document.getElementsByClassName("student")

// console.log(student_klasslilar)

// let massiv = Array.from(student_klasslilar, (element) => {
//   return {element}
// }
// )

// console.log(massiv)


// let natija = Array.from("Anvar"); // ['A', 'n', 'v', 'a', 'r']
// console.log(natija);

// let natija = Array.from([5, 8, 15], (element, indeks) => {
//   return [element**2, indeks**2];
// })

// console.log(natija);

// let natija = Array.from({length: 15}, (element, indeks) => {
//   return indeks**2
// }
// )

// console.log(natija);

// let btn = document.getElementsByClassName("tugmalar")

// let massiv = Array.from(btn, (element, Indeks) => {
//   return element.innerText
// }
// )

// console.log(massiv)

// //? sintaksisi:

// Array.from(massivga_uxshash_yoki_massiv, map_funksiyasi)

// let tugmalar = document.getElementsByClassName("tugmalar")

// let natija = Array.from(tugmalar, (element, indeks) => {
//   return element
// }
// )

// console.log(natija)

//************************************************************* */

//? Array.of() metodi

// Array.of() metodi, berilgan argumentlardan yangi massiv yaratadi.

// Berilgan argumentlardan yangi array yaratadi.



// let natija = Array.of(1, 2, 3);
// console.log(natija);

// let natija = Array.of(1, 2, 3);
// console.log(natija);

// console.log(natija);

// console.log(yangi);

// let natija = Array.of("Abror", "Anvar", "Umid", 5);

// console.log(natija);

// let massiv = ["Anvar", "Abror", "Umid"]


// let student = document.getElementsByClassName("student")


// let massiv = Array.of(...student)


// console.log(student)

// console.log(massiv)
