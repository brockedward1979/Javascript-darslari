// // 1. Foydalanuvchi sozlamalari (Masalan, bazadan yoki inputdan keldi)
// let userSettings = {
// 	volume: 0, // Foydalanuvchi ovozni o'chirib qo'ygan (0 qilgan)
// 	playerName: "", // Ismini yozish esidan chiqqan (bo'sh string)
// 	showTutorial: false, // Tutorialni ko'rmoqchi emas
// 	difficulty: null, // Qiyinchilik darajasini hali tanlamadi
// };

// console.log("--- Natijalarni solishtiramiz ---");

// // --- MANTIQ: || (Logical OR) ---
// // Bu operator 0, "", va false qiymatlarini "yomon" deb o'ylaydi va standart qiymatga o'zgartirib yuboradi.
// let volumeOR = userSettings.volume || 50;
// let nameOR = userSettings.playerName || "Anonim";
// let diffOR = userSettings.difficulty || "Oson";

// console.log("OR (||) bilan:");
// console.log("Ovoz:", volumeOR); // Natija: 50 (XATO! Foydalanuvchi 0 qilgan edi, lekin o'yin baqirib yuboradi)
// console.log("Ism:", nameOR); // Natija: Anonim (To'g'ri, chunki ism bo'sh edi)
// console.log("Qiyinchilik:", diffOR); // Natija: Oson (To'g'ri, chunki u null edi)

// // --- MANTIQ: ?? (Nullish Coalescing) ---
// // Bu operator faqat null va undefined bo'lganda ishga tushadi. 0 va false'ni "haqiqiy qiymat" deb hurmat qiladi.
// let volumeNullish = userSettings.volume ?? 50;
// let nameNullish = userSettings.playerName ?? "Anonim";
// let diffNullish = userSettings.difficulty ?? "Oson";

// console.log("\nNullish (??) bilan:");
// console.log("Ovoz:", volumeNullish); // Natija: 0 (TO'G'RI! Foydalanuvchi xohlaganidek ovoz o'chiq)
// console.log("Ism:", nameNullish); // Natija: "" (To'g'ri, bo'sh bo'lsa ham uning tanlovi)
// console.log("Qiyinchilik:", diffNullish); // Natija: Oson (To'g'ri, chunki u null edi)

////////!           MAVZU: Nullish Coalescing (??)             //////////

// Nullish Coalescing operatori (??) faqat NULL yoki UNDEFINED qiymatlari uchun standart qiymatni belgilashda ishlatiladi.

//  Misol uchun:
// Foydalanuvchi sozlamalari obyekti bo'lishi mumkin:
// 1. ovoz: foydalanuvchi ovozini belgilaydi (0 dan 100 gacha).
// 2. ismi: foydalanuvchi ismi (bo'sh string bo'lishi mumkin).
// 3. instruksiyani_korish: foydalanuvchi instruktsiyani ko'rishni xohlaydimi (boolean).
// 4. qiyinchilik_darajasi: o'yin qiyinchilik darajasi (null bo'lishi mumkin).
// Agar foydalanuvchi ovozni 0 ga o'rnatgan bo'lsa, ismini bo'sh qoldirgan bo'lsa yoki qiyinchilik darajasini tanlamagan bo'lsa, standart qiymatlarni belgilash kerak.

let gaplari = "a";

let gaplashuvchilar = gaplari ?? "Gaplashuvchilar mavjud emas";

console.log(gaplashuvchilar);
