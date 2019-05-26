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

    var $mobilemenu = $('.zoomha-mobilemenu')


    function openMobileMenu() {
        $mobilemenu.addClass('zoomha-mobilemenu_active')
    }

    function closeMobileMenu() {
        $mobilemenu.removeClass('zoomha-mobilemenu_active')
    }

    $( document ).on('click', '.zoomha-mobile__open', function () {
        openMobileMenu()
    })

    $( document ).on('click', '.zoomha-mobilemenu__close', function () {
        closeMobileMenu()
    })

});