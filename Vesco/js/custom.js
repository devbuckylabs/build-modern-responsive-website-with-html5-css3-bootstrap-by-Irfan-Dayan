$(function () {

    new WOW().init();

});

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

$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });

});


$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });

});

$(function () {

    $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
    
});



