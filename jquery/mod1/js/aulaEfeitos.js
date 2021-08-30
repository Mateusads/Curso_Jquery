$(function () {

    var ex = $('.ex1');

    $('.ev1').click(function(){
        ex.hide(500);
    });

    $('.ev2').click(function(){
        ex.show(500);
    });

    $('.ev3').click(function(){
        ex.toggle(500);
    });

    $('.ev4').keyup(function(){
        var texto = $(this).val();

        if(texto == 'hide'){
            ex.hide(500);
        }
        if(texto == 'show'){
            ex.show(500);
        }
        if(texto == 'toggle'){
            ex.toggle(500);
        }
    });
});