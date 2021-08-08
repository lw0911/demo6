/*
* @Author: name
* @Date:   2018-03-24 17:36:57
* @Last Modified by:   name
* @Last Modified time: 2018-03-28 21:36:39
*/
jQuery(document).ready(function($) {

    // $(".daohang li").eq(0).addClass('active');
    $(".daohang li").hover(function() {
       $(this).addClass('active');
       $(".daohang").not($(this)).removeClass('active');
    }, function() {
        $(this).removeClass('active');
    });
    $(".fix-daohang").hide();
    $(".gaunggao").hide();
    $(".shangping-fix").hide();
    var $abogao=$(".aboo").offset().top;
    $(window).scroll(function(event) {
var $scrl=$(window).scrollTop();
        if($scrl>$abogao){

            $(".shangping-fix").slideDown(500);
        }
        else{ $(".shangping-fix").slideUp(500);}




        //侧边栏
        $(".spn").each(function(){
            var $scol=$(window).scrollTop();
            var $thisscol=$(this).offset().top;
            if($scol>=($thisscol-400)){
                 var $inx=$(this).attr('idx');
                $("."+$inx).addClass('actives');
                $(".cebianone").not($("."+$inx)).removeClass('actives');
            }
        })


        $(".cebian").slideDown(1000);
       $(".fix-daohang").slideDown(500);
        $(".gaunggao").slideDown(1000);
        if($(window).scrollTop()>=$(document).height()-$(window).height()){
            setInterval(function(){

                $(".jzone").slideDown(500);
                $(".jiazaione").remove();
                if($(window).scrollTop()>=$(document).height()-$(window).height()){
                    $("#chaomei").slideDown(100);
                    $(".jztwo").delay(800).slideDown(500);
                $(".jiazaitwo").remove();
                $(".di").delay(1000).slideDown(500);
                $(".conbom").delay(1000).slideDown(500);
                }
            }, 500);

        };
       if($(window).scrollTop()==0){
        $(".fix-daohang").slideUp(500);
         $(".gaunggao").slideUp(1000);
         $(".cebian").slideUp(1000);
       }
    });
        $(".cos").click(function(event) {
           $(".gaunggao").remove().slideUp(1000);
        });
    // $(".padding-ul")

     $(".padding-ul a:first").addClass('act');
     $(".padding-ul a").click(function(event) {
         $(this).addClass('act');
         $(".padding-ul a").not($(this)).removeClass('act');
     });
    var $imgwidth=$(".window").width();
    var $imgsum=$imgwidth*3;
    $(".img-used").css("width",$imgsum);

    rotateSwitch=function(){
        play=setInterval(function(){
            $active=$(".padding-ul a.act").next();
            if($active.length==0){
                $active=$(".padding-ul a:first");
            }
            rotate();

        },2000);
    };
    rotateSwitch();
    rotate=function(){
        var $triggerid=$active.attr("rel")-1;
        var $ingswidth=$triggerid*$imgwidth;
        $(".padding-ul a").removeClass('act');
        $active.addClass('act');
        $(".img-used").animate({"left":-$ingswidth},500);
    };
    $(".padding-ul a").click(function(event) {
        $active=$(this);
        clearInterval(play);
        rotate();
        rotateSwitch();
        return false;
    });
    $(".img-used").hover(function() {
        clearInterval(play);
    }, function() {
       rotateSwitch();
    });

//淡入淡出动画
    setInterval(function(){
        var $img=$(".gao-window img");

        $img.eq(1).fadeOut('200', function() {
             $(this).show().prependTo(".gao-window");
        });

    },4000);

    //图片经过事件
    // $(".col-md2-middle").hover(function() {
    //     $(this).addClass('imgyi');
    //     $(this).removeClass('imgout');
    // }, function() {
    //      $(this).removeClass('imgyi');
    //     $(this).addClass('imgout');
    // });
    //
    // 加载
    $(".jzone").slideUp();
    $(".jztwo").slideUp();
    $(".cebian").hide();

//侧边栏菜单
    dg=function(){
        pl=setInterval(function(){
            $(".shangping-wai").animate({"top":"-="+"33.30%"},1000,function(){

                var $copy=$(".shangping-wai").children().first().clone();
                $(".shangping-wai").append($copy);
                $(".shangping-wai").children().first().remove();
                $(".shangping-wai").css('top', 0);
            });


        },5000);
    };
    dg();
    $(".shangping-img").hover(function() {
       clearInterval(pl);
    }, function() {
        dg();
    });
     $(".ultwo li").children('.caidan').hide();
    //导航菜单
    $(".ultwo li").hover(function() {
        $(this).children('.caidan').show();
    }, function() {
        $(this).children('.caidan').hide();
    });

});