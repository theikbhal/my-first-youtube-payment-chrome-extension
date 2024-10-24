const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

// Input and output paths
const inputIconPath = path.join(__dirname, 'icons/icon128.png');
const outputDir = path.join(__dirname, 'icons');

// Ensure output directory exists
fs.ensureDirSync(outputDir);

// Resize the icon and save to the specified sizes
const resizeIcon = async (size) => {
  const outputFilePath = path.join(outputDir, `icon${size}.png`);
  try {
    await sharp(inputIconPath)
      .resize(size, size)
      .toFile(outputFilePath);
    console.log(`Icon resized to ${size}x${size} and saved at ${outputFilePath}`);
  } catch (error) {
    console.error(`Error resizing icon to ${size}x${size}:`, error);
  }
};

// Resize for different sizes
const generateIcons = async () => {
  await resizeIcon(16);
  await resizeIcon(48);
};

// Run the function to generate icons
generateIcons();
