$(document).ready(function() {

  // Grab the string input from data-submit-button
  $( "#data-submit-button" ).click(function() {
    var dataString = $('#data-input').val();
    var dataArray = dataString.split(',');

    // Convert the string array into a number array
    for (var data = 0; data < dataArray.length; data++) {
      dataArray[data] = parseInt(dataArray[data], 10);
      console.log(typeof dataArray[data]);
      $( "#bar-chart" ).append('<div class="bar subset-'+ data +'" />');
    }

  });

});
