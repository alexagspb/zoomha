$( document ).ready(function() {
    var $acatalog = $('.zoomha-products')
    var $paginator = $('.zoomha-paginator')

    function updateCatalog() {
        $acatalog.html('Обновленная страница каталога')
    }

    function updatePaginator() {
        $paginator.html('Обновленная пагинация')
    }

    $( document ).on('click', '.zoomha-filters__button', function () {

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
                updateCatalog()
                updatePaginator()
            });
    })

    $( document ).on('click', '.zoomha-paginator__link', function (e) {
        console.log(e)
        e.preventDefault()

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
                updateCatalog()
                updatePaginator()
            });
    })
});