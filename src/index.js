console.log('Hello World');
const KEY = '4087d6a91edc4919989144657232303';

async function getWeather() {
	const response = await fetch(
		`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=London&aqi=no`,
		{ mode: 'cors' }
	);

	const placeData = await response.json();

	console.log(placeData);
}
getWeather();
