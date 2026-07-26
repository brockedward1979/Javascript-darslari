////////////? YIG'ISH METODLARI ////////////

//*1. reduce(fn, init?)
//    Chapdan o'ngga yig'ib bitta qiymat chiqaradi.
//*2. reduceRight(fn, init?)
//    O'ngdan chapga yig'adi.

//***************************************************************/

//? reduce(fn(yiguvchi, qiymat), yiguvchi) metodi:

//todo 1)Matematik amallar

//* 1. Sonlar ko'paytmasi: Berilgan sonlar massividagi barcha elementlarning ko'paytmasini hisoblang (boshlang'ich qiymat 1 bo'lishi kerak).

// let massiv = [10, 30, 40, 60];

// let natija = massiv.reduce((yiguvchi, qiymat) => {
// 	return yiguvchi*qiymat;
// },1);

// console.log(natija);

//* 2. O'rtacha qiymat: Massivdagi sonlarning o'rtacha arifmetik qiymatini toping (avval yig'indini hisoblab, keyin massiv uzunligiga bo'lish orqali).

// let massiv = [20, 30, 45, 22, 78, 80]

// let natija = massiv.reduce((yiguvchi, qiymat) => {
//   return yiguvchi + qiymat
// }
// , 0)

// console.log(natija/massiv.length)

//* 3. Toq sonlar yig'indisi: Massiv ichidagi faqat toq sonlarni ajratib olib, ularning yig'indisini hisoblang.

// let massiv = [13,20,23,80,60,43]

// let natija = massiv.reduce((yiguvchi,qiymat) => {

//   if(qiymat%3==1){
//     return yiguvchi+qiymat
//   }
//   else {
//     return yiguvchi
//   }

//   }, 0)

//   console.log(natija)

//todo 2)Matnlar bilan ishlash

//* 4. So'zlarni birlashtirish: So'zlar massivini bitta gapga aylantiring (so'zlar orasida bo'shliq bo'lsin).

//* 5. Eng uzun so'zni topish: Berilgan matnlar massivi ichidan eng ko'p belgiga ega bo'lgan so'zni aniqlang.

//* 6. Belgilar soni: Massivdagi barcha so'zlarning harflari umumiy sonini hisoblang.

//todo 3)Obyektlar va Ro'yxatlar

//* 7. Yoshlarni hisoblash: Talabalar obyektlari massividan foydalanib, barcha talabalarning umumiy yoshini hisoblang.

//* 8. Bor yoki Yo'qligini tekshirish: Massivda kamida bitta manfiy son bor-yo'qligini reduce orqali aniqlang (natija true yoki false bo'lsin).

//* 9. ID ro'yxatini shakllantirish: Foydalanuvchilar obyektidan iborat massivdan faqatgina ularning ID raqamlaridan iborat yangi massiv yarating.

//* 10. Eng arzon mahsulot: Do'kondagi mahsulotlar ro'yxatidan eng arzon narxdagi mahsulot nomini toping.

//? reduceRight(fn(yiguvchi, qiymat), yiguvchi) metodi:

// 1. Massivni teskari stringga aylantirish:
//* ['a', 'b', 'c'] massividagi harflarni o'ngdan boshlab birlashtirib, "cba" ko'rinishidagi string hosil qiling.

// let massiv = ["a", "b", "c"]

// let natija = massiv.reduceRight((yiguvchi, qiymat) => {
//   return yiguvchi + qiymat
// }, ""
// )

// console.log(natija)

// 2. Oddiy ayirma:
//* [5, 10, 100] massividagi sonlarni o'ngdan chapga qarab bir-biridan ayiring: 100 - 10 - 5.

// let massiv = [5, 10, 100]

// let natija = massiv.reduceRight((yiguvchi,qiymat) => {
//   return yiguvchi - qiymat

// }, 0
// )

// 0-100=-100
// -100-10=-110
// -110-5=-115

// console.log(natija)

// 3. Sonlarni teskari tartibda massivga yig'ish:
//* Berilgan sonlar massivini reduceRight yordamida yangi massivga teskari tartibda ko'chirib o'tkazing.

// let massiv = [5, 10, 100, 2026]

// let natija = massiv.reduceRight((yiguvchi, qiymat) => {
//   return [yiguvchi, qiymat].flat()
// }, []
// )

// console.log(natija)

// // [[], 2026].flat() = [2026]
// // [[2026], 100].flat() = [2026, 100]
// // [[2026, 100], 10].flat() = [2026, 100, 10]
// // [[2026, 100, 10], 5].flat() = [ 2026, 100, 10, 5]

// let massiv = [2026, 15, 111, 0, 81, 98, 20254]

// let natija = massiv.reduceRight((yiguvchi, qiymat) => {

//   yiguvchi.push(qiymat)

//   return yiguvchi
// }, []
// )

// console.log(natija)

// let massiv = [10, 20, 30]

// let natija = massiv.push("vbbvbc", "65454")

// console.log(natija)

// 4. Bo'linmani hisoblash:
//* [2, 5, 100] massividagi sonlarni o'ngdan chapga qarab bo'ling: 100 / 5 / 2.

// let massiv = [2, 5, 100]

// let natija = massiv.reduceRight((yiguvchi, qiymat) => {

//   return yiguvchi / qiymat

// }
// )
// console.log(natija)

// 5. Oxirgi so'zni topish:
//* So'zlar massividan reduceRight yordamida faqat eng oxirgi (o'ng tomondagi birinchi) so'zni string sifatida qaytaring.

// let sozlar = ["Aslbek", "Feruzbek Erkinov", "Sirojiddin", "Nurbek", "Behruz", "Feruzbek Qodirov"]

// let natija = sozlar.reduceRight((yiguvchi, qiymat, indeks, ozi) => {

//   console.log(`${qiymat} ning indeksi ${indeks} va massivning o'zi ----${ozi}----`)

//   return yiguvchi

// }, ""
// )

// 6. Kvadratlar yig'indisi (Teskari):
//* Massivdagi sonlarning kvadratlarini o'ngdan chapga qarab yig'ib chiqing.

// 7. Salomlashish zanjiri:
//* Ismlar massivi berilgan: ['Ali', 'Vali']. Ularni o'ngdan boshlab "Vali va Ali" ko'rinishida birlashtiring.

// 8. Boolean mantiqiy "VA" (AND):
//* [true, true, false] massividagi qiymatlarni o'ngdan chapga qarab && operatori bilan tekshirib, yakuniy natijani toping.

// 9. Eng oxirgi elementni ikki barobar oshirish:
//* Massivning faqat eng oxirgi elementini topib, uni 2 ga ko'paytirib qaytaring (qolgan elementlarga tegmasdan).

// 10. String uzunliklari yig'indisi:
//* So'zlar massividagi har bir so'zning uzunligini (length) o'ngdan chapga qarab qo'shib chiqing.

// let massiv = [100000, 2500000, 350000, 900000]

// let natija = massiv.toLocaleString("uz-UZ", {
//   style: "percent"
// })

// console.log(natija)


