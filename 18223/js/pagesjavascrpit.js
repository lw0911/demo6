//pages javascript

/*right qq start*/
$(function(){
	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"124px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#ae1c1c"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#000"})	
	});
});
//回到顶部函数
function goTop(){
	$('html,body').animate({'scrollTop':0},300);
}


/*bottom from start*/
$(function(){
/*	click left diyformpen */
	$(".DiyOpen").click( function () {
		$('.DiyForm').css({'display':'block'});
		
		$(this).css({'display':'none'});
		
		});
	/*	click bottom diyformclose */
	$(".DiyClose").click( function () {
		$('.DiyForm').css({'display':'none'});
		$('.DiyOpen').css({'display':'block'});
		});
	
	})