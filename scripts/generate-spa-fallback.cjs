const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', '.output', 'public');
const indexPath = path.join(publicDir, 'index.html');

// Find the exact JS and CSS file names Vite just created
const assetsDir = path.join(publicDir, 'assets');
let jsFile = '';
let cssFile = '';

try {
  const files = fs.readdirSync(assetsDir);
  jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js') && !f.includes('server')) || '';
  cssFile = files.find(f => f.endsWith('.css')) || '';
} catch (e) {
  console.error('Could not read assets directory');
  process.exit(1);
}

if (!jsFile) {
  console.error('Could not find client JS file.');
  process.exit(1);
}

// Generate a perfect React SPA index.html
const htmlContent = `<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ''}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsFile}"></script>
  </body>
</html>`;

fs.writeFileSync(indexPath, htmlContent, 'utf8');
console.log('✔ Successfully generated index.html for cPanel!');