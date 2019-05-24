$( document ).ready(function() {
    var $count = $('.zoomha-info__count')
    // var $login = $('.zoomha-login')
    //
    function headerBasketCount() {
        var count = $count.innerHTML || 0
        console.log(count)
        $count.innerHTML = ++count
    }
    //
    // function logout() {
    //     $auth.removeClass('zoomha-auth_login')
    // }
    //
    // $( document ).on('click', '.zoomha-login__title', function () {
    //     $login.toggleClass('zoomha-login_open')
    // })
    //
    // $( document ).on('click', '.zoomha-logout', function () {
    //     logout()
    // })

    $( document ).on('click', '.zoomha-products__basket', function () {
        var self = $(this)

        if (!self.hasClass('zoomha-products__basket_added')) {
            $.post( "example.php", function(e) {
                console.log('basket add success')
            })
                .done(function() {
                    console.log('basket add second success')
                })
                .fail(function() {
                    console.log('basket add error')
                })
                .always(function() {
                    console.log('basket add always')
                    self.addClass('zoomha-products__basket_added')
                    headerBasketCount()
                });
        }
    })
});