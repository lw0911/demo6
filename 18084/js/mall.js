// 焦点图特效
var adTimer1  = adTimer2  = adTimer3 = adTimer4  = adTimer5  = null;
var currslid1 = currslid2 =currslid3 = currslid4 = currslid5 = 1;

function showImg(currslid, imgDiv, adWidth){
    if (!currslid){
        $("#"+imgDiv+"Ul").stop(true,false).animate({left : -adWidth*currslid}, 500);
    }else{        
        $("#"+imgDiv+"Ul").stop(true,false).animate({left : -adWidth*currslid}, 500);	
    }			
    $("#"+imgDiv+"Span > span:eq(" + currslid + ")").addClass("current").siblings().removeClass("current");
    $("#"+imgDiv+"Next").attr({'page':currslid});
    $("#"+imgDiv+"Prev").attr({'page':currslid});
}

function playIt(imgType){            
    var imgType = parseInt(imgType);    
    var adWidth = 419;
    switch(imgType){
        case 1:
            var adWidth   = 660;
            var courrLen  = $("#indexFocusSpan > span").length;              
            if (courrLen > 1){
                adTimer1      = setInterval(function(){
                    showImg(currslid1, 'indexFocus', adWidth);	        
                    currslid1++;
                    if (currslid1 >= courrLen){
                        currslid1 = 0;	
                    }
                }, 3000);                
            }            
            break;
        case 2:
            var courrLen  = $("#mobileFocusSpan > span").length;                        
            if (courrLen > 1){
                adTimer2      = setInterval(function(){
                showImg(currslid2, 'mobileFocus', adWidth);            	        
                currslid2++;
                if (currslid2 == courrLen){
                    currslid2 = 0;	
                }                
                }, 3000);                
            }                        
            break;
        case 3:
            var courrLen  = $("#computerFocusSpan > span").length;            
            if (courrLen > 1){
                adTimer3      = setInterval(function(){
                    showImg(currslid3, 'computerFocus', adWidth);                    
                    currslid3++;
                    if (currslid3 == courrLen){
                        currslid3 = 0;	
                    }
                }, 3000);                
            }            
            break;
        case 4:
            var courrLen  = $("#digitalFocusSpan > span").length;      
            if (courrLen > 1){
                adTimer4      = setInterval(function(){
                    showImg(currslid4, 'digitalFocus', adWidth);	        
                    currslid4++;
                    if (currslid4 == courrLen){
                        currslid4 = 0;	
                    }
                }, 3000);                
            }            
            break;
        case 5:
            var courrLen  = $("#diyFocusSpan > span").length;            
            if (courrLen > 1){
                adTimer5      = setInterval(function(){                	        
                    showImg(currslid5, 'diyFocus', adWidth);
                    currslid5++;
                    if (currslid5 == courrLen){
                        currslid5 = 0;	
                    }
                }, 3000);                
            }            
            break;
    }        				
}


function stopIt(imgType){   
    imgType = parseInt(imgType);
    switch(imgType){
        case 1:            
                clearInterval(adTimer1);
            break;
        case 2:
                clearInterval(adTimer2);
            break;
        case 3:
                clearInterval(adTimer3);
            break;            
        case 4:
                clearInterval(adTimer4);
            break;                        
        case 5:
                clearInterval(adTimer5);
            break;                        
    }    
}

$(function(){


    // 焦点图
    playIt(1);
    playIt(2);
    playIt(3);
    playIt(4);
    playIt(5);
    
    $(".focus-switch > span").mouseover(function(){
        var imgType  = $(this).parent().attr('rel');
            imgType  = parseInt(imgType);        
        var imgDiv  = '';
        var adWidth = 419;        
        currslid    = parseInt($(this).attr("rel"));  
        switch(imgType){
            case 1:
                currslid1 = currslid;
                imgDiv    = 'indexFocus';
                adWidth   = 660;
                break;   
            case 2:
                currslid2 = currslid;
                imgDiv    = 'mobileFocus';                
                break;            
            case 3:
                currslid3 = currslid;                
                imgDiv    = 'computerFocus';
                break;                
            case 4:
                currslid4 = currslid;
                imgDiv    = 'digitalFocus';
                break;                
            case 5:
                currslid5 = currslid;
                imgDiv    = 'diyFocus';
                break;                
        }
        
        showImg(currslid, imgDiv, adWidth);
        stopIt(imgType);
        $(this).addClass('current').siblings().removeClass('current');
    }).mouseleave(function(){                          
        var imgType  = $(this).parent().attr('rel');
        playIt(imgType);        
    });
    
    var isIE = navigator.userAgent.indexOf("MSIE 6.0") === -1 ? 0 : 1;
    if (!isIE){
        $(".focus-box").mouseenter(function(){        
            $(this).children(".focus-prev-btn").show();
            $(this).children(".focus-next-btn").show();        
        }).mouseleave(function(){
            $(this).children(".focus-prev-btn").hide();
            $(this).children(".focus-next-btn").hide();                
        });        
    }
    
    
    $(".focus-prev-btn, .focus-next-btn").click(function(){
        var imgType   = $(this).attr('rel');
            imgType   = parseInt(imgType);                  
        var courrLen  = parseInt($(this).attr('number')); 
        var currslid  = parseInt($(this).attr('page'));
        var clickType = $(this).attr('type');                 
        
        if ('next' == clickType){
            if ((currslid+1) >= courrLen){
                currslid = 0;
            }else{
                currslid++;
            }
        }else{
            if (!currslid){
                currslid = (courrLen - 1);
            }else{
                currslid--;
            }
            
        }    
        
        var imgDiv  = '';
        var adWidth = 419; 
        switch(imgType){
            case 1:                
                currslid1 = currslid;
                imgDiv    = 'indexFocus';
                adWidth   = 660;
                break;   
            case 2:
                currslid2 = currslid;
                imgDiv    = 'mobileFocus';                
                break;            
            case 3:
                currslid3 = currslid;                
                imgDiv    = 'computerFocus';
                break;                
            case 4:
                currslid4 = currslid;
                imgDiv    = 'digitalFocus';
                break;                
            case 5:
                currslid5 = currslid;
                imgDiv    = 'diyFocus';
                break;                
        }    
        
        showImg(currslid, imgDiv, adWidth);
        stopIt(imgType);
        $("#"+imgDiv+"Span > span").removeClass('current');
        
        var rel = 0;
        $("#"+imgDiv+"Span > span").each(function(){
            rel = parseInt($(this).attr('rel'));            
            if (rel == currslid){
                $(this).addClass('current');
            }
        });        
                        
    });

    // 左侧导航特效
    $(".menu-nav-container > li").hover(function(){
            $(this).addClass("current");
	},
	function(){
            $(this).removeClass("current");
	});    

    
});

