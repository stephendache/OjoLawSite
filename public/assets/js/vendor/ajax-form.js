$(document).ready(function () {
    // Get the form
    var form = $('#contact-us__form');

    // Ensure event listener is attached only once
    form.off('submit').on('submit', function (e) {
        // Prevent default form submission
        e.preventDefault();

        // Disable submit button to prevent multiple submissions
        $('.contact-btn').prop('disabled', true).text('Sending...');

        // Clear previous messages
        $('.ajax-response').removeClass('error success').html('');

        // Serialize the form data
        var formData = form.serialize();

        // Submit the form using AJAX
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: formData,
            dataType: 'json',  // Expect JSON response
            success: function (response) {
                if (response.success) {
                    // Show success message
                    $('.ajax-response').removeClass('error').addClass('success').html(response.success);

                    // Clear the form fields
                    form[0].reset();

                    // Reset the button text after 2 seconds
                    setTimeout(function () {
                        $('.contact-btn').prop('disabled', false).text('Send Message');
                        $('.ajax-response').fadeOut(300);
                    }, 3000);
                }
            },
            error: function (xhr) {
                // Show error message
                $('.ajax-response').removeClass('success').addClass('error');

                if (xhr.responseJSON && xhr.responseJSON.error) {
                    $('.ajax-response').html(xhr.responseJSON.error);
                } else {
                    $('.ajax-response').html('Oops! An error occurred, and your message could not be sent.');
                }

                // Re-enable the button
                $('.contact-btn').prop('disabled', false).text('Send Message');
            }
        });
    });
});
