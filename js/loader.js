const VISIBLE = "visible";
const HIDDEN = "hidden";
const loader = document.getElementById("loader");

const displayLoader = (time) => {
	loader.style.visibility = VISIBLE;
	setTimeout(() => hideLoader(), time);
};

const hideLoader = () => (loader.style.visibility = HIDDEN);
