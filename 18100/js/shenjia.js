// 神价网 shenjia.178hui.com
$(document).ready(function(){
	$(".shenjia_index_list li").hover(function(){
		$(this).find(".sj_goods_btn").fadeIn(500);
	},function(){
		$(this).find(".sj_goods_btn").hide();
	});
	$(".shenjia_index_content").hover(function(){
		$(this).find(".left_prev,.right_next").fadeIn(500);
	},function(){
		$(this).find(".left_prev,.right_next").hide();
	});
});
$(document).ready(function(){
	jQuery(".shenjia_index_content").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",scroll:5,vis:5,trigger:"click"});						   
});

//降价监控
function tip(content,elem){
	layer.tips(content, elem, {tips: [2, '#e4393c'],time:0});
}
$(document).ready(function(){
	//选择折扣操作
	$(".zhekou_active span").bind("click", function () {
		var disVal = $(this).attr("data-zhe");
		$(".zhekou_text li").removeClass('red');
		$(".zhekou_text li").eq(disVal-1).addClass('red');
		$(".zhekou_iocn_current").attr("class", "zhekou_iocn_current").addClass("sale_z" + disVal);
	});
	//显示搜索条件
	$(".sj_search").bind("click",function(){
		var search_check = $(this).is(':checked');
		if(search_check){
			$(".tag_search").slideDown(300);
		}else{
			$(".tag_search").slideUp(300);
		}
	});
	//显示去抢购按钮
	$(".price_list_data li").hover(function(){
		$(this).find(".sj_go_mall,.sj_go_baoliao").fadeIn(200);
	},function(){
		$(this).find(".sj_go_mall,.sj_go_baoliao").hide();
	});

	//点击打开/关闭声音
	$(".sound_iocn").on("click",function(){
		var t = $(this).attr("data-sound");
		if(t==0){
			$(this).addClass("on");
			$(this).attr("data-sound","1");
			$(this).attr("title","关闭提示声音");
		}else{
			$(this).removeClass("on");
			$(this).attr("data-sound","0");
			$(this).attr("title","开启提示声音");
		}
	});
});

//顶部历史价格查询
$(document).ready(function(){
	$(".search_submit").on('click',function(){
		var url = $.trim($(".search_key").val());
		if(url==''){
			layer.tips('请输入商品地址，如：http://item.jd.com/1162131.html', '.search_key', {
				tips: [1, '#78BA32']
			});
			return false;
		}else if(url.indexOf('jd.com')<=0){
			layer.tips('请输入京东商品纯链接地址，如：http://item.jd.com/1162131.html', '.search_key', {
				tips: [1, '#78BA32']
			});
			return false;
		}else{
			var html = '<div class="search_loading"><p>正在拼命查询中，请稍后...</p><p><img src="images/price_load.gif" /></p></div>';
			//var html = '<div class="search_finish"><a href="#">查询完成，点击查看</a></div>';
			//var html = '<div class="search_error"><span onclick="javascript:layer.closeAll();">很遗憾，没找到您想要找的商品！</span><a href="#">没找到商品？我要反馈给神价君！</a></div>';
			layer.open({
                type: 1,
                skin: 'layui-layer-demo',
				title:'神价君友情提示',
                closeBtn: true,
                area: '350px',
                shift: 2,
                shadeClose: false,
                content: html
            });
		}
	});
});

//历史价格查询
$(document).ready(function(){
	$(".oprice_submit").on('click',function(){
		var url = $.trim($(".oprice_input").val());
		if(url==''){
			layer.tips('请输入商品地址，如：http://item.jd.com/1162131.html', '.oprice_input', {
				tips: [1, '#78BA32']
			});
			return false;
		}else if(url.indexOf('jd.com')<=0){
			layer.tips('请输入京东商品纯链接地址，如：http://item.jd.com/1162131.html', '.oprice_input', {
				tips: [1, '#78BA32']
			});
			return false;
		}else{
			var html = '<div class="search_loading"><p>正在拼命查询中，请稍后...</p><p><img src="images/price_load.gif" /></p></div>';
			//var html = '<div class="search_finish"><a href="#">查询完成，点击查看</a></div>';
			//var html = '<div class="search_error"><span onclick="javascript:layer.closeAll();">很遗憾，没找到您想要找的商品！</span><a href="#">没找到商品？我要反馈给神价君！</a></div>';
			layer.open({
                type: 1,
                skin: 'layui-layer-demo',
				title:'神价君友情提示',
                closeBtn: true,
                area: '350px',
                shift: 2,
                shadeClose: false,
                content: html
            });
		}
	});
});

//详细页
$(document).ready(function(){
	$(".bj_go_mall").on('mouseover',function(){
		layer.tips('如果京东微信端或手Q端价格便宜，请用手机扫描右边二维码直达！', '.bj_go_mall', {
			tips: [2, '#e4393c'],time:0
		});
	});
});

//价格走势图
jQuery(document).ready(function() {
var bgPrimary = '#4a89dc',bgSuccess = '#70ca63',bgWarning = '#f6bb42',bgSystem = '#37bc9b';
var highColors = [bgSystem, bgSuccess, bgWarning, bgPrimary];
var seriesData = [{
	allowPointSelect: true,
	name: '京东电脑端',
	data: [5.0, 9, 17, 22, 19, 11.5, 5.2, 59.5, 16.3, 30.3, 16.9, 24.6],
	dataLabels:{
		enabled:true
	},
	marker:{
		enabled:true
	},
	showInLegend: true,
},{
	allowPointSelect: true,
	name: '京东APP端',
	data: [2.9, 3.2, 4.7, 5.5, 8.9, 12.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
	dataLabels:{
		enabled:true
	},
	marker:{
		enabled:true
	},
	showInLegend: true,
	visible:false //隐藏
},{
	allowPointSelect: true,
	name: '京东微信端',
	data: [15, 19, 22.7, 29.3, 22.0, 17.0, 23.8, 19.1, 22.1, 14.10, 11.6, 7.5],
	dataLabels:{
		enabled:true
	},
	marker:{
		enabled:true
	},
	showInLegend: true,
	visible:false //隐藏
},{
	allowPointSelect: true,
	name: '京东手Q端',
	data: [11, 6, 5, 15, 17.0, 22.0, 30.8, 24.1, 14.1, 11.1, 9.6, 6.5],
	dataLabels:{
		enabled:true
	},
	marker:{
		enabled:true
	},
	showInLegend: true,
	visible:false //隐藏
}];
var ecomChart = $('#price_chart');
if (ecomChart.length) {
  ecomChart.highcharts({
	credits: false,
	colors: highColors,
	chart: {
	  backgroundColor: 'transparent',
	  className: '',
	  type: 'line',
	  zoomType: 'x',
	  panning: true,
	  panKey: 'shift',
	  marginTop: 45,
	  marginRight: 1,
	},
	title: {
		text: '京东商城商品历史价格走势图'
	},
	xAxis: {
	  gridLineColor: '#EEE',
	  lineColor: '#EEE',
	  tickColor: '#EEE',
	  categories: ['03-15', '03-16', '03-19', '03-22',
		'03-23', '03-28', '04-01', '04-15',
		'04-20', '04-22', '04-27', '05-01'
	  ]
	},
	yAxis: {
	  min: 0,
	  tickInterval: 5,
	  gridLineColor: '#EEE',
	  title: {
		text: null,
	  }
	},
	plotOptions: {
	  spline: {
		lineWidth: 3,
	  },
	  area: {
		fillOpacity: 0.2
	  }
	},
	legend: {
	  enabled: true,
	  floating: false,
	  align: 'right',
	  verticalAlign: 'top',
	  x: -15
	},
	series: seriesData,
  });
}
});