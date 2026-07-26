////////////? CALLBACK FUNKSIYALAR //////////////

//* callback (qayta aloqa) funksiyasi — bu boshqa bir funksiyaga argument sifatida uzatiladigan va ma'lum bir amal bajarilgandan so'ng ishga tushiriladigan funksiyadir.

//Sodda qilib aytganda: "Sen o'z ishingni bajar bo'lgach, mana bu funksiyani ham chaqirib qo'y" degan buyruqdir.


//* SINTAKSISI:

// function funksiya(callback) {
//   callback();
// }


// function xabarJonat(xabar, funksiya){


  
//   funksiya(xabar);
// }

// xabarJonat("Assalomu alaykum", sms)
// xabarJonat("Assalomu alaykum", email)
// xabarJonat("Assalomu alaykum", telegram)





// function sms(sms){
//   console.log("SMS: " + sms);
// }

// function email(email){
//   console.log("Email: " + email);
// }

// function telegram(telegram){
//   console.log("Telegram: " + telegram);
// }




// function xabarJonat(xabar, callback){
//   callback(xabar);
// }

// function sms(sms){
//   console.log("SMS: " + sms);
// }

// function email(email){
//   console.log("Email: " + email);
// }

// function telegram(telegram){
//   console.log("Telegram: " + telegram);
// }

// xabarJonat("Assalomu alaykum", sms)
// xabarJonat("Assalomu alaykum", email)
// xabarJonat("Assalomu alaykum", telegram)



// function xabarJonat(qaysiUsulda){
//   return qaysiUsulda().toUpperCase();
// }

// console.log(xabarJonat(smsJonat))

// console.log(xabarJonat(emailJonat))
// console.log(xabarJonat(telegramgaJonat))

// function smsJonat(){
//   return "Bu SMS xabari: Bugun hammaga soat 6-00 da yig'ilish!!!";
// }

// function emailJonat(){
//   return "Bu email xabari: Bugun hammaga soat 6-00 da yig'ilish!!!";
// }

// function telegramgaJonat(){
//   return"Bu telegram xabari: Bugun hammaga soat 6-00 da yig'ilish!!!";
// }



// function hisobla(a, b, funksiya){
//   let natija = a + b;

//   console.log(funksiya(natija))
// }

// function kvadratga(son){
//   return son**2
// }

// function kubgaKotar(son){
//   return son**3
// }













hisobla(2, 3, kubgaKotar)

