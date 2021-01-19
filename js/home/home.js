const totalCases = document.getElementById("total-cases");
const positive = document.getElementById("positive");
const recovered = document.getElementById("recovered");
const death = document.getElementById("death");
const container = document.getElementById("container");

fetch("https://indonesia-covid-19.mathdro.id/api/", {
	method: "GET",
})
	.then((res) => {
		if (res.ok === true) {
			return res.json();
		} else {
			return Promise.reject({
				status: res.status,
				statusText: res.statusText,
			});
		}
	})
	.then((data) => {
		totalCases.innerHTML = data.jumlahKasus;
		positive.innerHTML = data.perawatan;
		recovered.innerHTML = data.sembuh;
		death.innerHTML = data.meninggal;
	})
	.catch((error) => {
		console.log("Error: " + error);
	});
