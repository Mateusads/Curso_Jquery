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
    /*
    $('.key').keypress(function(){
        ex.text($(this).val());
    });

    $('.key').keydown(function () {
        ex.text($(this).val());
    });
*/
    $('.key').keyup(function () {
        ex.text($(this).val());
    });
});