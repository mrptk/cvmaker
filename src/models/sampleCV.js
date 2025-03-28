const HTMLGenerator = require('../modules/HtmlGenerator.js');

const generator = new HTMLGenerator();



const containerLeft = generator.createElement({
    tag: 'div',
    styles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        width: '65%',
        boxSizing: 'border-box'
    }
});

const containerRight = generator.createElement({
    tag: 'div',
    styles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        width: '35%',
        backgroundColor: '#253847',
        boxSizing: 'border-box'
    }
});

const heading = generator.createElement({
    tag: 'h1',
    content: 'John Doe',
    styles: {
        marginBottom: '10px',
        fontSize: '2rem',
        fontFamily: 'Arial, sans-serif'
    }
});

const headingRight = generator.createElement({
    tag: 'h1',
    content: 'John Doe',
    styles: {
        marginBottom: '10px',
        fontSize: '2rem',
        fontFamily: 'Arial, sans-serif'
    }
});

const description = generator.createElement({
    tag: 'p',
    content: 'Software Engineer | Web Developer | Tech Enthusiast',
    styles: {
        fontSize: '1.2rem',
        color: '#555'
    }
});

containerLeft.appendChild(heading);
containerLeft.appendChild(description);

containerRight.appendChild(headingRight);

generator.append(containerLeft);
generator.append(containerRight);

module.exports = generator;