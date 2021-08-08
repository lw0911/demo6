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

/*hot and news products start*/
$(function(){
	/*hot products start*/
	var ul = document.getElementById ("carousel-default");
	var lis = ul.getElementsByTagName("li");
		lis[0].className="keynote";
		lis[1].className="keynote2";
		lis[2].className="keynote3";
		lis[3].className="keynote4";
		lis[4].className="keynote";
		lis[5].className="keynote2";
		lis[6].className="keynote3";
		lis[7].className="keynote4";
		lis[8].className="keynote";
		lis[9].className="keynote2";
		lis[10].className="keynote3";
		lis[11].className="keynote4";
		
	/*news products start*/	
	var dl = document.getElementById ("carouselDefault");
	var lis2 = dl.getElementsByTagName("li");
		lis2[0].className="keynote";
		lis2[1].className="keynote2";
		lis2[2].className="keynote3";
		lis2[3].className="keynote4";
		lis2[4].className="keynote";
		lis2[5].className="keynote2";
		lis2[6].className="keynote3";
		lis2[7].className="keynote4";
		lis2[8].className="keynote";
		lis2[9].className="keynote2";
		lis2[10].className="keynote3";
		lis2[11].className="keynote4";
	})

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


/*bottom from start*/
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






