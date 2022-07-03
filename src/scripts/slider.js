const containerReview = document.querySelector(".review-block");
const btnPrevReview = document.getElementById("prevReview");
const btnNextReview = document.getElementById("nextReview");
const sliderCountReview = document.getElementById("sliderCountReview");
const sliderAmountReview = document.getElementById("sliderAmountReview");

const containerExample = document.querySelector(".example-block");
const btnPrevExample = document.getElementById("prevExample");
const btnNextExample = document.getElementById("nextExample");
const sliderCountExample = document.getElementById("sliderCountExample");
const sliderAmountExample = document.getElementById("sliderAmountExample");

const containerProcedures = document.querySelector(".procedures-block");
const btnPrevProcedures = document.getElementById("prevProcedures");
const btnNextProcedures = document.getElementById("nextProcedures");
const sliderCountProcedures = document.getElementById("sliderCountProcedures");
const sliderAmountProcedures = document.getElementById("sliderAmountProcedures");

const containerDoctors = document.querySelector(".doctors-block");
const btnPrevDoctors = document.getElementById("prevDoctors");
const btnNextDoctors = document.getElementById("nextDoctors");
const sliderCountDoctors = document.getElementById("sliderCountDoctors");
const sliderAmountDoctors = document.getElementById("sliderAmountDoctors");
const slider = (container, btnPrev, btnNext, count, amount ) => {
    let slidesToShow = 1;
    const slidesToScroll = 1;
    let position = 0;

    const mediaQueryT = window.matchMedia('(min-width: 642px)')
    if (mediaQueryT.matches) {
        slidesToShow = 2;
    }

    const mediaQueryD = window.matchMedia('(min-width: 1400px)')
    if (mediaQueryD.matches) {
        slidesToShow = 3;
    }

    const slideList = container.querySelector("#slider-list");
    const slideItem = container.querySelectorAll(".slider-item");
    const slideItemCount = slideItem.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;
    let sliderActualItem = 1;
    amount.innerText = `${slideItemCount}`

    slideItem.forEach(item => {
        item.style.minWidth = `${itemWidth - 30}px`;
    });


    btnNext.addEventListener('click', function () {
        sliderActualItem >= slideItemCount ? sliderActualItem = 1 : sliderActualItem++
        const itemsLeft = slideItemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        if (itemsLeft === 0) {
            position += itemWidth * (slideItemCount - slidesToShow);
        }
        setPosition();
    });

    btnPrev.addEventListener('click', function () {
        sliderActualItem <= 1 ? sliderActualItem = slideItemCount : sliderActualItem--
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        if (itemsLeft === 0) {
            position -= itemWidth * (slideItemCount - slidesToShow);
        }
        setPosition();
    });

    const setPosition = () => {
        count.innerText = `${sliderActualItem}`
        slideList.style.transform = `translateX(${position}px)`;
        slideList.style.transition = `1s`;
    }
}
if(containerReview) {
    slider(containerReview, btnPrevReview, btnNextReview, sliderCountReview, sliderAmountReview);
}
if (containerExample) {
    slider(containerExample, btnPrevExample, btnNextExample, sliderCountExample, sliderAmountExample);
}
if (containerProcedures) {
    slider(containerProcedures, btnPrevProcedures, btnNextProcedures, sliderCountProcedures, sliderAmountProcedures);
}
if (containerDoctors) {
    slider(containerDoctors, btnPrevDoctors, btnNextDoctors, sliderCountDoctors, sliderAmountDoctors);
}
