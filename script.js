const form = document.querySelector('form');
const poopup = document.querySelector('.popup');
const card = document.querySelector('.container');

let value;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    card.style.display='none';
    poopup.style.display='flex';

    setRating();
});

const inputs = document.querySelectorAll('input');

const getRateValue = () => {
    inputs.forEach((input) => {
        input.addEventListener('click', () => value = input.value);
    });
} 

const setRating = () => {
    const html = `<div class="rateSelected">You selected <span> ${value} </span> out of 5</div>`
    document.querySelector('.popup h2').insertAdjacentHTML('beforebegin', html);
};

getRateValue();
