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
		minZoom: 0,
		maxZoom: 18,
		ext: 'png',
	}
);

export const Map = () => {
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

	L.tileLayer.provider('Stamen.Terrain').addTo(map);
	/**
	 * Adds Google Maps Theme
	const baseLayers = {
		Satellite: googleSat,
		'Google Map': googleStreets,
		//'Water Color': Stamen_Watercolor,
		//OpenStreetMap: osm,
	};
	L.control.layers(baseLayers).addTo(map);
	*/

	console.log('---Map Intialized');
	return map;
};
