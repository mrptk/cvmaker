const { JSDOM } = require('jsdom');
const fs = require('fs');

class HTMLGenerator {
    constructor() {
        this.#dom = new JSDOM('<!DOCTYPE html><html lang=""><head><title>Generated HTML</title><style>' +
            '@page {' +
            '  size: A4;' +
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
            '</style></head><body></body></html>');
        this.#document = this.#dom.window.document;
    }

    #dom;
    #document;

    append(newElement) {
        this.#document.body.appendChild(newElement);
    };

    createElement(newElement) {
        const element = this.#document.createElement(newElement.tag);
        element.textContent = newElement.content;

        for (const [key, value] of Object.entries(newElement.styles)) {
            element.style[key] = value;
        }

        return element;
    }

    saveToFile(filename) {
        const htmlContent = this.#dom.serialize();
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