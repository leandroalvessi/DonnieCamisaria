const fs = require('fs');
const path = require('path');

const filesToUpdate = ['index.html', 'style.css', 'app.js'];

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        // Replace .jpg, .jpeg, .png with .webp (case insensitive)
        const updatedContent = content.replace(/\.(jpg|jpeg|png)/gi, '.webp');
        if (content !== updatedContent) {
            fs.writeFileSync(fullPath, updatedContent, 'utf8');
            console.log(`Updated references in ${file}`);
        } else {
            console.log(`No references to update in ${file}`);
        }
    }
});
