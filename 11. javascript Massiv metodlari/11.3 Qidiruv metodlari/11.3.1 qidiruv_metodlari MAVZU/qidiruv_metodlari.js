//////////?  QIDIRUV METODLARI //////////////

//* 1. find()
//* 2. findIndex()
//* 3. findLast()
//* 4. findLastIndex()
//* 5. filter()
//* 6. includes()
//* 7. indexOf()
//* 8. some()
//* 9. every()

//! Bu metodlarning hammasi qiymat qaytaradi va asl massivni o'zgartirmaydi.

//*************************************************************** */

//* find()

// find() metodi massiv elementlarini bittadan tekshirib chiqadi va berilgan shartga to'g'ri keladigan birinchi uchratgan elementni qaytaradi. Agar bunday element topilmasa, undefined qaytaradi.


// let massiv = [{
//   name: "Asilbek",
//   surname: "Ahmedov",
//   age: 20  
//   },
//   {
//   name: "Feruzbek",
//   surname: "Erkinov",
//   age: 20  
//   },
//   {
//   name: "Abrorbek",
//   surname: "Narimonov",
//   age: 21  
//   }
//   ];

//   let natija = massiv.find((element)=>{
//     return element.age == 50;
//   })

//   console.log(natija);

//! Nima qaytaradi?
//! shartga mos elementni qaytaradi.
//! topilmasa - undefined qaytaradi

// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let natija = sonlar.find((x) =>{
// 	return x > 100;
// })

// console.log(natija);

//* findIndex()

// findIndex() massivni boshidan boshlab tekshiradi va shartga mos kelgan birinchi elementning tartib raqamini (0 dan boshlanadigan indexni) qaytaradi.

//! Nima qaytaradi?
//! agar element topilsa: Index (masalan: 0, 1, 2...) qaytaradi.
//! agar element topilmasa: -1 qaytaradi.

// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let natija = sonlar.findIndex((x) => {
// 	return x > 100000;
// })

// console.log(natija)

// let topilgan_son_index = sonlar.findIndex((son) => son > 100);
// console.log(topilgan_son_index);

// let sonlar_yangi = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let topilgan_son_index_yangi = sonlar_yangi.findIndex((son) => son > 100000);
// console.log(topilgan_son_index_yangi);


// let massiv = [{
//   name: "Asilbek",
//   surname: "Ahmedov",
//   age: 86  
//   },
//   {
//   name: "Feruzbek",
//   surname: "Erkinov",
//   age: 49  
//   },
//   {
//   name: "Abrorbek",
//   surname: "Narimonov",
//   age: 12  
//   },
// ]

// let natija = massiv.findIndex((ichidagi_har_bir_element)=>{
//   return ichidagi_har_bir_element.age < 15
// })

// console.log(natija)



//------------------------------------------------------------------------//

//* findLast() massiv elementlarini oxiridan boshlab tekshirib chiqadi va shartga mos kelgan birinchi (oxirgi) elementni qaytaradi.

//! Nima qaytaradi?
//! agar element topilsa: shu elementni qaytaradi.
//! agar element topilmasa: undefined qaytaradi

// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let natija = sonlar.findLast((x) => {
// 	return x > 100000
// })

// console.log(natija)


// let xaridorlar = [
//   {
//     name: "Asilbek",
//     surname: "Ahmedov",
//     summa: 200000
//   },
//   {
//     name: "Feruzbek",
//     surname: "Erkinov",
//     summa: 98000
//   },
//   {
//     name: "Abrorbek",
//     surname: "Narimonov",
//     summa: 2500000
//   },
//   {
//     name: "Hasanboy",
//     surname: "Shavkatov",
//     summa: 3100000
//   },
//   {
//     name: "Alisher",
//     surname: "Polyozov",
//     summa: 1800000
//   },

// ]

// let oxirgi_xaridor = xaridorlar.findLast((element) => {
//   return element.summa > 2000000
// })

// console.log(oxirgi_xaridor)



// findLast() metodi JavaScript-ga yaqinda (ES2023) qo'shilgan va juda foydali metodlardan biri hisoblanadi. Agar find() massivni boshidan(chapdan o'ngga) qidira boshlasa, findLast() uni oxiridan(o'ngdan chapga) qidira boshlaydi.

// let oxiridan_topilgan_son = sonlar.findLast((son) => son > 100);
// console.log(oxiridan_topilgan_son);

// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let topish_kerak_son_yuq_bolsa = sonlar.findLast((son) => {
// 	return son > 1000000
// });
// console.log(topish_kerak_son_yuq_bolsa);

// const tranzaksiyalar = [
//   { id: 1, summa: 100, tur: "chiqim" },
//   { id: 2, summa: 500, tur: "kirim" },
//   { id: 3, summa: 200, tur: "chiqim" },
//   { id: 4, summa: 50, tur: "chiqim" },
//   { id: 5, summa: 1000, tur: "kirim" },
// ];

// let natija = tranzaksiyalar.findLast((tranzaksiya) => {
// 	return tranzaksiya.tur === "chiqim" && tranzaksiya.summa > 75
// })

// console.log(natija)

// misol: massiv ichida obyektlar bilan ishlaganda findLast() dan foydalanish

// Eng oxirgi chiqimni topish
// const oxirgiChiqim = tranzaksiyalar.findLast(t => t.tur === "chiqim");

// console.log(oxirgiChiqim); // { id: 4, summa: 50, tur: "chiqim" }

//* findLastIndex()

// let xaridorlar = [
//   {
//     name: "Asilbek",
//     surname: "Ahmedov",
//     summa: 200000
//   },
//   {
//     name: "Feruzbek",
//     surname: "Erkinov",
//     summa: 98000
//   },
//   {
//     name: "Abrorbek",
//     surname: "Narimonov",
//     summa: 2500000
//   },
//   {
//     name: "Hasanboy",
//     surname: "Shavkatov",
//     summa: 3100000
//   },
// ]



// let oxirgi_xaridor_idsi = xaridorlar.findLastIndex((x)=>{
//   return x.summa > 5000000
// })

// if(oxirgi_xaridor_idsi == -1){
//   console.log("5000000 dan ortiq xarid qilgan odam topilmadi")
// }

// findLastIndex() metodi findIndex() ning aynan teskarisi: u massivni oxiridan boshlab qidiradi va shartga mos keladigan birinchi (oxirgi) elementning indeksini qaytaradi.

// Bu metod massivni o'ngdan chapga qarab qidiradi. Agar shart bajarilsa, o'sha zahoti to'xtaydi va elementning massivdagi asl indeksini (0 dan boshlangan tartib raqamini) beradi.

//! Nima qaytaradi?
//! Element topilsa: Uning indeksi (masalan: 0, 5, 12...).
//! Element topilmasa: Har doim -1.

// let oxiridan_topilgan_son_index = sonlar.findLastIndex((son) => son > 100);
// console.log(oxiridan_topilgan_son_index);

// let topish_kerak_son_yuq_bolsa_index = sonlar.findLastIndex((son) => son > 100000);
// console.log(topish_kerak_son_yuq_bolsa_index);

// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let natija = sonlar.findLastIndex((son) => {
// 	return son > 100
// })

// console.log(natija)

//-------------------------------------------------------------------//

//* filter()

// filter() metodi JavaScript-da eng ko'p ishlatiladigan va eng "aqlli" metodlardan biri. Agar find() faqat bitta (birinchi) elementni topsa, filter() shartga mos keladigan barcha elementlarni terib oladi.

// filter() metodi massivni "elakdan" o'tkazadi. U har bir elementni tekshiradi va siz bergan shartga true javobini bergan barcha elementlardan iborat yangi massiv yaratadi.

// Agar massiv ichida shartga mos keluvchi elementlar bo'lsa, shu elementlardan tashkil topgan yangi massiv qaytaradi, aks holda bo'sh massiv qaytaradi.

//! Nima qaytaradi?
//! topilsa - yangi massiv(shartga mos keluvchi elementlar massivi)
//! topilmasa - bo'sh massiv([])

// let sonlar = [28, 79, 16, 100000, 2015, 36, 44, 9987, 54];

// let natija = sonlar.filter((son) => {
// 	return son > 100
// })

// console.log(natija)

// console.log(natija.find((x) => {return x < 5000 }))


// let studentlar = [
//   {
//     name: "Asilbek",
//     surname: "Ahmedov",
//     ball: 86
//   },
//   {
//     name: "Feruzbek",
//     surname: "Erkinov",
//     ball: 79
//   },
//   {
//     name: "Abrorbek",
//     surname: "Narimonov",
//     ball: 93
//   },
//   {
//     name: "Hasanboy",
//     surname: "Shavkatov",
//     ball: 100
//   },
//   {
//     name: "Umidbek",
//     surname: "Shavkatov",
//     ball: 62
//   },
//   {
//     name: "Alisher",
//     surname: "Polyozov",
//     ball: 80
//   }
// ]

// let yaxshi_natija_korsatganlar = studentlar.filter((x)=>{
//   return x.ball > 70
// })

// console.log(yaxshi_natija_korsatganlar)

//todo Arrow function ning ichida o'zgaruvchilar e'lon qilinmagan bo'lsa va return dan boshqa qismlar mavjud bo'lmasa, arrow functionni qisqa bo'lishi mumkun.

//todo let keyingi_natija = sonlar.filter(son => son > 100)

//*********************************************** */

// let nayza_funksiya = x => "Umidbek: " + x; va
// let nayza_funksiya = (x) => {return "Umidbek: " + x;}
// ikkalasa bir xil narsa

// let nayza_funksiya = x => "Umidbek: " + x;

// console.log(nayza_funksiya(55))

// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let juft_sonlar = sonlar.filter((massivdagi_har_bir_element) => massivdagi_har_bir_element%2 === 0);
// console.log(juft_sonlar);

// let topish_kerak_son_yuq_bolsa = sonlar.filter((son) => son > 100000);
// console.log(topish_kerak_son_yuq_bolsa);

// misol: massiv ichida obyektlar bilan ishlaganda filter() dan foydalanish

// 1-holat(bitta parametr bilan)

// let studentlar = [
// 	{
// 		id: 1,
// 		ism: "Umidbek",
// 		yosh: 14,
// 	},
// 	{
// 		id: 2,
// 		ism: "Alisher",
// 		yosh: 45,
// 	},
// 	{
// 		id: 3,
// 		ism: "Rashidbek",
// 		yosh: 23,
// 	},
// 	{
// 		id: 24,
// 		ism: "Saida",
// 		yosh: 17,
// 	},
// ]

// let natija = studentlar.filter((student) => {
// 	return student.yosh >= 16
// })

// let natija = studentlar.filter((student) => {
// 	return student.yosh >= 90
// })

// console.log(natija);

// let natija = studentlar.filter((student)=>{
// 	return student.age > 22;
// })

// console.log(natija);

// 2-holat(2 parametr bilan)

// let studentlar = [
// 	{
// 		id: 1,
// 		name: "Umidbek",
// 		age: 16,
// 	},
// 	{
// 		id: 2,
// 		name: "Alisher",
// 		age: 45,
// 	},
// 	{
// 		id: 3,
// 		name: "Rashidbek",
// 		age: 23,
// 	},
// 	{
// 		id: 24,
// 		name: "Saida",
// 		age: 22,
// 	},
// ]

// let natija = studentlar.filter((student, indeks_nomeri) => {
// 	return student.age > 22 && indeks_nomeri%2 === 0
// })

// console.log(natija);

// 3-holat(3 parametr bilan)

// let postlar = [
// 	{
// 		id: 1,
// 		sarlavha: "Harry Potter",
// 		likelar_soni: 130
// 	},
// 	{
// 		id: 2,
// 		sarlavha: "The Lord of the Rings",
// 		likelar_soni: 100
// 	},
// 	{
// 		id: 3,
// 		sarlavha: "The Hobbit",
// 		likelar_soni: 70
// 	},
// 	{
// 		id: 4,
// 		sarlavha: "The Dark Lord",
// 		likelar_soni: 400
// 	}
// ]

// let natija = postlar.filter((kinolar, indeksi, massivning_uzi)=>{

// 	if(indeksi === 0){
// 		return false;
// 	}

// 	let bir_oldingi = massivning_uzi[indeksi-1];
// 	let minimal_likelar_soni = kinolar.likelar_soni > 100;
// 	let bir_oldingi_bilan_solishtirish = kinolar.likelar_soni > bir_oldingi.likelar_soni;

// 	return minimal_likelar_soni && bir_oldingi_bilan_solishtirish;
// })

// console.log(natija);

//-------------------------------------------------------------------//

//* includes()

// includes() metodi JavaScript-da massiv ichida ma'lum bir element bor yoki yo'qligini tekshirish uchun eng sodda va qulay usuldir. Agar find() yoki filter() bizga elementning o'zini va yangi massivni qaytarsa, includes() faqat ha yoki yo'q deb javob beradi.

//! Eslatma: bu metod faqat primitiv turlarni qidira oladi(string, number, boolean)

//! Nima qaytaradi?
//! topilsa - true
//! topilmasa - false

// let ruxsat1 = ["admin", "user", "targetolog"];
// let ruxsat2 = ["admin", "targetolog"];
// let ruxsat3 = ["admin"];



// let natija = ruxsat1.includes("admin")

// if(ruxsat1 == true){
//   // html kodlari
// }else{
//   console.log("Ruxsat berilmadi");
// }

// if(ruxsat2 == true){
//   // html kodlari
// }

// role based access control


// let massiv = [
//   {
//     id: 1,
//     name: "Umidbek",
//     age: 16,
//   },
//   {
//     id: 2,
//     name: "Alisher",
//     age: 45,
//   },
//   {
//     id: 3,
//     name: "Rashidbek",
//     age: 23,
//   },
//   {
//     id: 24,
//     name: "Saida",
//     age: 22,
//   },
// ]

// let natija = massiv.includes(
//   "Umidbek")

//   console.log(natija)





// let studentlar = ["Umidbek", "Alisher", "Haydarbek", "Rashidbek", "Saida"];

// let bormi = studentlar.includes("Alisher");
// console.log(bormi);

// if(bormi == true){
//   console.log("Alisher bor");
// }else{
//   console.log("Alisher bor emas");
// }

// let adminlar = ["admin", "user", "targetolog"];
// let kirganFoydalanuvchi = "targetolog";

// if (adminlar.includes(kirganFoydalanuvchi)) {
//   console.log("Foydalanuvchi - " + kirganFoydalanuvchi + " sifatida kirdi");
// } else {
//   console.log("Ruxsat yo'q ❌");
// }

// Agar obyektlardan tashkil topgan massiv ichidan biror obyekt qidirilsa, u har doim false qaytaradi, chunki u har doim o'zgaruvchining xotira adressi bilan ishlaydi.

// let bormi = studentlar.includes({id: 2, name: "Alisher", age: 21});
// console.log(bormi); // false

// Ikkinchi parametr - Qayerdan boshlash?
// Metodga ikkinchi argument sifatida qidirishni qaysi indeksdan boshlashni aytishingiz mumkin va qidiruvga shu indeks ham kiradi.

// let numbers = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];
// let bormi = numbers.includes(36, 2);
// console.log(bormi);

//-------------------------------------------------------------------//

//* indexOf()

// indexOf() metodi — bu massiv ichidan ma'lum bir elementning birinchi uchragan manzilini (indeksini) topib beruvchi klassik metod.

// indexOf() massivni boshidan boshlab (0-indeksdan) qidiradi va qidirilayotgan qiymatga teng bo'lgan birinchi elementning indeksini qaytaradi.

//! Nima qaytaradi?
//! Element topilsa: Uning indeksi (0, 1, 2...).
//! Element topilmasa: Har doim -1

// Ikkinchi parametr: Qayerdan boshlash?
// Metodga ikkinchi argument sifatida qidirishni qaysi indeksdan boshlashni aytishingiz mumkin va qidiruvga shu indeks ham kiradi.

// let sonlar = [28, 36, 16, 777, 2015, 36, 44, 9987, 36];

// let natija = sonlar.indexOf(36)

// console.log(natija);

// let natija2 = sonlar.findIndex((son) => {
//   return son > 200
// })

// console.log(natija2);




// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let natija1 = sonlar.indexOf(36); // 5
// console.log(natija1); // 5

// let natija2 = sonlar.indexOf(36, 6);
// console.log(natija2); // -1

// let natija3 = sonlar.indexOf(36, 7);
// console.log(natija3); // -1

//todo:  Shu yerda savol tug'iladi: findIndex() bilan indexOf() birmi shunda?

//! indexOf() — bu "Menga mana shu narsaning o'zi massivda bo'lsa uning indeksini topib ber" deydi (faqat qiymat qabul qiladi).

//! findIndex() — bu "Menga mana shu shartga mos keladigan narsani topib ber" deydi (funksiya/mantiq qabul qiladi).

// let foydalanuvchilar = [
//   {
//     id: 1,
//     name: "Umidbek",
//     age: 22,
//   },
//   {
//     id: 2,
//     name: "Alisher",
//     age: 21,
//   },
//   {
//     id: 3,
//     name: "Rashidbek",
//     age: 23,
//   },
// ]

// let natija = foydalanuvchilar.findIndex((user) => user.name === "Rashidbek");
// console.log(natija);

// Obyektlar uchun ushbu amalni ondexOf() metodi bilan qila olmaymiz.

// let natija = foydalanuvchilar.indexOf({ id: 3, name: "Rashidbek", age: 23 });
// console.log(natija); // -1

//-------------------------------------------------------------------//

//* some()

// some() metodi JavaScript-da massivni tekshirish uchun ishlatiladigan juda "optimizm"ga boy metod. Uning asosiy vazifasi — massiv ichida siz bergan shartga mos keladigan hech bo'lmaganda bitta element bor yoki yo'qligini aniqlash.

// some() metodi massivni aylanib chiqadi va shartga javob beradigan bitta elementni topsa, darhol to'xtaydi va true qaytaradi. Agar oxirigacha birorta ham element shartga mos kelmasa, false qaytaradi.

// Ishlatilishidan asosiy maqsad - o'zi shunday element bormi yoki yo'qini tekshirish.
// masalan: Imtixon topshirgan studentlarning ichida 100% ishlaganlari bormi?

//! Nima qaytaradi?
//! Element topilsa: true
//! Element topilmasa: false


// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let natija = sonlar.some((son) => {
//   return son > 9900
// })


// console.log(natija)


// let studentlar = [
//   { id: 1, ism: "Umidbek", ball: 86 },
//   { id: 2, ism: "Alisher", ball: 79 },
//   { id: 3, ism: "Rashidbek", ball: 93 },
//   { id: 4, ism: "Feruzbek", ball: 99 },
//   { id: 5, ism: "Shavkat", ball: 100 },
// ]

// let natija = studentlar.some((student) => {
//   return student.ball > 90
// })

// console.log(natija)

// oddiy misol:

// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let natija = sonlar.some((son) => son === 360);
// console.log(natija);

// obyektlar misolida:

// let studentlar = [
// 	{ id: 1, name: "Umidbek" },
// 	{ id: 2, name: "Alisher" },
// 	{ id: 3, name: "Rashidbek" },
// 	{ id: 4, name: "Feruzbek" },
// 	{ id: 5, name: "Shavkat" },
// ];

// let natija = studentlar.some((element) => element.name === "Feruzbek");
// console.log(natija);

//-------------------------------------------------------------//

//* every()

// every() metodi some() metodining to'liq aksi hisoblanadi. Agar some() "hech bo'lmaganda bittasi to'g'ri kelsa bo'ldi" desa, every() metodi "hamma elementlar shartga mos kelishi shart" degan talabni qo'yadi.

// every() massivni boshidan tekshirib chiqadi. Agar u shartga mos kelmaydigan bitta elementni topsa, darhol to'xtaydi va false qaytaradi. Agar hamma elementlar shartdan muvaffaqiyatli o'tsa, true qaytaradi.

//! Nima qaytaradi?
//! Element topilsa: true
//! Element topilmasa: false

// let sonlar = [28, 79, 16, 777, 2015, 36, 44, 9987, 54];

// let natija = sonlar.every((son) => son > 10);
// console.log(natija);

// let maxsulotlar = [
//   {
//     id: 1,
//     nomi: "Laptop",
//     narxi: 1000000,
//     garantiya: 2
//   },
//   {
//     id: 2,
//     nomi: "Monitor",
//     narxi: 500000,
//     garantiya: 5
//   },
//   {
//     id: 3,
//     nomi: "Keyboard",
//     narxi: 100000,
//     garantiya: 3
//   },
//   {
//     id: 4,
//     nomi: "Mouse",
//     narxi: 50000,
//     garantiya: 2
//   }
// ]

// let natija = maxsulotlar.every((maxsulot) => {
//   return maxsulot.narxi > 10000
// })

// if(natija == true){
//   console.log("10000 somdan qiymati oprtiq maxsulotlar:")
//   console.log(maxsulotlar)
// }

//todo:  Bosh massivlarda ehtiyot bo'ling! - Chunki bo'sh massivdan biror bir shart bilan ma'lumot qidirilsa, har doim true qiymat qaytaradi.

// let sonlar = [];

// let natija = sonlar.every((son) => {
//   return son > 1000000
// })

// console.log(natija)

// Bu muammoni hal qilishning bir nechta usullari bor:

// 1-usul. Massivning length ini teksirib, every bilan birga && mantiqiy operatori bilan birlashtirish

// let oxirgi_natija = sonlar.length > 0 && sonlar.every((son) => son > 10);
// console.log(oxirgi_natija);

// 2-usul.






//!-------------------------------------------------------------------//




// let studentlar = [
//   { id: 1, name: "Umidbek", age: 21 },
//   { id: 2, name: "Alisher", age: 22 },
//   { id: 3, name: "Rashidbek", age: 23 },
//   { id: 4, name: "Feruzbek", age: 24 },
//   { id: 5, name: "Shavkat", age: 25 },
// ]

// let natija = studentlar.map((student) => {
//   return {
//     id: student.id,
//     name: student.name,
//     age: student.age,
//     tuliq_ism: student.name + " " + student.surname
//   }
// })

// console.log(natija)



