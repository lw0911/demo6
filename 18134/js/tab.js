/**
 * Created by Administrator on 15-9-9.
 */
$(function(){
    $(".newtitle ul li").each(function(j){
        var num=j+1;
        $(this).click(function(){
            $(".newtitle ul li").attr("class","");
            $(this).attr("class","spanactive");
            for(var i=1;i<=2;i++){
                $("#tab_kc"+i).css("display","none");
            }
            $("#tab_kc"+num).css("display","block");
        });
    });
})