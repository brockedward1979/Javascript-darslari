////?  OBJECT DESTRUCTURING - OBYEKTLARNI DESTRUCTURING QILISH /////


//* Object destructuring - bu JavaScriptda obyektlardan ma'lumotlarni olish va ularni o'zgaruvchilarga ajratish uchun ishlatiladigan sintaksisdir. Bu usul kodni yanada o'qilishi va tushunarli qilishga yordam beradi.

//* Object destructuring sintaksisi quyidagicha ko'rinadi:



// let student = {
//   ismi: "Sobirjon",
//   familyasi: "Sharipov",
//   yoshi: 15,
//   maktabi: "36-maktab"
// }

// let {ismi, familyasi, yoshi = "95"} = student

// console.log(yoshi)













// const obyektNomi = {
//   xususiyat1: qiymat1,
//   xususiyat2: qiymat2,
//   xususiyat3: qiymat3
// };

// const { xususiyat1, xususiyat2, xususiyat3 } = obyektNomi;

//* Object destructuring yordamida biz obyektning xususiyatlarini o'zgaruvchilarga ajratib olishimiz mumkin. Bu usul, ayniqsa, obyektning ko'p xususiyatlari bo'lsa yoki biz faqat ba'zi xususiyatlarni olishni istasak, juda foydali bo'ladi.

//* Object destructuringning ba'zi foydali xususiyatlari:
// 1. Obyektni destructuring qilish orqali kodni yanada o'qilishi va tushunarli qilish mumkin.

// 2. Obyektni destructuring qilish va yangi nom berish mumkin.

// 3. Obyektni destructuring qilish va default qiymat berish mumkin.




//? 1. Obyektni destructuring qilish





// let student = {
//   ismi: "Rashidbek",
//   familyasi: "Raxmonquliyev",
//   yoshi: 16,
//   maktabi: "36-maktab",
//   qiziqishi: "Dizayn",
//   ishi: "Microsoft"
// }

// let {ismi, familyasi, ishi = "IT Park"} = student

// console.log(ishi)



// console.log(ismi)














// const student = {
//   ismi: "Ali",
//   yoshi: 20,
//   shahar: "Toshkent",
//   mamlakat: "Uzbekistan"
// };

// const { ismi, yoshi, shahar, mamlakat } = student;
// console.log(ismi); // Ali
// console.log(yoshi); // 20
// console.log(shahar); // Toshkent
// console.log(mamlakat); // Uzbekistan

// //? 2. Obyektni destructuring qilish va yangi nom berish

// aliasing

// let student = {
//   name: "Aslbek",
//   surname: "Nasriddinov",
//   skills: "Javascript",
//   school: "24-maktab"
// }

// let {name: ismi, surname, skills: qobiliyatlar, school} = student

// console.log(ismi)
// console.log(qobiliyatlar)
// console.log(surname)
// console.log(school)

















// let student = {
//   name: "Abror",
//   age: 20,
//   city: "Toshkent",
//   country: "Uzbekistan"
// }

// // aliasing

// let {name: ismi, age, city: shahar, country: mamlakat} = student


// console.log(ismi)
// console.log(age)











// const student = {
//   ismi: "Ali",
//   yoshi: 20,
//   shahar: "Toshkent",
//   mamlakat: "Uzbekistan"
// };

// let {ismi: name, yoshi: age, shahar: city, mamlakat: country} = student;

// console.log(name); // Ali
// console.log(age); // 20
// console.log(city); // Toshkent
// console.log(country); // Uzbekistan


//? 3. Obyektni destructuring qilish va default qiymat berish


// let student = {
//   ismi: "Ali",
//   yoshi: 20,
//   shahar: "Toshkent",
//   mamlakat: "Uzbekistan"
// };


// let {ismi="Anvar", yoshi=38, shahar="Xorazm", mamlakat="Uzbekistan"} = student;

// console.log(ismi); // Ali   // default qiymat ishlamaydi, chunki student obyektida ismi xususiyati mavjud
// console.log(yoshi); // 20   // default qiymat ishlamaydi, chunki student obyektida yoshi xususiyati mavjud
// console.log(shahar); // Toshkent    // default qiymat ishlamaydi, chunki student obyektida shahar xususiyati mavjud
// console.log(mamlakat); // Uzbekistan   // default qiymat ishlamaydi, chunki student obyektida mamlakat xususiyati mavjud


//? 4. Rest operatori bilan object destructuring




// let student = {
//   ismi: "Aslbek",
//   dosti: "Umidbek",
//   dostining_professiyasi: "artist",
//   u_hozir_qayerda: "Teatrda o'ynab yuribdi"
// }

// let {ismi, dosti, ...qolganlari} = student

// console.log(qolganlari)


















// let student = {
//   ismi: "Kumush",
//   familyasi: "Baxtiyorova",
//   yoshi: 15,
//   maktabi: "31-maktab",
//   tuman: "Yangiariq",
//   viloyat: "Xorazm",
// }




// let {ismi, familyasi, ...qolganlari } = student;

// console.log(qolganlari)
// console.log(ismi)
// console.log(familyasi)
// console.log(qolganlari.yoshi)






// let {ismi, familyasi,}

















// let student = {
//   ismi: "Ali",
//   yoshi: 20,
//   shahar: "Toshkent",
//   mamlakat: "Uzbekistan"
// }

// let {mamlakat, ...qolganlari} = student;

// console.log(ismi); // Ali
// console.log(qolganlari); // { yoshi: 20, shahar: 'Toshkent', mamlakat: 'Uzbekistan' }



// qolganlari.yoshi = 30;
// qolganlari.shahar = "Nyu york";

// console.log(student)
// console.log(qolganlari)



// let student = {
//   ismi: "Ali",
//   yoshi: 20,
//   shahar: "Toshkent",
//   mamlakat: "Uzbekistan"
// }



// console.log(ismi); // Ali
// console.log(yoshi); // 20

// function korsat({ismi, mamlakat}){
//   console.log(`ismi: ${ismi}, mamlakat: ${mamlakat}`);
// }

// korsat(student); // ismi: Ali, mamlakat: Uzbekistan



// let student = {
//   ismi: "Ali",
//   yoshi: 20,
//   address: {
//     shahar: "Toshkent",
//     mamlakat: {
//       nomi: "Uzbekistan"
//     }
//   }
// }

// let {address: {mamlakat: {nomi}}} = student;

// console.log(nomi);

// let student = {
//   ismi: "Ali",
//   yoshi: 20,
//   address: {
//     shahar: "Toshkent",
//     mamlakat: {
//       nomi: "Uzbekistan"
//     }
//   }
// }

// let {ismi} = student;

// console.log(ismi);

// ismi = "Anvar";

// console.log(student);

// console.log(student.ismi);
// console.log(ismi)


// let student = {
//   familyasi: "Mahmudov",
//   ismi: "Ali",
//   address: {
//     shahar: "Toshkent",
//     mamlakat: {
//       nomi: "Uzbekistan"
//     }
//   }

// }

// let {familyasi, ...qolganlari} = student;

// console.log(qolganlari);

// let yangi = {...student};

// yangi.address.shahar = "New York";

// let yangi = structuredClone(student);

// yangi.address.shahar = "New York";

// console.log(yangi);
// console.log(student);



// let student = {
//   ismi: "Suhrob", 
//   yoshi: 16,
//   qiziqishlari: {
//     sport: "futbol",
//     dasturlash: "HTML, CSS, JS",
//     til: "Ingliz tili"
//   }
// }


// let {qiziqishlari:{sport}, ismi} = student

// sport = 1515151515

// console.log(sport)

// console.log(student) 



// let student = {
//   ismi: "Sirojiddin",
//   yoshi: 15,

//   addressi: {
//     tumani: "Yangiariq",
//     viloyati: "Xorazm",
//     mamlakati: "O'zbekiston"

//   }
// }



// let {ismi, addressi: {viloyati}} = student








