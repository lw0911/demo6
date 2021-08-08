jQuery.MyCommon = {
	PageLoading: function(options) {
		var defaults = {
			opacity: 1,
			backgroundColor: "#fff",
			borderColor: "#bbb",
			borderWidth: 1,
			borderStyle: "solid",
			loadingTips: " 页面加载中...  ",
			TipsColor: "#666",
			delayTime: 1000,
			zindex: 1110,
			sleep: 0
		}
		var options = $.extend(defaults, options);
		var _PageHeight = document.documentElement.clientHeight,
			_PageWidth = document.documentElement.clientWidth;
		var _LoadingHtml = '<div id="loadingPage" style="position:fixed;left:0;top:0;_position: absolute;width:100%;height:' + _PageHeight + 'px;background:' + options.backgroundColor + ';opacity:' + options.opacity + ';filter:alpha(opacity=' + options.opacity * 100 + ');z-index:' + options.zindex + ';"><div id="loadingTips" style="position: absolute; cursor1: wait; width: auto;border-color:' + options.borderColor + ';border-style:' + options.borderStyle + ';border-width:' + options.borderWidth + 'px; height:80px; line-height:80px; padding-left:80px; padding-right:10px;border-radius:10px;  background: ' + options.backgroundColor + ' url(images/loading.gif) no-repeat 5px center; color:' + options.TipsColor + ';font-size:20px;">' + options.loadingTips + '</div></div>';
		$("body").append(_LoadingHtml);
		var _LoadingTipsH = document.getElementById("loadingTips").clientHeight,
			_LoadingTipsW = document.getElementById("loadingTips").clientWidth;
		var _LoadingTop = _PageHeight > _LoadingTipsH ? (_PageHeight - _LoadingTipsH) / 2 : 0,
			_LoadingLeft = _PageWidth > _LoadingTipsW ? (_PageWidth - _LoadingTipsW) / 2 : 0;
		$("#loadingTips").css({
			"left": _LoadingLeft + "px",
			"top": _LoadingTop + "px"
		});
		document.onreadystatechange = PageLoaded;

		function PageLoaded() {
			if (document.readyState == "complete") {
				var loadingMask = $('#loadingPage');
				setTimeout(function() {
					loadingMask.animate({
						"opacity": 0
					}, options.delayTime, function() {
						$(this).hide();
					});
				}, options.sleep);
			}
		}
	}
}