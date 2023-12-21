/*eslint-env es6*/

/* dropdown-menu.js for Zach Feldman */

$(document).ready(function() {
    // Dropdown toggle
    $('.dropdown-toggle').click(function() {
        $(this).next('.dropdown-content').slideToggle();
        $(this).toggleClass('dropdown-active');
    });
});