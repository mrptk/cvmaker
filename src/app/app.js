const generatePdfPuppeteer = require('../modules/PuppeteerPdfGenerator');
const generatePdfPlaywright = require('../modules/PlaywrightPdfGenerator');
const {unlinkSync, existsSync} = require("node:fs");

/**
 * Here set your model
 * @type {HTMLGenerator|{}}
 */
const HTMLGenerator = require('../models/sampleCV.js');


HTMLGenerator.saveToFile('output.html');
(async () => {
    await generatePdfPlaywright('../app/output.html', '../../target/output_playwright.pdf');
    await generatePdfPuppeteer('output.html', '../../target/output_puppeteer.pdf');
})().catch((error) => {
    console.error('An error occurred:', error);
}).finally(() => {
    if (existsSync('output.html')) {
        unlinkSync('output.html');
    }
});