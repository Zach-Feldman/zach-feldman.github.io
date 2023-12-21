// main.js

function getRelativePath() {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;
    let relativePath = '';

    for (let i = 1; i < depth; i++) { // Start from 1 to ignore the leading slash
        relativePath += '../';
    }

    return relativePath;
}

var relativePath = getRelativePath();

function loadScript(src, attributes = {}) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src.startsWith('http') ? src : relativePath + src;

        // Set additional attributes
        Object.keys(attributes).forEach(key => {
            script.setAttribute(key, attributes[key]);
        });

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
    });
}

// Load jQuery first as it's a dependency for other scripts
loadScript("https://code.jquery.com/jquery-3.7.1.min.js", { crossorigin: "anonymous" })
    .then(() => {
        // Load other scripts after jQuery
        return Promise.all([
            loadScript("js/sidebar.js"),
            loadScript("js/highlight-current-page.js"),
            loadScript("js/mobile-menu.js"),
            loadScript("js/lightbox.js"),
            loadScript("js/scrollbar-position.js"),
            loadScript("js/dropdown-menu.js")
        ]);
    })
    .catch(error => {
        console.error("Error loading script:", error);
    });