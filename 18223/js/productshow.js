//pages javascript

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
	
	
	/*products show some imgs scroll start*/
	$(function (){
	var slid = $('ul.slide_box li'),controls = $('ul.bx-controls a');
	slid.addClass('none');
	slid.eq(0).removeClass('none');

	var slideindex = 0;
	function switchi() {
		if(slideindex == slid.length - 1){
			slideindex = 0;
		}else {
			slideindex = slideindex + 1;
		}
		slid.addClass('none');
		slid.eq(slideindex).removeClass('none');
		controls.removeClass('actives');
		controls.eq(slideindex).addClass('actives');
	}
	
	var timer = setInterval(switchi, 3000);

	function options(indexs) {
		slid.addClass('none');
		slid.eq(indexs).removeClass('none');
		controls.removeClass('actives');
		controls.eq(indexs).addClass('actives');
	}

	$('a.options').click(function(){
		var drec = $(this).data('drec');
		if(drec == 'pre') {
			if(slideindex == 0) {
				slideindex = 4;
			}else {
				slideindex = slideindex - 1;
			}
		}else {
			if(slideindex == 4) {
				slideindex = 0;
			}else {
				slideindex = slideindex + 1;
			}
		}
		clearInterval(timer);
		options(slideindex);
		timer = setInterval(switchi, 3000);
	});

	$('ul.bx-controls li').hover(function(){
		slideindex = $(this).index();
		clearInterval(timer);
		options(slideindex);
	},function(){
		timer = setInterval(switchi, 3000);
	});
	
})