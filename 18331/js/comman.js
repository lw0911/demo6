$(document).ready(
       function(){

        $(".close").click(
              function(){
                $("#top_banner").hide();
              }
        );
       	 $(".buy li.myylm").mouseenter(
             function(){
             	$(this).css("box-shadow","0 0 1px #BBB");
             	$(".buy li.myylm a.a1").css("background","url(images/index_icons.png) no-repeat -681px -206px").siblings().show();
             }
       	 	);
       	  $(".buy li.myylm").mouseleave(
             function(){
             	$(this).css("box-shadow","0 0 0 #BBB");
             	$(".buy li.myylm a.a1").css("background","url(images/index_icons.png) no-repeat -681px -184px").siblings().hide();
             }
       	 	);
         $(".buy li.accounts").mouseenter(
             function(){
             	$(this).css("box-shadow","0 0 1px #BBB").children(".jiesuan").show();
             }
         	);
         $(".buy li.accounts").mouseleave(
             function(){
             	$(this).css("box-shadow","0 0 0 #BBB").children(".jiesuan").hide();
             }
         	);

       /*导航右边动画*/
       var a=0;
       var b=0;

       zidong();
     function zidong(){
      window.clearInterval(b);
      b=setInterval(function(){
        if(a<$(".nav_right li").length-1){
        a++;
      }else{
        a=0;
      }
      $(".nav_right ul li").eq(a).show().siblings().hide();
      },2000);
     }


       }
	);