 
$(function(){
	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a id=\'id7\' href=\"tencent://Message/?Uin=6364544&websiteName=#=&Menu=yes\" class=\"btn btn-qq\"  target=\"_blank\"></a><a id=\'id8\' href=\"tencent://Message/?Uin=6364544&websiteName=#=&Menu=yes\" class=\"btn btn-qq\"  target=\"_blank\" ></a><div class=\"btn btn-wx\"><img class=\"pic\" src=\"/style/images/weixin.jpg\" /></div><div class=\"btn btn-phone\"><div class=\"phone\">18637890085</div></div><div class=\"btn btn-top\"></div></div>";
	$("#top").html(tophtml);
	$("#izl_rmenu").each(function(){
		$(this).find(".btn-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btn-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btn-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("fast");
		});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").slideDown();
			}else{
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});