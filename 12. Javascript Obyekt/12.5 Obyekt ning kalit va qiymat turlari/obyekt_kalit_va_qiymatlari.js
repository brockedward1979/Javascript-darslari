////////?    OBYEKTNING KALIT VA QIYMAT TURLARI    ///////////

//? getOwnPropertyNames() - obyektning o'ziga tegishli bo'lgan barcha string kalitlarni qaytaradi (symbol kalitlarini o'z ichiga olmaydi).

//? getOwnPropertySymbols() - obyektning o'ziga tegishli bo'lgan barcha symbol kalitlarni qaytaradi (string kalitlarini o'z ichiga olmaydi).

//? Reflect.ownKeys() - obyektning o'ziga tegishli bo'lgan barcha kalitlarni qaytaradi, shu jumladan string va symbol kalitlarini ham o'z ichiga oladi.

//? Object.keys() - Object.keys() metodi faqatgina obyektning string turidagi va enumerable (sanab o'tiladigan) kalitlarini qaytaradi. U Symbol turidagi kalitlarni e'tiborsiz qoldiradi.

//? for...in tsikli - for...in tsikli obyektning enumerable (sanab o'tiladigan) kalitlarini iteratsiya qiladi, lekin Symbol turidagi kalitlarni e'tiborsiz qoldiradi. Shuning uchun, for...in tsikli faqat string kalitlarni ko'rsatadi, symbol kalitlarini emas.

//? Object.values() - Object.values() metodi faqatgina string turidagi kalitlarga tegishli bo'lgan qiymatlarni qaytaradi. U Symbol kalitlariga bog'langan qiymatlarni e'tiborsiz qoldiradi (xuddi Object.keys() kabi).

//? Object.entries() - Object.entries() faqatgina string turidagi, enumerable (sanab o'tiladigan) va obyektning o'ziga tegishli bo'lgan kalit-qiymat juftliklarini massiv ko'rinishida qaytaradi.

//? Object.getOwnPropertyDescriptor() - Object.getOwnPropertyDescriptor() metodi obyektning o'ziga tegishli bo'lgan kalitning tavsifini qaytaradi. Bu metod string va symbol kalitlari uchun ishlaydi, lekin faqat obyektning o'ziga tegishli bo'lgan kalitlar uchun tavsifni qaytaradi, meros qilib olingan kalitlar uchun emas.


// Obyekt kalitlari string yoki symbol bo'lishi mumkin, qiymatlar esa har qanday turda bo'lishi mumkin.

//todo obyekt kalitlari har doim(agar symbol bo'lmasa) toString() metodi orqali stringga aylantiriladi. Shuning uchun, agar siz obyekt kalitlarini boshqa turda (masalan, number yoki boolean) ishlatsangiz, ular avtomatik ravishda stringga aylantiriladi.

let student = {
  2026: "Umidbek",
  true: 20,
  "o'qish joyi": "TATU",
  [Symbol("id")]: 12345,
  [Symbol("ismi")]: "Umidbek",
  [Symbol("yoshi")]: 20
}



for(let kalit in student) {
  console.log(typeof kalit); // ismi, yoshi, o'qish joyi
}


let symbol = Object.getOwnPropertySymbols(student);
console.log(symbol);

let boshqalari = Object.getOwnPropertyNames(student);
console.log(boshqalari);

let kalitlar = Reflect.ownKeys(student);
console.log(kalitlar);

// Bu misolda Symbol() turidagi kalit obyektga qo'shilgan, lekin u for...in tsikli orqali ko'rsatilmaydi, chunki Symbol kalitlari enumeratsiya qilinmaydi. Shuning uchun, obyekt kalitlari string yoki symbol bo'lishi mumkin, va ular har doim stringga aylantiriladi (agar symbol bo'lmasa).

//todo Obyekt qiymatlari har qanday turda bo'lishi mumkin, shu jumladan string, number, boolean, null, undefined, object, array, function va boshqalar.

let person = {
  name: "Ali",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "traveling"],
  address: {
    city: "Tashkent",
    country: "Uzbekistan"
  },
  greet: function() {
    console.log("Salom!");
  }
}











