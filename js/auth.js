$( document ).ready(function() {
    var $auth = $('.zoomha-auth')
    var $login = $('.zoomha-login')

    function login() {
        $auth.addClass('zoomha-auth_login')
    }

    function logout() {
        $auth.removeClass('zoomha-auth_login')
    }

    $( document ).on('click', '.zoomha-login__title', function () {
        $login.toggleClass('zoomha-login_open')
    })

    $( document ).on('click', '.zoomha-logout', function () {
        logout()
    })

    $( document ).on('click', '.auth__button', function () {
        var inputs =  $(this).closest('.modal').find('.modal__input')
        inputs.each(function () {
            var item = $(this).closest('.modal__item')
            if ($(this).val()) {
                item.removeClass('modal__item_error').addClass('modal__item_success')
            } else {
                item.removeClass('modal__item_success').addClass('modal__item_error')
            }
        })

        if (!$(this).closest('.modal').find('.modal__item_error').length) {
            $( document ).trigger('showLoader');
            $.post( "example.php", function(e) {
                console.log('auth success')
            })
                .done(function() {
                    console.log('auth second success')
                })
                .fail(function() {
                    console.log('auth error')
                })
                .always(function() {
                    console.log('auth always')
                    $( document ).trigger('hideLoader');
                    $.modal.close();
                    login()
                });
        }
    })
});