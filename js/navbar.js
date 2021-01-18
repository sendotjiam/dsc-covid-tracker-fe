const navbar = () => {
	const nav = document.getElementById("navbar");
	if (nav.className === "navbar") {
		nav.classList.add("responsive");
	} else {
		nav.className = "navbar";
	}
};
