////////////?  MUTATSIYALOVCHI METODLAR //////////////

// JavaScriptda mutatsiyalovchi (mutating) metodlar deganda, operatsiya bajarilgandan so'ng asl massivning tarkibini to'g'ridan-to'g'ri o'zgartiradigan metodlar tushuniladi. Bu metodlar yangi massiv yaratmaydi (odatda), balki xotiradagi mavjud massiv ustida ishlaydi.

// JavaScriptda asosiy va eng ko'p ishlatiladigan mutatsiyalovchi (asl massivni o'zgartiruvchi) metodlar jami 9 ta.

// 1. Element qo'shish va o'chiruvchilar (4 ta)
// Bular massivning ikki chekkasi bilan ishlaydi va massiv uzunligini (length) o'zgartiradi:

// let student = {
//   name: "Feruzbek",
//   surname: "Erkinov",
//   age: 20,
//   tuliq_ism() {
//       console.log(this.name + " " + this.surname)
//     }

// }

// console.log(student.tuliq_ism());

// push(): Oxiriga qo'shadi.

// pop(): Oxiridan o'chiradi.

// unshift(): Boshiga qo'shadi.

// shift(): Boshidan o'chiradi.

// let kompyuterlar = ["Macbook", "Asus", "Lenovo", "HP", "Dell"];

// console.log(sonlar)

// sonlar.push("Hasanboy");
// console.log(sonlar)

// sonlar.pop();
// console.log(sonlar);

//----------------------------------------------------------------------------------------//

// 2. Tartibni o'zgartiruvchilar (2 ta)

// Elementlar o'rnini almashtirib tashlaydi:
// sort(): Elementlarni tartiblaydi (alfavit yoki raqam bo'yicha).
// reverse(): Massivni teskarisiga o'giradi.

// let studentlar = ["Umidbek", "Alisher", "Haydarbek", "Rashidbek", "Aslbek"];

// studentlar.sort();
// console.log(studentlar)

// let sonlar = [2026, 17, 25, 43, 999, 421];

// sonlar.sort((a, b)=> b - a).push(1005);

// console.log(sonlar);

// let natija = (x, y) => x - y;

// console.log(natija(1005, 15));

//----------------------------------------------------------------------------------------//

// 3. "Universal" va to'ldiruvchi metodlar (3 ta)
// Massivning ichki qismlariga ta'sir qiladi:
// splice(): Eng kuchli metod. Element o'chirish, qo'shish va almashtirishni bir vaqtda qila oladi.
// fill(): Massivning ma'lum qismini bir xil qiymat bilan to'ldiradi.
// copyWithin(): Massivning bir qismini nusxalab, shu massivning ichidagi boshqa indeksga yopishtiradi.

// let alochilar = ["Sirojiddin", "Feruzbek", "Aslbek", "Saida", "Rashidbek", "Behruz", "Umidbek"];

// alochilar.splice(4, 10, "Nurbek", "Qodirov");

// console.log(alochilar);

//==========================================================================================//

// let massiv = ["Asilbek", "Alisher", "Haydarbek", "Rashidbek", "Aslbek"];

// 1. Element qo'shish va o'chirish metodlari

//* PUSH() va POP()

// console.log(massiv);

// massiv.push("Hasanboy");
// console.log(massiv)
// console.log(massiv);

// massiv.pop();
// console.log(massiv);

//* UNSHIFT() va SHIFT()

// console.log(massiv);

// massiv.unshift("Hasanboy");
// console.log(massiv);
// console.log(massiv);

// console.log(massiv);

// massiv.shift();
// console.log(massiv);
// console.log(massiv);

//------------------------------------------------------------------------------------------//

// 2. Tartibni o'zgartiruvchilar

//* SORT()

// let massiv = ["Muhammad", "Alisher", "Haydarbek", "Rashidbek", "Aslbek"];

// let sonlar = [2026, 17, 25, 43, 999, 421];

// sonlar.sort((a, b) => a - b); // o'sib borish tartibida joylashtiradi
// console.log(sonlar);

// sonlar.sort((a, b) => b - a); // o'sib borish tartibida joylashtiradi
// console.log(sonlar);

// console.log(massiv);

// let sonlar = [2026, 17, 25, 43, 999, 421];
// sonlar.sort();
// console.log(sonlar);

// sonlar.sort((a, b) => a - b);
// sonlar.sort((a, b) => b - a);

// (a, b) => a - b funksiya massiv metodlaridan tashqarida qanday ishlaydi?

// let natija = (x, y) => x - y;

// console.log(natija(1005, 15));

//* REVERSE()

// let studentlar = [
//   { id: 1, name: "Umidbek" },
//   { id: 2, name: "Sobirjon" },
//   { id: 3, name: "Feruzbek Erkinov" },
//   { id: 4, name: "Rashidbek" },
//   { id: 5, name: "Shavkat" },
// ]

// console.log(studentlar);

// studentlar.reverse();
// console.log(studentlar);

// let studentlar = [
//   { id: 1, name: "Umidbek" },
//   { id: 2, name: "Sobirjon" },
//   { id: 3, name: "Feruzbek Erkinov" },
//   { id: 4, name: "Rashidbek" },
//   { id: 5, name: "Shavkat" },
// ];

// studentlar.reverse();
// console.log(studentlar);

//------------------------------------------------------------------------------------------//

// 3. "Universal" va to'ldiruvchi metodlar

//* SPLICE()

// splice() uchta turdagi parametr qabul qiladi:
// massiv.splice(boshlanish_indeksi, uchiriladigan_element_soni, element1, element2, ...)

// boshlanish_indeksi: Amaliyot qaysi indeksdan boshlanishi (shu indeksdagi element ham hisobga olinadi).

// uchiriladigan_element_soni: (Ixtiyoriy) Nechta element o'chirilishi kerak. Agar 0 bo'lsa, hech narsa o'chirilmaydi.

// element1, element2, ...: (Ixtiyoriy) O'chirilgan joyga qo'shiladigan yangi elementlar.

// let maxsulotlar = ["Sut", "Shakar", "Tuz", "Un", "Qaymoq"];

// maxsulotlar.splice(10, 0, "XXXXX", "YYYYY");

// console.log(maxsulotlar)

//["XXXXX", "YYYYY", "Shakar", "Tuz", "Un"]
// console.log(maxsulotlar);

// maxsulotlar.splice(3,2)

//* FILL()

// massiv.fill(qiymat, qayerdan, qayergacha)

// bunda qayerdan indeksi kiradi
// bunda qayergacha indeksi kirmaydi

// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// sonlar.fill("Shavkat");
// console.log(sonlar);

// sonlar.fill("Asilbek", 3);
// console.log(sonlar);

// sonlar.fill("Azatov", 2, 7);
// console.log(sonlar);

// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// sonlar.fill("Shavkat");
// console.log(sonlar);

// sonlar.fill("Aslbek", 3);
// console.log(sonlar);

// sonlar.fill("Nurbek", 2, 7);
// console.log(sonlar);

// let maxsulotlar = [
//   {
//     id: 1,
//     nomi: "X-Box",
//     narxi: 300,
//     garantiya: 2
//   },
//   {
//     id: 2,
//     nomi: "PlayStation 5",
//     narxi: 400,
//     garantiya: 1
//   },
//   {
//     id: 3,
//     nomi: "Macbook Pro",
//     narxi: 1300,
//     garantiya: 1
//   },
//   {
//     id: 4,
//     nomi: "Monoblok",
//     narxi: 600,
//     garantiya: 1
//   },

// ]

//* CopyWithin()

// copyWithin() metodi massiv ichidagi ma'lumotlarni xuddi "ko'chirib o'tkazish" (copy-paste) kabi ishlatiladi. Uning eng muhim jihati — u massivdan tashqaridan ma'lumot olmaydi, balki massivning o'zini o'zidan nusxalab, o'zining boshqa joyiga yopishtiradi.

// Bu metod ham 3 ta parametr oladi:
// massiv.copyWithin(nusxa_qayerga_quyilsin, qayerdan, qayergacha)

//1. nusxa_qayerga_quyilsin : Nusxalangan ma'lumot qaysi indeksdan boshlab yopishtirilishi kerak?

//2. qayerdan: Nusxa olish massivning qaysi indeksidan boshlansin? (Sukut bo'yicha 0).

//3. qayergacha: Nusxa olish qaysi indeksda to'xtasin? (Eslatma: bu indeksdagi element nusxalanmaydi).

// let massiv = ["Asilbek", "Alisher", "Haydarbek", "Rashidbek", "Sirojiddin", "Feruzbek"];

// console.log(massiv);

// massiv.copyWithin(1, 3, 4);
// console.log(massiv);
