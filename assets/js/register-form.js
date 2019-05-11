// Process contact form
$('#contact-form').submit(function (event) {
  event.preventDefault();
  setTimeout(function () {
    // Get data
    var data = {
      'entry.1089847802': $('#name').val(),
      'entry.843694535': $('#lastname').val(),
      'entry.1560739915': $('#identificationType').val(),
      'entry.817040688': $('#identification').val(),
      'entry.1164568234': $('#email').val(),
      'entry.92170484': $('#age').val(),
      'entry.943214883': $('#cellphone').val(),
      'entry.77746133': $('#educationalLevel').val(),
      'entry.223926431': $('#englishLevel').val(),
      'entry.1968363200': $('#programmingLevel').val(),
      'entry.1285830533': $('#specialFood').val(),
      'entry.466971648': $('#linkedin').val(),
      'entry.1741724825': $('#shareInformationWithSponsors').val(),
      'entry.1302466770': $('#termsAndConditions').is(':checked')? 'Si': 'No'
    }

    var isValid = true;
    $('#shareInformationWithSponsors_feedback').hide()
    $('#termsAndConditions_feedback').hide()

    if (data['entry.1741724825'] === 'N/A') {
      isValid = false
      $('#shareInformationWithSponsors_feedback').show()
    }

    if (data['entry.1302466770'] === 'No') {
      isValid = false
      $('#termsAndConditions_feedback').show()
    }

    if (isValid) {
      // Validate for
      $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSe--xHhKS6t8Qyae1GpF8tVOaiM2EGMGWApHYNXZAYy3jGq-g/formResponse',
        type: 'POST',
        crossDomain: true,
        dataType: "xml",
        data: data,
        success: function (response) {
          $('#contact-form').hide()
          $('#feedback').show();
        },
        error: function (error) {
          $('#contact-form').hide()
          $('#feedback').show();
        }
      });
    }

  }, 300);
});