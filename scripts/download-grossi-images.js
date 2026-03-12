const fs = require('fs');
const path = require('path');

// Using thumb URLs which are more reliably accessible
const images = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Rafael_Mariano_Grossi_%2800110002%29_%2851192184415%29.jpg/800px-Rafael_Mariano_Grossi_%2800110002%29_%2851192184415%29.jpg',
    filename: 'formal-portrait.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Rafael_Mariano_Grossi_%2801012654%29_%2850999752508%29.jpg/800px-Rafael_Mariano_Grossi_%2801012654%29_%2850999752508%29.jpg',
    filename: 'zoom-portrait.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/DG_Interview_%2801119848%29_%2850370421978%29.jpg/800px-DG_Interview_%2801119848%29_%2850370421978%29.jpg',
    filename: 'interview-1.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/DG_Interview_%2801119849%29_%2850371284037%29.jpg/800px-DG_Interview_%2801119849%29_%2850371284037%29.jpg',
    filename: 'interview-2.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/DG%27s_Press_conference_on_Iran_%2803411554%29_%2851198930802%29.jpg/800px-DG%27s_Press_conference_on_Iran_%2803411554%29_%2851198930802%29.jpg',
    filename: 'press-conference-1.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/DG%27s_Press_conference_on_Iran_%2803411560%29_%2851198930377%29.jpg/800px-DG%27s_Press_conference_on_Iran_%2803411560%29_%2851198930377%29.jpg',
    filename: 'press-conference-2.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/DG%27s_Reception_2019_%2801313393%29_%2839963811963%29.jpg/800px-DG%27s_Reception_2019_%2801313393%29_%2839963811963%29.jpg',
    filename: 'reception-2019.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/DG%27s_Reception_2020_%2801313756%29_%2849467835397%29.jpg/800px-DG%27s_Reception_2020_%2801313756%29_%2849467835397%29.jpg',
    filename: 'reception-2020.jpg'
  }
];

const outputDir = path.join(process.cwd(), 'public', 'images', 'grossi-real');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadImage(url, filename) {
  const filePath = path.join(outputDir, filename);
  
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to download ' + filename + ': ' + response.status);
  }
  
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(filePath, buffer);
  console.log('Downloaded: ' + filename);
}

async function downloadAll() {
  console.log('Starting download of Rafael Grossi images from Wikimedia Commons...');
  console.log('Output directory: ' + outputDir);
  
  // Add delay between downloads to avoid rate limiting
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
      // Wait 2 seconds between downloads
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error downloading ' + image.filename + ':', error.message);
    }
  }
  
  console.log('Download complete!');
}

downloadAll();
