const puppeteer = require('puppeteer');
const fs = require('fs');

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