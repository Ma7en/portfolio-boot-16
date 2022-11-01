

/*
==============================================
==============================================
*/

/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");
window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100)
});
// btnTop.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

/* end scroll to top */


/*
==============================================
==============================================
*/


/* start header */

// let header = document.querySelector(".header");
// let menuLinks = document.querySelector(".header .links");
// let linksLis = document.querySelectorAll(".header .links li");
// let toggleMenu = document.querySelector(".header #toggle");
// toggleMenu.addEventListener("click", () => {
//     toggleMenu.classList.toggle("fa-times")
//     menuLinks.classList.toggle("open");
// });
// window.addEventListener("scroll", () => {
//     if(this.scrollY > 0) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// });
// window.addEventListener("load", () => {
//     if(this.scrollY > 0) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// });
// linksLis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         e.preventDefault();
//         menuLinks.classList.toggle("open");
//         toggleMenu.classList.toggle("fa-times");
//     });
// });



/* end header */

/*
================================================
================================================
*/

/* === start scroll secticon acrive link === */

// let sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//     let scrollY = window.pageYOffset;
//     sections.forEach(current => {
//         let sectionHeight = current.offsetHeight,
//             sectionTop =current.offsetTop - 100 , // -58
//             sectionId = current.getAttribute("id")
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.header .links a[href*=' + sectionId + ']').classList.add('active');
//         } else {
//             document.querySelector('.header .links a[href*=' + sectionId + ']').classList.remove('active');
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive);
// window.addEventListener("load", scrollActive);


/* === end scroll secticon acrive link === */

/*
==============================================
==============================================
*/

/* === start footer dateYear === */

let dateYear = document.querySelector(".dateYear");
let newDate = new Date();

window.addEventListener("load", ()=> {
    dateYear.innerHTML = newDate.getFullYear();
});

/* === end footer dateYear === */

/*
==============================================
==============================================
*/


$(function () {

    'use strict';

/* //html Trigger Nice Scroll Plugin */
    // $('html').niceScroll({
    //     cursorcolor: '#f7600e',
    //     cursorwidth: 10,
    //     cursorborderradius: 0,
    //     cursorborder: '1px solid #f7600e'
    // });



/* //scroll start scroll to top button  */
$("#go-to-top").on("click", function(e) {
    e.preventDefault(e);
    $("html, body").animate({
        scrollTop: 0,
    }, 1000);
});



/* //header  Scroll To Features  */
    $('.home .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top,
        }, 1000);
    });




/* //home Change home Height header */
$(window).on("load", function() {
    $('.home').height($(window).height());
});
$(window).on("resize", function() {
    $('.home').height($(window).height());
});
$(window).on("scroll", function() {
    $('.home').height($(window).height());
});




/* //home  Scroll To our-team */
    $('.home .hire-team').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top,
        }, 1500);
    });

/* //home  Scroll To our-works */
    $('.home .hire-work').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.our-work').offset().top,
        }, 1500);
    });







/* //our-work  Show Hidden Items From Work */
    $('.show-more').click(function () {
        $('.our-work .hidden').fadeIn(1000);
        $(this).fadeOut(3000);
    });






/* //Testimonials  Check Testimonials */
    let leftArrow = $('.testim .fa-chevron-left');
    let rightArrow = $('.testim .fa-chevron-right');
    function checkClients() {
        if ($('.client:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        if ($('.client:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
    }
    checkClients();
    $('.testim i').on("click", function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {
            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });
















});