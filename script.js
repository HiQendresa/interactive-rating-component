const submitBtn = document.querySelector('.submitBtn');
const poopup = document.querySelector('.popup');
const card = doument.querySelector('.container')

submitBtn.addEventListener('click', () => {
    card.style.display='none';
    poopup.style.display='flex';
});

console.log('hello there');