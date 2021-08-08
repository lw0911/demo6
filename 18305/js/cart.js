// JavaScript Document
$(function(){
	$(".hyqx span").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	});
	$(".zfyxz").hide();
	$(".zffsbox li").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		$(".zfyxz").show();
		$(".zffsboxtext").empty().append($(this).text()).show();	
	});
	
	$(".qrshdz li").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	});
	
	$(".mylisttable table tr td input:radio").click(function(){
													$(this).parent().parent().addClass("colorred").siblings().removeClass("colorred")
													});
	
	$("#xhm dl").mouseenter(function(){
									 $(this).addClass("hoverxhm")
													});
	$("#xhm dl").mouseleave(function(){
									 $(this).removeClass("hoverxhm")
													});
	$("#xhm dl dd input").click(function(e){
								 $("#xhm dl").removeClass("hoverxhmbg")
								$(this).parent().parent().addClass("hoverxhmbg").siblings().removeClass("hoverxhmbg");	
	});
	$(".txrwzldx dl dd span").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	});
	
	
	$(".xhyqd").click(function(){
									$("#xhyw").hide();
									$("#xhyy").show();
									$("#xhmy").hide();
									$("#xhmw").show();
									$("#x_taocan").hide();
									$("#xy_main").hide();
									$("#xhmtit").hide();
											 });
											 
											 
											 
											 
											 
	$(".xhycxbut").click(function(){
									$("#xhyw").show();
									$("#xhyy").hide();
									$("#xhmy").show();
									$("#xhmy .cartbox").hide();
									$("#xhmw").hide();
									$("#txrwzlw").hide();
									$("#txrwzly").show();
								
											 });										 
	
	$(".xhmqd").click(function(){
									$("#xhyw").hide();
									$("#xhyy").show();
									$("#xhmy").show();
									$("#xhm_x").show();
									$("#xhmw").hide();
									$("#txrwzlw").show();
									$("#txrwzlw .rw_tx").show();
									$("#txrwzlw .rw_xg").hide();
									$("#txrwzly").hide();
									$("#x_taocan").hide();
									$("#xhm_x .xy_main").show();
									$("#xhm_x .yy_main").hide();
									$("#xhmtit").show();
									
	
	});
	
	
		
	$(".xg_rwzl").click(function(){
									$("#xhyw").hide();
									$("#xhyy").show();
									$("#xhmy").show();
									$("#xhm_x").show();
									$("#xhmw").hide();
									$("#txrwzlw").show();
									$("#txrwzlw .rw_tx").show();
									$("#txrwzlw .rw_xg").hide();
									$("#txrwzly").hide();
									$("#x_taocan").hide();
									$("#xhm_x .xy_main").show();
									$("#xhm_x .yy_main").hide();
									$("#xhmtit").show();
									$("#txrwzldx").show();
									
									
	
	});
	
	
	
	$(".xhmcxbut").click(function(){
									$("#xhyw").hide();
									$("#xhyy").show();
									$("#xhmy").show();
									$("#xhm_x").hide();
									$("#xhmw").show();
									$("#txrwzlw").hide();
									$("#txrwzly").show();
									$("#x_taocan").hide();
									$("#xhmtit").show();
											 });
											 
											 
	$(".x_taocan").click(function(){
									$("#xhyw").hide();
									$("#xhyy").show();
									$("#xhmy").show();
									$("#xhm_x").show();
									$("#xhmw").hide();
									$("#txrwzlw").show();
									$("#txrwzlw .rw_tx").hide();
									$("#txrwzlw .rw_xg").show();
									
									$("#txrwzly").hide();
									$("#x_taocan").show();
									$("#x_hy").hide();
									$("#xhmtit").show();
											 });		
											 
							 
											 
											 
											 
		$(".xg_taocan").click(function(){
									$("#xhyw").hide();
									$("#xhyy").show();
									$("#xhmy").show();
									$("#xhm_x").show();
									$("#xhmw").hide();
									$("#txrwzlw").show();
									$("#txrwzly").hide();
									$("#x_taocan").show();
									$("#x_taocan .taocan_main").hide();
									$("#x_taocan .taocan2_c").show();
							      	$("#x_hy").hide();
									$("#xhmtit").show();
											 });
											 
											 
											 
			$(".tc_xg").click(function(){
									$("#xhyw").hide();
									$("#xhyy").show();
									$("#xhmy").show();
									$("#xhm_x").show();
									$("#xhmw").hide();
									$("#txrwzlw").show();
									$("#txrwzly").hide();
									$("#x_taocan").show();
									$("#x_taocan .taocan_main").show();
									$("#x_taocan .taocan2_c").hide();
							      	$("#x_hy").hide();
									$("#xhmtit").show();
											 });
											 
											 
			  
			$(".ycmain").click(function(){
									$("#xhyw").hide();
									$("#xhyy").show();
									$("#xhmy").show();
									 $("#xhmtit").hide();
									$("#xhm_x").show();
									$("#xhm_x .xy_main").hide();
									$("#xhm_x .yy_main").show();
									$("#xhmw").hide();
									$("#txrwzlw").show();
									$("#txrwzly").hide();
									$("#x_taocan").hide();
								   $("#xhmtitxg").show();
											 }); 
											 
		 $(".hm_xg").click(function(){
									$("#xhyw").hide();
									$("#xhyy").show();
									$("#xhmy").hide();
									$("#xhmw").hide();
									$("#xhm_x").show();
									$("#x_taocan").hide();
									$("#xhm_x .xy_main").show();
									$("#xhm_x .yy_main").hide();
									$("#xhmtit").show();
									
									 $("#xhmtitxg").hide();
									
								
									
											 });		 
											 
											 
											 
											 
											 
											 
	$(".txrwzlbut").click(function(){
					   $(".txrwzldx span").removeClass("hover")
					   })
	$(".xzzffs ul li:gt(13):not(:last)").hide();
	$(".xzzffs ul li:last").click(function(){
										$(".xzzffs ul li:gt(13)").show();
										$(this).hide();
										})
										
										
										
										
										
										
										//选择套餐效果
	 $(".service_detail").click(function(){
		var $tr = $(this).parent().parent().next("tr.tips_tr");
		if($tr.is(":visible")){
			$tr.hide();
			$(this).text("查看");
		}else{
			$tr.show();
			$(this).text("收起");
			$(this).parent().addClass('rightline');
		}
		$(this).parent().parent().siblings().find("a.service_detail").text("查看");
		$tr.siblings("tr.tips_tr").hide();
	});
   $(":radio").click(function(){
		$("#lowest_fee").html($(this).parent().parent().find("td").eq(6).text());
		$("tr.tips_tr").hide();
		$(this).parent().parent().css("color","#f30");
		$(this).parent().parent().siblings().css("color","#666");
		$(".service_detail").text("查看");
	});
	
	
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


	
	
//显示城市
//$(".listmod_img").hover(function(){
//		$(this).addClass('hand').find(".popu").show();
//	},function(){
//		$(this).find(".popu").hide();
//	});
	
	$(".time_tel").hover(function(){
$(this).next().find(".popu").show();
		},function(){
			$(this).next().find(".popu").hide();
			});
	
	
	

	
	//$('.qrshdz li').hover(function(){
			//$(this).next().find(".xgbdz").show();
		//},function(){
			//$(this).next().find(".xgbdz").hide();
			//});


	
	});
//function show_xdz1
/*function show_xdz1(){
   document.getElementById("xgdz1").style.display="block";
   document.getElementById("xgdz2").style.display="none";
} 
*/
function show_xgdz2(){
   document.getElementById("xgdz2").style.display="block";
         document.getElementById("xgdz1").style.display="none";
} 

//function show_xdz2
function show_xdz2(){
   document.getElementById("xdz2").style.display="block";
   }
function show_xdz3(){
   document.getElementById("xdz3").style.display="block";
   }
   function show_xdz4(){
   document.getElementById("xdz4").style.display="block";
   }

function show_xdz5(){
   document.getElementById("xdz5").style.display="block";
   }

//滑动门
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}

//弹出层
function show(cover,id){	
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;      
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 
	(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;		
	//如果是ie6，隐藏页面select
	if(Sys.ie=="6.0"){
		var n=document.getElementsByTagName("select").length;
		var m=document.getElementById(id).getElementsByTagName("select").length;
		for(var i=0;i<n;i++){
			document.getElementsByTagName("select")[i].style.display= 'none';}
		for(var j=0;j<m;j++){		
			document.getElementById(id).getElementsByTagName("select")[j].style.display= '';}
	}	
	var objCover=document.getElementById(cover);
	var objId=document.getElementById(id);
	var scrollW=document.documentElement.scrollWidth;
	var scrollH=document.documentElement.scrollHeight;
	if (Sys.safari || Sys.chrome){
		var scrollH=document.body.scrollHeight;
		var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.body.scrollTop;
	}else{
		var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.documentElement.scrollTop;}
	var L=(document.documentElement.clientWidth-objId.clientWidth)/2+document.documentElement.scrollLeft;	
	objCover.style.width=scrollW+"px";
	objCover.style.height=scrollH+"px";
	objCover.style.visibility="visible";	
	objId.style.top=T+"px";
	objId.style.left=L+"px";
	objId.style.visibility="visible";
		
	window.onresize=function (){	
		var objCover=document.getElementById(cover);
		var objId=document.getElementById(id);
		var scrollW=document.documentElement.scrollWidth;
		if(document.documentElement.clientHeight >= document.documentElement.scrollHeight){
			var scrollH=document.documentElement.clientHeight;	
		}else{
			var scrollH=document.documentElement.scrollHeight;}
		if (Sys.safari || Sys.chrome) {
			var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.body.scrollTop;
		}else{
			var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.documentElement.scrollTop;}
		var L=(document.documentElement.clientWidth-objId.clientWidth)/2+document.documentElement.scrollLeft;		
		objCover.style.width=scrollW+"px";
		objCover.style.height=scrollH+"px";		
		objId.style.top=T+"px";
		objId.style.left=L+"px";
	}
}
function hide(cover,id){
	//将页面全部select换件设为可用状态
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;    
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 
	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;	
	if(Sys.ie=="6.0"){
		var n=document.getElementsByTagName("select").length;
		for(var i=0;i<n;i++){
			document.getElementsByTagName("select")[i].style.display= '';
		}
	}
	var objCover=document.getElementById(cover);
	var objId=document.getElementById(id);
	objCover.style.visibility="hidden";
	objId.style.visibility="hidden";
}





//倒计时

  var maxtime = 60*60 //一个小时，按秒计算，自己调整!
  function CountDown()
  {   if(maxtime>=0)
  {   minutes = Math.floor(maxtime/60);   seconds = Math.floor(maxtime%60);   msg = minutes+"分"+seconds+"秒";  
   document.all["timer"].innerHTML=msg;   if(maxtime == 5*60) alert('注意，还有5分钟!');   --maxtime;   }   else{   clearInterval(timer);   alert("时间到，结束!"); } }   timer = setInterval("CountDown()",1000);  
