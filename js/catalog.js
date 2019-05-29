$( document ).ready(function() {
    var $catalog = $('.zoomha-products')
    var $paginator = $('.zoomha-paginator')

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
});