const HTMLGenerator = require('../modules/HtmlGenerator.js');

const generator = new HTMLGenerator();

generator.append(generator.createElement({
    tag: 'div',
    content: 'Oh, boy!',
    styles: {
        padding: '10px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    }
}));

module.exports = generator;