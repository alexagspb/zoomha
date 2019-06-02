$( document ).ready(function() {
    var $button = $('.zoomha-product__button')
    var $price = $('.zoomha-price__item')
    var $bonus = $('.zoomha-product__bonus')
    var $combination = $('.zoomha-product__combination')
    var $timer = $('.zoomha-banners__timer-count')

    function updateButton() {
        $button.html('В корзине')
        $button.addClass('zoomha-product__button_added')
    }

    function updateProduct(res) {
        $price.html(res.price + ' P')
        $bonus.html(res.bonus + ' Бонусов')
        $combination.html(res.combination)
    }

    function setCountDown() {
        $timer.countdown("2020/01/01", function(event) {
            $(this).text(
                event.strftime('%Dд. %Hч. %Mм. %Sc.')
            );
        });
    }

    setCountDown()

    $( document ).on('click', '.zoomha-product__button', function () {

        if (!$button.hasClass('zoomha-product__button_added')) {
            $( document ).trigger('showLoader');

            $.post( "example.php", function(e) {
                console.log('page success')
            })
                .done(function() {
                    console.log('page second success')
                })
                .fail(function() {
                    console.log('page error')
                })
                .always(function() {
                    console.log('page always')
                    $( document ).trigger('hideLoader');
                    updateButton()
                    $( document ).trigger('headerBasketCountAdd');
                });
        }
    })

    $( document ).on('click', '.zoomha-product__size-item', function () {
        var self = $(this)

        if (!self.hasClass('zoomha-product__size-item_active')) {
            $( document ).trigger('showLoader');

            $.post( "example.php", function(e) {
                console.log('size success')
            })
                .done(function() {
                    console.log('size second success')
                })
                .fail(function() {
                    console.log('size error')
                })
                .always(function() {
                    console.log('size always')
                    $( document ).trigger('hideLoader');
                    var fakeResult = {
                        price: 1000,
                        bonus: 200,
                        combination: '2000х1667 px | 500 dpi'
                    }
                    updateProduct(fakeResult)

                    $('.zoomha-product__size-item').removeClass('zoomha-product__size-item_active')
                    self.addClass('zoomha-product__size-item_active')
                });
        }
    })

});