$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
//
var iframeLoaded = function (iframe) {
    if (iframe.src.length > 0) {
        if (!iframe.readyState || iframe.readyState == "complete") {
            var bWidth = 
            iframe.contentWindow.document.body.scrollWidth;
            var dWidth = 
            iframe.contentWindow.document.documentElement.scrollWidth;
            var width = Math.max(bWidth, dWidth);
            iframe.width = width;
        }
    }
}
//分页时重新设置 iframe 高度 ； 修改后：iframe.name = iframe.id
var reSetIframeHeight = function()
{
    try {
        var oIframe = parent.document.getElementById(window.name);
        oIframe.height = 100;
        iframeLoaded(oIframe);
    }
    catch (err)
    {
        try {
         parent.document.getElementById(window.name).height = 1000;
          } catch (err2) { }
    }
}
/******************密码强度js*************************/
function AuthPasswd(string) {
    if(string.length >=1) {
        if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string) && /\W+\D+/.test(string)) {
            noticeAssign(1);
        }else if(/[a-zA-Z]+/.test(string) || /[0-9]+/.test(string) || /\W+\D+/.test(string)) {
            if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string)) {
                noticeAssign(-1);
            }else if(/\[a-zA-Z]+/.test(string) && /\W+\D+/.test(string)) {
                noticeAssign(-1);
            }else if(/[0-9]+/.test(string) && /\W+\D+/.test(string)) {
                noticeAssign(-1);
            }else{
                noticeAssign(0);
            }
        }
    }else{
        noticeAssign(null); 
    }
}
 
function noticeAssign(num) {
    if(num == 1) {
        $('#weak').css({backgroundColor:'#ffcc00'});
        $('#middle').css({backgroundColor:'#ff9900'});
        $('#strength').css({backgroundColor:'#ff6600'});
        $('#strength').html('强');
        $('#middle').html('');
        $('#weak').html('');
    }else if(num == -1){
        $('#weak').css({backgroundColor:'#ffcc00'});
        $('#middle').css({backgroundColor:'#ff9900'});
        $('#strength').css({backgroundColor:''});
        $('#weak').html('');
        $('#middle').html('中');
        $('#strength').html('');
    }else if(num ==0) {
        $('#weak').css({backgroundColor:'#ffcc00'});
        $('#middle').css({backgroundColor:''});
        $('#strength').css({backgroundColor:''});
        $('#weak').html('弱');
        $('#middle').html('');
        $('#strength').html('');
    }else{
        $('#weak').html('&nbsp;');
        $('#middle').html('&nbsp;');
        $('#strength').html('&nbsp;');
        $('#weak').css({backgroundColor:''});
        $('#middle').css({backgroundColor:''});
        $('#strength').css({backgroundColor:''});
    }
}
/**********鼠标移动效果************/
$(document).ready(function(){
	$("ul.Works").hover(function() {
		$(this).find(".Ranking").stop()
		.animate({right: "-20", opacity:1}, "fast")
		.css("display","block")

	}, function() {
		$(this).find(".Ranking").stop()
		.animate({right: "-20", opacity: 0}, "fast")
	});

});
/************************************/
//menu
$(document).ready(function(){
  
  $('li.mainlevel').mousemove(function(){
  $(this).find('ul').slideDown();//you can give it a speed
  });
  $('li.mainlevel').mouseleave(function(){
  $(this).find('ul').slideUp("fast");
  });
  
});
$(document).ready(function(){
	$("#nav li").hover(function(){
			$(this).addClass("hover");
			$(this).children("ul li").attr('class','');
		},function(){
			$(this).removeClass("hover");  
			$(this).children("ul li").attr('class','');
		}
	); 
	$("#nav li.no_sub").hover(function(){
			$(this).addClass("hover1");
		},function(){
			$(this).removeClass("hover1");  
		}
	); 
})