import { Locations } from './locations.js';
import { asyncTimeout } from './utils.js';

const state = {
	active: false,
	location: null,
	set setActive(active = false) {
		this.active = active;
		modalUI(active);
	},
	set setLocation(latlng = null) {
		if (latlng) {
			const location = Locations[`${latlng.lat},${latlng.lng}`];
			this.location = location;
			scrollUI(location);
			return;
		}

		this.location = null;
	},
};

const scrollUI = function (location) {
	if (!location) return;

	const scroll = document.querySelector('[data-scroll]');
	if (!scroll) return;

	const header = document.querySelector('[data-header="modal-title"]');
	if (!header) return;

	const { year, title, photos } = location;

	if (year) {
		header.innerText = year + ' - ' + title;
	} else {
		header.innerText = title;
	}

	scroll.innerHTML = '';
	photos.forEach((photo) => {
		const item = document.createElement('div');
		item.classList.add('modal__scroll-item');

		const image = document.createElement('img');
		image.src = `assets/latlng-photos/${photo.id}.${photo.extension}`;
		image.alt = photo.title;

		item.appendChild(image);

		const h6 = document.createElement('h6');
		h6.innerText = photo.title;

		item.appendChild(h6);

		scroll.appendChild(item);
	});
};

const modalUI = async function (active) {
	const modal = document.querySelector('[data-modal]');
	if (!modal) return;

	if (active) {
		modal.classList.add('modal--active');
		return;
	}

	modal.classList.remove('modal--active');
};

export const closeModal = function () {
	const btn = document.querySelector('[data-btn="modal-close"]');
	if (!btn) return;
	btn.addEventListener('click', () => {
		state.setActive = false;
	});
};

export const Modal = function (marker) {
	if (!marker) return;

	const { latlng } = marker;
	state.setLocation = latlng;
	state.setActive = true;
};
