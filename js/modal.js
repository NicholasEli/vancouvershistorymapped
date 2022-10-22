import { Locations } from './locations.js';

export const Modal = function (marker) {
	if (!marker) return;

	const { latlng } = marker;
	const location = Locations[`${latlng.lat},${latlng.lng}`];
	console.log(location);
};
