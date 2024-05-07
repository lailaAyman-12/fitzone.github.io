const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
var activeSlide = 0

/*menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
}
);*/

//js for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

var sliderNav = function (slideIndex) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[slideIndex].classList.add("active");
    slides[slideIndex].classList.add("active");
}


function autoSlide() {
    if (activeSlide < slides.length) sliderNav(activeSlide++);
    else {
        activeSlide = 0
        sliderNav(activeSlide)
    }
}

var myTimer = setInterval(autoSlide, 2000);

btns.forEach((btn, btnIndex) => {
    btn.addEventListener("click", () => {
        sliderNav(btnIndex);
        activeSlide = btnIndex;
        clearInterval(myTimer)
        myTimer = setInterval(autoSlide, 2000);

    });
});





var swiper = new Swiper(".slide-content",{
    slidesPreView: 3,
    spaceBetween:25,
    // slidePerGroup:3,
    loop:'true',
    centerSlide:'true',
    fade:'true',
    pagination:'true',
    pagination:{
        el: ".swiper-pagination",
        Clickable:true,
        dynamicBullets:true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  })
