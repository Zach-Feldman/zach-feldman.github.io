/*eslint-env es6*/

/* mobile-menu.js for Zach Feldman */

$(document).ready(function() {
    // Toggle mobile menu
    $('.hamburger-menu').click(function() {
        $(this).toggleClass('active'); // Toggle the 'active' class for the hamburger menu
        $('.sidebar').toggleClass('active'); // Toggle the 'active' class for the sidebar
    });

    $('.hamburger-menu').on('click touchstart', function(e) {
        e.preventDefault();  // Prevent default action (useful if it's an anchor tag)
        $(this).toggleClass('active'); // Toggle the 'active' class for the hamburger menu
        $('.sidebar').toggleClass('active'); // Toggle the 'active' class for the sidebar
    });
});