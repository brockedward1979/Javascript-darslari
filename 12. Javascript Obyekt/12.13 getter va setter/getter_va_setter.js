class StudentManager {
	constructor(students) {
		this.allStudents = students; // Barcha ma'lumotlar
		this._filterText = ""; // Qidiruv so'zi uchun yashirin o'zgaruvchi
	}

	// SETTER: Qidiruv so'zi o'zgarganda ishlaydi
	set filterText(value) {
		this._filterText = value.toLowerCase().trim();
		this.render(); // Har safar so'z o'zgarganda ekranni yangilaymiz
	}

	// GETTER: Filtrlangan ro'yxatni hisoblab qaytaradi
	get filteredStudents() {
		// Filter metodidan foydalanamiz
		return this.allStudents.filter((student) => student.name.toLowerCase().includes(this._filterText));
	}

	// Ekranga chiqarish metodi
	render() {
		const listElement = document.getElementById("studentList");
		listElement.innerHTML = ""; // Ro'yxatni tozalash

		this.filteredStudents.forEach((student) => {
			const li = document.createElement("li");
			li.textContent = student.name;
			listElement.appendChild(li);
		});
	}
}

// Ma'lumotlar bazasi (Imitatsiya)
const studentsData = [{ name: "Anvar Ibraximov" }, { name: "Muhammadjon Otabekov" }, { name: "Malika Budur" }, { name: "Dilshodbek" }];

const app = new StudentManager(studentsData);
app.render(); // Dastlabki ro'yxatni chiqarish

// Event Listener orqali Setterni ishga tushiramiz
document.getElementById("searchInput").addEventListener("input", (e) => {
	app.filterText = e.target.value; // Setter shu yerda chaqiriladi!
});
