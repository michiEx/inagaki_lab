'use strict';

$(function(){
    var topBtn = $('#back-top');
    topBtn.hide();
    $(window).scroll(function() {
        var w = $(window).width();
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});