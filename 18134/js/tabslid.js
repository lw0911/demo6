$(function(){
    $('#owl-demo').owlCarousel({
        items: 1,
        navigation: true,
        navigationText: ["上一个","下一个"],
        autoPlay: true,
        stopOnHover: true
    }).hover(function(){
        $('.owl-buttons').show();
    }, function(){
        $('.owl-buttons').hide();
    });
});