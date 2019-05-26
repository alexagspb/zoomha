$( document ).ready(function() {
    console.log('main.js')
    // var viewportMeta = $('#viewport-meta')
    //
    // var viewports = {
    //     default: viewportMeta.attr('content'),
    //     landscape: 'width=1024'
    // };
    //
    //  function viewportSet() {
    //      console.log(screen.width)
    //     if ( screen.width > 480 ) {
    //         console.log('if')
    //         viewportMeta.attr( 'content', viewports.landscape );
    //     } else {
    //         viewportMeta.attr( 'content', viewports.default );
    //     }
    // }
    //
    // viewportSet();
    //
    // window.onresize = function() {
    //     viewportSet();
    // }

    var $mobilemenumain = $('.zoomha-mobilemenu_main')
    var $mobilemenufilters = $('.zoomha-mobilemenu_filters')
    var $mobilemenucategory = $('.zoomha-mobilemenu_category')
    var $mobilemenuprofile = $('.zoomha-mobilemenu_profile')

    function openMobileMenu(elem) {
        elem.addClass('zoomha-mobilemenu_active')
    }

    function closeMobileMenu() {
        $('.zoomha-mobilemenu').removeClass('zoomha-mobilemenu_active')
    }

    $( document ).on('click', '.zoomha-mobile__open', function () {
        openMobileMenu($mobilemenumain)
    })

    $( document ).on('click', '.zoomha-mobile__button_filter', function () {
        openMobileMenu($mobilemenufilters)
    })

    $( document ).on('click', '.zoomha-mobile__button_category', function () {
        openMobileMenu($mobilemenucategory)
    })

    $( document ).on('click', '.zoomha-mobilemenu__show', function () {
        openMobileMenu($mobilemenuprofile)
    })

    $( document ).on('click', '.zoomha-mobilemenu__close', function () {
        closeMobileMenu()
    })

    $( document ).on('click', '.zoomha-mobilemenu__hide', function () {
        closeMobileMenu()
    })

});