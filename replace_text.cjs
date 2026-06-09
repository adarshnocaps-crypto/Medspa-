const fs = require('fs');
const path = require('path');

const directory = './src';
const replacements = [
  { search: /Relax Spa & Wellness/g, replace: 'Relaxo MedSpa' },
  { search: /Relax Spa Studio/g, replace: 'Relaxo MedSpa' },
  { search: /Relax Spa/g, replace: 'Relaxo MedSpa' },
  { search: /Serava Spa & Wellness/g, replace: 'Relaxo MedSpa' },
  { search: /Serava Spa/g, replace: 'Relaxo MedSpa' },
  { search: /seravaspa\.com/g, replace: 'relaxomedspa.com' },
  { search: /relaxspa\.com/g, replace: 'relaxomedspa.com' },
  { search: /booking@relax.com/g, replace: 'booking@relaxomedspa.com' },
  { search: /Relax/g, replace: 'Relaxo' },
  { search: /Relaxoo/g, replace: 'Relaxo' }, // Fix if we accidentally made Relaxo -> Relaxoo
  { search: /Spa/g, replace: 'MedSpa' },
  { search: /MedMedSpa/g, replace: 'MedSpa' } // Fix if we made MedSpa from MedSpa
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath));
    } else if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walkDir(directory);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Custom manual replacements for specific lines to avoid breaking code like `import` statements or css classes
  const customReplacements = [
    { s: 'Relax Spa & Wellness', r: 'Relaxo MedSpa' },
    { s: 'Serava Spa & Wellness', r: 'Relaxo MedSpa' },
    { s: 'Serava Spa', r: 'Relaxo MedSpa' },
    { s: 'Relax Spa', r: 'Relaxo MedSpa' },
    { s: 'booking@relax.com', r: 'booking@relaxomedspa.com' },
    { s: 'booking@relaxspa.com', r: 'booking@relaxomedspa.com' },
    { s: 'support@relaxspa.com', r: 'support@relaxomedspa.com' },
    { s: 'booking@seravaspa.com', r: 'booking@relaxomedspa.com' },
    { s: 'support@seravaspa.com', r: 'support@relaxomedspa.com' },
    { s: 'Relax Studio', r: 'Relaxo MedSpa' },
    { s: 'Relax', r: 'Relaxo' },
    // Only replace visible text 'Spa' with 'MedSpa', avoid classNames like 'spa-room'
    { s: ' Spa ', r: ' MedSpa ' },
    { s: ' Spa.', r: ' MedSpa.' },
    { s: ' Spa,', r: ' MedSpa,' }
  ];

  let newContent = content;
  customReplacements.forEach(({s, r}) => {
    if (newContent.includes(s)) {
      newContent = newContent.split(s).join(r);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});
