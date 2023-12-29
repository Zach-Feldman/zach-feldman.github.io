$(document).ready(function() {
  // Update Clock
  function updateClock() {
      var now = new Date();
      var secondHand = $(".second.hand");
      var minuteHand = $(".minute.hand");
      var hourHand = $(".hour.hand");

      var seconds = now.getSeconds();
      var minutes = now.getMinutes();
      var hours = now.getHours();

      var secondDegrees = ((seconds / 60) * 360);
      var minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
      var hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);

      secondHand.css("transform", `rotate(${secondDegrees}deg)`);
      minuteHand.css("transform", `rotate(${minuteDegrees}deg)`);
      hourHand.css("transform", `rotate(${hourDegrees}deg)`);

      console.log(now);
  }

  // Generate indicators
  var totalIndicators = 60;
  var clockRadius = $('.clock').width() / 2; // Assuming the clock is a circle
  var minorIndicatorLength = 10; // Fixed length for minor indicators
  var majorIndicatorLength = 15; // Longer length for major indicators

  for (var i = 0; i < totalIndicators; i++) {
      var indicator = $('<div class="clock-indicator"></div>');
      var rotationDegree = (360 / totalIndicators) * i;
      var isMajorIndicator = (i % 5 === 0);
      var indicatorLength = isMajorIndicator ? majorIndicatorLength : minorIndicatorLength;

      indicator.css({
          'transform': 'rotate(' + rotationDegree + 'deg) translateY(' + clockRadius + 'px)',
          'transform-origin': 'bottom center',
          'position': 'absolute',
          'bottom': '50%',
          'left': '50%',
          'height': indicatorLength + 'px',
          'width': isMajorIndicator ? '3px' : '2px',
      });

      if (isMajorIndicator) {
          indicator.addClass('major-indicator');
      }

      $('.clock').append(indicator);
  }

  // Call updateClock()
  setInterval(updateClock, 1000);
  updateClock(); // Initialize clock on page load
});