import { Locations } from './locations.js';
import { asyncTimeout, distanceBetweenPoints } from './utils.js';

let swiper = null;

const viewerUI = function (location) {
	const mediaContainer = document.querySelector('[data-viewer-media]');
	if (!mediaContainer) return;

	location.photos.forEach((photo) => {
		const container = document.createElement('div');
		container.classList.add('viewer__media-item', 'swiper-slide');

		const img = document.createElement('img');
		img.src = `assets/latlng-photos/${photo.id}.${photo.extension}`;

		const info = document.createElement('div');

		const title = document.createElement('h4');
		title.innerText = location.title;

		const year = document.createElement('p');
		if (location.year) year.innerText = location.year;

		info.appendChild(title);
		info.appendChild(year);

		container.appendChild(img);
		container.appendChild(info);

		mediaContainer.appendChild(container);
	});
};

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

	swiper = new Swiper('.swiper', {
		direction: 'vertical',
		loop: true,
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});

	if (locations && locations.length) {
		locations.forEach((location) => {
			viewerUI(location);
		});
	}
};
