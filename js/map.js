const zoom = 16;
const minZoom = 0;
const maxZoom = 16;

const Esri_WorldGrayCanvas = L.tileLayer(
	'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
	{
		attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
		subdomains: 'abcd',
		minZoom,
		maxZoom,
		ext: 'png',
	}
);

export const setWH = function () {
	const map = document.querySelector('[data-map]');
	if (!map) return;

	console.log(map);

	map.style.width = window.innerWidth + 'px';
	map.style.height = window.innerHeight + 'px';

	window.addEventListener('resize', () => {
		map.style.width = window.innerWidth + 'px';
		map.style.height = window.innerHeight + 'px';
	});
};

/**
 * Map - renders map to dom
 * https://leafletjs.com/reference.html
 * @return {object} return map object
 */
export const Map = function ({ latitude, longitude }) {
	const map = L.map('map', {
		center: [latitude, longitude],
		zoom,
		minZoom,
		maxZoom,
		scrollWheelZoom: false,
		touchZoom: false,
		zoomControl: false,
		boxZoom: false,
		trackResize: false,
		doubleClickZoom: false,
		dragging: false,
		attributionControl: false,
	});

	L.tileLayer.provider('Esri.WorldGrayCanvas').addTo(map);

	console.log('---Map Intialized');
	return map;
};
