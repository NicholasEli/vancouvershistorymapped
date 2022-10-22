import { getLocation } from './user.js';
import { Map, setWH } from './Map.js';
import { Markers } from './markers.js';
import { closeModal } from './modal.js';

window.onload = async function () {
	console.log('---Initializing Javascript');

	setWH();

	const location = await getLocation();

	if (!location || (location && !location.coords)) return;
	console.log('---User Location');

	closeModal();
	const map = Map(location.coords);
	const markers = Markers(map);
	console.log('---Javascript Loaded');
};
