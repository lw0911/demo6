// JavaScript Document


function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}

	$(function(){			
	   $(".jqzoom").jqueryzoom({
			xzoom:400,
			yzoom:400,
			offset:10,
			position:"right",
			preload:1,
			lens:1
		});
	
		$("#spec-list img").bind("mouseover",function(){
			var src=$(this).attr("src");
			$("#spec-n1 img").eq(0).attr({
				src:src.replace("\/n5\/","\/n1\/"),
				jqimg:src.replace("\/n5\/","\/n0\/")
			});
			$(this).css({
				"border":"1px solid #0085d0"
				
			});
		}).bind("mouseout",function(){
			$(this).css({
				"border":"1px solid #ddd"
				
			});
		});				
	})
	
	
	//库存
	$(function(){
		$(".kucun").hover(function(){
			$(".kucun_c").show();
		},function(){
			$(".kucun_c").hide();
		})
		
		$(".kucun_c").mouseover(function(){
			$(".kucun_c").show();
		})
		$(".kucun_c").mouseout(function(){
			$(".kucun_c").hide();
		})
		
		$(".kucun_c a").click(function(){
			var text = $(this).text();
			$(".kucun").text(text)
		})
	})
	
//颜色选择
$(function(){
	$(".yanse_img").click(function(){
		$(this).addClass("yanse_img_click").siblings().removeClass("yanse_img_click")
		
	})
	
	//下单菜单
	$(".zf_select").click(function(event)
		{
			$(this).next("div.ahyx_qhds").show();
			 event.stopPropagation();
		}
	);
	$(".ahyx_qhds li").click(function()
		{
			$(this).parent().parent().prev().find("span.ds").text($(this).text());
			$(this).parent().parent().hide();
		}
	);
	$(".ahyx_qhds li").hover(function()
		{
			$(this).addClass("hover").siblings().removeClass("hover");
		}
	);
	$("body").click(function(){
		$("div.ahyx_qhds").hide();
	});	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
	




//页面有select时弹出层
function showSelCover(cover,id){
	//将页面全部select换件设为不可用状态	
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;    
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 
	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;	
	//如果是ie6，隐藏页面select
	if(Sys.ie=="6.0"){
		
		var n=document.getElementsByTagName("select").length;
		var m=$('#'+id).find('select').length;
		for(var i=0;i<n;i++){
			document.getElementsByTagName("select")[i].style.display= "none";
		}
		for(var j=0;j<m;j++){
			$('#'+id).find('select')[j].style.display= "block";
		}
	}		
	var objCover=document.getElementById(cover);
	var objId=document.getElementById(id);
	var scrollW=document.documentElement.scrollWidth;
	if(document.documentElement.clientHeight >= document.documentElement.scrollHeight){
		var scrollH=document.documentElement.clientHeight;		
	}else{
		var scrollH=document.documentElement.scrollHeight;		
	}
	if (Sys.safari) {
		var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.body.scrollTop;
	}else{
		var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.documentElement.scrollTop;	
	}
	var L=(document.documentElement.clientWidth-objId.clientWidth)/2+document.documentElement.scrollLeft;
	
	objCover.style.width=scrollW+"px";
	objCover.style.height=scrollH+"px";
	objCover.style.visibility="visible";
	
	objId.style.top=T+"px";
	objId.style.left=L+"px";
	objId.style.visibility="visible";
}

//function hideCover
function hideSelCover(cover,id){
	//将页面全部select换件设为可用状态
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;    
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :  0;	
	if(Sys.ie=="6.0"){
		var n=document.getElementsByTagName("select").length;
		for(var i=0;i<n;i++){
			document.getElementsByTagName("select")[i].style.display= "block";
		}
	}
	var objCover=document.getElementById(cover);
	var objId=document.getElementById(id);
	objCover.style.visibility="hidden";
	objId.style.visibility="hidden";
}
	
	
	
	
	
	
	
	
	