/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsSUFBSTtBQUN2RCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnSGVsbG8gV29ybGQnKTtcclxuY29uc3QgS0VZID0gJzQwODdkNmE5MWVkYzQ5MTk5ODkxNDQ2NTcyMzIzMDMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcclxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG5cdFx0YGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0tFWX0mcT1Mb25kb24mYXFpPW5vYCxcclxuXHRcdHsgbW9kZTogJ2NvcnMnIH1cclxuXHQpO1xyXG5cclxuXHRjb25zdCBwbGFjZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdGNvbnNvbGUubG9nKHBsYWNlRGF0YSk7XHJcbn1cclxuZ2V0V2VhdGhlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=