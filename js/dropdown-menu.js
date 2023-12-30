/*eslint-env es6*/

/* dropdown-menu.js for Zachary B. Feldman */

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
    function closeAllDropdowns() {
        $('.dropdown-toggle').each(function() {
            var dropdownId = $(this).attr('id');
            applyDropdownState(dropdownId, false);
        });
    }

    // Dropdown toggle
    $('.dropdown-toggle').click(function() {
        var dropdownId = $(this).attr('id'); // Ensure each dropdown-toggle has a unique ID
        var isOpen = !$(this).hasClass('dropdown-active');

        // Close all dropdowns before opening the selected one
        closeAllDropdowns();

        // Store the state in local storage
        var dropdownState = JSON.parse(localStorage.getItem('dropdownState') || "{}");
        dropdownState[dropdownId] = isOpen;
        localStorage.setItem('dropdownState', JSON.stringify(dropdownState));

        // Apply the new state
        applyDropdownState(dropdownId, isOpen);
    });

    // On page load, apply the stored state for each dropdown
    var savedState = JSON.parse(localStorage.getItem('dropdownState') || "{}");
    $('.dropdown-toggle').each(function() {
        var dropdownId = $(this).attr('id');
        if (dropdownId in savedState) {
            applyDropdownState(dropdownId, savedState[dropdownId]);
        }
    });

});