$(document).ready(function(){
    $(".indexnav-ul:eq(0)").show();
    $(".indexnav > ul>li>a").click(function(){
        var $this = $(this);
        var mclass = $this.attr("class");
        if(mclass!=undefined && mclass!=null && mclass.indexOf("current")!=-1) {

            $(this).removeClass("current").next().slideUp(300);
        }
        else
        {
            $(".indexnav-ul").hide();
            $(".indexnav a").removeClass("current");
            $(this).addClass("current").next().slideDown(300);
        }
        return false;
    });

});