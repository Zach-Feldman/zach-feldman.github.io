/*eslint-env es6*/

/* highlight-current-page.js for Zach Feldman */

$(document).ready(function() {
    const currentPath = window.location.pathname.split('/').filter(Boolean).pop();
    const sidebar = $('.sidebar-container');

    // Insert the sidebar HTML
    const inSubfolder = currentPath.includes('/');
    const relativePath = inSubfolder ? '../' : '';

    // After the sidebar is loaded, highlight the current page link
    sidebar.find('a').each(function() {
        const linkHref = $(this).attr('href');
        if (typeof linkHref === 'string') {
            const linkPath = linkHref.split('/').pop();

            if (linkPath === currentPath) {
                $(this).addClass('current-page');
            }
        }
    });
});