import { getLocation } from './user.js';
import { Map } from './Map.js';
import { Markers } from './markers.js';

window.onload = async function () {
	console.log('---Initializing Javascript');
	const location = await getLocation();

	if (!location || (location && !location.coords)) return;
	console.log('---User Location');

	const map = Map(location.coords);
	const markers = Markers(map);
	console.log('---Javascript Loaded');
};
