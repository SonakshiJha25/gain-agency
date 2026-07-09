const fs = require('fs');
let svg = fs.readFileSync('public/gain-watermark.svg', 'utf8');

svg = svg.replace('   stroke="#000000" stroke-width="2" fill-rule="evenodd"', ' fill-rule="evenodd"');

fs.writeFileSync('public/gain-watermark.svg', svg);
console.log("Fixed duplicate attributes!");
