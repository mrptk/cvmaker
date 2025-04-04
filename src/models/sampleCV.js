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
        boxSizing: 'border-box',
        padding: '20px'
    }
});

const heading = generator.createElement({
    tag: 'h1',
    content: 'JOHN DOE',
    styles: {
        marginBottom: '10px',
        fontSize: '2rem',
        fontFamily: 'Georgia'
    }
});

const headingRight = generator.createElement({
    tag: 'h1',
    content: 'JOHN DOE',
    styles: {
        marginBottom: '10px',
        fontSize: '2rem',
        fontFamily: 'Georgia',
        color: 'white'
    }
});

const description = generator.createElement({
    tag: 'p',
    content: 'Software Engineer | Web Developer | Tech Enthusiast',
    styles: {
        fontSize: '1.2rem',
        color: '#555',
        fontFamily: 'Montserrat, sans-serif'
    }
});

const image = generator.createElement({
    tag: 'img'
});

image.src = ("C:\\Users\\ptkma\\WebstormProjects\\cvmaker\\resources\\circular_image_with_circular_frame.png");

containerLeft.appendChild(heading);
containerLeft.appendChild(description);

containerRight.appendChild(image);
containerRight.appendChild(headingRight);

generator.append(containerLeft);
generator.append(containerRight);

module.exports = generator;