$( document ).ready(function() {
    var $orderPrice = $('.zoomha-order__price')
    var $orderBonus = $('.zoomha-order__bonus')
    var $basket = $('.zoomha-basket')

    function setOrder(res) {
        $orderPrice.html(res.orderPrice + ' P')
        $orderBonus.html(res.orderBonus)
    }

    $( document ).on('click', '.zoomha-goods__btn', function () {
        var self = $(this)
        $( document ).trigger('showLoader');

        $.post( "example.php", function(e) {
            console.log('basket remove success')
        })
            .done(function() {
                console.log('basket remove second success')
            })
            .fail(function() {
                console.log('basket remove error')
            })
            .always(function() {
                console.log('basket remove always')
                $( document ).trigger('hideLoader');

                var fakeResult = {
                    count: 5,
                    bonus: 150,
                    orderPrice: 1000,
                    orderBonus: 500
                }

                if (fakeResult.count === 0) {
                    self.closest('.zoomha-goods__item').slideUp()
                } else {
                    self.closest('.zoomha-goods__num').find('.zoomha-goods__count').html(fakeResult.count)
                    self.closest('.zoomha-goods__item').find('.zoomha-goods__bonus').html('+' + fakeResult.bonus + " Бонусов'")
                }

                if (self.hasClass('zoomha-goods__btn_minus')) {
                    $( document ).trigger('headerBasketCountRemove');
                } else {
                    $( document ).trigger('headerBasketCountAdd');
                }

                if ($orderPrice && $orderBonus) {
                    setOrder(fakeResult)
                }

                if (fakeResult.orderPrice === 0) {
                    $basket.addClass('zoomha-basket_empty')
                }
            });
    })

    $( document ).on('click', '.zoomha-products__basket', function () {
        var self = $(this)
        $( document ).trigger('showLoader');

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
                    $( document ).trigger('hideLoader');
                    self.addClass('zoomha-products__basket_added')
                    $( document ).trigger('headerBasketCountAdd');
                });
        }
    })

    $( document ).on('click', '.zoomha-goods__close', function () {
        var self = $(this)
        $( document ).trigger('showLoader');

        $.post( "example.php", function(e) {
            console.log('basket remove success')
        })
            .done(function() {
                console.log('basket remove second success')
            })
            .fail(function() {
                console.log('basket remove error')
            })
            .always(function() {
                console.log('basket remove always')
                $( document ).trigger('hideLoader');
                self.closest('.zoomha-goods__item').slideUp()
                $( document ).trigger('headerBasketCountRemove');
            });
    })

    $( document ).on('click', '.zoomha-products__buy', function () {
        $('#buy').modal();
    })

    $( document ).on('click', '.buy__button', function () {
        $( document ).trigger('showLoader');
        $.post( "example.php", function(e) {
            console.log('buy button success')
        })
            .done(function() {
                console.log('buy button second success')
            })
            .fail(function() {
                console.log('buy button error')
            })
            .always(function() {
                console.log('buy button always')
                $( document ).trigger('hideLoader');
                $.modal.close();
            });
    })

});