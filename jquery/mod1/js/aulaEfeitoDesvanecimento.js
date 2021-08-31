$(function () {

    var ex1 = $('.ex1');
    var ex2= $('.ex2');
    var ex3= $('.ex3');
    var button = $(':button');

/*     button.click(function(){
        ex.fadeOut("slow");
    }).dblclick(function(){
        ex.fadeIn("slow");
    }); */
   
/*     button.click(function(){
        //ex.fadeTo("slow",0.1);
        ex1.fadeToggle("slow");
    }); */

/*     button.click(function(){
        ex1.fadeTo(3000 ,0.6, function(){
            ex2.fadeTo(1000, 0.1);
        });

    });
 */

    button.click(function(){
        ex1.fadeToggle(4000 ,function(){
            ex3.fadeToggle(3000, function(){
                ex2.fadeToggle(2000);
            });
        });

    });
});