# 🍔 Food Delivery Order System (JS Fundamentals Edition)

Ushbu loyiha JavaScript-da **shartli tuzilmalar** va **ma'lumotlarni boshqarish** bo'yicha bilimlarni mustahkamlash uchun yaratilgan kichik o'quv proyektidir.

## 🚀 Loyiha Maqsadi

Loyiha foydalanuvchiga taomlarni tanlash (Checkbox orqali) va yetkazib berish usulini belgilash imkonini beradi. Asosiy maqsad — zamonaviy massiv metodlarisiz (`forEach`, `push`, `map`), faqatgina bazaviy mantiq yordamida buyurtma tizimini qurish.

## 🛠 Ishlatilgan Texnologiyalar va Mavzular

Loyiha davomida quyidagi fundamental tushunchalar qo'llanilgan:

- **HTML & CSS:** Interfeysni qurish va dizayn berish.
- **JavaScript (ES6+):**
  - `getElementById`: DOM elementlari bilan ishlash.
  - **Ko'pli if / else if**: Tanlovlarni tekshirish.
  - **Nullish Coalescing (??)**: Foydalanuvchi ma'lumot kiritmaganda "Default" (standart) qiymatlarni o'rnatish.
  - **Object (Obyekt)**: Yetkazib berish vaqtlarini saqlash uchun kalit-qiymat juftligi.
  - **Array (Massiv)**: Tanlangan taomlarni indekslar bo'yicha boshqarish.
  - **Inline Styles**: `.style.display` yordamida natija oynasini ko'rsatish.

## 📋 Qanday ishlaydi?

1.  **Taom tanlash:** Har bir checkbox alohida tekshiriladi. Agar belgilangan bo'lsa, uning qiymati massivning navbatdagi indeksiga yoziladi.
2.  **Vaqtni aniqlash:** Tanlangan usulga qarab, obyekt ichidan mos keluvchi vaqt (masalan: 15 daqiqa) olinadi.
3.  **Zaxira Reja:** Agar foydalanuvchi hech narsa tanlamasa, `??` operatori ishga tushib, tizimni xatolikdan asraydi va standart qiymatlarni (masalan: "Savat bo'sh") ko'rsatadi.

## 💻 O'rnatish

1.  Ushbu papkadagi `proyekt_nullish_coalescing.html`, `proyekt_nullish_coalescing.css` va `proyekt_nullish_coalescing.js` fayllarini yuklab oling.
2.  `proyekt_nullish_coalescing.html` faylini istalgan brauzerda oching.
3.  Taomlarni tanlang va "Buyurtma berish" tugmasini bosing.
