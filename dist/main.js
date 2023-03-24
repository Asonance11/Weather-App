/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('Hello World');
const KEY = '4087d6a91edc4919989144657232303';

async function getWeather(value) {
	const response = await fetch(
		`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${value}&aqi=no`,
		{ mode: 'cors' }
	);

	const placeData = await response.json();

	console.log(placeData);
}

const searchInput = document.querySelector('#search-input');
const form = document.querySelector('#searchForm');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	getWeather(searchInput.value);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsSUFBSSxLQUFLLE1BQU07QUFDbEUsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZCcpO1xyXG5jb25zdCBLRVkgPSAnNDA4N2Q2YTkxZWRjNDkxOTk4OTE0NDY1NzIzMjMwMyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHZhbHVlKSB7XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuXHRcdGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtLRVl9JnE9JHt2YWx1ZX0mYXFpPW5vYCxcclxuXHRcdHsgbW9kZTogJ2NvcnMnIH1cclxuXHQpO1xyXG5cclxuXHRjb25zdCBwbGFjZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdGNvbnNvbGUubG9nKHBsYWNlRGF0YSk7XHJcbn1cclxuXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pbnB1dCcpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEZvcm0nKTtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0Z2V0V2VhdGhlcihzZWFyY2hJbnB1dC52YWx1ZSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=