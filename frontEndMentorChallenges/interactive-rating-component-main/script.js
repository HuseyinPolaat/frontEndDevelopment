const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const ratings = document.querySelectorAll('.card-list-item');
const submitButton = document.querySelector('.card-button');
const ratingInfo = document.querySelector('.rating-info');
const errorMessage = document.querySelector('.card-error-message');

let point = 0;

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        ratings.forEach(e => e.classList.remove('active'));
        rating.classList.add('active');
        point = rating.textContent;
    })
})

submitButton.addEventListener('click', () => {
    if(!point){
        errorMessage.style.display = 'block';
    } else{
        ratingState.style.display = 'none';
        thankYouState.style.display = 'flex';
        ratingInfo.innerHTML = `You selected ${point} out of 5`;
    }
})