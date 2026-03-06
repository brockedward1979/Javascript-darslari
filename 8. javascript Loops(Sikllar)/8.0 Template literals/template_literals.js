let ism = "Aslbek";

// eski usulda biz " va + dan foydalanardik.
// console.log("Salom " + ism);

// console.log(`Hello ${ism}`);

// console.log(`Salom     bolalar men
//   template 
//   literalman.`);



////?----  TEMPLATE LITERALS (SHABLONLI MATNLAR) -----//

//Template literal sintaksisi uchun backtick (`) va ${...} belgilari ishlatiladi.

// 1-qadam backtick (``) belgisi
// 2-qadam ${...} belgisi bu o'zgaruvchilarni yozish uchun ishlatiladi (bu backtick ning ichida joylashadi)

// To'liq sintaksisi:   `${...}`

//   //!Eslatma: `` ning o'rniga "" yoki '' ishlatilsa backtick dagi ${...} ishlamaydi.

  // console.log(`Salom bolalar mening ismim ${ism}`); // to'g'ri usul
  // console.log('Salom bolalar mening ismim ${ism}'); // xato usul
  // console.log("Salom bolalar mening ismim ${ism}"); // xato usul

  // let mahsulot_nomi = "Kartoshka";
  // let mahsulot_narxi = 10000;
  // let kg = 15;
  

  // console.log(`Men ${kg}kg ${mahsulot_nomi}ni ${mahsulot_narxi*kg} so'mdan sotib oldim`);

  // console.log(`Men ${kg}kg ${mahsulot_nomi}ni ${mahsulot_narxi*kg} so'mdan sotib oldim`);

//   //? Bu usulning o'ziga hosligi shundaki, bunda backtick ichida istalgan javascript kodini yozish mumkin.



  //masalan:

  let yuklandimi = false;
  let holat = `Rasm holati: ${yuklandimi ? "Muvaffaqiyatli yuklandi" : "Xatolik yuz berdi"}`;

  console.log(holat);
