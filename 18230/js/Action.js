// JavaScript Document

  $(".nav-ul li").hover(function(){
	  $(this).find(".list-ul").slideDown();   
  },function(){
	$(this).find(".list-ul").slideUp();  
  })
  
  $(".ru-fr span").click(function(){
	   $(this).addClass("ru-cut").siblings().removeClass("ru-cut");
	   $(".ru-tab .ru-btm").hide().eq($(".ru-fr span").index(this)).show()  
  })
  
   //鼠标滑过
	  $(".ru-btm li").hover(function(){
		$(this).find(".inside").stop(true,true).animate({top:0},400);
		},function(){
			$(this).find(".inside").stop(true,true).animate({top:94},400);
		});	
	
  
  /*案例展示*/
  $(".sa .show-ct1").click(function(){
	   $(this).find(".show-cut").show().parent(".show-ct1").siblings().find(".show-cut").removeClass("show").hide();
	   $(".sb .show-r2").hide().eq($(".sa .show-ct1").index(this)).show()  
  })
  
  $(".ta .show-ct1").click(function(){
	   $(this).find(".show-cut-f").show().parent(".show-ct1").siblings().find(".show-cut-f").removeClass("show").hide();
	   $(".tb .show-r2").hide().eq($(".ta .show-ct1").index(this)).show()  
  })
  
  $(".fa .show-ct1").click(function(){
	   $(this).find(".show-cut").show().parent(".show-ct1").siblings().find(".show-cut").removeClass("show").hide();
	   $(".fb .show-r2").hide().eq($(".fa .show-ct1").index(this)).show()  
  })
  
  
  
/*服务业*/
 $(".ru-fr span").click(function(){
	   $(".ser-tab .ser-btm").hide().eq($(".ru-fr span").index(this)).show()  
  })


/*买服务*/
 $(".ru-fr span").click(function(){
	   $(".buy-tab .buy-btm").hide().eq($(".ru-fr span").index(this)).show()  
  })


