# 🎨 ID-Based Theme Switcher

Ushbu loyiha JavaScript-da DOM elementlari bilan ishlashning eng sodda va ishonchli usullaridan biri — **Direct Function Mapping** (funksiyalarni to'g'ridan-to'g'ri bog'lash) usulini ko'rsatib beradi.

---

### 📝 Loyiha Maqsadi
Loyihaning asosiy maqsadi — har bir interaktiv element (tugma) uchun alohida mantiqiy funksiya yaratish orqali sahifa dizaynini dinamik boshqarishni o'rganish. Bu yondashuv kodni o'qishni osonlashtiradi va yangi boshlovchilar uchun mantiqiy zanjirni tushunishga yordam beradi.

### 🛠 Texnologiyalar
* **HTML5:** Tugmalarga asoslangan foydalanuvchi interfeysi.
* **CSS3:** - `transition: background 3s ease` — Fon rangining o'ta silliq o'zgarishi (3 soniya).
  - `hover` effektlari — Tugmalarning interaktivligi uchun.
* **Vanilla JavaScript:** Alohida funksiyalar orqali `body` uslubini boshqarish.

---

### ⚡️ Texnik Tavsif

1. **Global Configuration Object:**
   Mavzu ranglari `themeData` nomli markaziy obyektda saqlanadi. Bu loyihani boshqarishni osonlashtiradi:
   ```javascript
   const themeData = {
     dark: { bg: "#121212", text: "#ffffff" },
     // ...
   };