const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const AVATAR_INPUT = path.join(__dirname, "../public/creators/avatars");
const WORLD_INPUT = path.join(__dirname, "../public/creators/worlds");

async function optimizeFolder(inputDir, width) {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(
      inputDir,
      file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
    );

    try {
      await sharp(inputPath)
        .resize({ width })
        .webp({ quality: 82 })
        .toFile(outputPath);

      console.log(`✅ Optimized: ${file}`);
    } catch (err) {
      console.error(`❌ Failed: ${file}`, err.message);
    }
  }
}

async function run() {
  console.log("🚀 Optimizing avatars...");
  await optimizeFolder(AVATAR_INPUT, 400);

  console.log("🚀 Optimizing worlds...");
  await optimizeFolder(WORLD_INPUT, 1200);

  console.log("🎉 Done!");
}

run();