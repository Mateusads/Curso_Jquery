$(function () {
    /*     $('img')
            .error(function(){
                $('img')
                    .attr("src", "img/error.jpg");
        }); 
    
        $('img').error(function(){
            var imagem = $(this).attr("src");
            alert('Imagem ' +imagem+ ' indisponivel');
            $('img').attr("src", "img/error.jpg");
        });
    

    $('img').width($(window).width())
        .height($(window).height());
    $(window).resize(function () {
        $('img').width($(window).width())
            .height($(window).height());
    });
    */

    /*     $(window).scroll(function(){
            $('img').fadeOut('1000');
        }); */

    $('body').css("height", "5000px");
    $(window).scroll(function () {
        var topo = $(window).scrollTop();
        if (topo > 300) {
            $('img').fadeOut('1000');
        } if (topo < 50){
            $('img').fadeIn('1000');
        }
           
    });

});