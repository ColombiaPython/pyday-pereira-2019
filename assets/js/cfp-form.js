// Process contact form
$('#contact-form').submit(function (event) {
  event.preventDefault();
  $('#feedback').html('');
  setTimeout(function () {
    // Get data
    var data = {
      'entry.984616252': $('#title').val(),
      'entry.1719564423': $('#elevatorPitch').val(),
      'entry.1161816277': $('#audience').val(),
      'entry.417528971': $('#description').val(),
      'entry.1232051103': $('#requirements').val(),
      'entry.1580435746': $('#keywords').val(),
      'entry.1797320239': $('#firstname').val(),
      'entry.1707637821': $('#lastname').val(),
      'entry.916877134': $('#identificationType').val(),
      'entry.1802519200': $('#identification').val(),
      'entry.466971648': $('#birthdate').val(),
      'entry.102898264': $('#photo').val(),
      'entry.918353382': $('#city').val(),
      'entry.551205277': $('#specialFood').val(),
      'entry.136751320': $('#rol').val(),
      'entry.404103356': $('#email').val(),
      'entry.474109490': $('#cellphone').val(),
      'entry.1609360707': $('#repository').val(),
      'entry.1589612820': $('#linkedin').val(),
      'entry.1586539270': $('#facebook').val(),
      'entry.1564931684': $('#twitter').val(),
      'entry.1663913826': $('#shirt').val()
    };

    // Validate form
    var formSuccess = true;
    // Object.keys(data).forEach(function (key, index) {
    //   if (!data[key]) {
    //     formSuccess = false;
    //     $('#feedback').html('<label class="text-danger">Please complete all fields</label>');
    //   }
    // });

    if (formSuccess) {
      // Send request
      $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSebX4GN4x0nAHAWPijd9Q7JxLloJ8kbR7_W58-ZlNGtmD-J4g/formResponse',
        type: 'POST',
        crossDomain: true,
        dataType: "jsonp",
        data: data,
        success: function (response) {
          console.log(response);
          // $('#feedback').html('<label class="text-success">Message sent!</label>');
        },
        error: function (error) {
          console.log(error);
          // $('#feedback').html('<label class="text-success">Message sent!</label>');
        }
      });
    }
  }, 300);
});