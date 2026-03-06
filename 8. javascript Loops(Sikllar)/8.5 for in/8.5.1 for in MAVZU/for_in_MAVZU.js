////////?  for in sikli  //////////

// JavaScriptda for...in sikli asosan obyekt xususiyatlarining kalitlarini aylanib chiqish uchun ishlatiladi.


//1. Obyektlar bilan ishlatilishi (Asosiy vazifasi)
//   Obyekt ichidagi har bir kalitni bittadan olib beradi.


// const mashina = {
//   brend: "BMW",
//   model: "X5",
//   yil: 2024
// };

// for(let kaliti in mashina){
//   console.log(mashina[kaliti])
// }


// 2. Massivlar bilan ishlatilishi
//    Massivlarda for...in elementning o'zini emas, uning indeksini (0, 1, 2...)  qaytaradi.

// const ranglar = ["Qizil", "Yashil", "Ko'k"];

// for (let index in ranglar) {
//   console.log(index); // "0", "1", "2" (e'tibor bering, bular string ko'rinishida)
//   console.log(ranglar[index]); // Qizil, Yashil, Ko'k
// }

/* 
Nega massivlarda for...in ishlatish tavsiya etilmaydi?
String indeksi: U indeksni son (0) emas, matn ("0") ko'rinishida qaytaradi. Agar siz index + 1 qilsangiz, 01 bo'lib qolishi mumkin.

Tartib: Ba'zi holatlarda elementlarni tartib bilan chiqarmasligi mumkin.

Qo'shimcha xususiyatlar: Agar massivga biror yangi xususiyat qo'shilgan bo'lsa (masalan, ranglar.nomi = "Kamalak"), for...in o'shani ham chiqarib yuboradi. 
*/

// Xulosa:

// Obyekt bo'lsa — for...in ishlating.

// Massiv bo'lsa — for...of yoki forEach ishlating.
