const fs = require('fs').promises;
const path = require('path');

async function createDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function writeFile(filePath, content) {
  await fs.writeFile(filePath, content, 'utf8');
}

module.exports = { createDir, writeFile };