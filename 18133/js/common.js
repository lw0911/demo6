//
$(function(){
    $(".nav li:last").css('background', 'none');
  });
  
//首页新闻tab切换
$(function(){
	$(".indexc_con .tab a").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		$('.content li').hide();
		$('.content li:eq('+index+')').show();
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('.indexc_con .tab a').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('.indexc_con .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
			$('.content ul li:eq('+number+')').show().siblings().hide();
		}
		var tabChange = setInterval(autotab,3000);
		//鼠标悬停暂停切换
		$('.indexc_con').mouseover(function(){
			clearInterval(tabChange);
		});
		$('.indexc_con').mouseout(function(){
			tabChange = setInterval(autotab,3000);
		});
	  }
});

//设为首页  
   function SetHome(url){
 
        if (document.all) {
 
            document.body.style.behavior='url(#default#homepage)';
 
               document.body.setHomePage(url);
 
        }else{
 
            alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
        }
    }

    //加入收藏
 
        function AddFavorite(sURL, sTitle) {
 
            sURL = encodeURI(sURL);
        try{  
 
            window.external.addFavorite(sURL, sTitle);  
 
        }catch(e) {  
 
            try{  
                window.sidebar.addPanel(sTitle, sURL, "");  
            }catch (e) {  
 
                alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
            }  
        } 
    } 
	
//图片按比例缩放 
var flag = false;   
   function DrawImage(ImgD, iwidth, iheight) {   
	   //参数(图片,允许的宽度,允许的高度)   
	   var image = new Image();   
	   image.src = ImgD.src;   
	   if (image.width > 0 && image.height > 0) {   
		   flag = true;   
		if (image.width / image.height >= iwidth / iheight) {   
			if (image.width > iwidth) {   
				ImgD.width = iwidth;   
				ImgD.height = (image.height * iwidth) / image.width;   
			} else {   
				ImgD.width = image.width;   
				ImgD.height = image.height;   
			}   
		   ImgD.alt = image.width + "×" + image.height;   
		}   
		else {   
			if (image.height > iheight) {   
				ImgD.height = iheight;   
				ImgD.width = (image.width * iheight) / image.height;   
			} else {   
				ImgD.width = image.width;   
				ImgD.height = image.height;   
			}   
			ImgD.alt = image.width + "×" + image.height;   
		}   
	}   
}

<!--
//图片滚动列表 mengjia 070927
var Speed_1 = 10; //速度(毫秒)
var Space_1 = 10; //每次移动(px)
var PageWidth_1 = 229 * 1; //翻页宽度
var interval_1 = 3000; //翻页间隔
var fill_1 = 0; //整体移位
var MoveLock_1 = false;
var MoveTimeObj_1;
var MoveWay_1="right";
var Comp_1 = 0;
var AutoPlayObj_1=null;
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay_1(){clearInterval(AutoPlayObj_1);AutoPlayObj_1=setInterval('ISL_GoDown_1();ISL_StopDown_1();',interval_1)}
function ISL_GoUp_1(){if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="left";MoveTimeObj_1=setInterval('ISL_ScrUp_1();',Speed_1);}
function ISL_StopUp_1(){if(MoveWay_1 == "right"){return};clearInterval(MoveTimeObj_1);if((GetObj('ISL_Cont_1').scrollLeft-fill_1)%PageWidth_1!=0){Comp_1=fill_1-(GetObj('ISL_Cont_1').scrollLeft%PageWidth_1);CompScr_1()}else{MoveLock_1=false}
AutoPlay_1()}
function ISL_ScrUp_1(){if(GetObj('ISL_Cont_1').scrollLeft<=0){GetObj('ISL_Cont_1').scrollLeft=GetObj('ISL_Cont_1').scrollLeft+GetObj('List1_1').offsetWidth}
GetObj('ISL_Cont_1').scrollLeft-=Space_1}
function ISL_GoDown_1(){clearInterval(MoveTimeObj_1);if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="right";ISL_ScrDown_1();MoveTimeObj_1=setInterval('ISL_ScrDown_1()',Speed_1)}
function ISL_StopDown_1(){if(MoveWay_1 == "left"){return};clearInterval(MoveTimeObj_1);if(GetObj('ISL_Cont_1').scrollLeft%PageWidth_1-(fill_1>=0?fill_1:fill_1+1)!=0){Comp_1=PageWidth_1-GetObj('ISL_Cont_1').scrollLeft%PageWidth_1+fill_1;CompScr_1()}else{MoveLock_1=false}
AutoPlay_1()}
function ISL_ScrDown_1(){if(GetObj('ISL_Cont_1').scrollLeft>=GetObj('List1_1').scrollWidth){GetObj('ISL_Cont_1').scrollLeft=GetObj('ISL_Cont_1').scrollLeft-GetObj('List1_1').scrollWidth}
GetObj('ISL_Cont_1').scrollLeft+=Space_1}
function CompScr_1(){if(Comp_1==0){MoveLock_1=false;return}
var num,TempSpeed=Speed_1,TempSpace=Space_1;if(Math.abs(Comp_1)<PageWidth_1/2){TempSpace=Math.round(Math.abs(Comp_1/Space_1));if(TempSpace<1){TempSpace=1}}
if(Comp_1<0){if(Comp_1<-TempSpace){Comp_1+=TempSpace;num=TempSpace}else{num=-Comp_1;Comp_1=0}
GetObj('ISL_Cont_1').scrollLeft-=num;setTimeout('CompScr_1()',TempSpeed)}else{if(Comp_1>TempSpace){Comp_1-=TempSpace;num=TempSpace}else{num=Comp_1;Comp_1=0}
GetObj('ISL_Cont_1').scrollLeft+=num;setTimeout('CompScr_1()',TempSpeed)}}
function picrun_ini(){
GetObj("List2_1").innerHTML=GetObj("List1_1").innerHTML;
GetObj('ISL_Cont_1').scrollLeft=fill_1>=0?fill_1:GetObj('List1_1').scrollWidth-Math.abs(fill_1);
GetObj("ISL_Cont_1").onmouseover=function(){clearInterval(AutoPlayObj_1)}
GetObj("ISL_Cont_1").onmouseout=function(){AutoPlay_1()}
AutoPlay_1();
}
//产品展示滚动图片结束
//-->
