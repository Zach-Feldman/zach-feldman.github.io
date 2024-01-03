// clock.js

$(document).ready(function() {
    // Function to update the clock hands
    function updateClock() {
        var now = new Date();
        var secondHand = $(".clock .second.hand");
        var minuteHand = $(".clock .minute.hand");
        var hourHand = $(".clock .hour.hand");

        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();

        var secondDegrees = ((seconds / 60) * 360);
        var minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
        var hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);

        secondHand.css("transform", `rotate(${secondDegrees}deg)`);
        minuteHand.css("transform", `rotate(${minuteDegrees}deg)`);
        hourHand.css("transform", `rotate(${hourDegrees}deg)`);
    }

    // Function to generate clock indicators
    function generateIndicators() {
        var clock = $('.clock');
        clock.find('.clock-indicator').remove(); // Remove old indicators

        var totalIndicators = 60;
        var clockRadius = clock.width() / 2;
        var minorIndicatorLength = 10;
        var majorIndicatorLength = 15;

        for (var i = 0; i < totalIndicators; i++) {
            var indicator = $('<div class="clock-indicator"></div>');
            var rotationDegree = (360 / totalIndicators) * i;
            var isMajorIndicator = (i % 5 === 0);

            var indicatorPosition = clockRadius - (isMajorIndicator ? majorIndicatorLength : minorIndicatorLength);

            indicator.css({
                'transform': `rotate(${rotationDegree}deg) translateY(-${indicatorPosition}px)`,
                'transform-origin': 'bottom center',
                'position': 'absolute',
                'bottom': '50%',
                'left': '50%',
                'height': isMajorIndicator ? majorIndicatorLength : minorIndicatorLength + 'px',
                'width': isMajorIndicator ? '3px' : '2px',
            });

            clock.append(indicator);
        }
    }

    // Call functions to setup the clock
    generateIndicators();
    updateClock();
    setInterval(updateClock, 1000);

    // Adjust clock on window resize
    $(window).resize(function() {
        generateIndicators();
        updateClock();
    });
});
