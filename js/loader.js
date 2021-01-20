const loader = document.getElementById("loader");

const displayLoader = (time) => {
	loader.style.visibility = "visible";
	setTimeout(() => hideLoader(), time);
};

const hideLoader = () => (loader.style.visibility = "hidden");
