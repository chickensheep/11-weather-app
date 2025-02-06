const displayWeatherData = (weatherData) => {
	const card = document.querySelector(".card");
	card.innerHTML = "";
	card.style.display = "inline-block";

	const address = weatherData.resolvedAddress;
	const temperature = weatherData.currentConditions.temp;
	const description = weatherData.description;

	const addressDisplay = document.createElement("p");
	addressDisplay.textContent = address;
	addressDisplay.classList.add("addressDisplay");
	card.appendChild(addressDisplay);

	const temperatureDisplay = document.createElement("p");
	temperatureDisplay.textContent = `${
		Math.round((((temperature - 32) * 5) / 9) * 10) / 10
	}°C`;
	temperatureDisplay.classList.add("temperatureDisplay");
	card.appendChild(temperatureDisplay);

	const descriptionDisplay = document.createElement("p");
	descriptionDisplay.textContent = description;
	descriptionDisplay.classList.add("descriptionDisplay");
	card.appendChild(descriptionDisplay);
};

export { displayWeatherData };
