// fix-vite-permissions.js
const { exec } = require('child_process');
if (process.platform !== 'win32') {
  exec('chmod +x node_modules/.bin/vite', (err) => {
    if (err) {
      // Not fatal, just log
      console.error('Could not chmod vite:', err);
    }
  });
}