// This script fixes vite permission issues on Linux, but does nothing on Windows
const { exec } = require('child_process');
if (process.platform !== 'win32') {
  exec('chmod +x node_modules/.bin/vite', (err) => {
    if (err) {
      // Not fatal, just log
      console.error('Could not chmod vite:', err);
    }
  });
}