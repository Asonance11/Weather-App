const KEY = '4087d6a91edc4919989144657232303';
async function getWeather(value) {
	try {
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${value}&aqi=no`,
			{ mode: 'cors' }
		);
		const placeData = await response.json();
		console.log(placeData);
	} catch (error) {
		alert(error);
	}
}
