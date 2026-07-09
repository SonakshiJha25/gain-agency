const fs = require('fs');

let svg = fs.readFileSync('public/gain-watermark.svg', 'utf8');

// Ensure no fixed dimensions
svg = svg.replace('width="218" height="98" ', '');
// Normalize stroke
svg = svg.replace(/stroke="[^"]*"/g, 'stroke="#000000"');
fs.writeFileSync('public/gain-watermark-dark.svg', svg);

let lightSvg = svg.replace(/stroke="#000000"/g, 'stroke="#ffffff"');
fs.writeFileSync('public/gain-watermark-light.svg', lightSvg);

console.log("Created dark and light SVGs!");
