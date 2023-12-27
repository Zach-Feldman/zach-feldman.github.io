/*eslint-env es6*/

/* mobile-menu.js for Zachary B. Feldman */

$(document).ready(function() {
    $(document).ready(function() {
        // Toggle mobile menu
        $('.hamburger-menu').on('click touchstart', function(e) {
            e.preventDefault(); // Prevent default action (useful if it's an anchor tag)
            $(this).toggleClass('active'); // Toggle the 'active' class for the hamburger menu
            $('.sidebar').toggleClass('active'); // Toggle the 'active' class for the sidebar
        });
    });

});