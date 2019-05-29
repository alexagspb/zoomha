$( document ).ready(function() {
    var $count = $('.zoomha-info__count')
    var $mobileCount = $('.zoomha-mobile__basket-count')
    var $loader = $('.zoomha-loader')

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

    function showLoader() {
        $loader.addClass('zoomha-loader_active')
    }

    function hideLoader() {
        $loader.removeClass('zoomha-loader_active')
    }

    $( document ).on('showLoader', function () {
        console.log('showLoader')
        showLoader()
    })

    $( document ).on('hideLoader', function () {
        console.log('hideLoader')
        hideLoader()
    })

    $( document ).on('headerBasketCountAdd', function () {
        console.log('headerBasketCountAdd')
        headerBasketCountAdd()
    })

    $( document ).on('headerBasketCountRemove', function () {
        console.log('headerBasketCountRemove')
        headerBasketCountRemove()
    })

});