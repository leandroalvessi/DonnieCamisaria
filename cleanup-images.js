const fs = require('fs');
const path = require('path');

const dirs = [
    path.join(__dirname, 'images'),
    path.join(__dirname, 'assets')
];

async function cleanupDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            await cleanupDirectory(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                fs.unlinkSync(fullPath);
                console.log(`Deleted: ${fullPath}`);
            }
        }
    }
}

dirs.forEach(dir => cleanupDirectory(dir));
console.log("Cleanup complete!");
