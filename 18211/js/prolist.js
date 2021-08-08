/**
 * Created by Administrator on 2017/8/14.
 */
//var getyxl = jQuery('#picLBxxl li').eq(0).width();
var getyxl = 244;
(function($){
    var arartta= window['arartta'] = function(o){
        return new das(o);
    }
    das = function(o){
        this.obj = $('#'+o.obj);
        this.bnt = $('#'+o.bnt);
        this.showLi = this.obj.find('li');
        this.current = 0;
        this.myTimersc = '';
        this.init()
    }
    das.prototype = {
        chgPic:function(n){
            var _this = this;
            for (var i = 0,l= _this.showLi.length; i < l; i++) {
                _this.showLi.eq(i).find(".pic").find('img').eq(n).attr('src',_this.showLi.eq(i).find(".pic").find('img').eq(n).attr('nsrc'));

                $('#picLBxxl dl:not(:animated)').animate({left: -(n * getyxl) + "px"}, {easing:"easeInOutExpo"}, 1500, function(){});
            }
        },
        rotate:function(){
            var _this = this;
            clearInterval(_this.myTimersc);
            _this.bnt.children().css({
                '-webkit-transform':'rotate(0deg)',
                '-moz-transform':'rotate(0deg)'
            });
            var tt = 0;
            var getBnts = _this.bnt.children();
            _this.myTimersc = setInterval(function(){
                tt += 10;
                if (tt >= 180) {
                    clearInterval(_this.myTimersc);
                }
                rotateElement(getBnts,tt);
            },25)
        },
        init:function(){
            var _this = this;
            this.bnt.bind("click",function(){
                _this.current++;
                if (_this.current > 2) {
                    _this.current = 0 ;
                }
                _this.chgPic(_this.current);
                _this.rotate();

            })
            this.bnt.mouseenter(function () {
                _this.rotate();
            });

        }
    }
})(jQuery)

arartta({
    bnt:'xxlChg',
    obj:'picLBxxl'
});

function rotateElement(element,angle){
    var rotate = 'rotate('+angle+'deg)';
    if(element.css('MozTransform')!=undefined)
        element.css('MozTransform',rotate);
    else if(element.css('WebkitTransform')!=undefined)
        element.css('WebkitTransform',rotate);
}