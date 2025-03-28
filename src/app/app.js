const generatePdf = require('../modules/PdfGenerator');
const {unlinkSync, existsSync} = require("node:fs");

/**
 * Here set your model
 * @type {HTMLGenerator|{}}
 */
const HTMLGenerator = require('../models/sampleCV.js');


HTMLGenerator.saveToFile('output.html');
(async () => {
    await generatePdf('output.html', '../../target/output.pdf');
})().catch((error) => {
    console.error('An error occurred:', error);
}).finally(() => {
    if (existsSync('output.html')) {
        unlinkSync('output.html');
    }
});