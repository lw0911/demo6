// JavaScript Document
//首页幻灯片轮播JS
$(function() {
        var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
        var len = $("#focus ul li").length; //获取焦点图个数
        var index = 0;
        var picTimer;
        
        //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
        var btn = "<div class='btnBg'></div><div class='btn'>";
        for(var i=0; i < len; i++) {
          btn += "<span></span>";
        }
        btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
        $("#focus").append(btn);
        $("#focus .btnBg").css("opacity",0.5);

        //为小按钮添加鼠标滑入事件，以显示相应的内容
        $("#focus .btn span").css("opacity",0.4).mouseover(function() {
          index = $("#focus .btn span").index(this);
          showPics(index);
        }).eq(0).trigger("mouseover");

        //上一页、下一页按钮透明度处理
        $("#focus .preNext").css("opacity",0.2).hover(function() {
          $(this).stop(true,false).animate({"opacity":"0.5"},300);
        },function() {
          $(this).stop(true,false).animate({"opacity":"0.2"},300);
        });

        //上一页按钮
        $("#focus .pre").click(function() {
          index -= 1;
          if(index == -1) {index = len - 1;}
          showPics(index);
        });

        //下一页按钮
        $("#focus .next").click(function() {
          index += 1;
          if(index == len) {index = 0;}
          showPics(index);
        });

        //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
        $("#focus ul").css("width",sWidth * (len));
        
        //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
        $("#focus").hover(function() {
          clearInterval(picTimer);
        },function() {
          picTimer = setInterval(function() {
            showPics(index);
            index++;
            if(index == len) {index = 0;}
          },2000); //此4000代表自动播放的间隔，单位：毫秒
        }).trigger("mouseleave");
        
        //显示图片函数，根据接收的index值显示相应的内容
        function showPics(index) { //普通切换
          var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
          $("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
          //$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
          $("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
        }
      });
	  
	  
/*图片滚动BOTTOM*/  
  $(function(){
		function DY_scroll(wrapper,bpre,bnext,img,speed,or){
			var  wrapper = $(wrapper);
			var bpre = $(bpre);
			var bnext = $(bnext);
			var img = $(img).find('ul');;
			var w = img.find('li').outerWidth(true);
			var s = speed;
			bnext.click(function()
			{
				img.animate({'margin-left':-w},function()
				{
					img.find('li').eq(0).appendTo(img);
					img.css({'margin-left':0});
				})
			})
			bpre.click(function()
			{
				img.find('li:last').prependTo(img);
				img.css({'margin-left':-w});
				img.animate({'margin-left':0});
			})
			if(or == true){
				ad = (function(){bnext.click();},s*1000);
				wrapper.hover(function(){clearInterval(ad);
			},function(){
				ad = setInterval(function(){bnext.click();},s*1000);})
			}
		}
		DY_scroll('.img-scroll','.bpre','.bnext','.img-list',3,true);
 })
 
//十元尝鲜幻灯片轮播JS
$(function() {
        var sWidth = $("#tenTopFocus").width(); //获取焦点图的宽度（显示面积）
        var len = $("#tenTopFocus ul li").length; //获取焦点图个数
        var index = 0;
        var picTimer;
        
        //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
        var btn = "<div class='btnBg'></div><div class='btn'>";
        for(var i=0; i < len; i++) {
          btn += "<span></span>";
        }
        btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
        $("#tenTopFocus").append(btn);
        $("#tenTopFocus .btnBg").css("opacity",0.5);

        //为小按钮添加鼠标滑入事件，以显示相应的内容
        $("#tenTopFocus .btn span").css("opacity",0.4).mouseover(function() {
          index = $("#tenTopFocus .btn span").index(this);
          showPics(index);
        }).eq(0).trigger("mouseover");

        //上一页、下一页按钮透明度处理
        $("#tenTopFocus .preNext").css("opacity",0.2).hover(function() {
          $(this).stop(true,false).animate({"opacity":"0.5"},300);
        },function() {
          $(this).stop(true,false).animate({"opacity":"0.2"},300);
        });

        //上一页按钮
        $("#tenTopFocus .pre").click(function() {
          index -= 1;
          if(index == -1) {index = len - 1;}
          showPics(index);
        });

        //下一页按钮
        $("#tenTopFocus .next").click(function() {
          index += 1;
          if(index == len) {index = 0;}
          showPics(index);
        });

        //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
        $("#tenTopFocus ul").css("width",sWidth * (len));
        
        //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
        $("#tenTopFocus").hover(function() {
          clearInterval(picTimer);
        },function() {
          picTimer = setInterval(function() {
            showPics(index);
            index++;
            if(index == len) {index = 0;}
          },2000); //此4000代表自动播放的间隔，单位：毫秒
        }).trigger("mouseleave");
        
        //显示图片函数，根据接收的index值显示相应的内容
        function showPics(index) { //普通切换
          var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
          $("#tenTopFocus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
          //$("#tenTopFocus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
          $("#tenTopFocus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
        }
      });
    

  //限量预售幻灯片轮播JS
   $(function() {
        var sWidth = $("#advTopFocus").width(); //获取焦点图的宽度（显示面积）
        var len = $("#advTopFocus ul li").length; //获取焦点图个数
        var index = 0;
        var picTimer;
        
        //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
        var btn = "<div class='btnBg'></div><div class='btn'>";
        for(var i=0; i < len; i++) {
          btn += "<span></span>";
        }
        btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
        $("#advTopFocus").append(btn);
        $("#advTopFocus .btnBg").css("opacity",0.5);

        //为小按钮添加鼠标滑入事件，以显示相应的内容
        $("#advTopFocus .btn span").css("opacity",0.4).mouseover(function() {
          index = $("#advTopFocus .btn span").index(this);
          showPics(index);
        }).eq(0).trigger("mouseover");

        //上一页、下一页按钮透明度处理
        $("#advTopFocus .preNext").css("opacity",0.2).hover(function() {
          $(this).stop(true,false).animate({"opacity":"0.5"},300);
        },function() {
          $(this).stop(true,false).animate({"opacity":"0.2"},300);
        });

        //上一页按钮
        $("#advTopFocus .pre").click(function() {
          index -= 1;
          if(index == -1) {index = len - 1;}
          showPics(index);
        });

        //下一页按钮
        $("#advTopFocus .next").click(function() {
          index += 1;
          if(index == len) {index = 0;}
          showPics(index);
        });

        //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
        $("#advTopFocus ul").css("width",sWidth * (len));
        
        //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
        $("#advTopFocus").hover(function() {
          clearInterval(picTimer);
        },function() {
          picTimer = setInterval(function() {
            showPics(index);
            index++;
            if(index == len) {index = 0;}
          },2000); //此4000代表自动播放的间隔，单位：毫秒
        }).trigger("mouseleave");
        
        //显示图片函数，根据接收的index值显示相应的内容
        function showPics(index) { //普通切换
          var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
          $("#advTopFocus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
          //$("#advTopFocus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
          $("#advTopFocus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
        }
      });
    
//card_js
   $(function() {
        var sWidth = $("#card").width(); //获取焦点图的宽度（显示面积）
        var len = $("#card ul li").length; //获取焦点图个数
        var index = 0;
        var picTimer;
        
        //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
        var btn = "<div class='btnBg'></div><div class='btn'>";
        for(var i=0; i < len; i++) {
          btn += "<span></span>";
        }
        btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
        $("#card").append(btn);
        $("#card .btnBg").css("opacity",0.5);

        //为小按钮添加鼠标滑入事件，以显示相应的内容
        $("#card .btn span").css("opacity",0.4).mouseover(function() {
          index = $("#card .btn span").index(this);
          showPics(index);
        }).eq(0).trigger("mouseover");

        //上一页、下一页按钮透明度处理
        $("#card .preNext").css("opacity",0.2).hover(function() {
          $(this).stop(true,false).animate({"opacity":"0.5"},300);
        },function() {
          $(this).stop(true,false).animate({"opacity":"0.2"},300);
        });

        //上一页按钮
        $("#card .pre").click(function() {
          index -= 1;
          if(index == -1) {index = len - 1;}
          showPics(index);
        });

        //下一页按钮
        $("#card .next").click(function() {
          index += 1;
          if(index == len) {index = 0;}
          showPics(index);
        });

        //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
        $("#card ul").css("width",sWidth * (len));
        
        //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
        $("#card").hover(function() {
          clearInterval(picTimer);
        },function() {
          picTimer = setInterval(function() {
            showPics(index);
            index++;
            if(index == len) {index = 0;}
          },2000); //此4000代表自动播放的间隔，单位：毫秒
        }).trigger("mouseleave");
        
        //显示图片函数，根据接收的index值显示相应的内容
        function showPics(index) { //普通切换
          var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
          $("#card ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
          //$("#card .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
          $("#card .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
        }
      });
    