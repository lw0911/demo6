// JavaScript Document
//号码选择
$(function(){
	$(".add_zone img").live("click",function(){
		//alert(123)
		$(this).parent().hide();
	})
})

$(function(){
	$(".sjsx_c dl dd a").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var text = $(this).text();
		var html = $('<span class="add_zone">'+text+'  <img src="../images/yy3.gif" alt=""  ></span>');
		$(".tj>span").append(html);
	})
	
	
	$(".qrshdz li").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	});
	
	
	
})

//搜索框
$(function(){
	$(".lh_text").val("请至少输入两位数字")	;
	$('.lh_text').focus(function()
	{
		var txt_address = $(this).val(); 
		
		if(txt_address == "请至少输入两位数字")
			$(this).val("");
				
	}		
	)
	$('.lh_text').blur(function()
	{
		var txt_address = $(this).val();  
		if(txt_address == "")
			$(this).val("请至少输入两位数字")
	})
})

//选项卡用js


function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}


//选号区

$(function(){
	$(".number ul li").hover(function(){
		$(this).addClass("hover");
		$(this).children(".number_wz").hide();
		$(this).children(".number_wz1").show();
	},function(){
		$(this).removeClass("hover");
		$(this).children(".number_wz").show();
		$(this).children(".number_wz1").hide();
	})
})

//单选按钮特效

$(function(){
	$(".ul_raido li").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	})
})

//套餐选择切换tab

$(function(){
	$(".taocan1_t ul li").live("mouseover",function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var index = $(this).index();
		//console.info(index)
		$(this).parent().parent().siblings(".taocan1_c").eq(index).show().siblings(".taocan1_c").hide();
		//$(".taocan1_c").eq(index).show().siblings(".taocan1_c").hide();
	    
	})
	
	$(".taocan li").mouseover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var index = $(this).index();
		//console.info("整体"+index)
		$(".taocan1").eq(index).show().siblings(".taocan1").hide();
		
		
	})
	
	
})


function show_xgdz2(){
   document.getElementById("xgdz2").style.display="block";
         document.getElementById("xgdz1").style.display="none";
} 






















