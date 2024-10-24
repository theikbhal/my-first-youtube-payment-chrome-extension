const { createCanvas } = require('canvas');
const fs = require('fs-extra');
const path = require('path');

// Function to create icon
const createIcon = (size, text, filePath) => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background color
  ctx.fillStyle = '#00aaff'; // Blue background
  ctx.fillRect(0, 0, size, size);

  // Add dollar symbol ($)
  ctx.fillStyle = '#ffffff'; // White text color
  ctx.font = `${size / 2}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, size / 2, size / 2);

  // Write to file
  fs.ensureDirSync(path.dirname(filePath));
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);
  console.log(`Icon saved: ${filePath}`);
};

// Create icons
const sizes = [16, 48, 128];
const text = '$';
