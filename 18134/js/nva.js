/**
 * Created by Administrator on 15-9-9.
 */
$(function(){
    $('.nav-width ul li').hover(function() {
        $('ul:first',this).css({
            visibility: 'visible'
        });
    }, function() {
        $('ul:first',this).css({
            visibility: 'hidden'
        });
    });
})