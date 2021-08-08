	   /*鼠标导航滑动效果start*/
	   //过滤掉.not(".frist")找到#Logo ul里面的所有li;过滤掉.frist和.last的li对他们不产生效果;.last最后一个是隐藏的 加不加都行，
       $("#Logo ul li").not(".frist,.last,.frist ol li").hover(function(){//.frist ol li过滤掉二级导航
	        //鼠标滑动上去
			var _left=$(this).position().left;//获取li与他相对定位元素 ul左边的距离
			var _width=$(this).width();//动态获取当前移动到的li的宽度
            //document.title=_width;
			//document.title=_left;
			//.css("width",_width)给.last加这个：把获得到了的当前li的宽度赋给.last
			$("#Logo ul li.last").show().css("width",_width).stop().animate({left:_left},400);//动态的把获取 的li与他相对定位元素 ul左边的距离赋给当前移动到的li

	   
	       },function(){
			$("#Logo ul li.last").show().stop().animate({left:190},400);//(1),鼠标移开后回到第一个 .stop()执行当前动画时把之前的动画动暂停掉  
	        //(2),$("#Logo ul li.last").hide();//鼠标移开后自动隐藏
	        
	   });
	   /*鼠标导航滑动效果end*/

	   /*吸顶盒导航 start*/
		   /*浏览器窗口的滚动事件 scroll*/
			$(window).scroll(function(){
				//*****************************临时设置吸顶盒不起作用  var _top=$(window).scrollTop();//获取到滚动高度的值
                var _height=$("#TopMain").height();
				//自动判断、获取是否关闭广告 计算变化高度
				//var _height=$("#Logo").offset().top;//.offset()获取#Logo与浏览器的坐标 top就是与浏览器上面的距离
				//document.title=_top;
				//document.title=_height;
				if(_top>=_height){
					$("#Logo").addClass("gd");//滚动高度大于200时 加上class="gd" 就吸附固定住
				}
				else{
				    $("#Logo").removeClass("gd");//滚动高度小于200时 移除class="gd" 就释放吸附 还原原来位置
				}
			});
	   /*吸顶盒导航 end*/

	   /*显示二级菜单 start*/
	   $("#Logo ul li .Menu ol li").hover(function(){
			$(this).addClass("hover");
	        //当前 li与Menu上面的距离
			var _top=$(this).position().top;//获取到当前的li与其相对定位参考对象的top距离
			var _height=$(this).find(".moreNav").height()/3;
			//alert(_top);
			if(_top>_height){
				if($(this).index()==5){
				$(this).find(".moreNav").css("top",-(_height*3-69));
				}else{
				$(this).find(".moreNav").css("top",-_height);//重新给.moreNav赋值
			}
			}
	   },function(){
			$(this).removeClass("hover");
	   });
	   /*显示二级菜单 end*/
       

	   /*首页轮播图特效 start*/
	   var _index=0;//定义当前序列号
	   var _qindex=0;//前一个序列号
       var clearTime=null;
        //设置轮播时间差 start
        var ktime=new Date();//获取当前时间 当前进来的时间

        //设置轮播时间差 end

	   $("#Part1 .PartCon .flash .But span").mouseover(function(){
	    clearInterval(clearTime);//鼠标移动上去时 清楚自动轮播
		 $(this).addClass("hover").siblings("span").removeClass("hover");
		 _index=$(this).index();//获取序列号
		 //alert(_index);
			scrollPlay();//调用播放的方法
		 //document.title="现"+_index+"前"+_qindex;
		 _qindex=_index;//把当前的值赋给作为下一次的前一个序列号
	   }).mouseout(function(){
	      autoPlay();//鼠标移走 再次启动自动轮播
	   
	   });
	   

	   //右切换按钮start
	   $(".flash a.next").click(function(){
		   var newtime=new Date();
		   if(newtime-ktime>500){
				_index++;//序列号加1
				if(_index>5){
					 _index=0;
					 _qindex=5;
				}
				scrollPlay();
				_qindex=_index;
		   }
          ktime=new Date(); //时间位置不能放在循环判断里面了

	   });
	   //右切换按钮end

	   //左边切换按钮 start
       $(".flash a.prev").click(function(){
			 var newtime=new Date();
			if(newtime-ktime>500){
			_index--;//序列号减1
			if(_index<0){
				_index=5;
				_qindex=0;
			}
			scrollPlay();
			_qindex=_index;
			  }
          ktime=new Date(); //时间位置不能放在循环判断里面了
	   });

	   //左边切换按钮 end
       
      //鼠标放在左右切换按钮上时  就清楚定时播放 start
	  $(".flash a.prev,.flash a.next").hover(function(){
	     clearInterval(clearTime);
	  },function(){
	    autoPlay();
	  });
      //鼠标放在左右切换按钮上时  就清楚定时播放 end

       autoPlay();//调用自动播放
      //自动轮播函数
	  function autoPlay(){
	      clearTime=setInterval(function(){
			 
		   _index++;//序列号加1

			if(_index>5){
				 _index=0;
				 _qindex=5;
			}
			scrollPlay();
	        _qindex=_index;	 
			 },2500);
	  }
 

	   //封装相同代码的 函数 
	   function scrollPlay(){
		     //左移
		    $(".But span").eq(_index).addClass("hover").siblings("span").removeClass("hover");
			if(_index==0&&_qindex==5){
			next();
			}
	      else if(_index==5&&_qindex==0){
		   prev();
		  
		  } else if(_index>_qindex){//左移
			next();
				}
		 else if(_index<_qindex){//右移
			prev();
			}
	   
	   
	   }
        //下一张 左移
	   function next(){
	         $(".scroll img").eq(_qindex).stop().animate({"left":"-820px"},500);
			 $(".scroll img").eq(_index).css("left","820px").stop().animate({"left":"0px"},500);
		 
	   
	   }	    
	     //上一张 右移
	    function prev(){
		
		     $(".scroll img").eq(_qindex).stop().animate({"left":"820px"},500);
			 $(".scroll img").eq(_index).css("left","-820px").stop().animate({"left":"0px"},500); 
	
		}

		//按钮显示隐藏
		$(".flash").hover(function(){
		  //显示
		  $("a.prev,a.next").show();
		},function(){
		 //隐藏
		 $("a.prev,a.next").hide();
		});
	   /*首页轮播图特效   end*/

	   /*js控制图片列表样式  start*/
	   $(".Product .imgList dl:last").addClass("last");
	   $(".Product .imgList dl").hover(function(){
	     $(this).css({"border":"1px solid red","margin-left":"7px"});
	   },function(){
        if($(this).index()==4){
		 
		  $(this).css({"border":"0px","margin-left":"8px"});
		 } else{
			 $(this).css("border","0px"); 
			 $(this).css({"border-right":"1px solid #ddd","margin-left":"8px"});
		 }
	   });

	   /*点击轮播*/
	   var mark=0;
	   var clearProductTime=null;
	   $("#NewProduct span.go").click(function(){
	   //alert("11");
		 product_autoplay();
		 });

	
	   function product_autoplay(){
	    if(mark==0){
		   mark=1;
		   }
		   else{
		   mark=0;
			   }
			   $(".Product .imgList").eq(mark).fadeIn(500).siblings(".imgList").fadeOut(500);
	 
	   }

	   $("#NewProduct span.go").hover(function(){
	   clearInterval(clearProductTime);//鼠标放上去就清楚自动播放
	   },
	   function(){
		   clearProductTime=setInterval(product_autoplay/*函数名*/,2000);//鼠标离开就自动播放
	   });
	    //自动轮播
      clearProductTime=setInterval(product_autoplay/*函数名*/,2000);//2000毫秒执行这个函数一次
	   /*js控制图片列表样式    end*/

	   //选项卡动画 start
       $("ul.xianhuaNav li").not("li.xh_nav").mouseover(function(){
	   $(this).addClass("hover").siblings("li").removeClass("hover");
	   var _index=$(this).index();
        $(".xianhuaRight .xianhuaCom").eq(_index).show().siblings().hide();
	   });

	   //选项卡动画  end

	   //手风琴js动画
	   $(".xianhuaType ul li").mouseover(function(){
	    $(this).stop().animate({"width":"434px"},300).siblings("li").stop().animate({"width":"50px"},300);
	    $(this).find("h3").addClass("hover").parent().siblings("li").find("h3").removeClass("hover"); //parent() 找父级下的同级
	   });
	   //鲜花显示动态效果
	   $(".xianhuaCom ul li").hover(function(){
	    $(this).find("p").stop().slideDown();
	   
	   },function(){
	    $(this).find("p").stop().slideUp();
	   
	   });

	   //蛋糕展示 start
	   //点击显示
	   $(".dgConL ul li").click(function(){
	   //alert("dd");
		   $(".dgConL .gray").show();
		   $("#dgCon .showImg").show();
		   
		   //获取当前点击图片的地址
		   var bigSrc=$(this).find("img").attr("src");
           $(".showImg img.bigImg").attr("src",bigSrc);//就更换地址了
           
		   //获取标题的内容
		   var title=$(this).find("h3.ti").text();
           $(".showImg .moreInfo h3").text(title);//就换标题了

		   //获取简介
           var info=$(this).find("p.Info").text();
           $(".showImg .moreInfo p.xq").text(info);//就换简介了

		   //获取购买地址  ******用的attr()获取  和上面有些不同*****
           var buyUrl=$(this).find("a.buyUrl").attr("href");
           $(".showImg .moreInfo a.buy").attr("href",buyUrl);//就换简介了


		   //款式的选择 start 
		   var _type=$(this).find("p.type").text();
		  // alert(_type);
		  //如果不等于空才进行这样的代码处理 否者处理都没有
		 
		     var html="";
		    //每次进来时 先清空以前的
		    $(".dg_col .dgtype").html("");


		  if(_type!=""){
		  var _typeArr=_type.split(",");//注意分割符和 获取到的地方的 代码间的分隔符要一致 都是英文状态下的
		  //alert(_typeArr[1]);
		  	  
		  for(var i=0;i<_typeArr.length;i++){
		  html+="<dl>"
		  +"<dt><img src='images/dg24.jpg' width='24px' height='26px' /></dt>"
		  +"<dd>"+_typeArr[i]+"</dd>"
		  +"</dl>";
		  }

		  //alert(html);
		  
		  $(".dg_col .dgtype").prepend(html);//prepend(html)把获取的内容添加到这个区块的最前面

		  }
	
		  //点击款式类型被选中
		  var pk=0;
		  $(".dg_col dl").click(function(){
			  if(pk==0){
		   $(this).addClass("seclect");
             pk=1;
			  }else{
				  
			  $(this).removeClass("seclect");
             pk=0;}
		  
		  });
		  //就更换了简介了

		  //更换款式 end

	   });
	  
	   //点击关闭按钮  关闭
	    $(".gray font.iconfont").click(function(){
	   
	       $(".dgConL .gray").hide();
		   $("#dgCon .showImg").hide();
	   });
	   //蛋糕展示 end

	   //轮播图样式重用 封装 start  *********可以重复利用
	   
	   
	   //楼层样式
	   var obj1=$("#Louti1 .commFlash ul.But li");
	   var obj1_scroll=$("#Louti1 .commFlash .scroll");
       var obj1_next=$("#Louti1 .CommFlash span.next"); 
       var obj1_prev=$("#Louti1 .CommFlash span.prev"); 

	   var obj2=$("#Louti2 .commFlash ul.But li");
	   var obj2_scrol1=$("#Louti2 .commFlash .scroll");
	   var obj2_next=$("#Louti2 .CommFlash span.next");
	   var obj2_prev=$("#Louti2 .CommFlash span.prev"); 
	   function commFlash(obj,objScroll,objNext,objprev){
		 var clearTime=null;  
		 var Comm_index=0;
	    obj.hover(function(){
         
		 
      //鼠标移动上去 清除定时器
	   clearInterval(clearTime);

	   //按钮操作
	   //鼠标移上去
	   Comm_index=$(this).index();
	   nextAndPrev(obj,objScroll);


	   },function(){AutoPlay();});//鼠标移走后又自动轮播

	     //左切换按钮
	     objNext.click(function(){
		  Comm_index++;
		  if(Comm_index>obj.length-1){Comm_index=0;}//当到了最后一张回到第一张
		  nextAndPrev(obj,objScroll);
		 
		 
		  
		 });
	   

	   //右切换按钮
      objprev.click(function(){
	  Comm_index--;
	  if(Comm_index<0){Comm_index=obj.length-1;}//当到了第一张 就回到最后一张
	  nextAndPrev(obj,objScroll);
	 
	 });
      
	  //滑动到左右切换按钮上的时候的暂停播放 移开在播
	  objNext.hover(function(){
	   clearInterval(clearTime);
	  },function(){
	   AutoPlay();
	  });
	  objprev.hover(function(){
	   clearInterval(clearTime);
	  },function(){
	   AutoPlay();
	  });



	  //自动轮播函数
	  function AutoPlay(){
		  clearTime=setInterval(function(){
			  Comm_index++;
			  if(Comm_index>obj.length-1){Comm_index=0;}//当到了最后一张回到第一张
			  nextAndPrev(obj,objScroll);
		  },1500);

	  }
      AutoPlay();


	 function nextAndPrev(obj,objScroll){
	  obj.eq(Comm_index).addClass("hover").siblings("li").removeClass("hover");
	  objScroll.stop().animate({left:Comm_index*-450},500);
	 }
	  }
      //#Louti1 的动画
	   commFlash(obj1,obj1_scroll,obj1_next,obj1_prev);

	   //#Louti2 的动画
	    commFlash(obj2,obj2_scrol1,obj2_next,obj2_prev);


		//自动轮播

      //轮播图样式重用 封装   end  *********可以重复利用


	  //产品详细页选项卡效果 start
	  $("#ProductInfo ul li").mouseover(function(){
	   //挡鼠板滑动上去的li,做什么事情
        var _index=$(this).index(); //获取选项的div的序列号 

	   //第一种写法$("#ProductInfo ul li").removeClass("active")=.siblings("li").removeClass("active");;
	   $(this).addClass("active").siblings("li").removeClass("active");
	   
	   $("#ProductSelect div").hide();//非选中的隐藏
       $("#ProductSelect div").eq(_index).show();//选中的显示
	  
	  });
	  //产品详细页选项卡效果  end
    

	//用户登录时和购买注册页面  start
	$("#LoginAndRegister p span").mouseover(function(){
    
       var _index=$(this).index();
	   $("#LoginAndRegister .Con div.qh").eq(_index).show().siblings("div").hide();

		//底边蓝色线
		$(this).addClass("active").siblings().removeClass("active");
	
	});
	//用户登录时和购买注册页面    end