// JavaScript Document
$(document).ready(function(e) {
	$(".txt").focus(function(){
		if($(this).val()=='输入品牌名称或商品进行搜索')
		{$(this).val('').css({'color':'#000','box-shadow':'2px 2px 3px rgba(0, 0, 0, 0.2) inset '})
		}}	)
	$('.txt').blur(function(){
		if($(this).val()==''){
		$(this).val('输入品牌名称或商品进行搜索').css({'box-shadow':'none','color':'#999'})
		}
			});
	$(".search").focus(function(){
		$(this).css({'color':'#000','box-shadow':'2px 2px 3px rgba(0, 0, 0, 0.2) inset '})
		});
	$('.search').blur(function(){
		$(this).css({'box-shadow':'none','color':'#999'})
		});
			
	$(".box-item").mouseover(function(){
		$(this).css({'box-shadow':'0px 0px 3px rgba(59, 154, 236, 1)'})
		});
	$(".box-item").mouseleave(function(){
		$(this).css({'box-shadow':'none'})
		});
	$(".attention").mouseover(function(){
		$(this).css({"background-position":"-8px -69px"})
		});
		$(".attention").mouseleave(function(){
		$(this).css({"background-position":"-83px -69px"})
		});
	$(".mui-btn-s").mouseover(function(){
		$(this).css({"color":"#e3393c"})
		});
	$(".mui-btn-s").mouseleave(function(){
		$(this).css({"color":"#333"})
		});
	$("ol li").mouseover(function(e) { //鼠标放上去要发生的事情
        var $index=$(this).index();
		$("#banner ul").stop().animate({top:-$index*358},500)
		$(this).addClass("current").siblings().removeClass();
		$key=$index+1;
		if($key==4){
			$key=0;
			}
    });
	//  定时器开始
	var $key=0;  // 大的全局变量  我们看做是一把钥匙
	var timer=setInterval(autoplay,4000); //这个定时器的名称是timer
	function autoplay(){
		$("#banner ul").stop().animate({top:-$key*358},500)
		$("ol li").eq($key).addClass("current").siblings().removeClass();
		$key++;
		if($key>3){
			$key=0;
			}
		}
		
    $("#banner").hover( //鼠标放到大盒子上  定时器会停止 鼠标离开 定时器继续
	   function(){
		   clearInterval(timer);
		   },
	   function(){
		   clearInterval(timer);  //多年的经验  要想开启定时器，首先清除定时器
		   timer=setInterval(autoplay,4000);//开启定时器
		   });
	 $(window).scroll(function(e) {  // 测试滚动条滚动
         var $topvalue=$(document).scrollTop();// 检测滚动条滚动了多少
		/* alert($topvalue);*/
		 if($topvalue>709){
			 
			 $("#search").css({"position":"fixed","top":"0","left":"0","right":"0"});
			 }
		else{
			 $("#search").css({position:"relative"});
			}
    });

	 $(".mc>.item").mouseover(function() {
	 	$(this).css({"background-color":"#f7f7f7"});
		$(this).children("a").css({"color":"#0c7edf"});
		$(this).children('.item-down').css({"display":"block"})
	 $(".mc>.item").mouseleave(function(){
	 	$(this).css({"background":"none"});
		$(this).children("a").css({"color":"#fff"});
		$(this).children('.item-down').css({"display":"none"})
		 });
	 });
	 	
			$("#page .page-in a").click(function(e) { //鼠标放上去要发生的事情
				var $index=$(this).index();
				$("#brands-in ul").stop().animate({left:-$index*906},500)
				$(this).addClass("current1").siblings().removeClass();
				$key=$index+1;
				if($key==4){
					$key=0;
					}
			});
})