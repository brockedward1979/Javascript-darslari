const foydalanuvchilar = [
	{ ism: "Ali", yosh: 25 },
	{ ism: "Vali", yosh: 30 },
	{ ism: "Sami", yosh: 22 },
	{ ism: "Olim", yosh: 40 },
	{ ism: "Murod", yosh: 35 },
	{ ism: "Hasan", yosh: 28 },
	{ ism: "Ozod", yosh: 19 },
	{ ism: "Bekzod", yosh: 24 },
	{ ism: "Shahzod", yosh: 17 },
	{ ism: "Javohir", yosh: 32 },
];

let html = `<table>
  <thead>
      <tr>
          <th>№</th>
          <th>Ism</th>
          <th>Yosh</th>
      </tr>
  </thead>
  <tbody>`;

let i = 1;
// Obyekt ichidan ism va yoshni srazu olyapmiz
for (let { ism, yosh } of foydalanuvchilar) {
	html += `<tr>
      <td>${i++}</td>
      <td>${ism}</td>
      <td>${yosh}</td>
  </tr>`;
}

html += `</tbody></table>`;

// Tayyor jadvalni HTML sahifasiga chiqaramiz

let btn = document.getElementById("btn");

btn.onclick = function () {
	document.getElementById("table-box").innerHTML = html;
};
