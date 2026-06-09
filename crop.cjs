const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'logo.png');
const outputPath = path.join(__dirname, 'public', 'logo_cropped.png');

sharp(inputPath)
  .trim() // Automatically trims whitespace/transparent pixels
  .toFile(outputPath)
  .then(info => {
    console.log('Cropped successfully!', info);
    // Replace original
    const fs = require('fs');
    fs.renameSync(outputPath, inputPath);
  })
  .catch(err => {
    console.error('Error cropping:', err);
  });
