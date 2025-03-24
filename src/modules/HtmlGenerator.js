const { JSDOM } = require('jsdom');
const fs = require('fs');

class HTMLGenerator {
    constructor(tag = 'div', content = 'Hello, world!', styles = {}) {
        this.tag = tag;
        this.content = content;
        this.styles = styles;
    }

    generate() {
        const dom = new JSDOM('<!DOCTYPE html><html lang=""><head><title>Generated HTML</title><style>' +
                '@page {' +
                '  size: A4;' +
                '  margin: 0;' +
                '}' +
                'body {' +
                '  width: 210mm;' +
                '  height: 297mm;' +
                '  margin: 0;' +
                '  padding: 20px;' +
                '  box-sizing: border-box;' +
                '  font-family: Arial, sans-serif;' +
                '  color: #333;' +
                '}' +
                '</style></head><body></body></html>'),
            document = dom.window.document;

        const element = document.createElement(this.tag);
        element.textContent = this.content;

        Object.entries(this.getDefaultStyles()).forEach(([key, value]) => {
            element.style[key] = value;
        });
        Object.entries(this.styles).forEach(([key, value]) => {
            element.style[key] = value;
        });

        document.body.appendChild(element);

        return dom.serialize();
    }

    getDefaultStyles() {
        return {
            padding: '10px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
        };
    }

    async saveToFile(filename) {
        const htmlContent = this.generate();
        try {
            fs.writeFileSync(filename, htmlContent, 'utf8');
            console.log(`HTML saved to ${filename}`);
        } catch (error) {
            console.error('Error saving HTML to file:', error);
            throw error;
        }
    }
}

module.exports = HTMLGenerator;