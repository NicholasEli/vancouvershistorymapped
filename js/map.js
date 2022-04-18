export default Map = () => {
	const map = L.map('map', {
		center: [45.6325949, -122.666855],
		zoom: 15,
	});

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution:
			'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
	}).addTo(map);
	console.log('---Initializing Map');
};
