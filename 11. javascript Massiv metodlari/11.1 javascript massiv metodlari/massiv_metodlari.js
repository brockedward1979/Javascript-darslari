//////////? MASSIV METODLARI ////////////

//====================================================//

////? QO'SHISH VA O'CHIRISH METODLARI ////

//*1. push(...items)o'zgaradi
//    Oxiriga element(lar) qo'shadi, yangi uzunlikni qaytaradi.
//*2. pop()o'zgaradi
//    Oxirgi elementni olib tashlaydi va qaytaradi.
//*3. unshift(...items)o'zgaradi
//    Boshiga element(lar) qo'shadi.
//*4. shift()o'zgaradi
//    Birinchi elementni olib tashlaydi va qaytaradi.
//*5  splice(start, del, ...items)o'zgaradi
//    Berilgan pozitsiyadan elementlarni o'chiradi va/yoki yangi elementlar kiritadi.

//**************************************************** */

////? TRANSFORMATSIYA (YANGI MASSIV QAYTARADI) METODLARI  ////

//*1. map(fn)yangi massiv
//   Har bir elementga fn ni qo'llab, yangi massiv qaytaradi.
//*2. filter(fn)yangi massiv
//   fn shartini qoniqtirgan elementlardan yangi massiv hosil qiladi.
//*3. flat(depth?)yangi massiv
//   Ichma-ich massivlarni berilgan chuqurlikka yassilaydi.
//*4. flatMap(fn)yangi massiv
//   map + flat(1) ni birga bajaradi.
//*5. concat(...arrays)yangi massiv
//   Bir yoki bir nechta massivni birlashtirib yangi massiv qaytaradi.
//*6. slice(start?, end?)yangi massiv
//   Berilgan oraliqdan yangi massiv kesib oladi (asl o'zgarmaydi).
//*7. toSorted(fn?)yangi massiv
//   Saralangan nusxasini qaytaradi (ES2023, asl o'zgarmaydi).
//*8. toReversed()yangi massiv
//   Teskari tartibdagi nusxasini qaytaradi (ES2023).
//*9. toSpliced(start, del, ...)yangi massiv
//   splice ning o'zgartirmaydigan versiyasi (ES2023).
//*10 with(index, value)yangi massiv
//   Indeksdagi elementni almashtirgan nusxasini qaytaradi (ES2023).

//*************************************************************** */

////? QIDIRISH VA TEKSHIRISH METODLARI ////

//*1. find(fn)
//    Shartni qoniqtirgan birinchi elementni qaytaradi, bo'lmasa undefined.
//*2. findIndex(fn)
//    Shartni qoniqtirgan birinchi elementning indeksini qaytaradi.
//*3. findLast(fn)
//    Oxiridan boshlab shartni qoniqtirgan elementni qaytaradi (ES2023).
//*4. findLastIndex(fn)
//    Oxiridan boshlab shartni qoniqtirgan indeksni qaytaradi.
//*5. indexOf(val, from?)
//    Elementning birinchi uchragan indeksini qaytaradi, yo'q bo'lsa −1.
//*6. lastIndexOf(val, from?)
//    Elementning oxirgi uchragan indeksini qaytaradi.
//*7. includes(val, from?)
//    Element mavjudligini true/false bilan qaytaradi.
//*8. some(fn)
//    Kamida bitta element shartni qoniqtirsa true.
//*9. every(fn)
//    Hamma element shartni qoniqtirsa true.

//***************************************************************/

////////////? YIG'ISH METODLARI ////////////

//*1. reduce(fn, init?)
//    Chapdan o'ngga yig'ib bitta qiymat chiqaradi.
//*2. reduceRight(fn, init?)
//    O'ngdan chapga yig'adi.

//***************************************************************/

////? TARTIB VA TO'LDIRISH METODLARI ////

//*1. sort(fn?)o'zgaradi
//    Massivni joyida saralaydi. fn berilmasa leksikografik tartib.
//*2. reverse()o'zgaradi
//    Massivni joyida teskari aylantiradi.
//*3. fill(val, start?, end?)o'zgaradi
//    Ko'rsatilgan oraliqni berilgan qiymat bilan to'ldiradi.
//*4. copyWithin(target, start?, end?)o'zgaradi
//    Massiv ichida elementlarni nusxalaydi (joyida).

//***************************************************************/

////? ITERATSIYA VA CHIQARISH METODLARI ////

//*1. forEach(fn)
//    Har bir element uchun fn ni chaqiradi, qaytarish qiymati yo'q.
//*2. entries()
//    Indeks-qiymat juftlari iteratorini qaytaradi.
//*3. keys()
//    Indekslar iteratorini qaytaradi.
//*4. values()
//    Qiymatlar iteratorini qaytaradi.
//*5. join(sep?)
//    Elementlarni ajratuvchi bilan birlab string qaytaradi.
//*6. toString()
//    Massivni vergul bilan ajratilgan stringga o'tkazadi.
//*7. toLocaleString()
//    Lokal formatga mos string qaytaradi.

//***************************************************************/

////////////? STATIK METODLAR ////////////

//*1. Array.isArray(val)
//    val massiv ekanligini tekshiradi.
//*2. Array.from(iter, fn?)
//    Iterable yoki massivsimon ob'ektdan massiv hosil qiladi.
//*3. Array.of(...items)
//    Berilgan argumentlardan yangi massiv yaratadi.
//*4. Array.fromAsync(iter)
//    Asinxron iterable dan massiv (ES2024).