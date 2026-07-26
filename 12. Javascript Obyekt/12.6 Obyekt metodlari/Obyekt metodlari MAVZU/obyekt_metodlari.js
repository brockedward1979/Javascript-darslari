//////////?  OBYEKT METODLARI //////////

// JavaScript-da metodlar va funksiyalar kelib chiqishiga ko'ra, asosan, uchta katta turga bo'linadi. Buni tushunish sizga kod yozayotganingizda qaysi funksiya qayerdan kelayotganini anglashga yordam beradi.

//* 1. Built-in Methods (Ichki/O'rnatilgan metodlar)

// Bular JavaScript tilining standartida (ECMAScript) allaqachon mavjud bo'lgan, bizga tayyor holda berilgan metodlardir. Ularni yaratish shart emas, shunchaki chaqirish kifoya. Bunday metodlar shu darajada ko'pki, biz eng asosiylarini o'rganamiz.

// Bu metodlarning o'zi ham 2 guruhga bo'linadi:

// 1. Statik metodlar:

// 1. Object.keys()
// 2. Object.values()
// 3. Object.entries()
// 4. Object.fromEntries()
// 5. Object.create()
// 6. Object.assign()
// 7. Object.freeze()
// 8. Object.seal()

// 2. Instance metodlar:

// 1. .hasOwnProperty()
// 2. .toString()
// 3. .toLocaleString()
// 4. .valueOf()

//* 2. User-defined methods (Foydalanuvchi yaratgan metodlar)

// Dasturchi o'z ehtiyojidan kelib chiqib, obyekt ichida yaratgan metodlardir. Bular tilning tarkibida bo'lmaydi, ularni biz o'zimiz mantiqiy vazifa yuklash uchun yozamiz.

//* 3. Third-party methods

// Bular JavaScript-ning o'zida ham yo'q, siz ham yozmagansiz. Bularni tashqi kutubxonalar (masalan: Lodash, Axios, Moment.js) orqali loyihaga qo'shasiz.

//*********************************************************** */

//* 1. Built-in Methods (Ichki/O'rnatilgan metodlar)

// let student1 = {
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov",
//   maktabi: "36-son maktab",
// }

// let kalit_va_qiymat = Object.entries(student1)

// console.log(kalit_va_qiymat)

// let qaytarilgan_obyekt = Object.fromEntries(kalit_va_qiymat)

// console.log(qaytarilgan_obyekt)

//todo VAZIFA:
// let massiv1 = ["kompyuter", "telefon", "televizor"]
// let massiv2 = ["Acer", "Iphone", "Samsung"]

// let birlashtirilgan = massiv1.map((element, indeksi) => {
//   return [element, massiv2[indeksi]]
// }
// )

// let yangi = Object.fromEntries(birlashtirilgan)

// console.log(yangi)

// let massiv = [["kompyuter", "Acer"], ["telefon", "Iphone"], ["televizor", "Samsung"]]

// let yangi_obyekt = Object.fromEntries(massiv)

// console.log(yangi_obyekt)

// let umumiy = {
//   markaz: "IT Park",
//   ingliz_ustoz: "Adolatjon Abdullayeva",
// }

// let sobirjon = Object.create(umumiy, {
//   ismi: {
//     value: "Sobirjon",
//     writeble: true,
//     configurable: true
//   },
//   yoshi: {
//     value: 20,
//     writeble: true,
//     configurable: true
//   }
// })

// console.log(sobirjon)

// console.log(sobirjon.markaz)
// console.log(sobirjon.ingliz_ustoz)

// let student = {
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov",
//   yoshi: 50,
//   hisobla(){
//     return this.yoshi
//   },
//   qidir: function(){
//     return this.ismi
//   }
// }

//* 1. let kalitlar = Object.keys(student)
//     console.log(kalitlar)

//* 2. let qiymatlar = Object.values(student)
// console.log(qiymatlar)

//* 3. let kali_qiymat = Object.entries(student)
// console.log(kali_qiymat)

//* 4. let yana_oz_holiga = Object.fromEntries(kali_qiymat)
// console.log(yana_oz_holiga)

//* 5. Object.create(prototip_obyekt, xususiyatlar)

// let umumiy = {
//   maktabi: "36-son maktab",
//   ustozi: "Adolatjon Abdullayeva",
//   ustozining_yunalishi: "English",
// }

// let student1 = Object.create(umumiy, {
//   ismi: {
//     value: "Aslbek Nasriddinov"
//   },
//   qiziqishi: {
//     value: "Dizayn",
//     writable: true,
//     configurable: true,
//     enumerable: true
//   },
//   ishi: {
//     value: "Figma"
//   }
// })

// let student2 = Object.create(umumiy, {
//   ismi: {
//     value: "Alisher Polyozov"
//   },
//   qiziqishi: {
//     value: "Python Backend",
//     writable: true,
//     configurable: true,
//     enumerable: true
//   },
//   ishi: {
//     value: "Microsoft"
//   }
// })

// console.log(student1)
// console.log(student1.ustozi)
// console.log(student1.maktabi)
// console.log(student1.ustozining_yunalishi)

// console.log(student2)
// console.log(student2.ustozi)
// console.log(student2.maktabi)
// console.log(student2.ustozining_yunalishi)

//* 6. Object.assign(target, sources)


// let student1 = {
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov",
//   yoshi: 50,

// }




// let umumiy = {
//   maktabi: "36-maktab",
//   ustoz_english: "Adolatjon Abdullayeva",

// }





// let student = Object.assign({}, student1, umumiy )

// console.log(student)














// let student = {
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov",
//   yoshi: 50,
//   hisobla(){
//     return this.yoshi
//   },
//   qidir: function(){
//     return this.ismi
//   }
// }

// let qushimcha_malumot = {
//   maktabi: "36-son maktab",
//   ustozi: "Adolatjon Abdullayeva",
//   ustozining_yunalishi: "English",
// }

// let umumiy = Object.assign({}, student, qushimcha_malumot)
// console.log(umumiy)



// let student = {
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov",
//   yoshi: 50,
// }

// let yangi_nusxa_muzlagan = Object.freeze({...student})

// console.log(yangi_nusxa_muzlagan)

// student.ismi = "Rashidbek"
// console.log(student)
// console.log(yangi_nusxa_muzlagan)














//* 7. Object.freeze()

// let student = {
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov",
//   yoshi: 50,
//   hisobla(){
//     return this.yoshi
//   },
//   qidir: function(){
//     return this.ismi
//   }
// }

// let muzlatilgan = Object.freeze(student)
// console.log(muzlatilgan)

// muzlatilgan.ismi = "Rashidbek"
// console.log(muzlatilgan)



// let student = {
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov",
//   yoshi: 50,
// }

// Object.freeze(student)


// student.ismi = "Rashidbek"

// delete student.ismi

// console.log(student)


// Object.seal(student)

// delete student.ismi

// console.log(student)



// let student = {
//   ismi: "Aslbek",
//   yoshi: 15,
//   maktabi: "36-maktab",
 
// }



// student.ustozi = "Adolatjon Abdullayeva"


// console.log(student)

























//! Qachon ishlatiladi?

//* 1-holat:

// const api_sozlamasi = Object.freeze({
//   api_URL: "https://api.loyiha.uz",
//   timeout: 5000,
//   tema: "dark"
// });

// Endi jamoangizdagi boshqa dasturchi xato qilib api_URL ni o'zgartira olmaydi.

//* 2-holat:

// let hisob_kitob_ozgarmaslari = Object.freeze({
//   soliq_foizi: 0.1,
//   xizmat_haqi: 0.2,
//   maksimum_yechib_olish_summasi: 2000000,
// })

// console.log(hisob_kitob_ozgarmaslari.maksimum_yechib_olish_summasi)


// hisob_kitob_ozgarmaslari.maksimum_yechib_olish_summasi = 3000000







// hisob_kitob_ozgarmaslari.maksimum_yechib_olish_summasi = 3000000

// console.log(hisob_kitob_ozgarmaslari)

//* 8. Object.seal()





// let student = Object.seal({
//   ismi: "Aslbek",
//   yoshi: 15,
//   maktabi: "36-maktab",
//   ustozi: "Adolatjon Abdullayeva"
// })

// student.ustozi = "Anvar Ibraximov"
// console.log(student)

// student.balli = 80;

// console.log(student)

// delete student.ismi
// console.log(student)

















// let student = {
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov",
//   yoshi: 50,
//   hisobla(){
//     return this.yoshi
//   },
//   qidir: function(){
//     return this.ismi
//   }
// }

// student.ismi = "Rashidbek"
// console.log(student)
// student.maktabi = "36-son maktab"
// console.log(student)

//! Qachon ishlatiladi?

//* 1-holat:

// let malumotlar = {
//   login: "admin",
//   parol: "12345"
// }

// let muhrlangan = Object.seal(malumotlar)
// console.log(muhrlangan)

// malumotlar.parol = "987654321"

// console.log(muhrlangan)

//* 2-holat:

// const user_UI_settings = {
//   tema: "light",
//   language: "uz",
//   sidebar_ochiqmi: true
// };

// // Struktura o'zgarmasligi uchun muhrlaymiz
// Object.seal(userUISettings);

// // ✅ Ruxsat berilgan: Mavjud sozlamani o'zgartirish
// userUISettings.tema = "dark";

// // ❌ Taqiqlangan: Yangi sozlama qo'shish (masalan, font size)
// userUISettings.fontSize = "16px"; // Bu ishlamaydi

// // ❌ Taqiqlangan: Muhim sozlamani o'chirib yuborish
// delete userUISettings.language; // Bu ham ishlamaydi

//* 9. obyekt.toString()

// let student = {
//   ismi: "Nurbek",
//   yoshi: 16,

//   toString(){
//     return `${this.ismi} ${this.yoshi}`
//   }

// }

// let matn = "Salom " + student

// console.log(matn)

//* 10. obyekt.valueOf()

// let student = {
//   ismi: "Aslbek",
//   yoshi: 50,
//   balandligi: 88888,
//   valueOf(){
//     return this.yoshi
//   }
// }

// function hisobla(qiymat){
//   let summa = 2026
//   return summa + qiymat;

// }

// console.log(hisobla(student))

// let student = {
//   ismi: "Abror",
//   maktabi: "36-son maktab",
//   yoshi: 16,

//   toString(){
//     return `${this.ismi}`
//   },

//   valueOf(){
//     return this.yoshi
//   }
// }

// let matn = `Salom + ${student}`;

// let matn2 = 2026 + student;

// console.log(matn)
// console.log(matn2)

// let student = {
// 	ismi: "Aslbek",
// 	familyasi: "Nasriddinov",
// 	yoshi: 50,
// 	hisobla() {
// 		return this.yoshi;
// 	},
// 	qidir: function () {
// 		return this.ismi;
// 	},
// };


// let string_holati = JSON.stringify(student);
// console.log(string_holati);


//* .hasOwnProperty()

// let proto = {
//   ustozi: "Adolatjon Abdullayeva",
//   ustozining_yunalishi: "English",
// }

// let student = Object.create(proto, {
//   ismi: {
//     value: "Aslbek",
//   },
//   familyasi: {
//     value: "Nasriddinov",
//   },
//   yoshi: {
//     value: 50,
//   },
// });

// let natija = student.hasOwnProperty("ustozi")
// console.log(natija)

// let student1 = {
//   maktabi: "36-maktab",
//   ustoz_english: "Adolatjon Abdullayeva",
  
// }






// let student = Object.create(student1, {
//   ismi: {
//     value: "Sharipov Sobirjon",

//   },
//   yoshi: {
//     value: 15,
    
//   }
// })

// console.log(student)

// `${student.maktabi}
// ${student.ustoz_english}


// let student = {
//   maktabi: "36-maktab",
//   ustoz_english: "Adolatjon Abdullayeva",
// }







// let sobirjon = Object.create(student, {

//   ismi:{
//     value: "Sobirjon"
//   },

//   qiziqishi: {
//     value: "Dizayn"
//   },

// })

// console.log(Object.hasOwn(sobirjon, "maktabi"))


// sobirjon.hasOwnProperty("maktabi")

// console.log(Object.hasOwn(sobirjon, "maktabi"))



// let umumiy = {
//   ustoz_english: "Adolatjon Abdullayeva",
//   ustoz_it: "Anvar Ibraximov"
// }





// let aslbek = Object.create(umumiy,
//   {
//     ismi:{
//       value: "Aslbek"
//     },
//     familyasi:{
//       value: "Nasriddinov"
//     },
//     maktabi:{
//       value: "24-maktab"
//     }
//   }
// )

// let feruzbek = Object.create(umumiy,{
//   ismi:{
//     value: "Feruzbek"
//   },
//   familyasi:{
//     value: "Erkinov"
//   },
//   maktabi:{
//     value: "28-maktab"
//   }
// })

// console.log(aslbek.ustoz_english)
// console.log(feruzbek.ustoz_english)



// let student = {
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov",
//   yoshi: 15,

// }

// let umumiy = {
//   ustoz_english: "Adolatjon Abdullayeva",
//   ustoz_it: "Anvar Ibraximov"
// }

// let aslbek_toliq = Object.assign(umumiy, student)

// console.log(aslbek_toliq)




// let student = Object.seal({
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov",
//   yoshi: 15,
// })



// student.ismi = "Rashidbek"

// delete student.familyasi

// student.ustozi_english = "Adolatjon Abdullayeva"

// console.log(student)



// let umumiy = {
//   ustoz_english: "Adolatjon Abdullayeva",
//   ustoz_it: "Anvar Ibraximov"
// }



// let student = Object.create(umumiy, {
  
//     ismi:{
//       value: "Aslbek"
//     },
//     familyasi:{
//       value: "Nasriddinov"
//     },
//     maktabi:{
//       value: "24-maktab"
//     }
//   }
// )


// console.log(student.hasOwnProperty("ustoz_english"))

// console.log(student.hasOwnProperty("ismi"))

// console.log(Object.hasOwn(student, "ismi"))
// console.log(Object.hasOwn(student, "ustoz_english"))