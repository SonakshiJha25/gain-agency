const fs = require('fs');
let svg = fs.readFileSync('public/gain-watermark.svg', 'utf8');

svg = svg.replace('width="218" height="98" ', '');
svg = svg.replace(/stroke="#000000"/g, 'stroke="rgba(0, 0, 0, 0.4)"');

fs.writeFileSync('public/gain-watermark.svg', svg);
console.log("Removed fixed dimensions from SVG and updated stroke opacity!");
