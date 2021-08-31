$(function () {

    $('#slide img:eq(0)').addClass("ativo").show();

    var texto = $('.ativo').attr("alt");
    $('#slide').prepend("<p>" + texto + "</p>");

    setInterval(slide, 4000);

    function slide() {

        if ($('.ativo').next().length) {
            $('.ativo')
                .fadeOut()
                .removeClass("ativo")
                .next()
                .fadeIn()
                .addClass("ativo");

        } else {
            $('.ativo')
                .fadeOut()
                .removeClass("ativo");

            $('#slide img:eq(0)')
                .fadeIn()
                .addClass("ativo");
        }
        var texto = $('.ativo').attr("alt");
        $('#slide p').hide().html(texto).delay(800).fadeIn();
    }
});