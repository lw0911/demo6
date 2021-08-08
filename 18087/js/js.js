// JavaScript Document
$(function(){
	//头部我的账户
	$(".my-account").hover(function(){
		$(this).find("ul").stop(true,true).slideDown();
		},function(){
			$(this).find("ul").stop(true,true).slideUp();
			})
	//.index-nav-list
	$(".index-nav-list").hover(function(){
		$(this).find(".index-nav-tanbox").stop(true,true).slideDown();
		},function(){
			$(this).find(".index-nav-tanbox").stop(true,true).fadeOut();
			})	
	//左侧导航
	$(".left-nav-dt-cur").next("dd").slideDown();
	$(".left-nav dt").click(function(){
		$(this).next("dd").slideDown().siblings("dd").slideUp();
		})
	//产品目录
	$(".product-select td a").click(function(){
		$(this).addClass("pro-sel-cur").siblings("a").removeClass("pro-sel-cur");
		})
	$(".product-select-two a").click(function(){
		$(this).addClass("pro-sel-cur-two").siblings("a").removeClass("pro-sel-cur-two");
		})
	$(".prolist dl:eq(3),.prolist dl:eq(7),.prolist dl:eq(11),.prolist dl:eq(15),.prolist dl:eq(19),.prolist dl:eq(23),.prolist dl:eq(27)").css("margin-right","0")
	
	/*快速产品*/
	$(".shopp-1 .sopp-1-list a").click(function(){
		var shoptext1=$(this).attr("title");
		$(".cond-1").html(shoptext1);
		$(".cond-1").fadeIn();
		$(this).parents(".shopp-1").slideUp();
		$(".shopp-2").slideDown();
		$(".jia1").slideDown(1000);
		})
	$(".shopp-2 .sopp-1-list a").click(function(){
		var shoptext1=$(this).attr("title");
		$(".cond-2").html(shoptext1);
		$(".cond-2").fadeIn();
		$(this).parents(".shopp-2").slideUp();
		$(".shopp-3").slideDown();
		$(".jia2").slideDown(1000);
		})
	$(".shopp-3 .sopp-1-list a").click(function(){
		var shoptext1=$(this).attr("title");
		$(".cond-3").html(shoptext1);
		$(".cond-3").fadeIn();
		$(this).parents(".shopp-3").slideUp();
		$(".shopp-4").slideDown();
		$(".jia3").slideDown(1000);
		})
	$(".shopp-4 .sopp-1-list a").click(function(){
		var shoptext1=$(this).attr("title");
		$(".cond-4").html(shoptext1);
		$(".cond-4").fadeIn();
		$(this).parents(".shopp-4").slideUp();
		$(".shopp-select").slideDown(1000)
		})
	$(".ljss").click(function(){
		$(".shopp-hide").slideDown();
		})
	//产品详情 数量加减
	$(".proinfo .add").click(function(){
	  var n=$(".proinfo .num").val();
	  var num=parseInt(n)+1;
	 if(num==0){alert("cc");}
	  $(".proinfo .num").val(num);
		});
		$(".proinfo .jian").click(function(){
		  var n=$(".proinfo .num").val();
		  var num=parseInt(n)-1;
		 if(num==0){alert("不能为0!"); return}
		  $(".proinfo .num").val(num);
  		});
	//购物车 数量加减
	$(".car-all-pro .add").click(function(){
	  var n=$(this).prev(".num").val();
	  var num=parseInt(n)+1;
		 if(num==0){alert("cc");}
		  $(this).prev(".num").val(num);
		});
		
		$(".car-all-pro .jian").click(function(){
		  var n=$(this).next(".num").val();
		  var num=parseInt(n)-1;
		 if(num==0){alert("不能为0!"); return}
		  $(this).next(".num").val(num);
  		});
     //产品详情 选项卡
	 $(".pro-eq li").click(function(){
		 $(this).addClass("pro-eq-cur").siblings("li").removeClass("pro-eq-cur");
		 var proindex=$(this).index();
		 $(".show-hide").eq(proindex).fadeIn().siblings(".show-hide").hide();
		 })
	//产品详情 评论回复
	$(".re-show").click(function(){
		$(this).hide();
		$(this).next(".re-hide").show();
		$(this).parents("div").next(".reply").show();
		$(this).parents("div").prev("table").show();//显示回复列表
		})	
	$(".re-hide").click(function(){
		$(this).hide();
		$(this).prev(".re-show").show();
		$(this).parents("div").next(".reply").hide();
		$(this).parents("div").prev("table").hide();//隐藏回复列
		})	
	/*新增 修改地址*/
	$(".add-address").click(function(){
		$(".car-add-address").slideToggle().siblings("form").hide();
		})
	$(".add-address2").click(function(){
		$(".car-uppdate-address").slideToggle().siblings("form").hide();
		})
	$(".acr-trclick-cur input").attr("checked","checked")
	$(".trclick tr").click(function(){
		$(this).addClass("acr-trclick-cur").siblings("tr").removeClass("acr-trclick-cur");
		$(this).find("input").attr("checked","checked")
		})
	//在线支付
	$(".trclick tr").click(function(){
		$(".car-pay-s").hide();
		})
	$(".zaixian").click(function(){
		$(".car-pay-s").show();
		})
	/*发票*/
	$(".uppdate-fapiao").click(function(){
		$(".car-uppdate-fpiao").slideToggle();
		})
	//订单列表
	$(".order-eq a").click(function(){
		$(this).addClass("oreder-cur").siblings("a").removeClass("oreder-cur");
		})
	//个人中心 地址
	$(".readonlys input").attr("readonly","readonly");
	$(".bianji").click(function(){
		$(this).parents(".address-list").find("form").removeClass("readonlys");
		$(this).parents(".address-list").find("form").find("input").removeAttr("readonly");
		})
	})
	
	
	