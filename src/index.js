import _ from 'lodash';
import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';
import './style.css';

let page = '1';

const content = document.getElementById('content-wrapper');
const nav = [...document.getElementsByClassName('nav-list')];
nav.forEach(item => {
    item.addEventListener('click', (e) => {
        itemClassChange(e.target);
        page = e.target.getAttribute('index');
        clearPage();
        renderPage(page);
    })
});

function itemClassChange(target) {
    nav.forEach(item => {
        item.classList.remove('selected');
    });
    target.classList.add('selected');
}

function clearPage() {
    content.innerHTML = '';
}

function renderPage(page) {
    if (page === '1') {
        content.appendChild(home());
        
        const orderBtn = document.getElementsByClassName('order');
        orderBtn[0].addEventListener('click', e =>
        {
            content.innerHTML = '';
            content.appendChild(menu());        
        });
    }
    else if(page === '2') {
        content.appendChild(menu());
    }
    else if(page === '3') {
        content.appendChild(about());
    }
    else {
        content.appendChild(contact());
    }
}

renderPage('1');



