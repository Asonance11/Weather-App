import { default as display } from './display';
import { default as getWeather } from './weather';

const form = document.querySelector('#searchForm');
const input = document.querySelector('#search-input');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	if (input.value == '') return;
	let weatherData = await getWeather(input.value);
	display(weatherData);
	form.reset();
});
