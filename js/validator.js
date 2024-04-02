
function formCheck(formElement){
    var isValid = true;

    // required fields
    var phone = formElement.find('input[name="phone"]');
    var name = formElement.find('input[name="name"]');
    
    // additional fields
    var instagram = formElement.find('input[name="inst"]');

    // checkbox
    var check_inst = formElement.find('input[name="check-inst"]');

    // conditions
    var isValid = /^\d{5,}$/.test(phone.val());
    if(!isValid){
        phone.addClass('forms__error-input');
        isValid = false;
    } 

    if(name.val().length < 2){
         name.addClass('forms__error-input');
         isValid = false;
    }
        
    if(check_inst.prop('checked') && instagram.val().length < 2){
        formElement.find('.forms__error-win').text('Напишіть свій Instagram, щоб ми зв\'язались з вами');
        instagram.addClass('forms__error-input');
        isValid = false;
    }

    return isValid;
}

function formReset(formElement){
    var fieldsToReset = ['phone', 'name', 'inst', 'comment'];
    var checkboxesToUncheck = ['check-inst', 'check-tel', 'check-whats', 'check-viber'];

    fieldsToReset.forEach(function(fieldName) {
        formElement.find('input[name="' + fieldName + '"]').val('');
    });

    checkboxesToUncheck.forEach(function(checkboxName) {
        formElement.find('input[name="' + checkboxName + '"]').prop('checked', false);
    });
}

function Main(){
    var forms = [ $('#firstForm'), $('#secondForm'), $('#modalForm') ];

    for(let form of forms){
        form.submit(function(event){
            event.preventDefault();

            

            if(formCheck(form)){
                let formData = {};
		form.find('input').each(function() {
                    var input = $(this);
                    
		    // Проверка, является ли поле чекбоксом
    		    if (input.attr('type') === 'checkbox') {
        	    // Добавление значения "on" к formData, если чекбокс отмечен
        	         formData[input.attr('name')] = input.is(':checked') ? 'on' : 'off';
    		    } else {
        	      // Для остальных полей добавление обычного значения
        	    formData[input.attr('name')] = input.val();
 		}
                });

                $.ajax({
                    url: 'data-controller/controller.php', // Замените на путь к вашему серверному файлу
                    type: 'POST',
                    data: formData,
                    success: function() {
                       console.log("Form sended");

                        $('#modalForm').modal('hide');
                        $('#modalComplete').modal('show');

                        formReset(form);
                    },
                    error: function(error) {
                      console.log('Form error'  + ': ', error);
                    }
                });
            }
        });

        let inputs = form.find('input');
        for(let input of inputs){
            $(input).on('click', function(){
                $(input).removeClass('forms__error-input');
            });
        }

        form.find('input[name="inst"]').on('click', function(){
            form.find('.forms__error-win').text('');
        });
    }
   

}

Main();
