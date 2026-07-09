const fs = require('fs');
let svg = fs.readFileSync('public/gain-watermark.svg', 'utf8');

// Fix invalid duplicate stroke/fill attributes
svg = svg.replace(/stroke="none"/g, '');
svg = svg.replace(/fill="none"/g, ''); // we will add it manually
svg = svg.replace(/<path /g, '<path fill="none" stroke="#000000" stroke-width="1.5" ');

fs.writeFileSync('public/gain-watermark.svg', svg);
console.log("Fixed SVG attributes!");
