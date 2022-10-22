import { Locations } from './locations.js';

const state = {
	active: false,
	location: null,
	set setActive(active = false) {
		this.active = active;
		modalActive(active);
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

	const { title, photos } = location;
	header.innerText = title;

	scroll.innerHTML = '';
	photos.forEach((photo) => {
		const item = document.createElement('div');
		item.classList.add('modal__scroll-item');

		const image = document.createElement('img');
		image.src = `assets/latlng-photos/${photo.id}.${photo.extension}`;
		image.alt = photo.title;

		item.appendChild(image);

		scroll.appendChild(item);
	});
};

const modalActive = function (active) {
	const modal = document.querySelector('[data-modal]');
	if (!modal) return;

	if (active) {
		//modal.classList.add('');
		return;
	}
};

export const Modal = function (marker) {
	if (!marker) return;

	const { latlng } = marker;
	state.setLocation = latlng;
	state.setActive = true;
};
