const Stamen_TonerBackground = L.tileLayer(
	'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}',
	{
		attribution:
			'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: 'abcd',
		minZoom: 0,
		maxZoom: 20,
		ext: 'png',
	}
);

const Stamen_Terrain = L.tileLayer(
	'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}',
	{
		attribution:
			'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: 'abcd',
		minZoom: 17,
		maxZoom: 17,
		ext: 'png',
	}
);

/**
 * Map - renders map to dom
 * https://leafletjs.com/reference.html
 * @return {object} return map object
 */
export const Map = function ({ latitude, longitude }) {
	const map = L.map('map', {
		center: [latitude, longitude],
		zoom: 17,
		minZoom: 17,
		maxZoom: 17,
		scrollWheelZoom: false,
		touchZoom: false,
		zoomControl: false,
		boxZoom: false,
		trackResize: false,
		doubleClickZoom: false,
		dragging: false,
		attributionControl: false,
	});

	L.tileLayer.provider('Stamen.Terrain').addTo(map);

	console.log('---Map Intialized');
	return map;
};
