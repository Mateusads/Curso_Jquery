$(function () {

    $('.place').each(function () {
        var place = $(this).attr('title');
        var input = $(this);

        input
            .val(place)
            .css('color', '#ccc')
            .focusin(function () {
                input.css('color', '#000');
                if (input.val() == place) {
                    input.val('');
                }
            }).focusout(function () {
                if (input.val() == '') {
                    input.css('color', "#ccc");
                    input.val(place);
                }
            });
    });
    var ex = $('.ex1');
    var nome = "ex";

    $('.ev1').focus(function () {
        ex.text($(this).attr('title'));
        nome = $('.ev1').val();
    });

    $('.ev1').blur(function () {
        ex.text($(this).val() + ", agora seu e-mail");
        nome = $('.ev1').val();
    });

    $('.ev3').focus(function () {
        if (nome != $('.ev1').attr('title')) {
            ex.text(nome + ", deixa seu recado aqui");
        } else
            ex.text("Preencher seu nome e email");
    });

    $('.selecionar').click(function(){
        $('.ev3').select();
        document.execCommand("copy");
        ex.text("Mensagem copiada com sucesso...");
        $('form').submit(function(){
            return false;
        });
    });

});