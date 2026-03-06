let btn = document.getElementById("btn");
let jadval = document.getElementById("jadval");

let malumotlar = [
  { id: 1, ism: "Ali", familya: "Valiyev" },
  { id: 2, ism: "Vali", familya: "Aliyev" },
  { id: 3, ism: "Sami", familya: "Samiyev" },
  { id: 4, ism: "Olim", familya: "Olimiyev" },
  { id: 5, ism: "Murod", familya: "Murodiyev" },
  { id: 6, ism: "Hasan", familya: "Hasaniyev" },
  { id: 7, ism: "Ozod", familya: "Ozodiyev" },
  { id: 8, ism: "Bekzod", familya: "Bekzodiyev" },
  { id: 9, ism: "Shahzod", familya: "Shahzodiyev" },
  { id: 10, ism: "Javohir", familya: "Javohiriyev" },
  { id: 11, ism: "Doston", familya: "Dostonov" },
  { id: 12, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 13, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 14, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 15, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 16, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 17, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 18, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 19, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 20, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 21, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 22, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 23, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 24, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 25, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 26, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 27, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 28, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 29, ism: "Dilshod", familya: "Dilshodiyev" },
  { id: 30, ism: "Dilshod", familya: "Dilshodiyev" },
  
]


btn.onclick = function () {
	let table = `
  <table>
			<thead>
				<tr>
					<th>№</th>
					<th>Имя</th>
					<th>Фамилия</th>
				</tr>
			</thead>
			<tbody>
  `;

  for (let malumot of malumotlar){
    table = table + `<tr>
    <td>${malumot.id}</td>
    <td>${malumot.ism}</td>
    <td>${malumot.familya}</td>
    </tr>`
  } 

  jadval.innerHTML = table + `</tbody></table>`;
};
