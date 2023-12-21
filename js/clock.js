/*eslint-env es6*/

/* clock.js for Zach Feldman */

$(document).ready(function() {
  function getEasternTime() {
    var now = new Date();
    var utc = now.getTime() + (now.getTimezoneOffset() * 60000);

    // Eastern Time offset
    var easternOffset = -5.0;
    if (isDaylightSaving(now)) {
      easternOffset = -4.0; // EDT offset
    }

    return new Date(utc + (3600000 * easternOffset));
  }

  function isDaylightSaving(date) {
    var year = date.getFullYear();
    var secondSundayInMarch = new Date(year, 2, 1);
    var firstSundayInNovember = new Date(year, 10, 1);

    // Get the day for the second Sunday in March
    secondSundayInMarch.setDate(8 - secondSundayInMarch.getDay());

    // Get the day for the first Sunday in November
    firstSundayInNovember.setDate(1 + (7 - firstSundayInNovember.getDay()));

    return date >= secondSundayInMarch && date < firstSundayInNovember;
  }

  function updateClock() {
    var now = getEasternTime();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();

    var secondsDegrees = ((seconds / 60) * 360) + 90;
    var minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    var hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;

    $('.second-hand').css('transform', `rotate(${secondsDegrees}deg)`);
    $('.minute-hand').css('transform', `rotate(${minutesDegrees}deg)`);
    $('.hour-hand').css('transform', `rotate(${hoursDegrees}deg)`);
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Initialize clock on load
});