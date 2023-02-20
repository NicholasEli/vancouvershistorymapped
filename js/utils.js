export const asyncTimeout = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const haversineDistance = function (coords1, coords2, isMiles) {
  function toRad(x) {
    return (x * Math.PI) / 180;
  }

  const { lat1, lng1 } = coords1;
  const { lat2, lng2 } = coords2;

  let R = 6371; // km

  let x1 = lat2 - lat1;
  let dLat = toRad(x1);
  let x2 = lng2 - lng1;
  let dLon = toRad(x2);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;

  if (isMiles) d /= 1.60934;

  return d;
};
