// Images slider

const slides = document.querySelectorAll('.slides img');
let slideInxdex = 0; // To start to the firs slide
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){
    if(slides.length > 0){
        slides[slideInxdex].classList.add("displaySlide");
        intervalId  = setInterval(nextSlide, 5000);
    }
    // slides[slideInxdex].classList.add("displaySlide");
    // intervalId  = setInterval(nextSlide, 5000);
    // console.log(intervalId);

}

function showSlide(index){

    if(index >= slides.length){
        slideInxdex = 0;
    }else if(index < 0){
        slideInxdex = slideInxdex - 1; // pour commencer à la fin
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideInxdex].classList.add("displaySlide");

}

function prevSlide(){
    clearInterval(intervalId);
    slideInxdex--;
    showSlide(slideInxdex);

}

function nextSlide(){
    slideInxdex++;
    showSlide(slideInxdex);

}