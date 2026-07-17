const fs = require('fs');

function getBezierPoint(t, p0, p1, p2, p3) {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const mt3 = mt2 * mt;
  const t2 = t * t;
  const t3 = t2 * t;

  const x = mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x;
  const y = mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y;
  return { x, y };
}

function getBezierDerivative(t, p0, p1, p2, p3) {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const t2 = t * t;

  const dx = 3 * mt2 * (p1.x - p0.x) + 6 * mt * t * (p2.x - p1.x) + 3 * t2 * (p3.x - p2.x);
  const dy = 3 * mt2 * (p1.y - p0.y) + 6 * mt * t * (p2.y - p1.y) + 3 * t2 * (p3.y - p2.y);
  return { dx, dy };
}

function normalize(v) {
  const len = Math.sqrt(v.dx * v.dx + v.dy * v.dy);
  return { dx: v.dx / len, dy: v.dy / len };
}

const p0 = { x: 200, y: 678 };
const p1 = { x: 500, y: 500 };
const p2 = { x: 775, y: 500 };
const p3 = { x: 1080, y: 94 }; // End of the curve (base of arrowhead)

// Arrowhead parameters
const headLength = 90;
const headWidth = 90;

const numPoints = 100;
const minWidth = 2; // Tail thickness
const maxWidth = 26; // Neck thickness before arrowhead

let upperPoints = [];
let lowerPoints = [];

for (let i = 0; i <= numPoints; i++) {
  const t = i / numPoints;
  const pt = getBezierPoint(t, p0, p1, p2, p3);
  const d = getBezierDerivative(t, p0, p1, p2, p3);
  const norm = normalize(d);
  
  // Normal vector is (-dy, dx)
  const nx = -norm.dy;
  const ny = norm.dx;
  
  // Width interpolates from minWidth to maxWidth
  // We can use a power function so it stays thin longer and thickens at the end, or just linear.
  const w = minWidth + (maxWidth - minWidth) * Math.pow(t, 1.5);
  const halfW = w / 2;

  upperPoints.push({ x: pt.x + nx * halfW, y: pt.y + ny * halfW });
  lowerPoints.push({ x: pt.x - nx * halfW, y: pt.y - ny * halfW });
}

// Arrow head
// At t=1, the direction is norm.
const dEnd = getBezierDerivative(1, p0, p1, p2, p3);
const normEnd = normalize(dEnd);
const nxEnd = -normEnd.dy;
const nyEnd = normEnd.dx;

const baseCenter = getBezierPoint(1, p0, p1, p2, p3);

// Tip of the arrow
const tip = {
  x: baseCenter.x + normEnd.dx * headLength,
  y: baseCenter.y + normEnd.dy * headLength
};

// Left and right corners of the arrowhead base
const headLeft = {
  x: baseCenter.x + nxEnd * (headWidth / 2),
  y: baseCenter.y + nyEnd * (headWidth / 2)
};

const headRight = {
  x: baseCenter.x - nxEnd * (headWidth / 2),
  y: baseCenter.y - nyEnd * (headWidth / 2)
};

// Combine all points into a single filled path
let pathD = `M ${lowerPoints[0].x.toFixed(2)} ${lowerPoints[0].y.toFixed(2)}`;

// Bottom edge
for (let i = 1; i <= numPoints; i++) {
  pathD += ` L ${lowerPoints[i].x.toFixed(2)} ${lowerPoints[i].y.toFixed(2)}`;
}

// Arrowhead right corner, tip, left corner
pathD += ` L ${headRight.x.toFixed(2)} ${headRight.y.toFixed(2)}`;
pathD += ` L ${tip.x.toFixed(2)} ${tip.y.toFixed(2)}`;
pathD += ` L ${headLeft.x.toFixed(2)} ${headLeft.y.toFixed(2)}`;

// Top edge (going backwards)
for (let i = numPoints; i >= 0; i--) {
  pathD += ` L ${upperPoints[i].x.toFixed(2)} ${upperPoints[i].y.toFixed(2)}`;
}

pathD += ' Z';

console.log("GENERATED PATH:");
console.log(pathD);
