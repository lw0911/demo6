/**
 * Created by Monster on 2017/5/18.
 */

function error(msg,fn) {
    $.notify({
        title: '<strong>错误提示!</strong>',
        message: msg
    },{
        type: 'danger',
        delay:2000,
        timer:1000,
        allow_dismiss:false,
        showProgressbar:true,
        onClose:fn
    });
}
function success(msg,fn) {
    $.notify({
        title: '<strong>成功提示!</strong>',
        message: msg
    },{
        type: 'success',
        delay:2000,
        timer:1000,
        allow_dismiss:false,
        showProgressbar:true,
        onClose:fn
    });
}