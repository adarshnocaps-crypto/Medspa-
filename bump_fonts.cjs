const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, 'src', 'styles');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Bump font weights up
      content = content.replace(/font-weight:\s*300/g, 'font-weight: 500');
      content = content.replace(/font-weight:\s*400/g, 'font-weight: 600');
      content = content.replace(/font-weight:\s*500/g, 'font-weight: 600');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${file}`);
    }
  }
}

processDir(cssDir);
