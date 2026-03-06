// 1. Ma'lumotlar bazasi (Obyektlar massivi)
const projects = [
	{
		student: "Muhammadjon",
		title: "Chess Master AI",
		videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
		poster: "https://via.placeholder.com/400x200?text=Chess+Project",
		tech: "JavaScript, Algorithms",
	},
	{
		student: "Haydarbek",
		title: "Haydarbek haqida",
		videoUrl: "https://www.w3schools.com/html/movie.mp4",
		poster: "https://via.placeholder.com/400x200?text=Restaurant+Project",
		tech: "Siklllar, HTML, CSS",
	},
	{
		student: "Alisher",
		title: "Alisher haqida",
		videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
		poster: "https://via.placeholder.com/400x200?text=Portfolio+Project",
		tech: "JavaScript, HTML, CSS",
	},
	{
		student: "Muhammadjon",
		title: "Muhammadjon haqida",
		videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
		poster: "https://via.placeholder.com/400x200?text=Portfolio+Project",
		tech: "JavaScript, HTML, CSS",
	},
	{
		student: "Muhammadjon",
		title: "Muhammadjon haqida",
		videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
		poster: "https://via.placeholder.com/400x200?text=Portfolio+Project",
		tech: "JavaScript, HTML, CSS",
	},
];

function loadProjects(data) {
	const wrapper = document.getElementById("video-wrapper");
	let content = "";

	// forEach orqali har bir obyektni aylanib chiqamiz
	data.forEach( (item) => {
		content += `
          <div class="video-card">
              <video src="${item.videoUrl}" poster="${item.poster}" controls></video>
              <div class="card-content">
                  <h3>${item.title}</h3>
                  <p><strong>Student:</strong> ${item.student}</p>
                  <span class="tech-stack">${item.tech}</span>
              </div>
          </div>
      `;
	});

	wrapper.innerHTML = content;
}

let btn = document.getElementById("btn");
btn.onclick = function () {
	loadProjects(projects);
};

let btn2 = document.getElementById("btn2");
btn2.onclick = () => {
	loadProjects([]);
};






