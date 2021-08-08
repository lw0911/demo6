(function($){
	$.fn.adSlider = function(item, options){
		var $this = $(this);
		if(item.adId == "" || item.adId == undefined){return;}//广告id不能为空
		getAD();
		//获取广告位信息
		function getAD(){
			$.ajax({
				type: "get",
				async: false,
				url: requestUrl.news + "adPlanAction/backAdLoction.action",
				data: {id: item.adId},
				dataType : "jsonp",
				jsonp: "jsonpCallback",
				success: function(data){
					setAD(data);
				},
				error: function(){
					alert("ajax error!");
				}
			});
		}
		//生成广告位html标签，放到到广告位容器
		function insertAd(ajaxData){
			var inHtml = getMsg(ajaxData);
          	//alert(inHtml);
			$this.html(inHtml);
		}
		//根据类型显示 图片展现方式  0：单张图片  1：多张图片轮播  other：文字
		function getMsg(ajaxData){
			var tp = item.type;
			var str = "";
			var re = ajaxData.result;
			var list = re.info.List_adContent;
			if(tp == 0){//单张图片广告
				//var re = ajaxData.result;
				//var list = re.info.List_adContent;
				if(re.infcode == "0"){//查询成功  0成功 1系统错误
					if(list.length > 0){
						str = '<a href="' + list[0].lick + '" target="_blank"><img src="' + requestUrl.imgPath + list[0].adLick + '" /></a>';
					}
				}
			}else if(tp == 1){//多张广告轮播图
				/****************************************************************
				str = '<div class="slider-wrapper">' +
								'<ul class="slider">' +
								'<li style="display:block"><a href="##"><img src="../static/images/adSlider/1.jpg" /></a></li>' +
								'<li><a href="##"><img src="../static/images/adSlider/2.jpg" /></a></li>' +
								'<li><a href="##"><img src="../static/images/adSlider/3.jpg" /></a></li>' +
								'<li><a href="##"><img src="../static/images/adSlider/4.jpg" /></a></li>' +
								'<li><a href="##"><img src="../static/images/adSlider/5.jpg" /></a></li>' +
								'<li><a href="##"><img src="../static/images/adSlider/6.jpg" /></a></li>' +
								'</ul>' +
								'<ul class="slider-control">' +
									'<li class="def cur"></li>' +
									'<li class="def"></li>' +
									'<li class="def"></li>' +
									'<li class="def"></li>' +
									'<li class="def"></li>' +
									'<li class="def"></li>' +
								'</ul>' +
							'</div>';
				
				****************************************************************/
				if(re.infcode == "0"){//查询成功  0成功 1系统错误
					//var re = ajaxData.result;
					//var list = re.info.List_adContent;
					//var adW = re.info.adWidth;//广告位宽
					//var adH = re.info.adHigh;//广告位高
					//var aa =  'style="width:800px; height:300px;';
					var liStr = "";
					var conStr = "";
					for(var i=0,j=list.length; i<j; i++){
						var disp = i==0?' style="display:block"':'';
						liStr += '<li' + disp + '><a href="' + list[i].lick + '" target="_blank"><img src="' + requestUrl.imgPath + list[i].adLick + '" /></a></li>';//广告位
						
						var clas = i==0?' class="def cur"':' class="def"';
						conStr += '<li' + clas + '></li>'; 
					}
					
					str = '<div class="slider-wrapper">' +
							'<ul class="slider">' + liStr + '</ul>' +
							'<ul class="slider-control">' + conStr + '</ul>' +
						  '</div>';
				}
			}else if(tp == 2){//顶通广告
				if(re.infcode == "0"){//查询成功  0成功 1系统错误
					if($.cookie("mmj_topBanner") == null || $.cookie("mmj_topBanner") == ""){
						if(list.length > 0){
							str = '<a href="' + list[0].lick + '" target="_blank"><img src="' + requestUrl.imgPath + list[0].adLick + '" /></a><span class="close"></span>';
							$this.show();
						}
					}else{
						//alert($this.attr("class"));
						$this.hide();
					}
				}
			}else{
				//文字广告
				str = "这是文字广告！";
			}
			return str;
		}
		
		function setAD(data){
			if(data.result.infcode != "0" || data.result.info == null){
				return;
			}
			insertAd(data);
			//初始化广告轮播器，实现动态轮播
			var configs = $.extend({
				listSel: 'ul.slider li',  //banner子元素集合选择器,必填参数
				clickSel: 'ul.slider-control li', //圆点选择器
				actClass: 'cur', //圆点激活样式
				timeout: 3000   //轮播时间间隔
			},  options||{});
			//alert("conf:"+configs);
			// if(typeof configs.listSel != "string" || configs.listSel == ""){
				// return;//listSel为广告轮播的子元素集合，必填项
			// }
			$this.each(function(){
				var $this = $(this),
					opts = configs,
					$list = $(opts.listSel, $this),//广告图片集合
					$nav = $(opts.clickSel, $this),//圆点选择器导航
					curClass = opts.actClass || '',//当前轮播的样式
					delay = opts.timeout,//轮播延迟时间
					max = $list.length,//广告个数
					index = 0,
					autoplay = setInterval(function(){ move(true); }, delay);//开始轮播
				$this.hover(function(){
					clearInterval(autoplay);//鼠标放在广告上，停止播放
				}, function(){
					autoplay = setInterval(function(){ move(true); }, delay);//鼠标离开广告，继续播放
				});

				if ($nav) {//判断圆点导航
					$nav.hover(function () {//鼠标移动到圆点导航上，自动显示相应广告
						index = $(this).index();
						move();
					});
				}
				if($(".close")){
					$(".close").on("click", function(){
						$(this).parent().hide();
                      $.cookie("mmj_topBanner","1",{expires:4, domain:".maim9.com"});
					})
				}
				function move(d) {
					d == true ? index++:"";
					index = index > (max - 1) ? 0 : index;
					index = index < 0 ? max - 1 : index;
					//$list.eq(index).fadeIn(1000).siblings().fadeOut(1000);
					$list.eq(index).fadeIn(1000).siblings().hide();
					if ($nav) {
						$nav.removeClass(curClass).eq(index).addClass(curClass);
					}
				}
			})
		}
	};
})(jQuery);