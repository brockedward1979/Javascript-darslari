const themeConfigs = {
	dark: { bg: "#1e272e", text: "#ffffff" },
	green: { bg: "#05c46b", text: "#ffffff" },
	light: { bg: "#ffffff", text: "#2f3542" },
};

function updateTheme() {
	// 1. Radio tugmalarning holatini tekshiramiz
	const isDark = document.getElementById("dark-opt").checked;
	const isGreen = document.getElementById("green-opt").checked;

	// 2. Mantiqiy operatorlar: && va || ishlatilishi
	// Agar isDark bo'lsa dark-ni ol, bo'lmasa isGreen-ni tekshir, u ham bo'lmasa light-ga o't
	const selectedTheme =
		(isDark && themeConfigs.dark) ||
		(isGreen && themeConfigs.green) ||
		themeConfigs.light;

	// 3. Body uslubini xavfsiz o'zgartirish (&& operatori)
	const b = document.body;
	b && (b.style.backgroundColor = selectedTheme.bg);
	b && (b.style.color = selectedTheme.text);
}
