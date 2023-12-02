function Slider() {
    this.carsArrayUrl = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImg = null;

    this.start = function (elementId) {
        let that = this;
        let el = document.getElementById(elementId);
        /* const el = document.getElementById('it-slider-second'); */

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImg = el.querySelector('.slide-img');


        // subsctibe to event
        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });

        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);
        });

        //Create images array
        this.carsArrayUrl.push('car.jpg');
        this.carsArrayUrl.push('car2.jpg');
        this.carsArrayUrl.push('car3.jpg');


        this.slideImg.src = this.carsArrayUrl[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };

    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--;
        this.slideImg.src = this.carsArrayUrl[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        // disable prev button
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    };
    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++;
        this.slideImg.src = this.carsArrayUrl[this.currentImageIndex];

        this.showPrevBtn.disabled = false;
        // disable next button
        if (this.currentImageIndex === (this.carsArrayUrl.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }
}




// const sliderFactory = {
//     createNewSlider: function () {
//         let newSlider = new Slider;
//         return newSlider;
//     }
// }


// const sliderFactory = {
//     createNewSlider: function () {
//         let newSlider = {
//             carsArrayUrl: [],
//             currentImageIndex: 0,

//             showPrevBtn: null, // document.querySelector('.show-prev-btn'),
//             showNextBtn: null, // document.querySelector('.show-next-btn'),
//             slideImg: null, //document.querySelector('.slide-img'),

//             start: function (elementId) {
//                 let that = this;
//                 let el = document.getElementById(elementId);
//                 /* const el = document.getElementById('it-slider-second'); */

//                 this.showPrevBtn = el.querySelector('.show-prev-btn');
//                 this.showNextBtn = el.querySelector('.show-next-btn');
//                 this.slideImg = el.querySelector('.slide-img');


//                 // subsctibe to event
//                 this.showPrevBtn.addEventListener('click', function (e) {
//                     that.onShowPrevBtnClick(e);
//                 });

//                 this.showNextBtn.addEventListener('click', function (e) {
//                     that.onShowNextBtnClick(e);
//                 });

//                 //Create images array
//                 this.carsArrayUrl.push('car.jpg');
//                 this.carsArrayUrl.push('car2.jpg');
//                 this.carsArrayUrl.push('car3.jpg');


//                 this.slideImg.src = this.carsArrayUrl[this.currentImageIndex];
//                 this.showPrevBtn.disabled = true;
//             },
//             onShowPrevBtnClick: function (e) {
//                 this.currentImageIndex--;
//                 this.slideImg.src = this.carsArrayUrl[this.currentImageIndex];
//                 this.showNextBtn.disabled = false;
//                 // disable prev button
//                 if (this.currentImageIndex === 0) {
//                     this.showPrevBtn.disabled = true;
//                 }
//             },
//             onShowNextBtnClick: function (e) {
//                 this.currentImageIndex++;
//                 this.slideImg.src = this.carsArrayUrl[this.currentImageIndex];

//                 this.showPrevBtn.disabled = false;
//                 // disable next button
//                 if (this.currentImageIndex === (this.carsArrayUrl.length - 1)) {
//                     this.showNextBtn.disabled = true;
//                 }
//             },
//         }
//         return newSlider;
//     }
// }
