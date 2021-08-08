/**
 * Created by Administrator on 2016/2/20.
 */

/*验证码倒计时*/
function djstime(){
    var e1=$(".yzmimga").first();
    var i=10;
    var interval=setInterval(function(){
        e1.html("剩余"+i+"秒");
        $(".yzmimga").css("line-height","30px");
        i--;
        if(i<0){
            $(".yzmimga").css("line-height","30px");
            e1.html("重新获取");
            clearInterval(interval);
        }
    },1000);
}

$(".yzmimga").click(function(){
    djstime();
});