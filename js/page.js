$( document ).ready(function() {
    var $button = $('.zoomha-product__button')
    var $price = $('.zoomha-price__item')
    var $bonus = $('.zoomha-product__bonus')
    var $combination = $('.zoomha-product__combination')
    var $banner = $('.zoomha-banners__item')

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
        $banner.countdown("2020/01/01", function(event) {
                $(this).text(
                    event.strftime('%D дней %H:%M:%S')
                );
            });
    }

    setCountDown()

    $( document ).on('click', '.zoomha-product__button', function () {

        if (!$button.hasClass('zoomha-product__button_added')) {
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
                    updateButton()
                    $( document ).trigger('headerBasketCountAdd');
                });
        }
    })

    $( document ).on('click', '.zoomha-product__size-item', function () {
        var self = $(this)

        if (!self.hasClass('zoomha-product__size-item_active')) {
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