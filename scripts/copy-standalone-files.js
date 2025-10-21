import fs from 'fs';
import path from 'path';

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  fs.readdirSync(src).forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Copy static files
if (fs.existsSync('.next/static')) {
  copyDir('.next/static', '.next/standalone/.next/static');
  console.log('✓ Copied .next/static to .next/standalone/.next/static');
} else {
  console.log('⚠ .next/static directory not found');
}

// Copy public files
if (fs.existsSync('public')) {
  copyDir('public', '.next/standalone/public');
  console.log('✓ Copied public to .next/standalone/public');
} else {
  console.log('⚠ public directory not found');
}

console.log('✓ Standalone files copied successfully');
