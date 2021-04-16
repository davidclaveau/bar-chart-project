$(document).ready(function() {


  $( "#data-submit-button" ).click(function() {
    var dataInput =  $('#data-input').val();
    $('#bar-chart').html(dataInput);

  });

});
