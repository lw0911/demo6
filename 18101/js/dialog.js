/*
  dialog弹框组件
*/
function Dialog(_o){
  var _t=this;
    _t.type=_o.type?_o.type:"";
    _t.typeImg=_o.typeImg;
    _t.text=_o.text;
    _t.text1=_o.text1;
    _t.text2=_o.text2;
    _t.callback=_o.callback?_o.callback:"";
     _t.confirm=_o.confirm?_o.confirm:"";
     _t.cancel=_o.cancel?_o.cancel:"";
     _t.titleText=_o.titleText?_o.titleText:"消息提醒";
}

Dialog.prototype = {
  init:function(){
       var _t=this;
           _t.htmlFun();
  },

  htmlFun:function(){
     var _t=this,
         html="",
         html_1="",
         htmlC="";
         _t.repeat=null;
     if(_t.type=="cart"){
         htmlC= '<div class="text">'+_t.text+'</div><div class="accountBox"><a href="'+_basePath+'cart.html" class="accountTo">去结算</a><a href="javascript:void(0)" class="close">继续购物>></a></div>'; 
     }else if(_t.type=="oneCart"){
          htmlC= '<div class="text text1">'+_t.text+'</div></div>'; 
     }else if(_t.type=="auto"){
          htmlC= '<div class="text">'+_t.text+'</div><div class="btnBox"><span class="closeBtn close">关闭</span></div>'; 
     }else if(_t.type=="confirm"){
          htmlC= '<div class="text">'+_t.text+'</div><div  class="accountBox"><span class="closeBtn confirm">确定</span><span class="closeBtn cancel">取消</span></div>'; 
       }else if(_t.type=="draw"){
       htmlC= '<div class="drawText"><p>'+_t.text+'</p><p>'+_t.text1+'</p><p class="blueP close">'+_t.text2+'</p><a href="/index.html">去商城逛一逛</a></div>';  
     }else if(_t.type=="timeTip"){
      htmlC= '<div class="timeTip"><p class="boldP">'+_t.text+'</p><p>'+_t.text1+'</p></div>'; 
       }else if(_t.type=="long" || _t.type=="long_s"){//文字较长的情况
         htmlC= '<div class="text" style="font-weight:normal;height:auto;width:auto;background:none;;margin:20px 0;text-align:left;font-size:12px">'+_t.text+'</div><div class="btnBox"><span class="closeBtn close">关闭</span></div>'; 
       }else{
          htmlC= '<div class="text">'+_t.text+'</div><div class="btnBox"><span class="closeBtn close">关闭</span></div>'; 
     }
         html='<div class="dialogWrap"></div><div class="dialog" id="dialog"><div class="title"><span class="titleText">'+_t.titleText+'</span><span class="closebg close"></span></div>'+htmlC+'</div>';
         html_1='<div class="dialogWrap"></div><div class="dialog" id="dialog" style="width:548px;height:400px;margin-left:-274px;margin-top: -190px;"><div class="title"><span class="titleText">'+_t.titleText+'</span><span class="closebg close"></span></div>'+htmlC+'</div>';
         if(_t.type=="long_s"){
           $("body").append(html_1);
         }else{
           $("body").append(html);
         }
         
           _t.dialogWrap=$(".dialogWrap");
           _t.dialogEle=$(".dialog");
           _t.dialogWrap.height($(document).height());
           _t.confirmBtn=$("#dialog .confirm");
           _t.cancelBtn=$("#dialog .cancel");

           if(_t.typeImg=="ensure"){
            _t.dialogEle.find(".text").css({"background-position":"0 -38px"})
           }else if(_t.typeImg=="none"){
             _t.dialogEle.find(".text").css({"background":"none"})
           }  
           _t.type=="confirm"?_t.conDialog():"";
          _t.auto();
          _t.close();
  },
    auto:function(){
      var seconds=$("#seconds"),
           _t=this,
           num=5;
      if(_t.type=="auto"){
        clearInterval(_t.repeat);
           _t.repeat=setInterval(function(){
              if(num==0){
                clearInterval(_t.repeat);
              _t.dialogEle.remove();
              _t.dialogWrap.remove();
              _t.callback?_t.callback():"";
              }else{
                num--;
              }
              seconds.html(num);
          },1000)
      }
    },
  conDialog:function(){
    var _t=this;
    _t.confirmBtn.on("click",function(){
      _t.confirm();
      _t.dialogEle.remove();
      _t.dialogWrap.remove();
    });
    _t.cancelBtn.on("click",function(){
      _t.cancel();
      _t.dialogEle.remove();
      _t.dialogWrap.remove();
    })
  },
  close:function(){
    var _t=this; 
        _t.closebtn=_t.dialogEle.find(".close");
        _t.closebtn.click(function(){
             clearInterval(_t.repeat);
             _t.dialogEle.remove();
             _t.dialogWrap.remove();
             _t.callback?_t.callback():"";
      })
  }
}