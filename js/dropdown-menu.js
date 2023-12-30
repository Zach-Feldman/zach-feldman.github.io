$(document).ready(function() {
    // Function to apply the dropdown state
    function applyDropdownState(dropdownId, isOpen) {
        var $dropdownToggle = $('#' + dropdownId);
        var $dropdownContent = $dropdownToggle.next('.dropdown-content');

        if (isOpen) {
            $dropdownContent.slideDown();
            $dropdownToggle.addClass('dropdown-active');
        } else {
            $dropdownContent.slideUp();
            $dropdownToggle.removeClass('dropdown-active');
        }
    }

    // Function to close all dropdowns
    function closeAllDropdowns(exceptId) {
        $('.dropdown-toggle').each(function() {
            var dropdownId = $(this).attr('id');
            if (dropdownId !== exceptId) {
                applyDropdownState(dropdownId, false);
            }
        });
    }

    // Dropdown toggle
    $('.dropdown-toggle').click(function(event) {
        event.stopPropagation(); // Prevents the event from bubbling up the DOM tree

        var dropdownId = $(this).attr('id'); // Ensure each dropdown-toggle has a unique ID
        var isOpen = !$(this).hasClass('dropdown-active');

        // Close all dropdowns except the current one
        closeAllDropdowns(dropdownId);

        // Store the state in local storage
        var dropdownState = JSON.parse(localStorage.getItem('dropdownState') || "{}");
        dropdownState[dropdownId] = isOpen;
        localStorage.setItem('dropdownState', JSON.stringify(dropdownState));

        // Apply the new state only to the selected dropdown
        applyDropdownState(dropdownId, isOpen);
    });

    // Prevent dropdowns from triggering when clicking inside a dropdown content
    $('.dropdown-content').click(function(event) {
        event.stopPropagation();
    });

    // Close all dropdowns when clicking outside
    $(document).click(function() {
        closeAllDropdowns();
    });

    // Function to get the current page's related dropdown ID
    function getCurrentPageDropdownId() {
        // Get the current URL path and split it into segments
        var currentPath = window.location.pathname;
        var currentSegments = currentPath.split('/').filter(Boolean);
        var currentFileName = currentSegments.pop(); // Get the last segment (filename)

        var currentPageId = '';
        $('.dropdown-content a').each(function() {
            // Construct the relative URL for comparison
            var linkHref = $(this).attr('href');
            var linkSegments = linkHref.split('/').filter(Boolean);
            var linkFileName = linkSegments.pop(); // Get the last segment (filename)

            if (currentFileName === linkFileName) {
                currentPageId = $(this).closest('.dropdown-content').prev('.dropdown-toggle').attr('id');
                return false; // Break the loop
            }
        });

        return currentPageId;
    }

    // On page load, open the dropdown related to the current page
    var currentPageId = getCurrentPageDropdownId();
    if (currentPageId) {
        applyDropdownState(currentPageId, true);
    } else {
        // Close all dropdowns if the current page does not match any
        closeAllDropdowns();
    }

    // Listen for sidebar open event in mobile mode
    $('.hamburger-menu').click(function() {
        setTimeout(adjustDropdownForMobile, 300); // Adjust timing as necessary
    });

    // Initial setup on page load
    adjustDropdownForMobile();

});
