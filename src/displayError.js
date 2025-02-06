const displayError = (message) => {
	const card = document.querySelector(".card");
	card.innerHTML = "";
	card.style.display = "inline-block";

	const error = document.createElement("p");
	error.classList.add("error");

	error.textContent = message;

	card.appendChild(error);
};

export { displayError };
