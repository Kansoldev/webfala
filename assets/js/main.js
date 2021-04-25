$(document).ready(function () {
    var slider = $(".hero-images");

    slider.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        smartSpeed: 1200,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
    });

    // MOBILE MENU
    var menu = $("ul#navigation");

    if (menu.length) {
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: "+",
            openedSymbol: "-",
        });
    }

    // Sticky Navigation
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".main-header").removeClass("sticky-bar");
        } else {
            $(".main-header").addClass("sticky-bar");
        }
    });
});
