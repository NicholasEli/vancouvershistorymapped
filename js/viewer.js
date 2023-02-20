import { Locations } from './locations.js';
import { asyncTimeout, distanceBetweenPoints } from './utils.js';

const viewerUI = function (location) {};

const getNerbyLocations = function (coords) {
	let locations = [];

	for (let location in Locations) {
		const l = Locations[location];
		const distance = distanceBetweenPoints(
			{ lat1: l.lat, lng1: l.lng },
			{ lat2: coords.latitude, lng2: coords.longitude },
			true
		);

		if (distance <= 1) {
			locations.push(l);
		}
	}

	return locations;
};

export const viewer = function (coords) {
	if (!coords) return;
	const locations = getNerbyLocations(coords);

	if (locations && locations.length) {
		locations.forEach((location) => {
			viewerUI(location);
		});
	}
};
