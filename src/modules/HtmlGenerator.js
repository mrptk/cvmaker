const { JSDOM } = require('jsdom');
const fs = require('fs');

class HTMLGenerator {
    constructor() {
        this.#dom = new JSDOM(
            '<!DOCTYPE html>' +
            '<html lang="en">' +
            '<head>' +
            '    <title>Generated HTML</title>' +
            '    <style>' +
            '        * {' +
            '            margin: 0;' +
            '            padding: 0;' +
            '            box-sizing: border-box;' +
            '        }' +
            '        html, body {' +
            '            width: 100%;' +
            '            height: 100%;' +
            '            display: flex;' +
            '            flex-direction: row;' +
            '            align-items: flex-start;' +
            '            justify-content: flex-start;' +
            '            flex-wrap: wrap;' +
            '            font-family: Arial, sans-serif;' +
            '            background-color: #f8f9fa;' +
            '            padding: 0;' +
            '            margin: 0;' +
            '            overflow: hidden;' +
            '        }' +
            '    </style>' +
            '</head>' +
            '<body></body>' +
            '</html>'
        );
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