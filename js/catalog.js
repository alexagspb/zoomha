$( document ).ready(function() {
    var $catalog = $('.zoomha-products')
    var $paginator = $('.zoomha-paginator')
    var zoomId

        function updateCatalog() {
        $catalog.html('Обновленная страница каталога')
    }

    function updatePaginator() {
        $paginator.html('Обновленная пагинация')
    }

    $( document ).on('click', '.zoomha-filters__button', function () {
        $( document ).trigger('showLoader');

        $.post( "example.php", function(e) {
            console.log('catalog success')
        })
            .done(function() {
                console.log('catalog second success')
            })
            .fail(function() {
                console.log('catalog error')
            })
            .always(function() {
                console.log('catalog always')
                $( document ).trigger('hideLoader');
                updateCatalog()
                updatePaginator()
            });
    })

    $( document ).on('click', '.zoomha-paginator__link', function (e) {
        e.preventDefault()
        $( document ).trigger('showLoader');

        $.post( "example.php", function(e) {
            console.log('paginator success')
        })
            .done(function() {
                console.log('paginator second success')
            })
            .fail(function() {
                console.log('paginator error')
            })
            .always(function() {
                console.log('paginator always')
                $( document ).trigger('hideLoader');
                updateCatalog()
                updatePaginator()
            });
    })

    $( document ).on('mouseenter', '.zoomha-products__item', function (e) {
        var self = $(this)
        clearTimeout(zoomId)

        if ( screen.width > 480 ) {
            zoomId = setTimeout(function () {
                self.addClass('zoomha-products__item_zoomed')
            }, 600)
        }
    })

    $( document ).on('mouseleave', '.zoomha-products__item', function (e) {
        clearTimeout(zoomId)
        $(this).removeClass('zoomha-products__item_zoomed')
    })
});