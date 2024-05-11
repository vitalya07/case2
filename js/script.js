$(document).ready(function() {
    

    $(".slogan__consultation").on("click",function() {
        $(".modal__wrapper").fadeIn(1400)
    });
    $(".modal__close").on("click",function() {
        $(".modal__wrapper").fadeOut(1400)
    });

    function valideForms(form){
        $(form).validate({
            rules:{
                name:'required',
                phone:'required',
                email:{
                    required: true,
                    email: true,
                }
            },
            messages: {
                name:"Пожалуйста, введите имя",
                phone:"Пожалуйста, введите свой телефон",
                email:{
                    required: "Пожалуйста, введите email",
                    email:"Неправильно введен адрес",
                }
            }
        });
    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    $('form').submit(function(e) {
        e.preventDefault();
        if(!$(this).valid()) {
            return;
        }   
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.modal__box, .modal__wrapper').fadeOut(1000);
            $('.modal__well, .modal__box').fadeIn();
            $('.modal__well, .modal__wrapper').fadeOut(2400);
            $('.modal__well').fadeOut(9400);
            $('form').trigger('reset');
        });
        return false;
    });

    $("#phone").mask("+7(999) 999-9999"); 
})