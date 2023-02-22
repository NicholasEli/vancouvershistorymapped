import { Locations } from './locations.js';
import { asyncTimeout, distanceBetweenPoints } from './utils.js';

let swiper = null;

const expand = function (event) {
	const shrinkBtn = document.querySelector('.btn__shrink');
	const mediaContainer = document.querySelector('[data-viewer-media]');
	mediaContainer.classList.remove('viewer__media--shrink');
	event.currentTarget.classList.remove('btn--active');
	shrinkBtn.classList.add('btn--active');
};

const shrink = function (event) {
	const expandBtn = document.querySelector('.btn__expand');
	const mediaContainer = document.querySelector('[data-viewer-media]');
	mediaContainer.classList.add('viewer__media--shrink');
	event.currentTarget.classList.remove('btn--active');
	expandBtn.classList.add('btn--active');
};

const viewerUI = function (location) {
	const mediaContainer = document.querySelector('[data-viewer-media]');

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

export const viewer = async function (coords) {
	const viewer = document.querySelector('[data-viewer]');
	const mediaContainer = document.querySelector('[data-viewer-media]');

	if (!coords || !mediaContainer) return;

	const locations = getNerbyLocations(coords);

	if (locations && locations.length) {
		mediaContainer.innerHTML = '';
		locations.forEach((location) => {
			viewerUI(location);
		});

		swiper = new Swiper('.swiper', {
			direction: 'vertical',
			loop: true,
			scrollbar: {
				el: '.swiper-scrollbar',
			},
		});

		viewer.classList.add('viewer--loaded');

		/*
		await asyncTimeout(1000);

		const swiperContainer = document.querySelector('.swiper');
		const swiperWrapper = document.querySelector('.swiper-wrapper');
		const styles = window.getComputedStyle(swiperWrapper);
		const init3D = styles.getPropertyValue('transform');
		const root = document.querySelector(':root');
		root.style.setProperty('--peak-init', init3D);
		swiperContainer.classList.add('swiper--peak');
		*/
	}

	window.expand = expand;
	window.shrink = shrink;
};
