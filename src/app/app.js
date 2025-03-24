const generatePdf = require('../modules/PdfGenerator');
const HTMLGenerator = require('../modules/HtmlGenerator.js');
const {unlinkSync} = require("node:fs");

const generator = new HTMLGenerator('div', 'Hey, brother', { backgroundColor: 'lightblue', color: 'white' });

generator.saveToFile('output.html')
    .then(async () => {
        await generatePdf('output.html', '../../target/output.pdf');
    }).then(async () => {
        unlinkSync('output.html');
    }).catch((error) => {
        console.error('An error occurred:', error);
    });