const fs = require('fs');

function replaceWatermark(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(
        /<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">[\s\S]*?<\/h1>\s*<\/div>/g,
        `<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <img src="/gain-watermark.svg" alt="" className="w-[90%] md:w-[70%] h-auto opacity-[0.05] select-none" aria-hidden="true" />
          </div>`
    );
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log('Updated', filePath);
    }
}

replaceWatermark('./app/about/AboutCTA.tsx');
replaceWatermark('./app/case-studies/CaseStudiesCTA.tsx');
