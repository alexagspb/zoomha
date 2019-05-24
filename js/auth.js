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

    $( document ).on('click', '.modal__button', function () {

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
                $.modal.close();
                login()
            });
    })
});