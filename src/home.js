import menu from './menu';

export default function home() {

    const $content = document.createElement('div');
    $content.setAttribute('id', 'content');
    


    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('body-content');
    const storyDiv = document.createElement('div');
    storyDiv.classList.add('story');
    const storyPara = document.createElement('p');
    storyPara.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima illo delectus fugit veniam veritatis, quos suscipit perferendis dicta neque, cupiditate debitis commodi nihil voluptates.';
    storyDiv.appendChild(storyPara);
        
    bodyDiv.appendChild(storyDiv);

    const orderDiv = document.createElement('div');
    orderDiv.classList.add('order-content');
    const orderInfo = document.createElement('h2');
    orderInfo.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, labore!';
    
    orderDiv.appendChild(orderInfo);

    const orderBtn = document.createElement('button');
    orderBtn.classList.add('order');
    orderBtn.innerText = 'Order Now';

    orderDiv.appendChild(orderBtn);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-content');
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('address');
    addressDiv.innerHTML = 
    `
    <h3>Address:</h3>
    <p>815 Augustine St.</p>
    <p>Falls Park, SY 7823</p>
    `;

    infoDiv.appendChild(addressDiv);
    
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hours');
    hoursDiv.innerHTML = 
    `
    <h3>Hours:</h3>
    <p>Weekdays:</p>
    <p>10:00a.m.-7:00p.m.</p>
    <p>Weekends:</p>
    <p>11:30p.m.-9:00p.m.</p>
    `;

    infoDiv.appendChild(hoursDiv);

    $content.appendChild(bodyDiv);
    $content.appendChild(orderDiv);
    $content.appendChild(infoDiv);

    return $content;
}
