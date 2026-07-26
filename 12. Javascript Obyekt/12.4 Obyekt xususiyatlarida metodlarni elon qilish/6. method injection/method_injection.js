// 1. Ma'lumotlar (Bular API dan kelishi mumkin)
const products = [
	{
		id: 1,
		nomi: "iPhone 15 Pro",
		narxi: "15,000,000 so'm",
		rasm: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400",
		tavsif: "Titan korpusli, eng kuchli A17 Pro protsessoriga ega smartfon.",
	},
	{
		id: 2,
		nomi: "MacBook Air M2",
		narxi: "12,500,000 so'm",
		rasm: "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?w=400",
		tavsif: "Yupqa, yengil va batareyasi 18 soatgacha yetadigan kuchli noutbuk.",
	},
	{
		id: 3,
		nomi: "Sony WH-1000XM5",
		narxi: "4,200,000 so'm",
		rasm: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
		tavsif: "Dunyodagi eng yaxshi shovqinni to'suvchi (ANC) simsiz quloqchinlar.",
	},
];

// 2. UI Service (Method Injection uslubida)
const UIService = {
	modal: document.getElementById("detail-modal"),
	modalBody: document.getElementById("detail-body"),

	batafsilKorsat: function (product) {
		this.modalBody.innerHTML = `
					<div class="detail-info">
							<img src="${product.rasm}" class="detail-img">
							<div class="detail-text">
									<small style="color: #3498db; text-transform: uppercase;">Mahsulot haqida</small>
									<h2>${product.nomi}</h2>
									<p class="price" style="font-size: 1.5rem;">${product.narxi}</p>
									<p>${product.tavsif}</p>
									<button class="btn-detail" style="width: fit-content; padding: 12px 30px;">Savatga qo'shish</button>
							</div>
					</div>
			`;
		this.modal.style.display = "flex";
		document.body.style.overflow = "hidden"; // Modal ochiqligida scrollni o'chirish
	},

	modalniYop: function () {
		this.modal.style.display = "none";
		document.body.style.overflow = "auto";
	},
};

// 3. Gridni yuklash funksiyasi
function renderProducts() {
	const grid = document.getElementById("product-grid");

	products.forEach((p) => {
		const card = document.createElement("div");
		card.className = "card";
		card.innerHTML = `
          <img src="${p.rasm}">
          <h3>${p.nomi}</h3>
          <p>${p.narxi}</p>
          <button class="btn-detail">Batafsil</button>
      `;

		// Tugmaga bosilganda Method Injection usulini qo'llaymiz
		card.querySelector(".btn-detail").onclick = () => {
			UIService.batafsilKorsat(p); // 'p' ob'ekti metodga uzatildi
		};

		grid.appendChild(card);
	});
}

// 4. Boshqaruv
document.getElementById("close-btn").onclick = () => UIService.modalniYop();

// Modal tashqarisiga bosganda yopilish
window.onclick = (e) => {
	if (e.target == UIService.modal) UIService.modalniYop();
};

// Dasturni boshlash
renderProducts();
