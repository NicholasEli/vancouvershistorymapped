import { getLocation } from './user.js';
import { Map } from './Map.js';
import { Markers } from './markers.js';
import { closeModal } from './modal.js';
import { viewer } from './viewer.js';

window.onload = async function () {
	console.log('---Initializing Javascript');
	const resize = () => {
		const header = document.querySelector('header');
		const canvas = document.querySelector('[data-map]');
		canvas.style.width = window.innerWidth + 'px';
		canvas.style.height = window.innerHeight - header.innerHeight + 'px';
		document.body.style.width = window.innerWidth + 'px';
		document.body.style.height = window.innerHeight + 'px';
	};

	resize();

	const location = await getLocation();

	let coords = location.coords;
	if (!location || (location && !location.coords)) {
		coords = { latitude: 45.625801, longitude: -122.671646 };
	}
	console.log('---User Location');

	viewer(coords);

	closeModal();
	let map = Map(coords);
	let markers = Markers(map);

	window.addEventListener('resize', () => {
		map.remove();
		resize();
		map = Map(location.coords);
		markers = Markers(map);
	});

	console.log('---Javascript Loaded');
};
