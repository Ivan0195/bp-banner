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

const localization = require(`/src/localization/${'ru'}.json`)

const restore = document.getElementById('restore');
const title = document.getElementById('title');
const monthly = document.getElementById('monthly');
const exportToClouds = document.getElementById('exportToClouds');
const unlimDocs = document.getElementById('unlimDocs');
const textRecog = document.getElementById('textRecog');
const monthPrice = document.getElementById('monthPrice');
const threeDaysFree = document.getElementById('3daysFree');
const smallMonthPrice = document.getElementById('smallMonthPrice');
const discountTag = document.getElementById('discountTag');
const annual = document.getElementById('annually');
const yearPrice = document.getElementById('yearPrice');
const mostPopular = document.getElementById('mostPopular');
const smallYearPrice = document.getElementById('smallYearPrice');
const continueButton = document.getElementById('continue');

restore.innerHTML = localization["Restore"];
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
yearPrice.innerHTML = localization["<strong>{{price}}</strong><br>per year"].replace('{{price}}', '$19.99');
mostPopular.innerHTML = localization["MOST POPULAR"];
smallYearPrice.innerHTML = localization["{{price}}/month"].replace('{{price}}', '$1.66');

console.log(localization["Monthly"]);