// JavaScript Document

jQuery(".fullSlide").slide({ titCell:".hd li", mainCell:".bd ul", effect:"fold",  autoPlay:true, delayTime:700 });


$(
	function(){
		$(".msmj .food li a").mouseover(
		function(){
			$(".msmj .food li").siblings().css({"opacity":"0.5"});
			$(this).parent().css({"opacity":"1"});
		});	
		$(".msmj .food li a").mouseout(
		function(){
			$(".msmj .food li").siblings().css({"opacity":"1"});
		});	
	});


$(
	function(){
		$(".msmj .fruit li a").mouseover(
		function(){
			$(".msmj .fruit li").siblings().css({"opacity":"0.5"});
			$(this).parent().css({"opacity":"1"});
		});	
		$(".msmj .fruit li a").mouseout(
		function(){
			$(".msmj .fruit li").siblings().css({"opacity":"1"});
		});	
	});
	
	
$(function(){
$(".dz .dz-dj ul").find("li").each(function() {
$(this).hover(function() {               //当鼠标移上去时它的兄弟图片透明度降到0.7
$(this).siblings().stop().fadeTo("slow",0.5);
},
function() {                            //当鼠标移出的时候它的兄弟图片透明度回到1
$(this).siblings().stop().fadeTo("slow",1);
});
});
})	
	
	
jQuery(".slideTxtBox").slide();	
	
//大图切换
		jQuery(".nr-hd").slide({ titCell:".smallImg li", mainCell:".bigImg", effect:"fold", autoPlay:true,delayTime:200,
			startFun:function(i,p){
				//控制小图自动翻页
				if(i==0){ jQuery(".nr-hd .sPrev").click() } else if( i%4==0 ){ jQuery(".nr-hd .sNext").click()}
			}
		});

		//小图左滚动切换
		jQuery(".nr-hd .smallScroll").slide({ mainCell:"ul",delayTime:100,vis:4,scroll:4,effect:"left",autoPage:true,prevCell:".sPrev",nextCell:".sNext",pnLoop:false });	
	
	

//内容页图片集
myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_games_tb'//风格
});

$("#add").click(function(){
var n=$("#num").html();
var num=parseInt(n)+1;
if(num==0){alert("cc");}
$("#num").html(num);
});
$("#jian").click(function(){
var n=$("#num").html();
var num=parseInt(n)-1;
if(num==0){alert("0为无效数字"); return}
$("#num").html(num);
});


jQuery(".scrollBox").slide({ titCell:".list li", mainCell:".piclist", effect:"left",vis:4,scroll:4,delayTime:800,trigger:"click",easing:"easeOutCirc"});


/*jQuery(".sideMenu").slide({
				titCell:"h3", 
				targetCell:"ul", 
				effect:"slideDown", 
				delayTime:300 , 
				triggerTime:150, 
				trigger:"click",
				defaultPlay:true,
				returnDefault:false 
				});
*/	

	
	