/*eslint-env es6*/

/* lightbox.js for Zach Feldman */

$(document).ready(function() {
    // Function to detect touch devices
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    // Open lightbox
    $('.lightbox-trigger').on('click touchstart', function(e) {
        e.preventDefault();
        var src = $(this).attr('src');
        $('#lightbox-image').attr('src', src);
        $('#lightbox').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    // Close lightbox when 'X' is clicked/tapped
    $('#close-lightbox').on('click touchstart', function(e) {
        e.preventDefault();
        $('#lightbox').fadeOut();
        $('body').css('overflow', '');
    });

    // If not a touch device, allow closing lightbox by clicking anywhere
    if (!isTouchDevice()) {
        $('#lightbox').on('click', function(e) {
            if (e.target.id !== 'lightbox-image') {
                $(this).fadeOut();
                $('body').css('overflow', '');
            }
        });
    }


    // // Open lightbox
    // $('.lightbox-trigger').click(function() {
    //     var src = $(this).attr('src');
    //     $('#lightbox-image').attr('src', src);
    //     $('#lightbox').fadeIn();
    //     $('body').css('overflow', 'hidden'); // Prevent scrolling
    // });

    // // Close lightbox
    // $('#close-lightbox').click(function() {
    //     $('#lightbox').fadeOut();
    //     $('body').css('overflow', ''); // Enable scrolling again
    // });

    // // Close lightbox when clicking anywhere in the lightbox
    // $('#lightbox').click(function() {
    //     $(this).fadeOut();
    //     $('body').css('overflow', ''); // Enable scrolling again
    // });


    // // Mobile touch
    // $('.lightbox-trigger').on('click touchstart', function(e) {
    //     e.preventDefault();  // Prevent default action (like navigating to the image source)
    //     var src = $(this).attr('src');
    //     $('#lightbox-image').attr('src', src);
    //     $('#lightbox').fadeIn();
    //     $('body').css('overflow', 'hidden'); // Prevent scrolling
    // });

    // // Close lightbox
    // $('#close-lightbox').on('click touchstart', function(e) {
    //     e.preventDefault();
    //     $('#lightbox').fadeOut();
    //     $('body').css('overflow', ''); // Enable scrolling again
    // });

    // Close lightbox when clicking/tapping anywhere in the lightbox
    // $('#lightbox').on('click touchstart', function(e) {
    //     e.preventDefault();
    //     $(this).fadeOut();
    //     $('body').css('overflow', ''); // Enable scrolling again
    // });


});