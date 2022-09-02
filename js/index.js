import { Map } from './Map.js';
import { Markers } from './markers.js';

window.onload = function () {
	console.log('---Initializing Javascript');
	const map = Map();
	const markers = Markers(map);
	console.log('---Javascript Loaded');
};
