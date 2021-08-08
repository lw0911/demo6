// JavaScript Document

/*顶部top--导航*/
$(function(){
	$("#tMenu .webnav").hover(function(){
		$(this).addClass("hover").find("div.top_hidebox").show();
	},function(){
		$(this).removeClass("hover").find("div.top_hidebox").hide();
	});

});
$(function(){
  $("#tMenu .webnavdh").hover(function(){
    $(this).addClass("hover").find(".top_hidebox").show();
  },function(){
    $(this).removeClass("hover").find(".top_hidebox").hide();
  });

});

$(function(){
	$(".myShop dl,.shopCar dl").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	})
})


$(function(){
	countDown("2015/8/10 23:59:59","#hotdownTime .day","#hotdownTime .hour","#hotdownTime .minute","#hotdownTime .second");
});
function countDown(time,day_elem,hour_elem,minute_elem,second_elem){
	//if(typeof end_time == "string")
	var end_time = new Date(time).getTime(),//月份是实际月份-1
	//current_time = new Date().getTime(),
	sys_second = (end_time-new Date().getTime())/1000;
	var timer = setInterval(function(){
		if (sys_second > 0) {
			sys_second -= 1;
			var day = Math.floor((sys_second / 3600) / 24);
			var hour = Math.floor((sys_second / 3600) % 24);
			var minute = Math.floor((sys_second / 60) % 60);
			var second = Math.floor(sys_second % 60);
			day_elem && $(day_elem).text(day);//计算天
			$(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
			$(minute_elem).text(minute<10?"0"+minute:minute);//计算分
			$(second_elem).text(second<10?"0"+second:second);// 计算秒
		} else { 
			clearInterval(timer);
		}
	}, 1000);
}


  $(function(){
      var $div_li =$(".t_wrap ul li");
      $div_li.hover(function(){
			$(this).addClass("seled").siblings().removeClass("seled");
			var index =  $div_li.index(this);
			$(".wrapCont > div").eq(index).show().siblings().hide();
      })
  })

  $(function(){
      var $div_li =$(".t_act ul li");
      $div_li.hover(function(){
			$(this).addClass("seled").siblings().removeClass("seled");
			var index =  $div_li.index(this);
			$(".actCont > div").eq(index).show().siblings().hide();
      })
  })


/*限时*/
$(function(){
	countDown("2015/1/10 22:22:11","#xstime .day","#xstime .hour","#xstime .minute","#xstime .second");
});
function countDown(time,day_elem,hour_elem,minute_elem,second_elem){
	//if(typeof end_time == "string")
	var end_time = new Date(time).getTime(),//月份是实际月份-1
	//current_time = new Date().getTime(),
	sys_second = (end_time-new Date().getTime())/1000;
	var timer = setInterval(function(){
		if (sys_second > 0) {
			sys_second -= 1;
			var day = Math.floor((sys_second / 3600) / 24);
			var hour = Math.floor((sys_second / 3600) % 24);
			var minute = Math.floor((sys_second / 60) % 60);
			var second = Math.floor(sys_second % 60);
			day_elem && $(day_elem).text(day);//计算天
			$(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
			$(minute_elem).text(minute<10?"0"+minute:minute);//计算分
			$(second_elem).text(second<10?"0"+second:second);// 计算秒
		} else { 
			clearInterval(timer);
		}
	}, 1000);
}


  $(function(){
      var $div_li =$(".floor_wrap ul li");
      $div_li.hover(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			var index =  $div_li.index(this);
			$(".floor_b_cont > div").eq(index).show().siblings().hide();
      })
  })




