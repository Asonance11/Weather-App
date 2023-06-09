function display(data) {
	const cityName = document.querySelector('.city');
	const countryName = document.querySelector('.country');
	const temperature = document.querySelector('.temperature');
	const condition = document.querySelector('.condition');
	const icon = document.querySelector('#icon');

	cityName.textContent = `${data.location.name}`;
	countryName.textContent = `${data.location.country}`;
	temperature.textContent = `${data.current.temp_c}°C`;
	condition.textContent = `${data.current.condition.text}`;
	icon.src = `http:${data.current.condition.icon}`;
}

export default display;
