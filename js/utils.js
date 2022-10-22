export const asyncTimeout = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
