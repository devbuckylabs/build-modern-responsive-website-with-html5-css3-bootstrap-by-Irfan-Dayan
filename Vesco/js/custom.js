/*--------------------------------
       ANIMATIONS
--------------------------------*/

$(function () {

    new WOW().init();

});


/*--------------------------------
            WORK
--------------------------------*/


$(function () {

    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            // options for gallery
            enabled: true

        }

    });


});


/*--------------------------------
            TEAM
--------------------------------*/


$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });

});


/*--------------------------------
         TESTIOMOINIALS
--------------------------------*/

$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });

});


/*--------------------------------
            STATS
--------------------------------*/


$(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});


/*--------------------------------
          CLIENTS
--------------------------------*/


$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,


    });

});

/*--------------------------------
        NAVIGATION
--------------------------------*/

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }


    });

});
/*--------------------------------
        SMOOTH-SCROLL
--------------------------------*/

$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});