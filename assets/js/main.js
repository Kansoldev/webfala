$(document).ready(function () {
    var slider = $(".content-slider");

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

    // mobile_menu
    var menu = $("ul#navigation");

    if (menu.length) {
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: "+",
            openedSymbol: "-",
        });
    }

    /* Custom Sticky Menu  */
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky-bar");
        } else {
            $(".header-sticky").addClass("sticky-bar");
        }
    });

    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });

    // slider.on("translate.owl.carousel", function () {
    //     const slideLayer = $("[data-animation]");
    //     slideLayer.each(function () {
    //         const animation_name = $(this).data("animation");
    //         $(this)
    //             .removeClass("animated " + animation_name)
    //             .css("visibility", "hidden");
    //     });
    // });

    // slider.on("translated.owl.carousel", function () {
    //     const slideLayer = $("[data-animation]");
    //     slideLayer.each(function () {
    //         const animation_name = $(this).data("animation");
    //         $(this)
    //             .addClass("animated " + animation_name)
    //             .css("visibility", "visible");
    //     });
    // });
});
