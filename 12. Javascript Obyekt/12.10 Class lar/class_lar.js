//////?           CLASS LAR             //////////


// ? JS da class lar uchun class keywordidan foydalaniladi
// ? Classlar obyektlarni yaratish uchun qo'llaniladi

// * SINTAKSISI:

// class Nomi{

//   xususiyatlar
//   constructor(){
//     this.xususiyatlar
//   }
//   metodlar
// }


// class Student{

//   ustoz_english = "Adolatjon Abdullayeva";
//   ustoz_IT = "Anvar Ibraximov";
//   jami_ball = 80;

//   constructor({ismi, maktabi}){
//     this.ismi = ismi;
//     this.maktabi = maktabi
//   }

//   foizHisobla(olgan_ball){
    
//     return `${this.ismi} imtixonda ${this.jami_ball} dan ${olgan_ball} ball olgan holda necha foiz natija ko'rsatgani: ${(olgan_ball/this.jami_ball)*100}%`
//   }
// }

// let sobirjon = new Student({
//   ismi: "Sobirjon",
//   maktabi: "36-maktab"
// })



// let abror = new Student({
//   ismi: "Abror",
//   maktabi: "36-maktab"
// })

// console.log(sobirjon)
// console.log(sobirjon.foizHisobla(78))
// console.log(abror)
// console.log(abror.foizHisobla(76))




// class Student{


//   constructor(ismi, familyasi){
//     this.ismi = ismi
//     this.familyasi = familyasi
//   }


// }


// let student1 = new Student("Aslbek", "Nasriddinov")

// console.log(student1.ismi)
// console.log(student1.familyasi)



// class Student{

//   ustoz_english = "Adolatjon Abdullayeva";
//   ustoz_it = "Anvar Ibraximov";
//   jami_ball = 80;

//   constructor({ismi, familyasi}){

//     this.ismi = ismi;
//     this.familyasi = familyasi  
//   }

//   natijaFoiziniHisobla(olgan_ball){
//     return `${this.ismi}ning imtixonda foiz ko'rsatkichi: ${olgan_ball/this.jami_ball*100}%`
//   }

// }




// let aslbek = new Student({
//   ismi: "Aslbek",
//   familyasi: "Nasriddinov"
// })






// let kumushoy = new Student({
//   ismi: "Kumushoy",
//   familyasi: "Jumanazarova"
// })


// console.log(aslbek)
// console.log(aslbek.natijaFoiziniHisobla(78))
// console.log(kumushoy)
// console.log(kumushoy.natijaFoiziniHisobla(75))




class Samalyot {
  // Yoqilg'ining 1 litr narxi (o'zgarmas deb olamiz)
  NARX = 12500; 

  constructor({ nomi, yoqilgi_sarfi }) {
    this.nomi = nomi;
    // 1 km uchun ketadigan yoqilg'i miqdori (litrda)
    this.yoqilgi_sarfi = yoqilgi_sarfi; 
  }

  uchgan_kilometri(km) {
    // Hisoblash: Masofa * 1km sarfi * Litr narxi
    let jami_xarajat = km * this.yoqilgi_sarfi * this.NARX;
    
    return `${this.nomi} samolyoti ${km} km masofaga ${jami_xarajat.toLocaleString()} so'mlik yoqilg'i sarflaydi.`;
  }
}

// TU-57: har 1 km uchun 10 litr sarflaydi deb tasavvur qilaylik
let TU57 = new Samalyot({
  nomi: "TU-57",
  yoqilgi_sarfi: 5 
});

// TU-22: har 1 km uchun 15 litr sarflaydi
let TU22 = new Samalyot({
  nomi: "TU-22",
  yoqilgi_sarfi: 7
});

console.log(TU57.uchgan_kilometri(1000));
console.log(TU22.uchgan_kilometri(3500));



































































