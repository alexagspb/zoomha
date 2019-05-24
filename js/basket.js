$( document ).ready(function() {
    var $count = $('.zoomha-info__count')
    var $orderPrice = $('.zoomha-order__price')
    var $orderBonus = $('.zoomha-order__bonus')
    var $basket = $('.zoomha-basket')

    function headerBasketCountAdd() {
        $count.addClass('zoomha-info__count_active')
        var count = $count.html() || 0

        $count.html(++count)
    }

    function headerBasketCountRemove() {
        var count = $count.html()

        $count.html(--count)

        if (count <= 0) {
            $count.removeClass('zoomha-info__count_active')
        }
    }
    function setOrder(res) {
        $orderPrice.html(res.orderPrice + ' P')
        $orderBonus.html(res.orderBonus)
    }

    $( document ).on('click', '.zoomha-goods__btn', function () {
        var self = $(this)

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
                    self.closest('.zoomha-goods__item').find('.zoomha-goods__bonus').html(fakeResult.bonus)
                }

                if (self.hasClass('zoomha-goods__btn_minus')) {
                    headerBasketCountRemove()
                } else {
                    headerBasketCountAdd()
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
                    headerBasketCountAdd()
                });
        }
    })

    $( document ).on('click', '.zoomha-goods__close', function () {
        var self = $(this)

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
                self.closest('.zoomha-goods__item').slideUp()
                headerBasketCountRemove()
            });
    })

});