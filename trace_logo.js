const potrace = require('potrace');
const fs = require('fs');

const trace = new potrace.Potrace();

trace.setParameters({
    color: '#000000',
    background: 'transparent',
    optTolerance: 0.2,
    turdSize: 20
});

console.log("Tracing image...");
trace.loadImage('public/logos/GAIN_final_logo.png', (err) => {
    if (err) throw err;
    
    let svg = trace.getSVG();
    
    // Convert fills to strokes
    svg = svg.replace(/fill="#000000"/g, 'fill="none" stroke="#000000" stroke-width="2"');
    
    fs.writeFileSync('public/gain-watermark.svg', svg);
    console.log("Saved public/gain-watermark.svg!");
});
