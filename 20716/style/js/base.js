
//导航高亮
$(function () {
	var datatype = $("#monavber").attr("data-type");
	$(".navbar>li ").each(function () {
		try {
			var myid = $(this).attr("id");
			if ("index" == datatype) {
				if (myid == "nvabar-item-index") {
					$("#nvabar-item-index").addClass("active");
				}
			} else if ("category" == datatype) {
				var infoid = $("#monavber").attr("data-infoid");
				if (infoid != null) {
					var b = infoid.split(' ');
					for (var i = 0; i < b.length; i++) {
						if (myid == "navbar-category-" + b[i]) {
							$("#navbar-category-" + b[i] + "").addClass("active");
						}
					}
				}
			} else if ("article" == datatype) {
				var infoid = $("#monavber").attr("data-infoid");
				if (infoid != null) {
					var b = infoid.split(' ');
					for (var i = 0; i < b.length; i++) {
						if (myid == "navbar-category-" + b[i]) {
							$("#navbar-category-" + b[i] + "").addClass("active");
						}
					}
				}
			} else if ("page" == datatype) {
				var infoid = $("#monavber").attr("data-infoid");
				if (infoid != null) {
					if (myid == "navbar-page-" + infoid) {
						$("#navbar-page-" + infoid + "").addClass("active");
					}
				}
			} else if ("tag" == datatype) {
				var infoid = $("#monavber").attr("data-infoid");
				if (infoid != null) {
					if (myid == "navbar-tag-" + infoid) {
						$("#navbar-tag-" + infoid + "").addClass("active");
					}
				}
			}
		} catch (E) {}
	});
	$("#monavber").delegate("a", "click", function () {
		$(".navbar>li").each(function () {
			$(this).removeClass("active");
		});
		if ($(this).closest("ul") != null && $(this).closest("ul").length != 0) {
			if ($(this).closest("ul").attr("id") == "monavber") {
				$(this).addClass("active");
			} else {
				$(this).closest("ul").closest("li").addClass("active");
			}
		}
	});
});

jQuery(document).ready(function($) {
	$(document).click(function() {
		$(".popup-layer,.popup-arrow").hide();
		$(".btn-popupmenu").removeClass("btn-active")
	});
	$(".btn-popupmenu,.popup-layer,.popup-arrow").click(function(event) {
		event.stopPropagation()
	});
	$(".btn-popupmenu").each(function() {
		$(this).click(function() {
			$(this).toggleClass("btn-active");
			$(this).next().toggle();
			$(this).next().next().toggle();
			$(this).parent().siblings().find(".popup-layer,.popup-arrow").hide()
		})
	});
	$(document).click(function(event) {
		$(".search-expand").hide();
		$(".toggle-search").removeClass("active")
	});
	$(".toggle-search ,.search-expand").click(function(event) {
		event.stopPropagation()
	});
	$(".toggle-search").click(function() {
		$(".toggle-search").toggleClass("active");
		$(".search-expand").fadeToggle(250);
		setTimeout(function() {
			$(".search-expand input").focus()
		}, 300)
	});
	if ($(".nav-header").length > 0) {
		var navTop = $(".nav-header").offset().top;
		$(window).scroll(function() {
			if ($(window).scrollTop() > navTop && $(window).width() > 719) {
				$(".nav-header").addClass("fixed")
			} else {
				$(".nav-header").removeClass("fixed")
			}
		})
	}
	$(".comment-tabs li").click(function() {
		$(".comment-tabs li").removeClass("active");
		$(this).addClass("active");
		$(".comment-tab").hide();
		var selected_tab = $(this).find("a").attr("href");
		$(selected_tab).fadeIn();
		return false
	});
	$("table tr:odd").addClass("alt");
	$("body").addClass("side-right-collapse");
	$(".side-right .sidebar-toggle").click(function() {
		$("body").toggleClass("side-right-collapse").toggleClass("side-right-expand")
	});
	$(".nav ul.sub-menu").hide();
	$(".nav li").hover(function() {
		$(this).children("ul.sub-menu").slideDown("fast")
	}, function() {
		$(this).children("ul.sub-menu").hide()
	});
	$(".nav-toggle").on("click", function() {
		slide($(".nav-wrap .nav", $(this).parent()))
	});

	function slide(content) {
		var wrapper = content.parent();
		var contentHeight = content.outerHeight(true);
		var wrapperHeight = wrapper.height();
		wrapper.toggleClass("expand");
		if (wrapper.hasClass("expand")) {
			setTimeout(function() {
				wrapper.addClass("transition").css("height", contentHeight)
			}, 10)
		} else {
			setTimeout(function() {
				wrapper.css("height", wrapperHeight);
				setTimeout(function() {
					wrapper.addClass("transition").css("height", 0)
				}, 10)
			}, 10)
		}
		wrapper.one("transitionEnd webkitTransitionEnd transitionend oTransitionEnd msTransitionEnd", function() {
			if (wrapper.hasClass("open")) {
				wrapper.removeClass("transition").css("height", "auto")
			}
		})
	}
});


jQuery(document).ready(function($) {
	$(window).scroll(function(){
		var scrollht=$(window).scrollTop();
		//BackTop
		if(scrollht>500){
			$("#toTop").fadeIn().css({bottom:"170px"});
		}else{
			$("#toTop").fadeOut();
		}		
	});    
	//BackTop
	$("#toTop").click(function(){
		$("html, body").animate({ scrollTop: 0 },300);
		$(this).animate({bottom:"1500px"},0);
	})
});
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 */
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){var a=o(t,e);a||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)),i(window).on("resize."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)))}function o(t,e){return t.initialized===!0||!(i("body").width()<t.minWidth)&&(a(t,e),!0)}function a(t,e){t.initialized=!0;var o=i("#theia-sticky-sidebar-stylesheet-"+t.namespace);0===o.length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),e.each(function(){function e(){a.fixedScrollTop=0,a.sidebar.css({"min-height":"1px"}),a.stickySidebar.css({position:"static",width:"",transform:"none"})}function o(t){var e=t.height();return t.children().each(function(){e=Math.max(e,i(this).height())}),e}var a={};if(a.sidebar=i(this),a.options=t||{},a.container=i(a.options.containerSelector),0==a.container.length&&(a.container=a.sidebar.parent()),a.sidebar.parents().css("-webkit-transform","none"),a.sidebar.css({position:a.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),a.stickySidebar=a.sidebar.find(".theiaStickySidebar"),0==a.stickySidebar.length){var s=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;a.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(s)}).remove(),a.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()),a.sidebar.append(a.stickySidebar)}a.marginBottom=parseInt(a.sidebar.css("margin-bottom")),a.paddingTop=parseInt(a.sidebar.css("padding-top")),a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));var r=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1),a.stickySidebar.css("padding-bottom",1),r-=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight()-d-r,0==r?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1,0==d?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1,a.previousScrollTop=null,a.fixedScrollTop=0,e(),a.onScroll=function(a){if(a.stickySidebar.is(":visible")){if(i("body").width()<a.options.minWidth)return void e();if(a.options.disableOnResponsiveLayouts){var s=a.sidebar.outerWidth("none"==a.sidebar.css("float"));if(s+50>a.container.width())return void e()}var r=i(document).scrollTop(),d="static";if(r>=a.sidebar.offset().top+(a.paddingTop-a.options.additionalMarginTop)){var c,p=a.paddingTop+t.additionalMarginTop,b=a.paddingBottom+a.marginBottom+t.additionalMarginBottom,l=a.sidebar.offset().top,f=a.sidebar.offset().top+o(a.container),h=0+t.additionalMarginTop,g=a.stickySidebar.outerHeight()+p+b<i(window).height();c=g?h+a.stickySidebar.outerHeight():i(window).height()-a.marginBottom-a.paddingBottom-t.additionalMarginBottom;var u=l-r+a.paddingTop,S=f-r-a.paddingBottom-a.marginBottom,y=a.stickySidebar.offset().top-r,m=a.previousScrollTop-r;"fixed"==a.stickySidebar.css("position")&&"modern"==a.options.sidebarBehavior&&(y+=m),"stick-to-top"==a.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==a.options.sidebarBehavior&&(y=c-a.stickySidebar.outerHeight()),y=m>0?Math.min(y,h):Math.max(y,c-a.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,S-a.stickySidebar.outerHeight());var k=a.container.height()==a.stickySidebar.outerHeight();d=(k||y!=h)&&(k||y!=c-a.stickySidebar.outerHeight())?r+y-a.sidebar.offset().top-a.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==d){var v=i(document).scrollLeft();a.stickySidebar.css({position:"fixed",width:n(a.stickySidebar)+"px",transform:"translateY("+y+"px)",left:a.sidebar.offset().left+parseInt(a.sidebar.css("padding-left"))-v+"px",top:"0px"})}else if("absolute"==d){var x={};"absolute"!=a.stickySidebar.css("position")&&(x.position="absolute",x.transform="translateY("+(r+y-a.sidebar.offset().top-a.stickySidebarPaddingTop-a.stickySidebarPaddingBottom)+"px)",x.top="0px"),x.width=n(a.stickySidebar)+"px",x.left="",a.stickySidebar.css(x)}else"static"==d&&e();"static"!=d&&1==a.options.updateSidebarHeight&&a.sidebar.css({"min-height":a.stickySidebar.outerHeight()+a.stickySidebar.offset().top-a.sidebar.offset().top+a.paddingBottom}),a.previousScrollTop=r}},a.onScroll(a),i(document).on("scroll."+a.options.namespace,function(i){return function(){i.onScroll(i)}}(a)),i(window).on("resize."+a.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(a)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(a.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(a))})}function n(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return"undefined"==typeof t&&(t=i.width()),t}var s={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"};return t=i.extend(s,t),t.additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,e(t,this),this}}(jQuery);

$(document).ready(function() {
    $('.sidebar').theiaStickySidebar({
        additionalMarginTop: 70
    });  
});