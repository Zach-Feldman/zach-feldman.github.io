function adjustPDFZoom() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var pdfEmbed = document.getElementById('pdfEmbed');
    var zoomLevel = width < 1080 ? 60 : 90; // 50% zoom for screens smaller than 1080px
    pdfEmbed.src = "../pdfs/clocking-out-catalog.pdf#zoom=" + zoomLevel;
}

// Adjust zoom when the page loads
adjustPDFZoom();

// Adjust zoom on window resize
window.onresize = adjustPDFZoom;