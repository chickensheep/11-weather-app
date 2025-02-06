import { displayError } from "./displayError";
import { getWeatherData } from "./getWeatherData";
import { displayWeatherData } from "./displayWeatherData";

const addSubmitFormFunction = () => {
	const weatherForm = document.querySelector(".weatherForm");

	weatherForm.addEventListener("submit", async (event) => {
		event.preventDefault();
		const city = document.querySelector("#city").value;
		if (city) {
			try {
				const weatherData = await getWeatherData(city);
				displayWeatherData(weatherData);
			} catch (error) {
				displayError("City cannot be found");
			}
		} else {
			displayError("Please enter a city.");
		}
	});
};

export { addSubmitFormFunction };
