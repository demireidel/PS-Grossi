import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Rafael_Mariano_Grossi_%2800110002%29_%2851192184415%29.jpg/800px-Rafael_Mariano_Grossi_%2800110002%29_%2851192184415%29.jpg',
    filename: 'grossi-hero.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/DG%27s_Press_conference_on_Iran_%2803411554%29_%2851198930802%29.jpg/1200px-DG%27s_Press_conference_on_Iran_%2803411554%29_%2851198930802%29.jpg',
    filename: 'transparency-governance.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/DG_Interview_%2801119848%29_%2850370421978%29.jpg/1200px-DG_Interview_%2801119848%29_%2850370421978%29.jpg',
    filename: 'crisis-diplomacy.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/DG%27s_Reception_2019_%2801313393%29_%2839963811963%29.jpg/1200px-DG%27s_Reception_2019_%2801313393%29_%2839963811963%29.jpg',
    filename: 'global-engagement.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Rafael_Mariano_Grossi_%2801012654%29_%2850999752508%29.jpg/800px-Rafael_Mariano_Grossi_%2801012654%29_%2850999752508%29.jpg',
    filename: 'humanitarian-delivery.jpg'
  }
];

const outputDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(outputDir, filename);
    const file = fs.createWriteStream(filePath);
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    };
    
    https.get(url, options, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, options, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${filename}`);
            resolve();
          });
        }).on('error', reject);
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.log(`Failed ${filename}: HTTP ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  console.log('Starting downloads...');
  for (const img of images) {
    try {
      await downloadImage(img.url, img.filename);
    } catch (err) {
      console.log(`Error downloading ${img.filename}: ${err.message}`);
    }
  }
  console.log('Done!');
}

main();
