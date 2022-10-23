import { getLocation } from './user.js';
import { Map } from './Map.js';
import { Markers } from './markers.js';
import { closeModal } from './modal.js';

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

	if (!location || (location && !location.coords)) return;
	console.log('---User Location');

	closeModal();
	let map = Map(location.coords);
	let markers = Markers(map);

	window.addEventListener('resize', () => {
		map.remove();
		resize();
		map = Map(location.coords);
		markers = Markers(map);
	});

	console.log('---Javascript Loaded');
};
