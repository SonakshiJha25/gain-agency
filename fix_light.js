const fs = require('fs');
['./app/about/AboutCTA.tsx', './app/case-studies/CaseStudiesCTA.tsx', './app/about/AboutStory.tsx'].forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/gain-watermark-dark\.svg/g, 'gain-watermark-light.svg');
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log('Updated to light in', filePath);
    }
});
