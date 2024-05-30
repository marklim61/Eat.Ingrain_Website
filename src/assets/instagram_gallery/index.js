// src/assets/instagram_gallery/index.js

const importAll = (r) => r.keys().map(r);

// Adjust the path to './' if the images are in the same directory as index.js
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default images;
