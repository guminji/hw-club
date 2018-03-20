// ;(function(global,$){
// 	$('.pop_set .message .uname').val('223232323');
// })(window, Zepto||jQuery)

var data = {
	"host_card": 0,//房主房卡
	"club_lower_card": "100",//俱乐部
	"club_create_top": "100",//俱乐部创建最多人数
	"roomConfig": [{
		"title": "局数",
		"info": {
			"AA": [{
				"name": "record",
				"type": "radio",
				"text": "2局",
				"value": 1,
				"isFree": 0,
				"checked": 1
			}, {
				"name": "record",
				"type": "radio",
				"text": "4局",
				"value": 2,
				"isFree": 0,
				"checked": 0
			}],
			"ownerPay": [{
				"name": "record",
				"type": "radio",
				"text": "3局",
				"value": 1,
				"isFree": 0,
				"checked": 1
			}, {
				"name": "record",
				"type": "radio",
				"text": "6局",
				"value": 2,
				"isFree": 0,
				"checked": 0
			}]
		},
		"line": 0
	}, {
		"title": "人数",
		"info": [{
			"name": "number",
			"type": "radio",
			"text": "4人玩法",
			"value": "1",
			"checked": 1
		}, {
			"name": "number",
			"type": "radio",
			"text": "3人玩法",
			"value": "2",
			"checked": 0
		}],
		"line": 1
	}, {
		"title": "玩法",
		"info": [{
			"name": "method",
			"type": "checkbox",
			"text": "抢杠胡",
			"value": "1",
			"checked": 1
		}, {
			"name": "method",
			"type": "checkbox",
			"text": "跑嘴",
			"value": "2",
			"checked": 1
		}],
		"line": 2
	}, {
		"title": "房卡支付",
		"info": [{
			"name": "payType",
			"type": "radio",
			"text": "AA支付",
			"value": "1",
			"checked": 1
		}, {
			"name": "payType",
			"type": "radio",
			"text": "房主支付",
			"value": "2",
			"checked": 0
		}],
		"line": 3
	}],
	"key": "7217057c2df708d57bc2da0be0963935",
	"errorCode": 0,
	"errorMsg": "SUCCESS"
}
//解析数据
if(data){
	$('.pop_set .recharge .text1').html(data.host_card);
	if(data.roomConfig.length>0){
		for(var i=0;i<data.roomConfig.length;i++){
			if(data.roomConfig[i].title == '局数'){
				if(data.roomConfig[i].info.ownerPay.length>0){
					var lens = data.roomConfig[i].info.ownerPay.length;
					console.log(lens);

				}
				
			}
		}
	}
}

$('.pop_set .alarm .text3').on('click',function(){
	$('.pop_adjust').css('display','block');
})
$('.pop_set .btn_dismiss').on('click',function(){
	$('.pop_phonebind').css('display','block');
})
$('.pop_phonebind .get_verify').on('click',function(){
	console.log('获取手机验证码');
	var dataPhone = {
		'mobile':$('.pop_phonebind .inp_number').val(),
		'picCode':$('.pop_phonebind .inp_icon').val()
	}
	$.ajax({
		type:'POST',
		url:'/?act=club_club&st=toSendOtp',
		data:dataPhone,
		success:function(res){
			console.log(res)
		},
		error:function(xhr,type){
			console.log('xhr'+xhr)
		}
	})
})
$('.pop_phonebind .img_verify').on('click',function(){
	console.log('获取验证码');
	$(this).attr('src','/?act=club_club&st=vcode');
})
$('.pop_phonebind .submit').on('click',function(){
	console.log('tijiao');
	var dataPhoneCode = {
		'mobile':$('.pop_phonebind .inp_number').val(),
		'picCode':$('.pop_phonebind .inp_icon').val(),
		'otpCode':$('.pop_phonebind .inp_info').val()
	}
	$.ajax({
		type:'POST',
		url:'/?act=club_club&st=toSendOtp',
		data:dataPhoneCode,
		success:function(res){
			console.log(res)
		},
		error:function(xhr,type){
			console.log('xhr'+xhr)
		}
	})
})
$('.pop_phonebind .btn_close').on('click',function(){
	console.log('tijiao');
	$('.pop_phonebind').css('display','none');
})
$('.pop_adjust .btn_close').on('click',function(){
	$('.pop_adjust').css('display','none');
})
$('.pop_adjust .refer').on('click',function(){
	console.log(parseInt($('.pop_adjust .inp_over').val()))
	if($('.pop_adjust .inp_over').val() == ''){
		$('.pop_adjust .inp_over').val('1');
		console.log('房卡量不得为空或为零')
	}else if(parseInt($('.pop_adjust .inp_over').val())==0){
		$('.pop_adjust .inp_over').val('1');
		console.log('房卡量不得为空或为零')
	}
	var dataAlarm = {
		'clubId':'734454',
		'appId':'2012',
		'alarmNum':'100'
	}
	$.ajax({
		type:'POST',
		url:'/?act=club_club&st=toSetClubAlarm',
		data:dataAlarm,
		success:function(res){
			console.log(res)
		},
		error:function(xhr,type){
			console.log('xhr'+xhr)
		}
	})
})

$('.pop_set .recharge .text4').on('click',function(){
	console.log('跳转充值');

})
$('.pop_set .play .text1').on('click',function(){
	console.log('更改玩法');
	$('.pop_play').css('display','block');

})
var len0 = $('.pop_play .listbox .ulist').size();
console.log(len0)
// var len1 = $('.pop_play .listbox .ulist .playoption .playitem').size();
for(var i=0;i<len0;i++){
	var len1 = $('.pop_play .listbox .ulist').eq(i).find('.playoption .playitem').size();
	for(var j=0;j<len1;j++){
		var ulist = $('.pop_play .listbox .ulist').eq(i).find('.playoption .playitem').eq(j);
		// console.log(ulist)
		ulist.on('click',function(){

			console.log($(this).find('.icon_check'))
			if($(this).find('.icon_check').hasClass('radios')==true){
				$(this).find('.icon_check').addClass('radio_check');
				$(this).find('.icon_check').removeClass('radios');
				$(this).siblings().find('.icon_check').removeClass('radio_check');
				$(this).siblings().find('.icon_check').addClass('radios');
			}
			if($(this).find('.icon_check').hasClass('boxs')==true){
				$(this).find('.icon_check').removeClass('boxs');
				$(this).find('.icon_check').addClass('box_check');
			}else if($(this).find('.icon_check').hasClass('box_check') == true){
				$(this).find('.icon_check').addClass('boxs');
				$(this).find('.icon_check').removeClass('box_check');
			}
			
		})
	}
	
}
$('.pop_play .btn_save').on('click',function(){
	console.log('保存更改');
	$('.pop_play').css('display','none');
})



