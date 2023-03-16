import './index.html';
import './index.scss';

const month = document.getElementById('month');
const year = document.getElementById('year');

const onElementSelect = (element, target) => {
    element.style.scale = 0.9;
    element.style.opacity = 0.5;
    target.style.scale = 1;
    target.style.opacity = 1;
}

month.onclick = () => onElementSelect(year, month);
year.onclick = () => onElementSelect(month, year);