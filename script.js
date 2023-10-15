const submitBtn = document.querySelector('.submitBtn');
const poopup = document.querySelector('.popup');
const card = document.querySelector('.container');

let value;

submitBtn.addEventListener('click', () => {
    card.style.display='none';
    poopup.style.display='flex';

    setRating();
});


const inputs = document.querySelectorAll('input');
  console.log(inputs);

const getRateValue = () => {
    inputs.forEach((input) => {
        input.addEventListener('click', () => value = input.value);
      
    })
} 
getRateValue();

const setRating = () => {
    const html = `<div class="rateSelected">You selected <span> ${value} </span> out of 5</div>`
    document.querySelector('.content p').insertAdjacentHTML('beforebegin', html);
};

