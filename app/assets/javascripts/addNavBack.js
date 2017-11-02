$(window).scroll(function() {
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 175) {
        //clearHeader, not clearheader - caps H
        $("nav").addClass("navNewBackground");
    } else {
        $("nav").removeClass("navNewBackground");
    }
}); //missing );
