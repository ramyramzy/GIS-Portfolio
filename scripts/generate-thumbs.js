const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(process.cwd(), 'public', 'projects');
const thumbsDir = path.join(inputDir, 'thumbs');

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function generateThumbs() {
  await ensureDir(thumbsDir);

  const files = fs.readdirSync(inputDir);
  const images = files.filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

  for (const file of images) {
    const inputPath = path.join(inputDir, file);
    const name = path.parse(file).name;
    const outPath = path.join(thumbsDir, `${name}-thumb.jpg`);

    try {
      await sharp(inputPath)
        .resize({ width: 400 })
        .jpeg({ quality: 70 })
        .toFile(outPath);
      console.log('Created', outPath);
    } catch (err) {
      console.error('Failed', inputPath, err.message);
    }
  }
}

generateThumbs().catch((err) => {
  console.error(err);
  process.exit(1);
});
