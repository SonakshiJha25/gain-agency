const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('./app', function(filePath) {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        let newContent = content.replace(
            /<img\s+src="\/gain-watermark\.svg"\s+alt=""\s+className="w-\[90%\] md:w-\[70%\] h-auto opacity-\[0\.05\] select-none"\s+aria-hidden="true"\s*\/>/g,
            `<img src="/gain-watermark-dark.svg" alt="" className="w-[90%] md:w-[70%] h-auto opacity-[0.08] select-none" aria-hidden="true" />`
        );
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent);
            console.log('Updated to dark in', filePath);
        }
    }
});
