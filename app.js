let counter = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slider = document.querySelector("#slider-carousel");
const slides = document.querySelectorAll(".slide").length - 1;
const slideArray = Array.from(document.querySelectorAll(".slide"));
const dotArray = Array.from(document.querySelectorAll(".dot"));

const nextSlide = () => {
    if (counter < slides) {
        counter++;
        slider.style.left = '-' + 850 * counter + 'px';
        activeDot();
    } else {
        counter = 0;
        slider.style.left = '-' + 850 * counter + 'px';
        activeDot();
    }
}

const prevSlide = () => {
    if (counter > 0) {
        counter--;
        slider.style.left = '-' + 850 * counter + 'px';
        activeDot();
    } else {
        counter = 3;
        slider.style.left = '-' + 850 * counter + 'px';
        activeDot();
    }
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

let timer = setInterval(nextSlide, 3000);
document.querySelector(".slider-carousel").addEventListener('mouseover', () => {
    clearInterval(timer);
    console.log("durdu");
});

document.querySelector(".slider-carousel").addEventListener('mouseout', () => {
    timer = setInterval(nextSlide, 3000);
    console.log("devam ediyor");
});

//Noktaları renklendirdim.
const activeDot = () => {
    for (let i = 0; i < slideArray.length; i++) {
        if (i == counter) {
            dotArray[i].classList.add("active");
            dotArray[i].classList.remove("notActive");
        } else {
            dotArray[i].classList.add("notActive")
        }
    }
}
activeDot();