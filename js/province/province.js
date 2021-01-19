const cards = document.getElementById("main-card");
const search = document.getElementById("search-bar");
let provinceList = [];

const loadProvinceData = () => {
	fetch("https://indonesia-covid-19.mathdro.id/api/provinsi", {
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
		.then((res) => {
			const datas = res.data;
			provinceList.push(datas);
			displayProvinceCards(datas);
		})
		.catch((error) => {
			console.log("Error: " + error);
		});
};

loadProvinceData();

const filterSearch = (event) => {
	const provinceValue = event.value.toLowerCase();
	const filteredProvince = provinceList.filter((data) => {
		console.log(data);
		return data.provinsi.toLowerCase().includes(provinceValue);
	});
	console.log(filteredProvince);
	// const datas = filteredProvince.data;
	// displayProvinceCards(datas);
};

const displayProvinceCards = (datas) => {
	let x = datas
		.map((data) => {
			return `
			<div class="card" id="card">
				<div class="card-title city">${data.fid}<span>${data.provinsi}</span></div>
				<div class="card-content positive">
					<span>${data.kasusPosi}</span><span>Positive</span>
				</div>
				<div class="card-content recover">
					<span>${data.kasusSemb}</span><span>Recovered</span>
				</div>
				<div class="card-content death">
					<span>${data.kasusMeni}</span><span>Death</span>
				</div>
			</div>`;
		})
		.join(" ");
	cards.innerHTML = x;
};
