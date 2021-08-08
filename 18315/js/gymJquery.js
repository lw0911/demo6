// JavaScript Document

function Gym(gym_div_height,speed){
	var gym_ul=$(".gym_div ul");
	var gym_li=$(".gym_div ul li");
	var i=100,j=0;
	var gym_li_length=gym_li.length;
	gym_ul.css({width:gym_li_length*100+"%"});
	gym_li.css({width:i/gym_li_length+"%"});
	$(".gym_div").css({height:gym_div_height});
	for(var b=1;b<=gym_li_length; b++){
		$(".gym_submit").append("<span></span>")
		}
	var gym_span= $(".gym_submit span");
	gym_span.eq(0).addClass("gym_submit_span"); 
	function Gymsubmit(j){
		
		gym_span.eq(j).addClass("gym_submit_span").siblings().removeClass("gym_submit_span");	
		
		}
	function Mover(){
		j++;
		if(j<gym_li_length){
			gym_ul.animate({
				left:"-"+j*100+"%"
				});
			Gymsubmit(j);
						
			}
		else {
			j=0;
			gym_ul.animate({
				left:"0%"
				});
			Gymsubmit(j);
				
			}	
		
		}
var gym=setInterval(Mover,speed);
	$(".gym_div").hover(function(){
		clearInterval(gym);
		},function(){
			 gym=setInterval(Mover,speed)
			})
	gym_span.mouseover(function(){
		j=a=gym_span.index(this);
		gym_ul.animate({
				left:"-"+a*100+"%"
				});
		 Gymsubmit(j)		
		})
		}	