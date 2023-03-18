import './index.html';
import './index.scss';

const month = document.getElementById('month');
const year = document.getElementById('year');
const button = document.getElementById('button');
button.action = '#';

const onElementSelect = (element, target, link) => {
    element.style.scale = 0.9;
    element.style.opacity = 0.5;
    target.style.scale = 1;
    target.style.opacity = 1;
    button.action = link;
}

month.onclick = () => onElementSelect(year, month, 'https://apple.com/');
year.onclick = () => onElementSelect(month, year, 'https://google.com/ ');

const lang = 'ru';
const switchLanguage = (lanuage) => {
    const monthly = document.getElementById('monthly');
    const price = document.getElementById('price');
    const treeDaysFree = document.getElementById('3daysFree');
    const smallPrice = document.getElementById('smallPrice');

}