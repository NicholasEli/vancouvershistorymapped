import { Locations } from './locations.js';
import { Modal } from './modal.js';

export const Markers = function (Map) {
	const markers = [];

	for (const location in Locations) {
		const { lat, lng } = Locations[location];
		const marker = L.marker([lat, lng]).addTo(Map).on('click', Modal);
		markers.push(marker);
	}

	return markers;
	console.log('---Markers Intialized');
};
