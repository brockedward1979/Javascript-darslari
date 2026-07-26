let student = {
	ismi: "Alisher",
	familiyasi: "Valiyev",
	yoshi: 20,

	hisobla(event) {
		console.log(event);
		console.log(this);
	},
};

let btn = document.getElementById("btn");

btn.onclick = student.hisobla.bind(student);

