// JavaScript Document
$(document).ready(function () {
	
	$(".index_special li:last-child").css("margin-right","0");
	
	
	//幻灯片
	jQuery(".banner").slide({ mainCell:".bd ul",effect:"leftLoop",autoPlay:true});
	
	jQuery(".p_banner").slide({ titCell:".hd ul", mainCell:".bd ul",autoPlay:true,autoPage:true});
	 
	
	jQuery(".show_banner").slide({ titCell:".hd ul", mainCell:".bd ul",effect:"fold",autoPlay:true});
	
	
	jQuery(".slider .bd li").first().before( jQuery(".slider .bd li").last() );
	jQuery(".slider").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop", autoPlay:true, vis:3, trigger:"click"});
	
});