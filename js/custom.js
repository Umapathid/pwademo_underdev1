$(document).ready(function() {
    // home page banner //
    var banner_carousel = $('.banner_wrapper .owl-carousel');
    banner_carousel.owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive: {
            0: {
            items: 1,
            nav: true
            },
            600: {
            items: 2,
            nav: true
            },
            1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
    });
    var play_anchor = $('.owl_controlInnr a.button.secondary.play');
    var pause_anchor = $('.owl_controlInnr a.button.secondary.stop');
    $('.play').on('click',function(){
        play_anchor.parent().addClass('paused');
        play_anchor.parent().removeClass('played');
        banner_carousel.trigger('play.owl.autoplay',[1000])
    });
    $('.stop').on('click',function(){
        play_anchor.parent().addClass('played');
        play_anchor.parent().removeClass('paused');
        banner_carousel.trigger('stop.owl.autoplay')
    });
    // home page banner end//

    // home page Testimonial //
    var testimonial_carousel = $('.hm_testimonial_innrWrapper .owl-carousel');
    testimonial_carousel.owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive: {
            0: {
            items: 1,
            nav: true
            },
            600: {
            items: 1,
            nav: true
            },
            1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
    });
    // home page Testimonial end//

});