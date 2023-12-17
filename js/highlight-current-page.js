/*eslint-env es6*/

/* highlight-current-page.js for Zach Feldman */

$(document).ready(function() {
     // Function to highlight the current page in the sidebar
     function highlightCurrentPage() {
        var currentPath = window.location.pathname.split("/").pop();

        $('.sidebar a').each(function() {
            var $this = $(this);
            if ($this.attr('href') === currentPath) {
                $this.addClass('current-page');
            }
        });
    }

    // Call the function to highlight the current page
    highlightCurrentPage();
});