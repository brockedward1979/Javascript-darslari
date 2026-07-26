//////////?  BIRLASHTIRISH VA KESISH METODLARI  ///////////////

//1. concat()
//2. slice()
//3. flat()
//4. join()

// Bu metodlar massivni birlashtirish yoki kesish uchun ishlatiladi va natija sifatida yangi massiv qaytaradi.

//* concat()  - concationation

// Bu metod - ikki yoki undan ortiq massivni (yoki elementlarni) bir-biriga ulab, yangi massiv qaytaradi.

// sintaksisi:

// massiv.concat(massiv1, massiv2, massiv3, ...)

// let massiv = [2026, 500, 879]

// let massiv2 = [1, 2, 3, 4, 5]
// let massiv3 = [6, 7, 8, 9, 10]
// let massiv4 = [11, 12, 13, 14, 15]

// let yangi_massiv = massiv.concat(massiv2, massiv3, massiv4)

// console.log(yangi_massiv)
// console.log(massiv)

// let massiv = [1, 2, 3, 4, 5];
// let massiv1 = [6, 7, 8, 9, 10];
// let massiv2 = [11, 12, 13, 14, 15];
// let massiv3 = [16, 17, 18, 19, 20];

// let natija = massiv.concat(massiv1, massiv2, massiv3);
// console.log(natija);

// concat() ning elementlarni birlashtirishiga misol:

// let ism = "Umidbek"
// let familya = " Qurbonov "
// let yoshi = 16;

// let natija = ism.concat(familya, yoshi)
// console.log(natija)

// let element = "salom";
// let element1 = " bolalar";
// let element2 = " ahvollar qanday";

// let natija1 = element.concat(element1, element2);
// console.log(natija1);

// concat() ning massiv ichidagi obyektlarni birlashtirishiga misol:

// let studentlar = [
//   {ism: "Umidbek", ball: 86},
//   {ism: "Rashidbek", ball: 90},
// ]

// let studentlar2 = [
//   {ism: "Alisher", ball: 79},
//   {ism: "Feruzbek", ball: 99},
// ]

// let studentlar3 = [
//   {ism: "Shavkat", ball: 100},
//   {ism: "Feruzbek", ball: 99},
// ]

// let natija = studentlar.concat(studentlar2, studentlar3)
// console.log(natija)
// console.log(studentlar)

// let studentlar1 = [
//   {ism: "Umidbek", ball: 86},
//   {ism: "Rashidbek", ball: 90},
// ]

// let studentlar2 = [
//   {ism: "Alisher", ball: 79},
//   {ism: "Feruzbek", ball: 99},
// ]

// let natija3 = studentlar1.concat(studentlar2)
// console.log(natija3)

//! oddiy obyektlarni o'zini birlashtira olmaydi

// let student1 = {
//   id: 1,
//   name: "Umidbek",
//   yosh: 14,
// };

// let student2 = {
//   id: 2,
//   name: "Alisher",
//   yosh: 15,
// };

// let natija = student1.concat(student2);
// console.log(natija);

//* slice()

// slice() metodi massivning bir qismini kesib olib, yangi massiv qaytaradi.

// sintaksisi:

// massiv.slice(boshlanishi, oxiri)
// boshlanishi hisobga olinadi
// oxiri hisobga olinmaydi

// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija = massiv.slice(3, 6)

// console.log(natija)
// console.log(massiv)

//? agar bitta parametr bersak, shu indeksdan boshlab(berilgan indeks ham kiradi) oxirigacha qirqib olib yangi massiv qaytaradi.

// massiv.slice(4)

// let sonlar = [45, 78, 0, 888, 632, 12, 47, 1000, 357]

// let natija = sonlar.slice(3)

// console.log(natija)
// console.log(sonlar)

// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija = massiv.slice(3)

// console.log(natija)

//? agar bitta ham parametr bermasak, asl massivni boshidan oxirigacha qirqib olib, yangi massiv qaytaradi.

// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija = massiv.slice()

// console.log(natija)

// massiv.slice()

// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija = massiv.slice()

// console.log(natija)

//? agar ikkita parametr berib ikkinchi parametrga -1 qiymat bersak, birinchi berilgan parametrdan tortib oxirgidan bir oldingi elementgacha qirqib olib yangi massiv qaytaradi(oxirgisini olmaydi)

// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija = massiv.slice(3, -1)

// console.log(natija)

// massiv.slice(3, -1)

// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija = massiv.slice(3, -1)

// console.log(natija)

//? agar bitta parametr bersak va u ham manfiy son bo'lsa, qirqish amaliyoti oxiridan boshiga(o'ngdan chapga) qarab amalga oshiriladi va soni bo'yicha oxiridan oladi.

// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija = massiv.slice(-9)

// console.log(natija)

// massiv.slice(-3)

// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija = massiv.slice(-3)

// console.log(natija)

//? agar ikkita manfiy parametr bersak, oxiridan yurib birinchi berilgan parametrdan, ikkinchi berilgan parametrgacha qirqib yangi massiv qayataradi.

// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija = massiv.slice(-6, -3)

// console.log(natija)

// massiv.slice(-4, -2)

// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija = massiv.slice(-4, -2)

// console.log(natija)

// let sonlar = [45, 78, 0, 888, 632, 12, 47, 1000, 357]

// let natija4 = sonlar.slice(0, 3)

// console.log(natija4)

//* flat()

// flat() metodi ichma-ich joylashgan massivlarni tekislab, yangi massiv qaytaradi.

// let massiv = [
//   2026,
//   16,
//   25,
//   [75, 0, 100],
//   809,
//   [78, 59, 0, 12, 44, [35, [9, 908]], 1, 1024],

// ]

// let natija = massiv.flat(Infinity)
// console.log(natija)

// sintaksisi:

// massiv.flat()  - birinchi darajali tekislash
// massiv.flat(2) - ikkinchi darajali tekislash
// massiv.flat(3) - uchinchi darajali tekislash
//......
// massiv.flat(Infinity) - barcha darajalar uchun

// 1-darajali tekislashga misol:

// let massiv = [
//   25,
//   [75, 89],
//   809
// ]

// let natija = massiv.flat()
// console.log(natija)

// 1-darajali tekislashga misol:

// let massiv = [
//   25,
//   [75, [89, 16]],
//   809
// ]

// let natija = massiv.flat()

// console.log(natija)

// bu muammoni yechish uchun parametrga 2 berib yuboramiz

// let yangi_natija = massiv.flat(2)
// console.log(yangi_natija)

//* join()

// join() metodi massiv ichidagi elementlarni string ga o'tkazish uchun ishlatiladi. Natija string qaytaradi.

// let massiv = [78, 100, 0, 12, 2, [35, 9, 908], 1, 1024];

// let natija = massiv.flat().join("--");

// console.log(natija);

// let qaytadan_massivga_utiramiz = natija.split("--");

// console.log(qaytadan_massivga_utiramiz);

// let summa = qaytadan_massivga_utiramiz.reduce((boshlangich, miqdor) => {
//   return boshlangich + miqdor
// }, 0)

// console.log(summa)

// let natija2 = qaytadan_massivga_utiramiz.reduce((boshlangich, miqdor) => {
// 	return boshlangich + miqdor;
// }, "");

// console.log(natija2);

// sintaksisi:

// massiv.join()

// let sonlar = [[[45, 800, [1, 2]], 5555], 78, 0, 888, 632, 12, 47, 1000, 357]

// let natija = sonlar.join("*")

// console.log(natija)

// let maxsulotlar = [
// 	{
// 		nomi: "Milk",
// 		narxi: 100,
// 		miqdori: 5,
// 		id: 1,
// 	},
// 	{
// 		nomi: "Bread",
// 		narxi: 80,
// 		miqdori: 10,
// 		id: 2,
// 	},
// 	{
// 		nomi: "Egg",
// 		narxi: 50,
// 		miqdori: 12,
// 		id: 3,
// 	},
// ];

// let summa = maxsulotlar.reduce((boshlangich, product) => {
// 	return boshlangich + product.miqdori * product.narxi;
// }, 0);

// console.log(summa);
// console.log(maxsulotlar);

// let yangi_massiv = maxsulotlar.reduce(
// 	(boshlangich, product) => {
// 		return [...boshlangich, product.nomi];
// 	},
// 	["coffee", "chocolate", "juice"]
// );

// console.log(yangi_massiv);

// let new_massiv = [100, 598, 32];

// let ikkinchi = [...new_massiv, 1000];

// console.log(ikkinchi);


// let massiv = [78, 59, 0, 12, 44, 35, 9, 908, 1, 1024]

// let natija =massiv.with(3, 5555, 6666, 7777)

// console.log(natija)
// console.log(massiv)
