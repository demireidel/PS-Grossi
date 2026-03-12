import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/54/DG_Interview_%2801119848%29_%2850370421978%29.jpg',
    filename: 'interview-1.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/DG_Interview_%2801119849%29_%2850371284037%29.jpg',
    filename: 'interview-2.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/DG%27s_Press_conference_on_Iran_%2803411554%29_%2851198930802%29.jpg',
    filename: 'press-conference-1.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/DG%27s_Press_conference_on_Iran_%2803411560%29_%2851198930377%29.jpg',
    filename: 'press-conference-2.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/DG%27s_Press_conference_on_Iran_%2803411563%29_%2851199852218%29.jpg',
    filename: 'press-conference-3.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/DG%27s_Reception_2019_%2801313393%29_%2839963811963%29.jpg',
    filename: 'reception-2019.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/DG%27s_Reception_2020_%2801313756%29_%2849467835397%29.jpg',
    filename: 'reception-2020.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/DG%27s_Meeting_with_Edwards_%26_Sandy_Taylor_%2801012514%29_%2850911507216%29.jpg',
    filename: 'meeting-taylor.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Rafael_Mariano_Grossi_%2801012654%29_%2850999752508%29.jpg',
    filename: 'zoom-portrait.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Rafael_Mariano_Grossi_%2800110002%29_%2851192184415%29.jpg',
    filename: 'formal-portrait.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/IAEA_Director_General_Rafael_Grossi_awards_scientists_and_teams_on_their_outstanding_achievement_in_plant_mutation_breeding_and_associated_biotechnologies_%28011111643%29_%2851549421293%29.jpg',
    filename: 'awards-scientists.jpg'
  }
];

const outputDir = path.join(process.cwd(), 'public', 'images', 'grossi-real');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(outputDir, filename);
    const file = fs.createWriteStream(filePath);
    
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; v0-bot/1.0)'
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    });
    
    request.on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting download of Rafael Grossi images from Wikimedia Commons...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('\nDownload complete!');
}

downloadAll();
