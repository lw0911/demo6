
        //******************购物车******************************
        $(function(){
          $('.topbar-cart').mouseover(function(){
           
            $('.site-topbar .cart-menu').css('display','block');
            $('.site-topbar .cart-mini').css({display:'block',background:'#fff',color:'#ff6700'});
          })
          $('.topbar-cart').mouseout(function(){
            $('.site-topbar .cart-menu').css('display','none');
            $('.site-topbar .cart-mini').css({background:'#424242',color:'#b0b0b0'});
          })
        });
        //******************购物车结束******************************
        //******************轮播top菜单导航******************************
        $(function(){
          $('.site-category .category-item').mouseover(function(){
            var index=$(this).index();
            i=index;
         $('.children').eq(index).css('display','block');
         
          })
          $('.site-category .category-item').mouseout(function(){
           var i=$(this).index();
            $('.children').eq(i).css('display','none');
            
          })
        });
        //******************轮播top菜单导航结束******************************
    //******************轮播图******************************
			$(function(){
				//代码初始化
				var size=$('.ull li').size();
				for (var i = 1; i <= size; i++) {
					var li="<li></li>";
					$('.oll').append(li);
				};
				//手动控制轮播图
				$('.ull li').eq(0).show();
				$('.oll li').eq(0).addClass('active');
				$('.oll li').mouseover(function(){
					$(this).addClass('active').siblings().removeClass('active');
					var index=$(this).index();
					i=index;
					$('.ull li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
				})
				//自动播放
				var i=0;
				var t=setInterval(move,1500);
				//自动播放核心函数
				function move(){
					i++;
					if(i==size){
						i=0;
					}
					$('.oll li').eq(i).addClass('active').siblings().removeClass('active');
					$('.ull li').eq(i).fadeIn(300).siblings().fadeOut(300);
				}

				//向右播放核心函数
				function moveL(){
					i--;
					if(i==-1){
						i=size-1;
					}
					$('.oll li').eq(i).addClass('active').siblings().removeClass('active');
					$('.ull li').eq(i).fadeIn(300).siblings().fadeOut(300);
				}
				$('.box .left').click(function(){
						moveL();
				})
				$('.box .right').click(function(){
					move();
				})
				//鼠标移入移除
				$('.box').hover(function(){
					clearInterval(t);
				},function(){
					t=setInterval(move,1500);
				})
			})
//******************轮播图结束******************************
//**********************小米明星产品开始************************************
    $(function(){
            //手动滚动
          $('.pagination li').hover(function(){
          clearInterval(timer);
        },function(){
          timer=setInterval(active,5000);
        })
          
          $('.pagination li').click(function(){
            
            $('.list3').css({marginLeft:'-1233px'});
            $('.pagination li').eq(0).addClass('active2').siblings().removeClass('active2');
            
          });
          $('.pagination li').eq(1).click(function(){
            $('.list3').css({marginLeft:'0'});
           $('.pagination li').eq(1).addClass('active2').siblings().removeClass('active2');
          });
          //自动轮播
          var timer=setInterval(active,5000);
          function active(){
            $('.list3').css({marginLeft:'-1233px'});
            $('.pagination li').eq(0).addClass('active2').siblings().removeClass('active2');
            var num= parseInt( $('.list3').css('marginLeft') );
                if(num==-1233){
                  $('.list3').css({marginLeft:'0'});
                  $('.pagination li').eq(1).addClass('active2').siblings().removeClass('active2');
                }
          }
          
          //鼠标事件
            $('.list3').hover(function(){
              clearInterval(timer);
            },function(){
              timer=setInterval(active,5000);
            })
            
        });
//**********************小米明星产品结束************************************

  //******************TAB-list列表切换**********************
        $(function(){
            $('#match-content .brick-list').eq(0).show().siblings().hide();
      		  $('#accessories .sat-list').eq(0).show().siblings().hide();
      		  $('#around .sat-list').eq(0).show().siblings().hide();
            $('.tab-list li').eq(0).show();
            $('.tab-list li').eq(0).addClass('tab-active');
            $('.sat li').eq(0).show();
            $('.sat li').eq(0).addClass('tab-active');
  		      $('.sat2 li').eq(0).show();
            $('.sat2 li').eq(0).addClass('tab-active');
  		  
            $('.tab-list li').mouseover(function(){
              $(this).addClass('tab-active').siblings().removeClass('tab-active');
              var index=$(this).index();
              $('#match-content .brick-list').eq(index).show().siblings().hide();
            })
  		  
      		  $('.sat li').mouseover(function(){
                  $(this).addClass('tab-active').siblings().removeClass('tab-active');
                  var index=$(this).index();
      			$('#db .sat-list').eq(index).show().siblings().hide();
                })
      		  $('.sat2 li').mouseover(function(){
                  $(this).addClass('tab-active').siblings().removeClass('tab-active');
                  var index=$(this).index();
      			$('#db2 .sat-list').eq(index).show().siblings().hide();
                })
        })
  //********回到顶部****************************************** 
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失  
        $(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>100){  
                    $("#back-to-top").fadeIn(1500);  
                }  
                else  
                {  
                    $("#back-to-top").fadeOut(1500);  
                }  
            });  
  
            //当点击跳转链接后，回到页面顶部位置  
  
            $("#back-to-top").click(function(){  
                $('body,html').animate({scrollTop:0},1000);  
                return false;  
            });  
        });  

//********搜索框******************************************
        $(function(){  
       
            
               var odiv=$(".keyword-list");
                $(".search-text").click(function(event){//为按钮注册click事件处理函数，事件处理函数的参数是事件对象。
                  showDiv();
                  $('input').css('border','1px solid #ff6700')
               $('.search-btn').css('border','1px solid #ff6700')
                  
                $('.search-hot-words').css('display','none');
                  $(document).one("click",function(){
                    odiv.hide();
                    $('input').css('border','1px solid #b0b0b0')
               $('.search-btn').css('border','1px solid #b0b0b0')
                  
                $('.search-hot-words').css('display','block');
                  });
                  //用来阻止事件冒泡，否则点击事件冒泡到文档，那么div元素显示后又会瞬间被隐藏。
                  event.stopPropagation();
                });
                odiv.click(function(event){
                  event.stopPropagation();
                })
                function showDiv(){
                  odiv.fadeIn();
                }
                              
    }); 
    //图片放大缩小 
      $(function(){
         $(".review-item").mouseenter(function () {
        var i=$(this).index();
        $('.review-item .figure-img img').eq(i).stop().animate({ "top": "-25px", "left": "-25px", "width": "356px", "height": "280px"}, 500);
      }).mouseleave(function () {
         var i=$(this).index();
        $('.review-item .figure-img img').eq(i).stop().animate({"top": "0px", "left": "0px", "width": "296px", "height": "220px" }, 500);
      }); 
      })
     