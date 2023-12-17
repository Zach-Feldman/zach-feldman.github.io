/*eslint-env es6*/

/* lightbox.js for Zach Feldman */

$(document).ready(function() {
    let touchStartY = 0;
    let touchEndY = 0;

    // Function to detect a tap action
    function isTapAction() {
        return Math.abs(touchStartY - touchEndY) < 10; // Threshold for detecting a tap vs scroll
    }

    // Handle touch start
    $('.lightbox-trigger').on('touchstart', function(e) {
        touchStartY = e.originalEvent.touches[0].clientY;
    });

    // Handle touch end
    $('.lightbox-trigger').on('touchend', function(e) {
        touchEndY = e.originalEvent.changedTouches[0].clientY;

        if (isTapAction()) {
            var src = $(this).attr('src');
            $('#lightbox-image').attr('src', src);
            $('#lightbox').fadeIn();
            $('body').css('overflow', 'hidden');
        }
    });

    // Close lightbox when 'X' is clicked/tapped
    $('#close-lightbox').on('click touchstart', function(e) {
        e.preventDefault();
        $('#lightbox').fadeOut();
        $('body').css('overflow', '');
    });

    // Close lightbox by clicking anywhere for non-touch devices
    $('#lightbox').on('click', function(e) {
        if (e.target.id !== 'lightbox-image') {
            $(this).fadeOut();
            $('body').css('overflow', '');
        }
    });


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