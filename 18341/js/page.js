$(function(){
	// 头部搜索下拉
	$(".head2_right .sub1 .sp1").click(function(){
		$(this).siblings(".sub").toggle();
	})
	$(".head2_right .sub1 .sub span").click(function(){
		$(".head2_right .sub1 .sp1").text($(this).text());
		$(".head2_right .sub1 .sub").hide();
	})

	//供应信息
	$(".tab_tit1 li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		var index=$(this).index();
		$(".tab_det_list1 .list").eq(index).fadeIn().siblings(".tab_det_list1 .list").hide();
	})
	//采购信息
	$(".tab_tit2 li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		var index=$(this).index();
		$(".tab_det_list2 .list").eq(index).fadeIn().siblings(".tab_det_list2 .list").hide();
	})
	//供应信息
	$(".tab_tit3 li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		var index=$(this).index();
		$(".tab_det_list3 .cont7_list").eq(index).fadeIn().siblings(".tab_det_list3 .cont7_list").hide();
	})

//图表选项卡
	//左侧
	$(".d_card_l li").click(function(){
	   $(this).addClass("one").siblings("li").removeClass("one");
    });
	//右侧
	$(".d_card_r span").click(function(){
		$(this).addClass("active1").siblings("span").removeClass("active1");
	});
	
	//时间
	$(".d_card_bottom span").click(function(){
		$(this).addClass("time_day").siblings("span").removeClass("time_day");
	})
	
  //  选项卡功能
	 $(".tabs li").click(function(){
	 	 $(".tabs li a").css({color:'#666'});
	 	 $(this).children().css({color:'#059a32'});
		 $(this).addClass("active2").siblings().removeClass("active2"); //切换选中的按钮高亮状态
		 var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
		 $(".card > ul").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
	 });
	$('.tab_conbox li').on({
	    mouseover:function(){
	    	$(this).css({cursor: 'pointer'});
	    },
	    mouseout:function(){
	    },
	    click:function(){
	    	$(this).css({color:'#059a32'}).siblings().css({color:'#666'});
	    }
	 });
  
    //精选肉类
    $(".Tabbox .Tabs li").click(function(){
    	 $(this).addClass("active2").siblings().removeClass("active2");
    	  var index=$(this).index();
    	  $(".card > ul").eq(index).show().siblings().hide();
    });
    $('.markeyl_sel ul li').click(function(){
    	$('.markeyl_sel ul li').css({backgroundColor:'#f6f6f6',color:'#333'});
    	$(this).css({backgroundColor:'#059a32',color:'#fff'});
    });
//	委托采购
//选项卡
    $('.order_left li').click(function(){
    	$('.order_left li').css({backgroundColor:'#ddd',borderLeft:'none'});
    	$(this).css({backgroundColor:'#fff',borderLeft:'1px solid #059a32'});
    });
    $('.order_option li').on({
    	mouseover:function(){
    		$(this).css({cursor:'pointer'})
    	},
    	click:function(){
	    	$('.order_option li').css({backgroundColor:'#fff'});
	    	$(this).css({backgroundColor:'#059a32'});
    	}
    });
//  用户中心-发布购买
	$('.u_releasebuy_card li').click(function(){
		$('.u_releasebuy_card li').css({backgroundColor:'#eee',color:'#000'});
		$(this).css({backgroundColor:'#059a32',color:'#fff'});
	});
//	市场行情-走势图
//	图表卡片
    $('.markeyl_char_top li').click(function(){
    	$('.markeyl_char_top li').css({backgroundColor:'#fff',color:'#059a32'});
	   	$(this).css({backgroundColor:'#059a32',color:'#fff'});
    })
    $('.markeyl_char_bottom span').click(function(){
    	$(this).css({backgroundColor:'#eee'}).siblings().css({backgroundColor:'#fff'});
    	var index = $(this).index();
    	$(".mar").stop().animate({ left: -937*index+'px'}, 1000);
    })
})



