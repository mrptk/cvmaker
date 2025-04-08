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
        fontSize: '20px',
        fontFamily: 'Georgia'
    }
});

const headingRight = generator.createElement({
    tag: 'h1',
    content: 'JOHN DOE',
    styles: {
        margin: '10px',
        fontSize: '20px',
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
    tag: 'img',
    styles: {
        width: '150px',
        height: '150px',
    }
});

const iconList = generator.createElement({
    tag: 'div',
    styles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'left',
        boxSizing: 'border-box',
        padding: '5px'
    }
});

const createIconItem = (source, text) => {
    const iconItem = generator.createElement({
        tag: 'div',
        styles: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            boxSizing: 'border-box'
        }
    });

    const icon = generator.createElement({
        tag: 'img',
        styles: {
            width: '15px',
            height: '15px',
            margin: '5px'
        }
    });
    icon.src = source;

    const address = generator.createElement({
        tag: 'p',
        content: text,
        styles: {
            color: 'white',
            fontSize: '10px',
            fontFamily: 'Montserrat, sans-serif'
        }
    });
    iconItem.appendChild(icon);
    iconItem.appendChild(address);

    return iconItem;
}
const iconListHeading = generator.createElement({
    tag: 'h2',
    content: 'CONTACT:',
    styles: {
        margin: '10px',
        fontSize: '15px',
        fontFamily: 'Georgia',
        color: 'white',
        textDecoration: 'underline',
        align: 'left',
    }
});

const iconListContainer = generator.createElement({
    tag: 'div',
    styles: {
        width: '100%',
        alignItems: 'left'
    }
})

iconList.appendChild(iconListHeading);
iconList.appendChild(createIconItem("C:\\Users\\ptkma\\WebstormProjects\\cvmaker\\assets\\icons\\mail_icon.png",
    'https://www.gmail.com/'));
iconList.appendChild(createIconItem("C:\\Users\\ptkma\\WebstormProjects\\cvmaker\\assets\\icons\\github_icon.png",
    'https://github.com/'));
iconList.appendChild(createIconItem("C:\\Users\\ptkma\\WebstormProjects\\cvmaker\\assets\\icons\\linkedin_icon.png",
    'https://linkedin.com/'));
iconListContainer.appendChild(iconList);

image.src = ("C:\\Users\\ptkma\\WebstormProjects\\cvmaker\\assets\\circular_image_with_circular_frame.png");

containerLeft.appendChild(heading);
containerLeft.appendChild(description);

containerRight.appendChild(image);
containerRight.appendChild(headingRight);
containerRight.appendChild(iconListContainer);

generator.append(containerLeft);
generator.append(containerRight);

module.exports = generator;