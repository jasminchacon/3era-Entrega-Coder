const animales = [
    {nombre: 'ardilla 🐿'},
    {nombre: 'perro 🐶'},
    {nombre: 'gato 🐱'},
    {nombre: 'leon 🦁'},
    {nombre: 'rana 🐸'},
    {nombre: 'vaca 🐮'},
    {nombre: 'elefante 🐘'},
    {nombre: 'panda 🐼'},
    {nombre: 'ardilla 🐿'},
    {nombre: 'perro 🐶'},
    {nombre: 'gato 🐱'},
    {nombre: 'leon 🦁'},
    {nombre: 'rana 🐸'},
    {nombre: 'vaca 🐮'},
    {nombre: 'elefante 🐘'},
    {nombre: 'panda 🐼'},
];


let wrapper_cards = document.querySelector('#wrapper');
animales.forEach((animal) => {
    let card = document.createElement('div');
    card.className = 'card';

    let cardInner = document.createElement('div');
    cardInner.className = 'card-inner';

    let front = document.createElement('div');
    front.className = 'card-front';
    front.innerText = "❓";
    
    let back = document.createElement('div');
    back.className = 'card-back';
    back.innerText = animal.nombre;

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);
    wrapper_cards.appendChild(card);

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
