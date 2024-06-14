export default function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);

    for (const [key, value] of Object.entries(attributes)) {
        if (key === 'class') {
            element.className = value;
        } else if (key === 'id') {
            element.setAttribute(key, value);
        } else if (key === 'src' || key === 'alt') {
            element.setAttribute(key, value);
        } else if (key === 'onclick') {
            element.setAttribute(key, value);
        } else {
            element.setAttribute(key, value);
        }
    }
    return element;
}
