$(function() {
    // Deal with Pricing Plan
    // add and remove class active
    $('.pricing-time-options').children('span').click(function() {
        $(this).addClass('active')
        $(this).siblings().removeClass('active') 
    });
// hide and show pricing items
$('.pricing-time-options .monthly').click(function() {
    $('.yearly-container').fadeOut();
    $('.monthly-container').fadeIn();
    
});
$('.pricing-time-options .yearly').click(function() {
    $('.yearly-container').fadeIn();
    $('.monthly-container').fadeOut();
});
// Create loading screen
window.onload = function () {
    document.querySelector('.loading-screen').remove()
}
// Scroll to top button 
$(window).scroll(function() {
    var scrollTop = $('.scroll-to-top');
    $(this).scrollTop() >= 1000 ? scrollTop.fadeIn() :  scrollTop.fadeOut(200)
});
// Add event click scroll button
$('.scroll-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    })
})
// Active link switching
$('.nav-link').click(function(e) {
    $(this).addClass('active').parent().siblings().children('a').removeClass('active')
})






// Deal With Works Slider
    var glide = new Glide('.works-slider', {
        type: 'carousel',
        perView: 5,
        autoplay: 4000,
        focusAt: 2,
        hoverpause: false,
        breakpoints: {
        800: {
            perView: 2,
            focusAt: 1
        },
        500: {
            perView: 1,
            focusAt: 0
        }
        }
    })      
    glide.mount()
// Deal With Team Slider
    var glide = new Glide('.team-slider', {
        type: 'carousel',
        perView: 3,
        autoplay: 4000,
        focusAt: 2,
        hoverpause: false,
        breakpoints: {
        800: {
            perView: 2,
            focusAt: 1
        },
        500: {
            perView: 1,
        }
        }
    })      
    glide.mount()

});
// Add enent click to navbar links
let navbarLinks = document.querySelectorAll('.nav-link');
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        console.log('good')
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth',
        });
        document.querySelector('.navbar-collapse').classList.toggle('show')
    });
});
// Switch navbar links active class on scroll 
var sections = document.querySelectorAll("section");

window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop;
    console.log(scrollPosition)
    sections.forEach((section) => {
        if (
        scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
        scrollPosition <
            section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
        var currentId = section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentId);
        }
    });
};

var removeAllActiveClasses = function () {
    document.querySelectorAll(".nav-link").forEach((el) => {
    el.classList.remove("active");
    });
};

var addActiveClass = function (id) {
  // console.log(id);
    var selector = `.nav-link[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
};
// wow.js
new WOW().init();

