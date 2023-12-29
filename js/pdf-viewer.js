/*eslint-env es6*/

/* pdf-viewer.js for Zachary B. Feldman */

$(document).ready(function() { 
    function adjustPDFZoom() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var pdfEmbed = document.getElementById('pdfEmbed');
        
        // Determine the zoom level based on window width
        var zoomLevel;
        if (width <= 768) {
            zoomLevel = 20; // 30% zoom for screens 768px or smaller
        } else if (width < 1080) {
            zoomLevel = 60; // 60% zoom for screens smaller than 1080px but larger than 768px
        } else {
            zoomLevel = 90; // 90% zoom for larger screens
        }

        pdfEmbed.src = "../pdfs/clocking-out-catalog.pdf#zoom=" + zoomLevel;
    }

    // Adjust zoom when the page loads
    adjustPDFZoom();

    // Adjust zoom on window resize
    window.onresize = adjustPDFZoom;
});