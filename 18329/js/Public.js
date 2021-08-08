$(function(){
	/*------------------------------购物车效果-----------------------------------*/	   
	$(".cart-section").hover(function(){
		$(".hidden-cart").css("display","block");
		$(".hidden-cart-c").css("display","block");
	},function(){
		$(".hidden-cart").css("display","none");
		$(".hidden-cart-c").css("display","none");
		})	
	
	$(".hidden-cart-c ul li ins").click(function(){
		$(this).parents('li').remove();
	})
	

	/*------------------------------导航下拉效果-----------------------------------*/
	$('.pros').hover(function(){
		$('.pull_down_menu').css('display','block');
		$('.pull_down_menu').hover(function(){$('.pull_down_menu').css('display','block');},function(){$('.pull_down_menu').css('display','none');})
	},function(){
		$('.pull_down_menu').css('display','none');
	});
})