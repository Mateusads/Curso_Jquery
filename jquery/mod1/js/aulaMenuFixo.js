$(function () {

    var nav = $('.menu');

    $(window).scroll(function(){
        if($(this).scrollTop() > 53){
            nav.addClass("menu-fixo");
        }else{
            nav.removeClass("menu-fixo");
        }
    });

});