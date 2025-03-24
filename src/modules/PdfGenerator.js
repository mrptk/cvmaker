const puppeteer = require('puppeteer');
const fs = require('fs');

/**
 * Function to generate PDF from an HTML file
 * @param {string} htmlFilePath - The path to the HTML file to convert
 * @param {string} outputPdfPath - The path where the output PDF will be saved
 * @returns {Promise<void>}
 */
async function generatePdf(htmlFilePath, outputPdfPath) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

        await page.setContent(htmlContent, { waitUntil: 'load' });

        await page.pdf({
            path: outputPdfPath,
            format: 'A4',
            printBackground: true
        });

        console.log(`PDF generated successfully: ${outputPdfPath}`);

        await browser.close();
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
}

module.exports = generatePdf;