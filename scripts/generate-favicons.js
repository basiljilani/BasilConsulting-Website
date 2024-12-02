import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicons() {
  const sizes = [16, 32, 192, 512];
  const inputSvg = join(__dirname, '../public/favicon/favicon.svg');
  
  for (const size of sizes) {
    const outputName = size === 16 || size === 32 
      ? `favicon-${size}x${size}.png`
      : `android-chrome-${size}x${size}.png`;
    
    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(join(__dirname, '../public/favicon/', outputName));
  }
  
  // Generate Apple Touch Icon
  await sharp(inputSvg)
    .resize(180, 180)
    .png()
    .toFile(join(__dirname, '../public/favicon/apple-touch-icon.png'));
}

generateFavicons().catch(console.error);
