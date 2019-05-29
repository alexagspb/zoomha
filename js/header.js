$( document ).ready(function() {
    var $count = $('.zoomha-info__count')
    var $mobileCount = $('.zoomha-mobile__basket-count')

    function headerBasketCountAdd() {
        $count.addClass('zoomha-info__count_active')
        $mobileCount.addClass('zoomha-mobile__basket-count_active')
        var count = $count.html() || 0

        ++count

        $count.html(count)
        $mobileCount.html(count)
    }

    function headerBasketCountRemove() {
        var count = $count.html()

        --count

        $count.html(count)
        $mobileCount.html(count)

        if (count <= 0) {
            $count.removeClass('zoomha-info__count_active')
            $mobileCount.removeClass('zoomha-mobile__basket-count_active')
        }
    }

    $( document ).on('headerBasketCountAdd', function () {
        console.log('headerBasketCountAdd')
        headerBasketCountAdd()
    })

    $( document ).on('headerBasketCountRemove', function () {
        console.log('headerBasketCountRemove')
        headerBasketCountRemove()
    })

});