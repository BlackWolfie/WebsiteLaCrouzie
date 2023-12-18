// burger
let burger = $(".hamburger");
let listMenu = $("nav ul.flexContainer");
burger.click(function () {
    burger.toggleClass('is-active');
    listMenu.slideToggle(800);
});

let mybutton = document.getElementById("flecheTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$("figure").click(function () {
    $(this).toggleClass("active");
});


// galerie photos

var slideIndex = [1, 1, 1, 1, 1, 1, 1]; // Array to store slide indexes for multiple slideshows
var slideId = ["mySlides", "mySlides1","mySlides2","mySlides3","mySlides4", "mySlides5", "mySlides6"]; // Array to store slide element IDs

showSlides(1, 0); // Initialize the first slideshow
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);

function plusSlides(n, showIndex) {
    showSlides(slideIndex[showIndex] += n, showIndex);
}

function currentSlide(n, showIndex) {
    showSlides(slideIndex[showIndex] = n, showIndex);
}

function showSlides(n, showIndex) {
    var i;
    var slides = document.getElementsByClassName(slideId[showIndex]);
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex[showIndex] = 1;
    }
    if (n < 1) {
        slideIndex[showIndex] = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex[showIndex] - 1].style.display = "block";
    dots[slideIndex[showIndex] - 1].className += " active";
}


