// JavaScript Document
$(function(){
	//滚动到一定的高度显示DIV绑定滚动条事件
	$(window).bind("scroll", function () { 
		var sTop = $(window).scrollTop(); 
		var sTop = parseInt(sTop); 
		if (sTop >= 500) {
			$("#SubHeader").delay(2000).css("display","block");
		}else{
			$("#SubHeader").css("display","none");
		}
	});
	//网站顶部搜索栏选择条件事件
	$('#Se-shangcheng').on('click', function(){
		//天猫商城
		var id = $("#Se-shangcheng").attr("value");
		var name = "天猫商城";
		$('#serachValue').html(name);
		var oText=document.getElementById('serachClass');
		oText.value=id;
	})
	$('#Se-qita').on('click', function(){
		//其他商城
		var id = $("#Se-qita").attr("value");
		var name = "其他商城";
		$('#serachValue').html(name);
		var oText=document.getElementById('serachClass');
		oText.value=id;
		//alert(oText);
	})
	$('#Se-xindian').on('click', function(){
		//天猫新店
		var id = $("#Se-xindian").attr("value");
		var name = "天猫新店";
		$('#serachValue').html(name);
		var oText=document.getElementById('serachClass');
		oText.value=id;
	})
	$('#Se-taobao').on('click', function(){
		//天猫新店
		var id = $("#Se-taobao").attr("value");
		var name = "淘宝店铺";
		$('#serachValue').html(name);
		var oText=document.getElementById('serachClass');
		oText.value=id;
	})
	//顶部搜索关键词不能为空
	$('#serachText').on('click', function(){
		var serachValue = $("#serachClass").attr("value");
		var serachKey = $("#serachKey").val();
		var url = '/tmall/index.html?terrace='+serachValue+'&key='+serachKey;
		//alert(serachValue);
		if(serachKey==''){
			$("#serachKeyInfo").fadeIn("slow");
			$("#serachKeyInfo").delay(2000).fadeOut("hide");
			$('#serachKeyInfo').html('<i class="icon-eed7"></i><dl>搜索关键词不能为空</dl>');
		}else{
			window.setTimeout(location.href = url, 100);
		}
	})

	//新用户注册
	$('#RegisterBut').on('click', function(){
		var phone = $('#phone').val();
		var captcha = $('#captcha').val();
		var username = $('#name').val(); 
		var password = $('#pass').val();
		var password2 = $('#pass2').val();
		var URL = '/index/formuser/automatic_login.html';
		if(phone==''){
			$("#UpdateHint").fadeIn("slow");
			$("#UpdateHint").delay(2000).fadeOut("hide");
			$('#UpdateHint').html('<span>请输入有效的手机号码！</span>');
		}else if(captcha==''){
			$("#UpdateHint").fadeIn("slow");
			$("#UpdateHint").delay(2000).fadeOut("hide");
			$('#UpdateHint').html('<span>短信码不能为空哦</span>');
		}else if(username==''){
			$("#UpdateHint").fadeIn("slow");
			$("#UpdateHint").delay(2000).fadeOut("hide");
			$('#UpdateHint').html('<span>用户名不能为空</span>');
		}else if(password==''){
			$("#UpdateHint").fadeIn("slow");
			$("#UpdateHint").delay(2000).fadeOut("hide");
			$('#UpdateHint').html('<span>请输入密码</span>');
		}else if(password != password2){
			$("#UpdateHint").fadeIn("slow");
			$("#UpdateHint").delay(2000).fadeOut("hide");
			$('#UpdateHint').html('<span>两次密码输入不一致</span>');
		}else{
			//$(".loadingstyle").show();
			//setTimeout(function(){$(".loadingstyle").hide();},2000);
			//alert("用户不存在");
			$.ajax({
				type: 'POST',
				url: "/index/formuser/Ajax_PhoneRegister",
				data: {phone: phone, captcha: captcha, username: username, password: password, password2: password2},
				dataType: 'json',
				success: function(status){
					if (status == 1) {
						
						$(".loadingstyle").show();
						setTimeout(function(){$(".loadingstyle").hide();},2000);
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(3000).fadeOut("hide");
						$('#UpdateHint').html('<span class="ok">注册成功</span>');
						window.setTimeout(location.href = URL, 3000);
					 }else if (status == 2){
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(2000).fadeOut("hide");
						$('#UpdateHint').html('<span>短信码错误</span>');
					}else if (status == 3){
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(2000).fadeOut("hide");
						$('#UpdateHint').html('<span>手机已经存在</span>');
					}else if (status == 4){
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(2000).fadeOut("hide");
						$('#UpdateHint').html('<span>用户名已经存在</span>');
					}else if (status == 7){
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(2000).fadeOut("hide");
						$('#UpdateHint').html('<span>与接收短信的手机号码不符合</span>');
					}else{
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(2000).fadeOut("hide");
						$('#UpdateHint').html('<span>注册失败，服务器繁忙</span>');
					}
				}
			});
		}
	})
	
	//重置密码
	$('#setup_pass_button').on('click', function(){
		
		var url = '/user/passrev.html';
		var rawPass = $('#rawpass').val();
		var newPass = $('#newpass').val();
		var confirmPass = $('#confirmpass').val();
		
		if (rawPass==""){
			$("#UpdateHint").fadeIn("slow");
			$("#UpdateHint").delay(3000).fadeOut("hide");
			$('#UpdateHint').html('<span>原始密码不能为空</span>');
		}else if (newPass==""){
			$("#UpdateHint").fadeIn("slow");
			$("#UpdateHint").delay(3000).fadeOut("hide");
			$('#UpdateHint').html('<span>新密码不能为空</span>');
		}else if (confirmPass==""){
			$("#UpdateHint").fadeIn("slow");
			$("#UpdateHint").delay(3000).fadeOut("hide");
			$('#UpdateHint').html('<span>确认密码不能为空</span>');
		}else{
			
			$.ajax({
				type: 'POST',
				url: "/index/formuser/Ajax_UserPass",
				data: {rawPass: rawPass, newPass: newPass, confirmPass: confirmPass},
				dataType: 'json',
				success: function(status){
					if (status == 1) {
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(3000).fadeOut("hide");
						$('#UpdateHint').html('<span class="ok">重置密码成功</span>');
						//window.setTimeout(location.href = url);
						window.setTimeout(location.href = url, 3000);
					 }else if (status == 2){
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(3000).fadeOut("hide");
						$('#UpdateHint').html('<span>原始密码错误</span>');
					}else if (status == 3){
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(3000).fadeOut("hide");
						$('#UpdateHint').html('<span>两次密码不一致</span>');
					}else if (status == 4){
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(3000).fadeOut("hide");
						$('#UpdateHint').html('<span>新密码不能与原始密码相同</span>');
					}else if (status == 5){
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(3000).fadeOut("hide");
						$('#UpdateHint').html('<span>重置失败</span>');
					}else{
						$("#UpdateHint").fadeIn("slow");
						$("#UpdateHint").delay(3000).fadeOut("hide");
						$('#UpdateHint').html('<span>重置失败222</span>');
					}
				}
			});
		}
		
	})

	//设置用户头像
	$('#setup_portrait_button').on('click', function(){
		
		var PortraitUrl = $('#PortraitUrl').val();
		//alert(PortraitUrl);
		$.ajax({
			type: 'POST',
			url: "/index/formuser/Ajax_EditUserPortrait",
			data: {PortraitUrl: PortraitUrl},
			dataType: 'json',
			success: function(status){
				if (status == 1) {
					$("#UpdateHint").fadeIn("slow");
					$("#UpdateHint").delay(3000).fadeOut("hide");
					$('#UpdateHint').html('<span class="ok">头像设置成功</span>');
					//window.setTimeout(location.href = url);
				}else if (status == 3){
					$("#UpdateHint").fadeIn("slow");
					$("#UpdateHint").delay(3000).fadeOut("hide");
					$('#UpdateHint').html('<span>请选择一个头像</span>');
				}else{
					$("#UpdateHint").fadeIn("slow");
					$("#UpdateHint").delay(3000).fadeOut("hide");
					$('#UpdateHint').html('<span>设置头像失败</span>');
				}
			}
		});
	})

	//修改个人资料
	$('#setup_personal_button').on('click', function(){
		
		var qq = $('#qq').val();
		var mail = $('#mail').val();
		var address = $('#address').val();
		//alert(PortraitUrl);
		$.ajax({
			type: 'POST',
			url: "/index/formuser/Ajax_EditUserPersonal",
			data: {qq: qq, mail: mail, address: address},
			dataType: 'json',
			success: function(status){
				if (status == 1) {
					$("#UpdateHint").fadeIn("slow");
					$("#UpdateHint").delay(3000).fadeOut("hide");
					$('#UpdateHint').html('<span class="ok">个人资料修改成功</span>');
					//window.setTimeout(location.href = url);
				}else{
					$("#UpdateHint").fadeIn("slow");
					$("#UpdateHint").delay(3000).fadeOut("hide");
					$('#UpdateHint').html('<span>修改失败</span>');
				}
			}
		});
	})
	
	
	
	
	
	
})



//数字滚动加载效果
jQuery(function($) {
	$("#numberTimer1").countTo({
		lastSymbol:"", //显示在最后的字符
		from: 0,  // 开始时的数字
		speed: 5000,  // 总时间
		refreshInterval:100,  // 刷新一次的时间
		beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
		decimals:0,  // 小数点后的位数，小数做四舍五入
		onUpdate: function() {
		},  // 更新时回调函数
		onComplete: function() {
			for(i in arguments){
				//console.log(arguments[i]);
			}
		}
	});
	$("#numberTimer2").countTo({
		lastSymbol:"", //显示在最后的字符
		from: 0,  // 开始时的数字
		speed: 5000,  // 总时间
		refreshInterval:100,  // 刷新一次的时间
		beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
		decimals:0,  // 小数点后的位数，小数做四舍五入
		onUpdate: function() {
		},  // 更新时回调函数
		onComplete: function() {
			for(i in arguments){
				//console.log(arguments[i]);
			}
		}
	});
	$("#numberTimer3").countTo({
		lastSymbol:"", //显示在最后的字符
		from: 0,  // 开始时的数字
		speed: 5000,  // 总时间
		refreshInterval:100,  // 刷新一次的时间
		beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
		decimals:0,  // 小数点后的位数，小数做四舍五入
		onUpdate: function() {
		},  // 更新时回调函数
		onComplete: function() {
			for(i in arguments){
				//console.log(arguments[i]);
			}
		}
	});
	$("#numberTimer4").countTo({
		lastSymbol:"", //显示在最后的字符
		from: 0,  // 开始时的数字
		speed: 5000,  // 总时间
		refreshInterval:100,  // 刷新一次的时间
		beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
		decimals:0,  // 小数点后的位数，小数做四舍五入
		onUpdate: function() {
		},  // 更新时回调函数
		onComplete: function() {
			for(i in arguments){
				//console.log(arguments[i]);
			}
		}
	});
	$("#numberTimer5").countTo({
		lastSymbol:"", //显示在最后的字符
		from: 0,  // 开始时的数字
		speed: 5000,  // 总时间
		refreshInterval:100,  // 刷新一次的时间
		beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
		decimals:0,  // 小数点后的位数，小数做四舍五入
		onUpdate: function() {
		},  // 更新时回调函数
		onComplete: function() {
			for(i in arguments){
				//console.log(arguments[i]);
			}
		}
	});
	$("#numberTimer6").countTo({
		lastSymbol:"", //显示在最后的字符
		from: 0,  // 开始时的数字
		speed: 5000,  // 总时间
		refreshInterval:100,  // 刷新一次的时间
		beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
		decimals:0,  // 小数点后的位数，小数做四舍五入
		onUpdate: function() {
		},  // 更新时回调函数
		onComplete: function() {
			for(i in arguments){
				//console.log(arguments[i]);
			}
		}
	});
	$("#numberTimer7").countTo({
		lastSymbol:"+", //显示在最后的字符
		from: 0,  // 开始时的数字
		speed: 2000,  // 总时间
		refreshInterval:100,  // 刷新一次的时间
		beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
		decimals:0,  // 小数点后的位数，小数做四舍五入
		onUpdate: function() {
		},  // 更新时回调函数
		onComplete: function() {
			for(i in arguments){
				//console.log(arguments[i]);
			}
		}
	});
	$("#numberTimer8").countTo({
		lastSymbol:"+", //显示在最后的字符
		from: 0,  // 开始时的数字
		speed: 2000,  // 总时间
		refreshInterval:100,  // 刷新一次的时间
		beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
		decimals:0,  // 小数点后的位数，小数做四舍五入
		onUpdate: function() {
		},  // 更新时回调函数
		onComplete: function() {
			for(i in arguments){
				//console.log(arguments[i]);
			}
		}
	});
	$("#numberTimer9").countTo({
		lastSymbol:"+", //显示在最后的字符
		from: 0,  // 开始时的数字
		speed: 2000,  // 总时间
		refreshInterval:100,  // 刷新一次的时间
		beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
		decimals:0,  // 小数点后的位数，小数做四舍五入
		onUpdate: function() {
		},  // 更新时回调函数
		onComplete: function() {
			for(i in arguments){
				//console.log(arguments[i]);
			}
		}
	});
});
