export const getLocation = async function () {
	return new Promise((resolve, reject) => {
		if (!navigator.geolocation) reject({ error: 'This browser does not support geo location.' });
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};
