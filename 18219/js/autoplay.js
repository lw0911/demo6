/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-01-09 10:25:13
 * @version $Id$
 */
$(function(){
	var lileng=$('#scrollbox ul li').width();
	var linum=$('#scrollbox ul li').length;
	$('#scrollbox ul').css('width',lileng*linum +'px');
	var i=0;
	function autoplay(){ 
		if(i<3){i++;}else{i=0;}
		$('#scrollbox ul').animate({left:-lileng*i + 'px'},1000);
		$(".dot li").eq(i).addClass("curdot").siblings().removeClass("curdot");
	}
	$(".dot li").click(function(){
	    i=$(this).index();
		autoplay();
	});

	setInterval(autoplay,4000);

	
	})
