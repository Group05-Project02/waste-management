$(function(){
$(document).scroll(function(){
        if($(this).scrollTop() > 50) {
            $(".header").addClass("header-stuck");
            
        } else {
            $(".header").removeClass("header-stuck");
        }
    });
});