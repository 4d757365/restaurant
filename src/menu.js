export default function menu() {
    const $content = document.createElement('div');
    $content.setAttribute('id', 'menu');
    $content.innerHTML = 
    `
        <div class="menu-items">
            <div class="item">
            <h3>Pizza Classica</h3>
            <img src="/assets/classic.jpeg" alt="Pizza">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item">
                <h3>Soppressata Pizza</h3>
                <img src="/assets/soppressata.jpeg" alt="Pizza">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item">
                <h3>Classic Cheese Pizza</h3>
                <img src="/assets/classic.jpeg" alt="Pizza">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item">
                <h3>Margherita Pizza</h3>
                <img src="/assets/margherita.jpeg" alt="Pizza">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item">
                <h3>Sausage and Ricotta Pizza</h3>
                <img src="/assets/sausage.jpeg" alt="Pizza">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item">
                <h3>Wild Mushroom Pizza</h3>
                <img src="/assets/mushroom.jpeg" alt="Pizza">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    `;

    return $content;
}