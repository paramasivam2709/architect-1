(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
document.getElementById("subscribeBtn").addEventListener("click", function () {
    let email = document.getElementById("subscribeEmail").value.trim();
    let error = document.getElementById("emailError");

    if (email === "") {
        // Show HTML alert message
        error.style.display = "block";
    } else {
        // Hide message and redirect to 404
        error.style.display = "none";
        window.location.href = "404.html";
    }
});


document.getElementById("appSubmit").addEventListener("click", function () {

    let name = document.getElementById("appName").value.trim();
    let email = document.getElementById("appEmail").value.trim();
    let mobile = document.getElementById("appMobile").value.trim();
    let service = document.getElementById("appService").value;
    let msg = document.getElementById("appMessage").value.trim();
    let error = document.getElementById("appError");

    if (name === "" || email === "" || mobile === "" || service === "Choose Service" || msg === "") {
        error.style.display = "block";
    } else {
        error.style.display = "none";
        window.location.href = "404.html";
    }
});


document.getElementById("contactSubmit").addEventListener("click", function () {

    let name = document.getElementById("cname").value.trim();
    let email = document.getElementById("cemail").value.trim();
    let subject = document.getElementById("csubject").value.trim();
    let message = document.getElementById("cmessage").value.trim();
    let error = document.getElementById("contactError");

    if (name === "" || email === "" || subject === "" || message === "") {
        error.style.display = "block";
    } else {
        error.style.display = "none";
        window.location.href = "404.html";
    }
});


    
})(jQuery);



