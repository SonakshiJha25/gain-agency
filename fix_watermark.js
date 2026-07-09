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
            /<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none (?:z-0 )?overflow-hidden">[\s\S]*?<\/h1>\s*<\/div>/g,
            `<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img
          src="/gain-watermark.svg"
          alt=""
          className="w-[90%] md:w-[70%] h-auto opacity-[0.05] select-none"
          aria-hidden="true"
        />
      </div>`
        );
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent);
            console.log('Updated watermark in', filePath);
        }
    }
});
