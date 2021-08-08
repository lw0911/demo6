/**
 * 购物车JS
 *
 */
$(function(){
	$(".shopCar li").hover(function(){
		$(this).addClass('hover').find(".shopBox").show();
	},function(){
		$(this).removeClass('hover').find(".shopBox").hide();
	});
	
	$(".shopClick").hover(function(){
		$(this).addClass('up-hover').removeClass('down-hover');
	},function(){
		$(this).removeClass('up-hover').addClass('down-hover');
	});

	$('.removeBtn').click(function(){
	    $(this).closest('.sList').remove();
	});
});



/*商品累加PLUS---Minus*/
$(function() {
   $('.num_plus').click(function(){
        var numval = $(this).parent().find('input').val();
        var numint = parseInt(numval);
        if(typeof numint == 'number'){
            var num = numint + 1;
            $(this).parent().find('input').val(num);
        }
   });
   $('.num_minus').click(function(){
        var numval = $(this).parent().find('input').val();
        var numint = parseInt(numval);
        if(typeof numint == 'number' && numint > 1){
            var num = numint - 1;
            $(this).parent().find('input').val(num);
        }
    });
})





//showCart--js

