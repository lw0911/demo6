$(document).ready(function() {
$(function() {$("img").lazyload({effect : "fadeIn"});}); 
//选项卡1
$(function(){
	$(".whole").hover(function(){
		$(".full_details").toggleClass("dis_none")
	});
	$(".full_details").hover(function(){
		$(".full_details").toggleClass("dis_none")
	});
});

//选项卡2
$(function(){
	var $div_li =$(".tab_2 li");
	$div_li.click(function(){
		$(this).addClass("tab_li_hover").siblings().removeClass("tab_li_hover");
		var index =  $div_li.index(this);
		$("div.content2 > div").eq(index).show().siblings().hide();
	});
});

//选项卡3
$(function(){
	var $div_li =$(".tab_3 li");
	$div_li.click(function(){
		$(this).addClass("tab_2hover").siblings().removeClass("tab_2hover");
		var index =  $div_li.index(this);
		$("div.content3 > div").eq(index).show().siblings().hide();
	});
});

//焦点图轮播
$(".focusBox").hover(function(){ $(this).find(".prev,.next").stop(true,true).fadeTo("show",0.2) },function(){ $(this).find(".prev,.next").fadeOut() });
$(".focusBox").slide({ mainCell:".pic",effect:"fold", autoPlay:true, delayTime:600, trigger:"click"});
	
//单选	
$(function(){
	$("#sex_male").click(function(){
		$("#onthe_hook").toggleClass("dis_none")
	});	
});	

});







