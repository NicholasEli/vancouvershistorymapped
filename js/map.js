export default Map = () => {
	const map = L.map('map', {
		center: [45.6325949, -122.666855],
		zoom: 15,
	});

	const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		maxZoom: 20,
		subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
	});
	googleStreets.addTo(map);

	// Satelite Layer
	const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
		maxZoom: 20,
		subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
	});
	googleSat.addTo(map);

	const baseLayers = {
		Satellite: googleSat,
		'Google Map': googleStreets,
		//'Water Color': Stamen_Watercolor,
		//OpenStreetMap: osm,
	};

	L.control.layers(baseLayers).addTo(map);

	console.log('---Initializing Map');
};
