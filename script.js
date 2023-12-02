//find button
const showPrevBtn = document.getElementById('show-prev-btn');
const showNextBtn = document.getElementById('show-next-btn');
const slideImg = document.getElementById('slide-img');


// subsctibe to event
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//Create images array
let carsArrayUrl = [];
carsArrayUrl.push('car.jpg');
carsArrayUrl.push('car2.jpg');
carsArrayUrl.push('car3.jpg');

let currentImageIndex = 0;

slideImg.src = carsArrayUrl[currentImageIndex];
showPrevBtn.disabled = true;


// functions defitions
function onShowPrevBtnClick() {
    console.log('prev clicked');
    currentImageIndex--;
    slideImg.src = carsArrayUrl[currentImageIndex];
    showNextBtn.disabled = false;
    // disable prev button
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImg.src = carsArrayUrl[currentImageIndex];

    showPrevBtn.disabled = false;
    // disable next button
    if (currentImageIndex === (carsArrayUrl.length - 1)) {
        showNextBtn.disabled = true;
    }
}