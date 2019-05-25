$( document ).ready(function() {
    var $count = $('.zoomha-info__count')

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

    $( document ).on('headerBasketCountAdd', function () {
        console.log('headerBasketCountAdd')
        headerBasketCountAdd()
    })

    $( document ).on('headerBasketCountRemove', function () {
        console.log('headerBasketCountRemove')
        headerBasketCountRemove()
    })

});