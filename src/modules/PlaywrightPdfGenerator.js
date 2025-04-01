const { chromium } = require('playwright');
const path = require('path');

async function generatePdf(htmlFilePath, outputPdfPath) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Load an HTML file (replace with your actual HTML file path)
    await page.goto(`file://${path.resolve(__dirname, htmlFilePath)}`); // If it's a file

    // OR Load a webpage
    // await page.goto('https://example.com');

    await page.pdf({
        path: outputPdfPath, // Save as output.pdf
        format: 'A4',
        printBackground: true, // Ensure backgrounds are included
    });

    await browser.close();
    console.log(`PDF generated successfully: ${outputPdfPath}`);
}

module.exports = generatePdf;