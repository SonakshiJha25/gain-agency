const points = [
    {x: 200, y: 678},
    {x: 280, y: 611},
    {x: 400, y: 551},
    {x: 600, y: 481},
    {x: 800, y: 403},
    {x: 920, y: 325},
    {x: 1000, y: 230},
    {x: 1080, y: 94}
];

const x0 = 200;
const y0 = 678;
const x3 = 1080;
const y3 = 94;

let bestErrVal = Infinity;
let bestCx1 = 0, bestCy1 = 0, bestCx2 = 0, bestCy2 = 0;

for (let cx1 = 200; cx1 <= 700; cx1 += 5) {
    for (let cy1 = 400; cy1 <= 800; cy1 += 5) {
        for (let cx2 = 500; cx2 <= 1100; cx2 += 10) {
            for (let cy2 = 100; cy2 <= 600; cy2 += 10) {
                let errVal = 0;
                
                for (const pt of points) {
                    const targetX = pt.x;
                    const targetY = pt.y;
                    
                    // Approximate t
                    const t = (targetX - x0) / (x3 - x0);
                    const mt = 1 - t;
                    
                    const bezierX = (mt * mt * mt * x0) + (3 * mt * mt * t * cx1) + (3 * mt * t * t * cx2) + (t * t * t * x3);
                    const bezierY = (mt * mt * mt * y0) + (3 * mt * mt * t * cy1) + (3 * mt * t * t * cy2) + (t * t * t * y3);
                    
                    const dx = bezierX - targetX;
                    const dy = bezierY - targetY;
                    errVal += (dx * dx) + (dy * dy);
                }
                
                if (errVal < bestErrVal) {
                    bestErrVal = errVal;
                    bestCx1 = cx1;
                    bestCy1 = cy1;
                    bestCx2 = cx2;
                    bestCy2 = cy2;
                }
            }
        }
    }
}

console.log("Best Error:", bestErrVal);
console.log(`Path: M ${x0} ${y0} C ${bestCx1} ${bestCy1}, ${bestCx2} ${bestCy2}, ${x3} ${y3}`);
