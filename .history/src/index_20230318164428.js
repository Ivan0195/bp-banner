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

const localization = require(`/src/localization/${'en'}.json`)

const title = document.getElementById('title');
const monthly = document.getElementById('monthly');
const exportToClouds = document.getElementById('exportToClouds');
const unlimDocs = document.getElementById('unlimDocs');
const textRecog = document.getElementById('textRecog');
const price = document.getElementById('price');
const threeDaysFree = document.getElementById('3daysFree');
const smallPrice = document.getElementById('smallPrice');
const discountTag = document.getElementById('discountTag');
const annual = document.getElementById('annually');

title.innerHTML = localization["Unlimited Access<br>to All Features"];
monthly.innerHTML = localization["Monthly"];
unlimDocs.innerHTML = localization["Unlimited documents"];
exportToClouds.innerHTML = localization["Count mode"];
textRecog.innerHTML = localization["Text recognition (OCR)"];
threeDaysFree.innerHTML = localization["3 DAYS FREE"];
monthPrice.innerHTML = localization["<strong>{{price}}</strong><br>per month"].replace('{{price}}', '$9.99');
smallMonthPrice.innerHTML = localization["{{price}}/month"].replace('{{price}}', '$9.99');
discountTag.innerHTML = localization["-83%"];
annual.innerHTML = localization["Annually"];

console.log(localization["Monthly"]);