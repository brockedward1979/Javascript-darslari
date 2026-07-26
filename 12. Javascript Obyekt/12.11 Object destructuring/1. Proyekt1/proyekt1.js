

let student1 = {
	ismi: "Nurbek",
	english_level: "C1",
	teachers: {
		english_teacher: "Adolatjon Abdullayevna",
		it_teacher: "Anvar Otabekovich"
	},
	description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, non."
}
let student2 = {
	ismi: "Aslbek",
	english_level: "D1",
	teachers: {
		english_teacher: "151 teachers",
		it_teacher: "Anvar Otabekovich"
	},
	description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, non."
}




let ui_chizish = {

	btn1: document.getElementById("btn1"),
	btn2: document.getElementById("btn2"),
	malumot: document.getElementById("malumot"),

	korsat({ismi, english_level, teachers: {english_teacher}, description}){

		this.malumot.innerHTML = `
		<h2>student name: ${ismi}</h2>
		<hr>
		<p>level: ${english_level}</p>
		<p>english teacher: ${english_teacher}</p>
		<p>Description: ${description}</p>
		`

	}
}


ui_chizish.btn1.onclick = () => {
	ui_chizish.korsat(student1)
}

ui_chizish.btn2.onclick = () => {
	ui_chizish.korsat(student2)
}




