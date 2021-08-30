$(function () {
    var ex = $('.ex1');

    $('.ev1').click(function () {
        $(this).css("background", "#ccc");
        ex.text("Você Clicou!");
    });

    $('.ev2').dblclick(function () {
        $(this).css("background", "#ccc");
        ex.text("Você deu dois cliques!");
    });

    $('.ev3').focusin(function () {
        $(this).css("background", "#ccc");
        ex.text("Você deu foco!");
    }).focusout(function () {
        $(this).css("background", "#000");
        ex.text("Você tirou o foco!");
    });

    $('.ev4').hover(function () {
        $(this).css("background", "#ccc");
        ex.text("Você passou o mouse!");
    }, function () {
        $(this).css("background", "#000");
        ex.text("Aguardando uma ação");
    });


    $('.ev5').mousedown(function () {
        $(this).css("background", "#ccc");
        ex.text("Você clicou o botão do mouse");
    }).mouseup(function () {
        $(this).css("background", "#000");
        ex.text("Você soltou o botão do mouse");
    });


    var countEv6 = 0;
    $('.ev6').mouseenter(function(){
        countEv6 += 1;
        ex.text("Entradas do Mouse " +countEv6);
    }).mouseout(function(){
        ex.text("Saída do Mouse");
    });

    var countEv7 = 0;
    $('.ev7').mouseover(function(){
        countEv7 += 1;
        ex.text("Mouse Over " +countEv7);
    }).mouseleave(function(){
        ex.text("Mouse Leave");
    });


    $('.ev8').mousemove(function(move){
        var localX = move.pageX;
        var localy = move.pageY;

        ex.text("Movimento X: " + localX + " - Movento Y " + localy);
    });

});
