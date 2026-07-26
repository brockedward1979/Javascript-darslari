//////? OPTIONAL CHAINING ////////

//* Optional Chaining (?.) — bu JavaScript-da obyektning ichma-ich joylashgan xususiyatlarini (property) xavfsiz o'qish usulidir.
// Oddiy qilib aytganda: "Agar bu narsa mavjud bo'lsa, davom et, agar mavjud bo'lmasa, xato bermasdan undefined qaytar" degan ma'noni bildiradi.



// Sintaksisi:

// ichma-ich xususiyatlardan keyin ?. bilan(obyektlarda ichiga kirish nuqtasini o'z ichiga oladi)
// student.addressi?.shahar

//todo Eslatma: eng tashqi obyekt yoki massivga qo'llay olmaymiz!!!

// funksiya nomidan keyin ?. bilan
// student.malumot_ber?.() 

// massiv nomidan keyin ?. bilan
// student.massiv?.[1][0]



// let student = {
//   ismi: "Ali",
//   massiva:[1, []]

// } 


// console.log(student.massiv?.[1][0])




// misol:

// let student = {
//   ismi: "Ali",
//   yoshi: 20,
//   addressi: {
//     shahar: "Toshkent",
//     mamlakat: "Uzbekistan",
//   },

//   malumot_ber(){
//   return `${this.ismi} hozirda ${this.address?.shahar}da yashaydi`
// }
// }

// console.log(student.addressi.shahar)

// console.log(student.manzil?.shahar)

// console.log(student.malumot_ber())





// let student = {
//   ismi: "Ali",
//   yoshi: 20,

//   qiziqishlar: [
//     // {sport: "basketbol",dasturlash: "JS"},
//     // {biznes: "savdo"},
//   ],

// }


// let natija = student.qiziqishlar?.[0]?.sport

// console.log(natija)




// let student = {
//   ismi: "Ali",
//   yoshi: 20,

//   muhim_bolmagan:{
//     rolton_yedimi: null
// }
// }


// let yedimi = student.muhim_bolmagan?.rolton_yedimi ?? "Bu juda muhim emas, to'ldirilishi shart emas"

// console.log(yedimi)



// let student = {
//   ismi: "Ali",
//   yoshi: 20,

//   malumotni_korsat(){
//     return this.ismi + " " + this.yoshi
//   }


// }

// console.log(student.malumotni_korsat())


// let student = {
//   ismi: "Nurbek",
//   yoshi: 20,
//   addressi: {
//     tumani: "Yangiariq",
//     viloyati: "Xorazm"
//   },
//   // qiziqishlari: ["JS", "Python"],

//   // korsat(){
//   //   return this.ismi + " " + this.yoshi + " " + this.addressi.viloyati
//   // }
// }


// console.log(student.addressi?.viloyati)

// console.log(student.qiziqishlari?.[4])

// console.log(student.maktabi)

// console.log(student.korsat?.())



// let student = {
//   ismi: "Ali",
//   yoshi: 20,

//   qobiliyalari: {

//     nechta_til_bilishi: 0
//   }
// }


// let nechta = student.qobiliyalari?.nechta_til_bilishi ?? "Bu maydon hozircha bosh"


// console.log(nechta)