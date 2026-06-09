const https = require('https');
const fs = require('fs');

const fileContents = fs.readFileSync('./src/data/services.js', 'utf8') + fs.readFileSync('./src/data/blog.js', 'utf8');
const urls = fileContents.match(/https:\/\/images\.unsplash\.com\/[^\s"']+/g) || [];
const uniqueUrls = [...new Set(urls)];

console.log(`Found ${uniqueUrls.length} unique Unsplash URLs.`);

let completed = 0;
uniqueUrls.forEach(url => {
  https.get(url, (res) => {
    if (res.statusCode >= 400) {
      console.log(`BROKEN URL: ${res.statusCode} - ${url}`);
    }
    completed++;
    if (completed === uniqueUrls.length) console.log("Done checking.");
  }).on('error', (e) => {
    console.error(`ERROR fetching ${url}: ${e.message}`);
    completed++;
    if (completed === uniqueUrls.length) console.log("Done checking.");
  });
});
