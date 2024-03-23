document.addEventListener('DOMContentLoaded', function() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
});

// modalFirst

$('#modalFirst').on('hidden.bs.modal', function () {
    $('.modal__error').removeClass('show');
});

$('#modalFirst input[type="radio"]').on('change', function(){
    $('.modal__error').removeClass('show');
});


    $('#buy, #buyr').on('click', function(event) {
        if ($('#modalFirst').find('input[type="radio"]:checked').length === 0) {
            $('.modal__error').addClass('show');
            event.preventDefault();
        }
    });

    $('#buyr').on('click', function(event) {
        if ($('#modalFirst').find('input[type="radio"]:checked').length === 0) {
            $('.modal__error').addClass('show');
            event.preventDefault();
        }
    });


// ModalSecond

$('#modalSecond').on('hidden.bs.modal', function () {
    $('.modal__error').removeClass('show');
});

$('#modalSecond input[type="radio"]').on('change', function(){
    $('.modal__error').removeClass('show');
});


    $('#buySecond').on('click', function(event) {
        if ($('#modalSecond').find('input[type="radio"]:checked').length === 0) {
            $('.modal__error').addClass('show');
            event.preventDefault();
        }
    });

    $('#buyrSecond').on('click', function(event) {
        if ($('#modalSecond').find('input[type="radio"]:checked').length === 0) {
            $('.modal__error').addClass('show');
            event.preventDefault();
        }
    });


// ModalThird

$('#modalThird').on('hidden.bs.modal', function () {
    $('.modal__error').removeClass('show');
});

$('#modalThird input[type="radio"]').on('change', function(){
    $('.modal__error').removeClass('show');
});


    $('#buyThird').on('click', function(event) {
        if ($('#modalThird').find('input[type="radio"]:checked').length === 0) {
            $('.modal__error').addClass('show');
            event.preventDefault();
        }
    });

    $('#buyrThird').on('click', function(event) {
        if ($('#modalThird').find('input[type="radio"]:checked').length === 0) {
            $('.modal__error').addClass('show');
            event.preventDefault();
        }
    });