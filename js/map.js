export default Map = () => {
	const map = L.map('map', {
		center: [51.505, -0.09],
		zoom: 13,
	});

	map.setView([51.505, -0.09], 13);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution:
			'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
	}).addTo(map);
	console.log('---Initializing Map');
};
