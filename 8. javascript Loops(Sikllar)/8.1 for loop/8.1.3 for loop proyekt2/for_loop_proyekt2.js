// 1. Statik ma'lumotlar bazasi (data.js dan import)
import { products } from "./data.js";

// 2. Tovarlarni jadvalga chiqarish funksiyasi
function renderProducts(data) {
	const tbody = document.getElementById("productTableBody");
	const countDisplay = document.getElementById("productCount");
	let rows = "";

	// DIQQAT: products emas, data o'zgaruvchisidan foydalanamiz!
	for (let i = 0; i < data.length; i++) {
		let p = data[i];

		let status = "Tugagan";
		let rang = "red";

		if (p.stock > 0) {
			status = "Bor";
			rang = "green";
		}

		rows += `
      <tr>
        <td>${p.id}</td>
        <td><b>${p.name}</b></td>
        <td>${p.category}</td>
        <td>${p.price.toLocaleString()} so'm</td>
        <td>${p.stock} ta</td>
        <td style="color: ${rang}">${status}</td>
      </tr>`;
	}

	// Sikldan tashqarida yozamiz
	tbody.innerHTML = rows;
	countDisplay.innerText = "Jami: " + data.length + " ta tovar";
}

// 3. Filtrlash funksiyasi
function applyFilters() {
	const selectedCat = document.getElementById("categoryFilter").value;
	const selectedStock = document.getElementById("statusFilter").value;

	const filtered = [];

	for (let i = 0; i < products.length; i++) {
		let p = products[i];

		let catMatch = selectedCat === "All" || p.category === selectedCat;

		let stockMatch = false;
		if (selectedStock === "All") {
			stockMatch = true;
		} else if (selectedStock === "InStock" && p.stock > 0) {
			stockMatch = true;
		} else if (selectedStock === "OutOfStock" && p.stock === 0) {
			stockMatch = true;
		}

		if (catMatch && stockMatch) {
			filtered.push(p); // .push ishlatish qulayroq
		}
	}

	renderProducts(filtered);
}

// Global scope-da funksiyani ishlatish uchun (agar HTML onclick ishlatsangiz)
window.applyFilters = applyFilters;

// 4. Dasturni birinchi marta ishga tushirish
renderProducts(products);
