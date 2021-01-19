const loader = document.getElementById("loader");

const displayLoader = () => {
	loader.classList.add("show");
	setTimeout(() => {
		loader.classList.remove("show");
	}, 3000);
};

const hideLoader = () => loader.classList.remove("show");
