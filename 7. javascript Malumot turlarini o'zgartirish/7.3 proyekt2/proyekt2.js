const quantityInput = document.getElementById("quantityInput");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const fastDelivery = document.getElementById("fastDelivery");
const totalPriceDisplay = document.getElementById("totalPrice");
const orderBtn = document.getElementById("orderBtn");
const msg = document.getElementById("msg");

const UNIT_PRICE = 1200;
const MAX_STOCK = 5; // Skladda faqat 5 ta bor

function updateCart() {
	// 1. Number: Qiymatni songa o'tkazamiz
	let count = Number(quantityInput.value);

	// 2. Boolean: Shartlarni tekshiramiz
	let isOutOfStock = Boolean(count >= MAX_STOCK);
	let needsFastDelivery = Boolean(fastDelivery.checked);

	// Tugmalarni boshqarish
	plusBtn.disabled = isOutOfStock;
	minusBtn.disabled = Boolean(count <= 0);

	// 3. Hisoblash
	let total = count * UNIT_PRICE;
	if (needsFastDelivery) {
		total += 50; // Yetkazib berish narxi
	}

	// 4. String: Natijani ekranga chiqaramiz
	totalPriceDisplay.innerText = String(total);

	// Ombor holati haqida xabar
	if (isOutOfStock) {
		msg.innerText = "Skladda boshqa qolmadi!";
		msg.style.color = "red";
	} else {
		msg.innerText = "";
	}
}

// Hodisalarni bog'lash
plusBtn.onclick = () => {
	quantityInput.value = Number(quantityInput.value) + 1;
	updateCart();
};

minusBtn.onclick = () => {
	quantityInput.value = Number(quantityInput.value) - 1;
	updateCart();
};

fastDelivery.onchange = updateCart;

// Buyurtma berish tugmasi
orderBtn.onclick = () => {
	alert(`Buyurtma qabul qilindi! Jami: ${totalPriceDisplay.innerText}$`);
};

// Dastlabki holatni yuklash
updateCart();
