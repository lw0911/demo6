// JavaScript Document
$(function(){
	/*整合图片，初始化*/
	var n=0;
	$(".banner img").hide();
	$(".banner img:first").show();
	/*鼠标指向按钮*/
	$(".ba_2").mouseover(function(){
		/*当前项添加whiteLi类*/
		$(".ba_2").removeClass("whiteLi");
		$(this).addClass("whiteLi");
		/*找到当前按钮索引值*/
		n = $(".ba_2").fadeIn(1000).index(this);	
		/*指定显示哪张图片*/
		$(".banner img").hide();
		$(".banner img:eq("+n+")").fadeIn(1000).show();
		/*指定显示哪个文本*/
	})
	/*动画的变化函数*/
	function changeImg(){
		if(n<$(".banner img").length-1){
			n=n+1;
		}else{
			n=0;
		}
		$(".banner img").hide();
		$(".banner img:eq("+n+")").fadeIn(1000).show();
		
		$(".ba_2").removeClass("whiteLi");
		$(".ba_2:eq("+n+")").addClass("whiteLi");
	}
	var timer = setInterval(changeImg,5000);
	/*控制定时器*/
	$(".banner").mouseover(function(){
		clearInterval(timer);	
	}).mouseout(function(){
		timer = setInterval(changeImg,5000);	
	})
})
$(function(){
	$(".ba_2").eq(0).addClass("whiteLi");
})
//banner轮播结束


