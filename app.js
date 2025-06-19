const fs = require('fs')

fs.readFile('Proba_node.txt', 'utf8', (error, data) => {
    if (error) {
        console.log("Error reading this file", error);
        return;
    }
    console.log("file content: ", data)
});