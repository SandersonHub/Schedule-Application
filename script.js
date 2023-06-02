$(function() {
  // Retrieve the current hour using Day.js
  var currentHour = dayjs().format('H');

  // Add event listener to save button
  $('.saveBtn').on('click', function() {
    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply the appropriate class to each time block
  $('.time-block').each(function() {
    var hour = parseInt($(this).attr('id').split('-')[1]);

    if (hour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (hour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });

  // Retrieve user input from local storage
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var userInput = localStorage.getItem(timeBlockId);
    $(this).find('.description').val(userInput);
  });

  // Display the current date in the header
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDate);
});