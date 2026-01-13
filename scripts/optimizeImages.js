const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Image optimization settings
const QUALITY = {
  jpg: 85,
  png: 85,
  webp: 80,
};

// Maximum dimensions for different image types
const MAX_DIMENSIONS = {
  hero: { width: 1200, height: 800 },
  product: { width: 800, height: 600 },
  diagram: { width: 1000, height: 1000 },
  team: { width: 1200, height: 800 },
  logo: { width: 300, height: 300 },
};

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  try {
    const ext = path.extname(filename).toLowerCase();
    const baseName = path.basename(filename, ext);
    const outputBase = path.join(OUTPUT_DIR, baseName);

    // Determine max dimensions based on filename
    let maxDimensions = MAX_DIMENSIONS.product; // default
    if (filename.includes('hero')) maxDimensions = MAX_DIMENSIONS.hero;
    else if (filename.includes('team')) maxDimensions = MAX_DIMENSIONS.team;
    else if (filename.includes('filtration') || filename.includes('diagram')) maxDimensions = MAX_DIMENSIONS.diagram;
    else if (filename.includes('logo')) maxDimensions = MAX_DIMENSIONS.logo;

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`\n📸 Processing: ${filename}`);
    console.log(`   Original: ${(fs.statSync(inputPath).size / 1024).toFixed(2)} KB (${metadata.width}x${metadata.height})`);

    // Resize if image is larger than max dimensions
    let processedImage = image;
    if (metadata.width > maxDimensions.width || metadata.height > maxDimensions.height) {
      processedImage = image.resize(maxDimensions.width, maxDimensions.height, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Generate WebP version
    const webpPath = `${outputBase}.webp`;
    await processedImage
      .clone()
      .webp({ quality: QUALITY.webp })
      .toFile(webpPath);
    
    const webpSize = (fs.statSync(webpPath).size / 1024).toFixed(2);
    console.log(`   ✅ WebP: ${webpSize} KB`);

    // Generate optimized original format
    if (ext === '.jpg' || ext === '.jpeg') {
      const jpgPath = `${outputBase}.jpg`;
      await processedImage
        .clone()
        .jpeg({ quality: QUALITY.jpg, progressive: true })
        .toFile(jpgPath);
      
      const jpgSize = (fs.statSync(jpgPath).size / 1024).toFixed(2);
      console.log(`   ✅ JPG: ${jpgSize} KB`);
    } else if (ext === '.png') {
      const pngPath = `${outputBase}.png`;
      await processedImage
        .clone()
        .png({ quality: QUALITY.png, compressionLevel: 9 })
        .toFile(pngPath);
      
      const pngSize = (fs.statSync(pngPath).size / 1024).toFixed(2);
      console.log(`   ✅ PNG: ${pngSize} KB`);
    }

  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error.message);
  }
}

async function processAllImages() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📁 Input: ${INPUT_DIR}`);
  console.log(`📁 Output: ${OUTPUT_DIR}\n`);

  const files = fs.readdirSync(INPUT_DIR);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    await optimizeImage(inputPath, file);
  }

  console.log('\n✨ Image optimization complete!\n');
}

processAllImages().catch(console.error);
