# 🎨 Logic-Based Theme Switcher

Ushbu loyiha JavaScript-da mantiqiy operatorlar (`&&`, `||`) va obyektlar bilan ishlashning professional usullarini ko'rsatish uchun yaratilgan.

---

### 📝 Loyiha Maqsadi
Loyihaning asosiy maqsadi — **Short-circuit evaluation** va **Fallback mechanism** tushunchalarini amalda qo'llashdir. Bu orqali kodni qisqartirish, uning o'qilishini yaxshilash va xatolarga chidamliligini oshirish ko'zda tutilgan.

### 🛠 Texnologiyalar
* **HTML5:** Strukturaviy radio-tugmalar va boshqaruv elementlari.
* **CSS3:** Sahifaning vizual ko'rinishi va mavzular o'rtasidagi silliq (`transition`) o'tishlar.
* **Vanilla JavaScript:** Mantiqiy jarayonlarni boshqarish uchun.

---

### ⚡️ Foydalanilgan Mantiqiy "Trick"lar

1. **Short-circuit Evaluation (`&&`):**
   - Tanlov mavjudligini tekshirish: `isDark && themeConfigs.dark`. Agar shart `false` bo'lsa, JS o'ng tomondagi obyektni o'qib o'tirmaydi.
   - Xavfsiz DOM manipulyatsiyasi: `document.body && (document.body.style...)`. Bu element topilmagan taqdirda xatolik chiqishini oldini oladi.

2. **Fallback Mechanism (`||`):**
   - Agar birorta ham shart bajarilmasa, standart qiymatga qaytish: `(...) || themeConfigs.light`.

3. **Parametrsiz Funksiya:**
   - Funksiya tashqi argumentlarga bog'lanib qolmagan. U barcha kerakli ma'lumotlarni bevosita DOM-ning joriy holatidan (Radio tugma `checked` xususiyati) o'zi aniqlab oladi.



---

### 📂 Loyiha Strukturasi
```text
├── index.html   # Strukturaviy qism
├── style.css    # Dizayn va effektlar
└── script.js    # Mantiqiy operatorlar va mantiq