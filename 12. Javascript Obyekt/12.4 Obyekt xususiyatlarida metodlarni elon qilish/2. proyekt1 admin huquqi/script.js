// 1. Foydalanuvchi obyekti
let student = {
	name: "Shoxjahon",
	role: "user",
};

// 2. Superadmin obyekti
const superAdmin = {
	name: "Anvar Otabekovich",

	grantAccess: function (targetUser) {
		targetUser.role = "admin";

		// Metodni keyinchalik qo'shish
		targetUser.removeListItem = function (btn) {
			btn.parentElement.remove();
			console.log("Element o'chirildi.");
		};

		refreshUI();
	},
};

// 3. UI-ni yangilovchi funksiya
function refreshUI() {
	const roleSpan = document.getElementById("u-role");

	// HTMLCollection olamiz
	const deleteButtonsCollection = document.getElementsByClassName("del-btn");

	roleSpan.innerText = student.role;

	if (student.role === "admin") {
		roleSpan.className = "badge admin-badge-active";

		// HTMLCollection-ni haqiqiy massivga aylantirib, forEach ishlatamiz
		Array.from(deleteButtonsCollection).forEach(function (btn) {
			btn.style.display = "block"; // Tugmani ko'rsatish

			btn.onclick = function () {
				// Yangi qo'shilgan metodni chaqirish
				student.removeListItem(this);
			};
		});
	}
}

// 4. Hodisani bog'lash
const promoteBtn = document.getElementById("promote-btn");
promoteBtn.onclick = function () {
	superAdmin.grantAccess(student);
	this.disabled = true;
	this.innerText = "Huquq berildi ✅";
};
