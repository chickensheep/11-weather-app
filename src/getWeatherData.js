import { api } from "./api";
import { displayError } from "./displayError";

const getWeatherData = async (city) => {
	const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${api}`;

	const response = await fetch(apiUrl);
	return await response.json();

	// if (!response.ok) {
	// 	displayError("City cannot be found.");
	// 	return;
	// }
	// console.log(response);
};

export { getWeatherData };
