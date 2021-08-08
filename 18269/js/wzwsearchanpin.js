/**
 * 搜门店图片JS
 *
 * @author wzw
 */
(function() {
    //页面私有变量
    /**
     *  页面主要的功能实现
     * @type {Object}
     */
    var wzwpen = {
        init: function() {
            this.collectshowhide();
        },
       
        collectshowhide:function(){
            $('.wzwaddtoa1').click(function(){
                $('.wai_bg').show();
                $('.car_cd_bg').show();
                if ($('.wai_bg').css('display') != 'none') {
                    $('.wai_bg').mouseout(function () {
                        $('.car_cd_bg').click(function () {
                               $('.wai_bg').hide();
                               $('.car_cd_bg').hide();
                         })
                    })
                    return false;
                } 
            });
            $('.wzwcollectti span').click(function(){
                $('.wai_bg').hide();
                $('.car_cd_bg').hide();
            });
            $('.wzwcollectbtn span').click(function(){
                $('.wai_bg').hide();
                $('.car_cd_bg').hide();
            });
            

        }
    }
    //domready 后调用页面初始化方法
    $(function(){
        wzwpen.init();
    });
})();