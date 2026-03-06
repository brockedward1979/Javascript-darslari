let btn = document.getElementById("btn");
let jadval = document.getElementById("jadval");

let students = [
	{ nomer: 1, ism: "Anvar", familiya: "Ibraximov" },
	{ nomer: 2, ism: "Sobirjon", familiya: "Sharipov" },
	{ nomer: 3, ism: "Shaxzod", familiya: "Qodirov" },
	{ nomer: 4, ism: "Shoxrux", familiya: "Xolmatov" },
	{ nomer: 5, ism: "Kumush", familiya: "Jumanazarova" },
];

btn.onclick = function () {
	let table = `<table >
	<thead>
	<tr>
	<th>№</th>
	<th>Ism</th>
	<th>Familiya</th>
	</tr>
	</thead>
	<tbody>`

	let i = 1;
	for (let student of students) {
		table += `<tr>
		<td>${i++}</td>
		<td>${student.ism}</td>
		<td>${student.familiya}</td>
		</tr>`
	}
	table += `</tbody><tfoot></tfoot><tr><td colspan="3">Jami: ${i - 1} ta</td></tr></tfoot></table>`
	jadval.innerHTML = table
};
