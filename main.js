
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
      });

$('.slider').slick({
  infinite:true,
  autoplay:true,
  slideToShow:1,
  slideToScroll:1,
  autoplaySpeed:4000
});

$('#contact-form').bootstrapValidator({
    //   live: 'enabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Name: {
                validators: {
                    notEmpty: {
                        message: 'Unesite vaše ime i prezime'

                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Unesite email adresu'
                    },
                    emailAddress: {
                        message: 'Email adresa nije validna',

                    }
                }
            },
            Message: {
                validators: {
                    notEmpty: {
                        message: 'Molimo unesite poruku'
                    }
                }
            }
        }
    });
