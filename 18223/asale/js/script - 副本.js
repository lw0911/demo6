/*left nav start*/
$('.all-sort-list > .item').hover(function(){
			var eq = $('.all-sort-list > .item').index(this),				//获取当前滑过是第几个元素
				h = $('.all-sort-list').offset().top,						//获取当前下拉菜单距离窗口多少像素
				s = $(window).scrollTop(),									//获取游览器滚动了多少高度
				i = $(this).offset().top,									//当前元素滑过距离窗口多少像素
				item = $(this).children('.item-list').height(),				//下拉菜单子类内容容器的高度
				sort = $('.all-sort-list').height();						//父类分类列表容器的高度
			$(this).addClass('itemon');
			$(this).children('.item-list').css('display','block');
		},function(){
			$(this).removeClass('itemon');
			$(this).children('.item-list').css('display','none');
		});
/*banner start*/
$(document).ready(function(){
	var len=$(".tu>a").length;
	var i=0;
	var lunhuan;
	var kuan=$(window).width();
	$(".tu>a").css('width',kuan);
	$(".xu:eq(0)").css('backgroundImage','url(images/imagefen.png)');
	function huan()
	{	
		$(".xu:eq("+i+")").css('backgroundImage','url(images/imagefen.png)');
		$(".xu:eq("+i+")").siblings().css('backgroundImage','url(images/imagehei.png)');
		$(".tu>a:eq("+i+")").siblings("a").fadeOut(500);
		$(".tu>a:eq("+i+")").fadeIn(500);
		i=i+1
		if(i==len)
		{i=0}
	}
	lunhuan=setInterval(huan,4000);
	$("#hao").find(".xu").click(function(){
		j=$(this).index();
		$(".xu:eq("+j+")").css('backgroundImage','url(images/imagefen.png)');
		$(".xu:eq("+j+")").siblings().css('backgroundImage','url(images/imagehei.png)');
		$(".txt>em:eq("+j+")").siblings("em").fadeOut("fast");
		$(".txt>em:eq("+j+")").fadeIn("fast");
		i=j;
		$(".tu>a:eq("+j+")").siblings("a").fadeOut(500);
		$(".tu>a:eq("+j+")").fadeIn(500);
	})
})
/*diffrent border-color start*/
window.onload = function () {
	var ul = document.getElementById ("products");
var lis = ul.getElementsByTagName("li");

lis[0].className="keynote";
lis[1].className="keynote2";
lis[2].className="keynote3";
lis[3].className="keynote4";
	
var dl = document.getElementById ("products2");
var lis2 = dl.getElementsByTagName("li");

lis2[0].className="keynote";
lis2[1].className="keynote2";
lis2[2].className="keynote3";
lis2[3].className="keynote4";

var dd = document.getElementById ("products3");
var lis3 = dd.getElementsByTagName("li");

lis3[0].className="keynote";
lis3[1].className="keynote2";
lis3[2].className="keynote3";
lis3[3].className="keynote4";
	
var pp = document.getElementById ("products4");
var lis4 = pp.getElementsByTagName("li");

lis4[0].className="keynote";
lis4[1].className="keynote2";
lis4[2].className="keynote3";
lis4[3].className="keynote4";
		
	
var ol = document.getElementById ("products1");
var lis1 = ol.getElementsByTagName("li");
for (var i = 0; i < lis1.length; i++) {
	
	
	
};
lis1[0].className="keynote";
lis1[1].className="keynote2";
lis1[2].className="keynote3";
lis1[3].className="keynote4";
	
var dt = document.getElementById ("products21");
var lis21 = dt.getElementsByTagName("li");
for (var i = 0; i < lis21.length; i++) {
};
lis21[0].className="keynote";
lis21[1].className="keynote2";
lis21[2].className="keynote3";
lis21[3].className="keynote4";

var p = document.getElementById ("products31");
var lis31 = p.getElementsByTagName("li");

lis31[0].className="keynote";
lis31[1].className="keynote2";
lis31[2].className="keynote3";
lis31[3].className="keynote4";

}



/*right qq start*/
$(function(){
	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"124px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#ae1c1c"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#000"})	
	});
});
//回到顶部函数
function goTop(){
	$('html,body').animate({'scrollTop':0},300);
}

$(function(){
/*	click left diyformpen */
	$(".DiyOpen").click( function () {
		$('.DiyForm').css({'display':'block'});
		
		$(this).css({'display':'none'});
		
		});
	/*	click bottom diyformclose */
	$(".DiyClose").click( function () {
		$('.DiyForm').css({'display':'none'});
		$('.DiyOpen').css({'display':'block'});
		});
	
	})






