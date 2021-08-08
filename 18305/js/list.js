// JavaScript Document
//左边排行滑块
$(function(){
	$(".paihang_c ul li").mouseover(function(){
		$(this).children(".title").hide();
		$(this).children(".content").show();
		$(this).siblings("li").children(".content").hide();
		$(this).siblings("li").children(".title").show();
		//console.info($(this).parent("li").siblings("li").children(".top_c").hide())
	})
})

//右侧手机筛选
$(function(){
	$(".sjsx_c dl dd a").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	})
	$(".sjsx_more .more").toggle(function(){
		$(".dl_none").show();
		$(this).children("h4").text("收起");
		$(this).children("span").css("background","url(../css/images/arrow1.gif) no-repeat")
	},function(){
		$(".dl_none").hide();
		$(this).children("h4").text("更多选项");
		$(this).children("span").css("background","url(../css/images/arrow.gif) no-repeat")
	})
})

$(function(){
	$(".search_c a").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	})
})



//列表对比
$(function(){
	$(".list_main_c ul li p a.db").toggle(function(){
		$(this).children("img").attr("src","../images/lb_icon_db2.gif")
	},function(){
		$(this).children("img").attr("src","../images/lb_icon_db1.gif")
	})
})

//列表也对比栏
$(function(){
	$(".list_main_c ul li p a.db").click(
	  function () {
		$(".lb_fddb").show();
	  }
	);
	$(".lb_fddb_tit a").click(
	  function () {
		$(".lb_fddb").hide();
	  }
	);
})

//列表也对比栏
$(function(){
	$(".list_main_c ul li p a.db").click(
	  function () {
          if($.browser.msie && $.browser.version == '6.0'){
              $(".lb_fddb").show().css({'position': 'absolute', 'left': $('.box').offset().left, 'bottom': 0});
          }else{
              $(".lb_fddb").show().css({'position': 'fixed', 'left': $('.box').offset().left, 'bottom': 0});
          }
	  }
	);
    $(window).scroll(function(){
        if($.browser.msie && $.browser.version == '6.0'){
            //alert($(window).scrollTop() + $(window).height() - $(".lb_fddb").height());
            $(".lb_fddb").css('top', $(window).scrollTop() + $(window).height() - $(".lb_fddb").height());
        }
    });
	$(".lb_fddb_tit a").click(
	  function () {
		$(".lb_fddb").hide();
	  }
	);
})


//20140922 D 经销商专区 开始
$(function(){
	$(".list_yxs ul li").mouseenter(function(){
		$(this).addClass("hover");
	});
	$(".list_yxs ul li").mouseleave(function(){
		$(this).removeClass("hover");
	});	
	
	$(".listtitlepage .pagejt").mouseenter(function(){
		$(this).addClass("pagehover");
	});
	$(".listtitlepage .pagejt").mouseleave(function(){
		$(this).removeClass("pagehover");
	});	
	
});
//20140922 D 经销商专区 结束