$(function(){
	//用户是否可以点击获取验证码
	var isClick = true;
	//注册按钮是否可以点击
	var isClickRegistor = true;
	//手机注册码
	$("#verification").click(function(){
		if(!isClick){
			return;
		}
		var flag = verifica();
		if(!flag){
			return false;
		}
		var iphone = $.trim($("[name = 'iphone']").val());
		if(iphone == ""){
			layer.tips('手机号未填写!','[name = "iphone"]',{tips:[2,"#3595CC"]});
			$("[name = 'iphone']").focus();
			return false;
		}
		//var isMobile=/^(?:13\d|15\d)\d{5}(\d{3}|\*{3})$/;   
		//var isPhone=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
		var isPhone=/^1[34578]\d{9}$/;
		if(!isPhone.test(iphone)){
			layer.tips('手机号填写不正确!','[name = "iphone"]',{tips:[2,"#3595CC"]});
			$("[name = 'iphone']").focus();
			return false;
		}
		
		
		var val = $("#verification");
		$.post("/user/loginregister",{
			username:$("[name = 'username']").val(),
			password:$("[name = 'password']").val(),
			iphone:iphone,
			cmCode:"sendSmsRegister"
			},
			function(data) {
			if(data.status != "200") {
				layer.msg(data.msg);
				$("[name='name']").focus();
			} else {
				layer.msg("验证码已经发送");
				//设置验证码60秒才可以点击
				time(val);
			}
		});
	});
	//邮箱注册码
	$("#mailverification").click(function(){
		if(!isClick){
			return;
		}
		var flag = verifica();
		if(!flag){
			return false;
		}
		var email = $.trim($("[name = 'email']").val());
		if(email == ""){
			layer.tips('邮箱未填写!','[name = "email"]',{tips:[2,"#3595CC"]});
			$("[name = 'email']").focus();
			return false;
		}
		var reg = /\w+[@]{1}\w+[.]\w+/;
	    if(!reg.test(email)){
			layer.tips('请输入正确的邮箱格式!','[name = "email"]',{tips:[2,"#3595CC"]});
			$("[name = 'email']").focus();
			return false;
	    }
		
		var val = $("#mailverification");

		$.post("/user/loginregister",{
			username:$("[name = 'username']").val(),
			password:$("[name = 'password']").val(),
			email:email,
			cmCode:"sendMailRegister"
			},
			function(data) {
			if(data.status != "200") {
				layer.msg(data.msg);
				$("[name='name']").focus();
			} else {
				layer.msg("验证码已经发送");
				//设置验证码60秒才可以点击
				time(val);
			}
		});
	});
	
	var wait=60;
	//设置验证码60秒才可以点击
	function time(o) {
	        if (wait == 0) {
	            o.html("获取验证码").removeAttr("disabled");
	            wait = 60;
	            isClick = true;
	        } else {
	        	isClick = false;
	            o.attr("disabled", true);
	            o.html("等待" + wait + " 秒重新点击发送!");
	            wait--;
	            setTimeout(function() {
	                time(o)
	            },
	            1000)
	        }
	    }
	
	
	function verifica(){
		var username = $.trim($("[name = 'username']").val());
		if(username == ""){
			layer.tips('用户名未填写!','[name = "username"]',{tips:[2,"#3595CC"]});
			$("[name = 'username']").focus();
			return false;
		}
		var password = $.trim($("[name = 'password']").val());
		if(password == ""){
			layer.tips('密码未填写!','[name = "password"]',{tips:[2,"#3595CC"]});
			$("[name = 'password']").focus();
			return false;
		}
		return true;

	}
	
	//手机注册
	$("#smsRegister").click(function(){
		if(!isClickRegistor){
			return;
		}

		var flag = verifica();
		if(!flag){
			return false;
		}
		var iphone = $.trim($("[name = 'iphone']").val());
		if(iphone == ""){
			layer.tips('手机号未填写!','[name = "iphone"]',{tips:[2,"#3595CC"]});
			$("[name = 'iphone']").focus();
			return false;
		}
		
		var verificationCode = $.trim($("[name = 'verificationCode']").val());
		if(verificationCode == ""){
			layer.tips('验证码未填写!','[name = "verificationCode"]',{tips:[2,"#3595CC"]});
			$("[name = 'verificationCode']").focus();
			return false;
		}
		
		isClickRegistor = false;
		$.post("/user/loginregister",{
			username:$("[name = 'username']").val(),
			password:$("[name = 'password']").val(),
			verificationCode:verificationCode,
			iphone:iphone,
			cmCode:"smsRegister"
			},
			function(data) {
			if(data.status != "200") {
				layer.msg(data.msg);
				$("[name='name']").focus();
				isClickRegistor = true;
			} else {
				layer.msg("注册成功,开始跳转。。。");
	            setTimeout(function() {
	            	location.href=data.data;
	            },
	            600)
				
			}
		});
	
	});
	//邮箱注册
	$("#mailRegister").click(function(){

		if(!isClickRegistor){
			return;
		}
		var flag = verifica();
		if(!flag){
			return false;
		}
		var email = $.trim($("[name = 'email']").val());
		if(email == ""){
			layer.tips('邮箱未填写!','[name = "email"]',{tips:[2,"#3595CC"]});
			$("[name = 'email']").focus();
			return false;
		}
		
		var verificationCode = $.trim($("[name = 'verificationCode']").val());
		if(verificationCode == ""){
			layer.tips('验证码未填写!','[name = "verificationCode"]',{tips:[2,"#3595CC"]});
			$("[name = 'verificationCode']").focus();
			return false;
		}
		
		isClickRegistor = false;
		$.post("/user/loginregister",{
			username:$("[name = 'username']").val(),
			password:$("[name = 'password']").val(),
			verificationCode:verificationCode,
			email:email,
			cmCode:"mailRegister"
			},
			function(data) {
			if(data.status != "200") {
				layer.msg(data.msg);
				$("[name='name']").focus();
				isClickRegistor = true;
			} else {
				layer.msg("注册成功,开始跳转。。。");
	            setTimeout(function() {
	            	location.href=data.data;
	            },
	            600)
			}
		});
	
		
	});
	
	
});
