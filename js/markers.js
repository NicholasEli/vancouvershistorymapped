import { Locations } from './locations.js';

export const Markers = (Map) => {
	for (const location in Locations) {
		const { lat, lng } = Locations[location];
		L.marker([lat, lng]).addTo(Map);
	}
	console.log('---Markers Intialized');
};
