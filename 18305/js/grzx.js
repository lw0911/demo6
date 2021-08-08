// JavaScript Document
//个人中心
$(function(){
	$(".left_c ul li").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	
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

/*$(function(){
	$(".dd_tit ul li").click(function(){
		alert(123)
	})
})*/


$(function(){
  $("#radio_btn1").click(function(){
		var b =  $(this).children("img").attr("src");
		if(b == "../images/b1.gif")
		{
			return false;
		}
		else if(b == "../images/b2.gif")
		{
			$(this).children("img").attr("src","../images/b1.gif");
			$("#radio_btn2").children("img").attr("src","../images/b2.gif");
		}
		
		
	})
	
	
	$("#radio_btn2").click(function(){
		var b =  $(this).children("img").attr("src");
		if(b == "../images/b1.gif")
		{
			return false;
		}
		else if(b == "../images/b2.gif")
		{
			$(this).children("img").attr("src","../images/b1.gif");
			$("#radio_btn1").children("img").attr("src","../images/b2.gif");
		}
		
	})
})


//投诉
$(function(){
	$(".wyts").click(function(){
		$("#ts_c").show();
	})
	$(".pj_btn").click(function(){
		alert("投诉提交成功！");
		$("#ts_c").hide();
	})
})


$(function(){
	//查看物流
	$(".cklogistic,.cklogistic1").each(function(){
		$(this).hover(function(){
			},function(){
			$(this).hide()
		});
	})
	$(".logistic_ck").each(function(){
		$(this).click(function(){
			$(".cklogistic").hide()
			if($(this).next("div").html()==null){
				trace(this,$(this).attr('value1'),$(this).attr('value2'));
			}else{
				$(this).next("div").show().offset({"left":$(this).offset().left-$(this).next("div").width()-35,"top":$(this).offset().top+$(this).height()-35});
			}
			//$(".cklogistic,.cklogistic1").hide()
		});
	})
});













