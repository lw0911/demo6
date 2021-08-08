(function(_self) {
  //全局地址
   var _href = window.location.href;
   var _port = "";
   if(_href.indexOf("test") != -1 && _href.indexOf("test") < 12){
      _port = ":8880";
   }
  _self.requestUrl={
    home     : "http://www.maim9.com"+_port+"/mmjmanger/",
    login    : "http://login.maim9.com"+_port+"/mmjmanger/",
    goods    : "http://goods.maim9.com"+_port+"/mmjmanger/",
    search   : "http://search.maim9.com"+_port+"/mmjmanger/",
    news     : "http://news.maim9.com"+_port+"/mmjmanger/",
    addr     : "http://address.maim9.com"+_port+"/mmjmanger/",
    cart     : "http://shoppingcart.maim9.com"+_port+"/mmjmanger/",
    prom     : "http://promotions.maim9.com"+_port+"/mmjmanger/",
    member   : "http://member.maim9.com"+_port+"/mmjmanger/",
    order    : "http://order.maim9.com"+_port+"/mmjmanger/",
    payment  : "http://payment.maim9.com"+_port+"/mmjmanger/",
    imgPath  : "http://img"+Math.floor(Math.random()*(4))+".maim9.com/",
    image    : "http://image.maim9.com:18888/"
  };
  //判断访问设备start
  var _isMobile = false;
  var browser = {
   versions : function () {
     var a = navigator.userAgent;
     return {
       mobile : !!a.match(/AppleWebKit.*Mobile.*/),
       ios : !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
       android : -1 < a.indexOf("Android") || -1 < a.indexOf("Linux"),
       iPhone : -1 < a.indexOf("iPhone"),
       iPad : -1 < a.indexOf("iPad"),
       webApp : -1 == a.indexOf("Safari")
     }
   }()
  };
   //判断访问设备end
  if(typeof console =="undefined"){
    $("body").append("<div id='console' style='display:none;position:fixed;top:0px;left:0px;width:200px;height:95px;overflow:hidden;background-color:black;color:#ff9e1a;'><a style='float:right' herf='javascript:void(0)' onclick='console.close()'>关闭</a></div>");
    self.console={
      consoleList:"",
      log:function(param){
        $("#console").show();
        this.consoleList+=param+",";
        $("#console").append(this.consoleList.split(",").reverse().join("<br>"));
      },
      close:function(){
        $("#console").hide();
      }
    };
  }
  /******************************************************************************************************************
  获取某个cookie： $.cookie("mmj_topBanner")           获取mmj_topBanner的cookie值
  设置某个cookie： $.cookie("mmj_topBanner","1",{expires:1});  mmj_topBanner的值为1，并且过期时间是1个小时
  删除某个cookie： $.cookie("mmj_topBanner", null);        删除mmj_topBanner
  ******************************************************************************************************************/
  jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie 
          options = options || {}; 
          if (value === null) { 
              value = ''; 
              options.expires = -1; 
          } 
      var expires = ''; 
      if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) { 
        var date; 
        if (typeof options.expires == 'number') { 
          date = new Date(); 
          date.setTime(date.getTime() + (options.expires * 60 * 60 * 1000)); //expires为1，就是一个小时， 为4 就是4个小时
        } else { 
          date = options.expires; 
        } 
        expires = '; expires=' + date.toUTCString(); 
      }
      var path = options.path ? '; path=' + (options.path) : ''; 
      var domain = options.domain ? '; domain=' + (options.domain) : ''; 
      var secure = options.secure ? '; secure' : ''; 
      document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join(''); 
        
      } else { 
          var cookieValue = null; 
          if (document.cookie && document.cookie != '') { 
              var cookies = document.cookie.split(';'); 
              for (var i = 0; i < cookies.length; i++) { 
                  var cookie = jQuery.trim(cookies[i]); 
                  if (cookie.substring(0, name.length + 1) == (name + '=')) { 
                      cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); 
                      break; 
                  } 
              } 
          } 
          return cookieValue; 
      } 
  };
    //公共方法
  _self.common = {};
  //工具
  _self.common.tools = {
    //去左右两端空格
    trim:function(str){
      return str.replace(/(^\s*)|(\s*$)/g,"");
    },
    //取地址栏参数
    getUrlParam : function(param){
      var reg = new RegExp("(^|&)"+ param +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      var reStr = (r != null?unescape(r[2]):"");
      return reStr;
    },
    getBackUrl : function(){
      return (window.location.href).substring((window.location.href).indexOf(".com")+4);
    },
    //取当前窗口的width
    winWidth:function(){
       var width;
       if (window.innerWidth){
          width = window.innerWidth;
       }
       else if ((document.body) && (document.body.clientWidth)){
          width = document.body.clientWidth;
       }
       if (document.documentElement  && document.documentElement.clientWidth){
          width = document.documentElement.clientWidth;
       }
       return width;
    },
    //取当前窗口的height
    winHeight:function(){
        return $(window).height();
    }
  };
  //登陆相关
  _self.common.login = {
    isLogin : function(){
      return true;
    },
    logout : function(){
      return true;
    }
  };
  //js相关
  _self.common.js = {
    //ajax
    ajx : function(url, data, successfn, errorfn) {
      data = (data==null || data=="" || typeof(data)=="undefined") ? {"date": new Date().getTime()} : data;
      $.ajax({
          type: "get",
          async:false,
          url: url,
          data: data,
          dataType : "jsonp",
          jsonp: "jsonpCallback",
          success: function(d){
              successfn(d);
          },
          error: function(e){
              errorfn(e);
          }
      });
    },
    cartBindAction : function(){
        $("a[class*='linkAdd']").bind("click",function(){
        linkToShoppingCart.call(this);
      })
    },
  //一键购事件--xzz
    keyBuyBindAction : function(){
        $("a[class*='keyBuyAdd']").bind("click",function(){
        keyBuyCart.call(this);
      })
    },
    getLazyLoad : function(){
      $("img.lazy").lazyload({skip_invisible:false,threshold:10,effect:"fadeIn",effectspeed:1000});
    },
    getCartNum : function(){
      var cookieCartNum = $.cookie("cartNum");//购物车数量
        if(cookieCartNum){
          $("#header_cartNum").html(cookieCartNum);
          $("#cartNum").html(cookieCartNum);
        }else{
          $("#header_cartNum").html("0");
          $("#cartNum").html("0");
        }
    },
    checkMobile:function(){
      if (browser.versions.iPhone || browser.versions.iPad || browser.versions.mobile || browser.versions.android){
        return true;
      }
      return false;
    }
  };
  //购物车相关
  _self.common.cart={
    
  }
})(window)
//---------------------------------------------------------------
$(function(){
  common.js.cartBindAction();
  common.js.keyBuyBindAction();
});

function linkToShoppingCart(){
  var gId = $(this).attr("gId"),
      gCount = $(this).attr("gCount"),
      gType = $(this).attr("gType"),
      gName = $(this).attr("gName"),
      gPrice = $(this).attr("gPrice");
  common.js.ajx(requestUrl.cart+"ishoppingCart/addToCart.action",{goodsId:gId,isBind:gType,goodsNum:gCount},function(data){
    if(data.result.infcode == "0"){
      var dialog = new Dialog({type:"cart",typeImg:"ensure",text:data.result.info});
      dialog.init();
      common.js.getCartNum();
      //推广代码
      _adwq.push([ '_setDataType', 'cart' ]);
      _adwq.push([ '_setCustomer',
          $.cookie("mmj_memberid")==null ? "":$.cookie("mmj_memberid")//1234567是一个例子，请换成当前登陆用户ID或用户名，未登录情况下传空字符串
      ]);
      _adwq.push(['_setItem',
        gId,    // 09890是一个例子，请填入商品编号  - 必填项
        gName,       // 电视是一个例子，请填入商品名称  - 必填项
        gPrice,    // 12.00是一个例子，请填入商品金额  - 必填项
        gCount,        // 1是一个例子，请填入商品数量  - 必填项
        gType,     // A123是一个例子，请填入商品分类编号  - 必填项
        '葡萄酒'        // 家电是一个例子，请填入商品分类名称  - 必填项
      ]);
      _adwq.push([ '_trackTrans' ]);
    }else if(data.result.infcode == "2"){
       alert("抱歉，我被抢光了，下次哟……")
    }else{
      alert(data.result.info);
    }
  },function(d){
    //alert('加入购物车失败！');
  var dialog = new Dialog({type:"auto",typeImg:"error",text:"加入购物车失败！"});
  dialog.init();
  });
}
//添加一键购事件 【add by xzz】
function keyBuyCart(){
  var gId = $(this).attr("gId"),
    gCount = $(this).attr("gCount"),
    gType = $(this).attr("gType");
  common.js.ajx(requestUrl.cart+"ishoppingCart/oneKeyBuy.action",{goodsId:gId,isBind:gType,goodsNum:gCount},function(data){
    //0：请求成功，返回数据 1：登录超时,请重新登录！ 2：返回最大购买数量！ 3：商品的库存不足！
    //4:您还没有快捷购地址,请到会员中心设置 5:参数错误 6：系统错误 7：保存订单失败
    if(data.result.infcode == "0"){
      var payTypeId = data.result.info.payTypeId;//0线上支付跳银行 1线下支付
      var orderId = data.result.info.orderId;//订单id
      var payId = data.result.info.payId;//订单id
      var orderCost = data.result.info.orderCost;//订单id
      window.open(_basePath+"orderok.html?sId=" + payTypeId + "&OrdId=" + orderId + "&OrdAmt=" + orderCost + "&bId=" + payId, "_blank");
    }else{
      var dialog = new Dialog({type:"auto",typeImg:"error",text:data.result.info});
      dialog.init();
    }
  },function(d){
    alert('一键购失败！');
  });
}