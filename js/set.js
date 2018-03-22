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
for(var i=0;i<2;i++){
	$('.pop_rank .content_left .bg_list .btn_item').eq(i).on('click',function(){
		$(this).addClass('checked');
		$(this).siblings().removeClass('checked');
		if($(this).hasClass('num')){
			for(var j=0;j<2;j++){
				if($('.pop_rank .content_right .bg_top .btn_item').eq(j).hasClass('checked')){
					if(j==0){
						console.log(00)
						$('.pop_rank .content_right .box_ul .yesNum').addClass('click');
						$('.pop_rank .content_right .box_ul .yesNum').siblings().removeClass('click');
					}
					if(j==1){
						console.log(01)
						$('.pop_rank .content_right .box_ul .toyNum').addClass('click');
						$('.pop_rank .content_right .box_ul .toyNum').siblings().removeClass('click');
					}
				}
			}
			
		}
		if($(this).hasClass('point')){
			for(var j=0;j<2;j++){
				if($('.pop_rank .content_right .bg_top .btn_item').eq(j).hasClass('checked')){
					if(j==0){
						console.log(10)
						$('.pop_rank .content_right .box_ul .yesPoint').addClass('click');
						$('.pop_rank .content_right .box_ul .yesPoint').siblings().removeClass('click');
					}
					if(j==1){
						console.log(11)
						$('.pop_rank .content_right .box_ul .toyPoint').addClass('click');
						$('.pop_rank .content_right .box_ul .toyPoint').siblings().removeClass('click');
					}
				}
			}
			
		}
	})
	$('.pop_rank .content_right .bg_top .btn_item').eq(i).on('click',function(){
		$(this).addClass('checked');
		$(this).siblings().removeClass('checked');
		if($(this).hasClass('yes')){
			for(var j=0;j<2;j++){
				if($('.pop_rank .content_left .bg_list .btn_item').eq(j).hasClass('checked')){
					if(j==0){
						$('.pop_rank .content_right .box_ul .yesNum').addClass('click');
						$('.pop_rank .content_right .box_ul .yesNum').siblings().removeClass('click');
					}
					if(j==1){
						$('.pop_rank .content_right .box_ul .yesPoint').addClass('click');
						$('.pop_rank .content_right .box_ul .yesPoint').siblings().removeClass('click');
					}
				}
			}
			
		}
		if($(this).hasClass('toy')){
			for(var j=0;j<2;j++){
				if($('.pop_rank .content_left .bg_list .btn_item').eq(j).hasClass('checked')){
					if(j==0){
						$('.pop_rank .content_right .box_ul .toyNum').addClass('click');
						$('.pop_rank .content_right .box_ul .toyNum').siblings().removeClass('click');
					}
					if(j==1){
						$('.pop_rank .content_right .box_ul .toyPoint').addClass('click');
						$('.pop_rank .content_right .box_ul .toyPoint').siblings().removeClass('click');
					}
				}
			}
			
		}
	})
}

// var dataRank = {
// 	'clubId':688816,
// 	'gameId':40294
// }
// $.ajax({
// 	type:'POST',
// 	url:'/?act=club_club&st=toGetMyClubRankInfo',
// 	data:dataRank,
// 	success:function(res){
// 		console.log(res);
// 	},
// 	error:function(xhr,type){
// 		console.log('xhr'+xhr)
// 	}
// })
var data = {
	"clubRank": {
		"roundRank": {
			"today": [{
				"user_id": "2038956868",
				"user_name": "游客_6868",
				"raw_add_time": "2018-02-05 14:16:03",
				"n": "2"
			}, {
				"user_id": "2038962688",
				"user_name": "游客",
				"raw_add_time": "2018-02-05 14:16:03",
				"n": "2"
			}, {
				"user_id": "2038956784",
				"user_name": "游客_6784",
				"raw_add_time": "2018-02-05 14:16:03",
				"n": "2"
			}, {
				"user_id": "2038959857",
				"user_name": "游客_9857",
				"raw_add_time": "2018-02-05 14:16:03",
				"n": "2"
			}],
			"yestoday": [{
				"user_id": "2038956784",
				"user_name": "游客_6784",
				"raw_add_time": "2018-02-02 20:41:59",
				"n": "1"
			}, {
				"user_id": "2038962688",
				"user_name": "游客",
				"raw_add_time": "2018-02-02 20:41:59",
				"n": "1"
			}, {
				"user_id": "2038959857",
				"user_name": "游客_9857",
				"raw_add_time": "2018-02-02 20:41:59",
				"n": "1"
			}, {
				"user_id": "2038962686",
				"user_name": "A薛二疯子",
				"raw_add_time": "2018-02-02 20:41:59",
				"n": "1"
			}]
		},
		"scoreRank": {
			"today": [{
				"user_id": "2038956784",
				"user_name": "游客_6784",
				"raw_add_time": "2018-02-05 14:23:41",
				"n": "225"
			}, {
				"user_id": "2038956868",
				"user_name": "游客_6868",
				"raw_add_time": "2018-02-05 14:16:03",
				"n": "10"
			}],
			"yestoday": [{
				"user_id": "2038962686",
				"user_name": "A薛二疯子",
				"raw_add_time": "2018-02-02 20:41:59",
				"n": "6"
			}]
		}
	},
	"errorCode": 0,
	"errorMsg": "SUCCESS"
}
if(data.clubRank){
	if(data.clubRank.roundRank){
		$('.pop_rank .content_right .box_ul .toyNum').empty();
		$('.pop_rank .content_right .box_ul .yesNum').empty();
		var _html0;
		var _html1;
		
		if(data.clubRank.roundRank.today.length>0){
			for(var i=0;i<data.clubRank.roundRank.today.length;i++){
				console.log(123)
				if((i%2)==0){
					_html0 = '<li><span class="text0">'+(i+1)+'</span><span class="text1">'+data.clubRank.roundRank.today[i].user_name+'</span><span class="text2">'+data.clubRank.roundRank.today[i].raw_add_time+'</span><span class="text3">'+data.clubRank.roundRank.today[i].n+'</span></li>';
				}else{
					_html0 = '<li class="bg_dif"><span class="text0">'+(i+1)+'</span><span class="text1">'+data.clubRank.roundRank.today[i].user_name+'</span><span class="text2">'+data.clubRank.roundRank.today[i].raw_add_time+'</span><span class="text3">'+data.clubRank.roundRank.today[i].n+'</span></li>';
				}
				console.log(_html0);		
				$('.pop_rank .content_right .box_ul .toyNum').append(_html0);
			}
		}else{
			_html0 = '<div class="nodata">暂无数据</div>';
			$('.pop_rank .content_right .box_ul .toyNum').append(_html0);
		}
		if(data.clubRank.roundRank.yestoday.length>0){
			for(var i=0;i<data.clubRank.roundRank.yestoday.length;i++){
				console.log(1234)
				if((i%2)==0){
					_html1 = '<li><span class="text0">'+(i+1)+'</span><span class="text1">'+data.clubRank.roundRank.yestoday[i].user_name+'</span><span class="text2">'+data.clubRank.roundRank.yestoday[i].raw_add_time+'</span><span class="text3">'+data.clubRank.roundRank.yestoday[i].n+'</span></li>';
				}else{
					_html1 = '<li class="bg_dif"><span class="text0">'+(i+1)+'</span><span class="text1">'+data.clubRank.roundRank.yestoday[i].user_name+'</span><span class="text2">'+data.clubRank.roundRank.yestoday[i].raw_add_time+'</span><span class="text3">'+data.clubRank.roundRank.yestoday[i].n+'</span></li>';
				}
				
				$('.pop_rank .content_right .box_ul .yesNum').append(_html1);
			}
		}else{
			_html1 = '<div class="nodata">暂无数据</div>';
			$('.pop_rank .content_right .box_ul .yesNum').append(_html1);
		}
		
	}
	if(data.clubRank.scoreRank){
		$('.pop_rank .content_right .box_ul .yesPoint').empty();
		$('.pop_rank .content_right .box_ul .toyPoint').empty();
		var _html2;
		var _html3;
		if(data.clubRank.scoreRank.today.length>0){
			for(var i=0;i<data.clubRank.scoreRank.today.length;i++){
				console.log(123)
				if((i%2)==0){
					_html2 = '<li><span class="text0">'+(i+1)+'</span><span class="text1">'+data.clubRank.scoreRank.today[i].user_name+'</span><span class="text2">'+data.clubRank.scoreRank.today[i].raw_add_time+'</span><span class="text3">'+data.clubRank.scoreRank.today[i].n+'</span></li>';
				}else{
					_html2 = '<li class="bg_dif"><span class="text0">'+(i+1)+'</span><span class="text1">'+data.clubRank.scoreRank.today[i].user_name+'</span><span class="text2">'+data.clubRank.scoreRank.today[i].raw_add_time+'</span><span class="text3">'+data.clubRank.scoreRank.today[i].n+'</span></li>';
				}
				console.log(_html2);		
				$('.pop_rank .content_right .box_ul .toyPoint').append(_html2);
			}
		}else{
			_html2 = '<div class="nodata">暂无数据</div>';
			$('.pop_rank .content_right .box_ul .toyPoint').append(_html2);
		}
		if(data.clubRank.scoreRank.yestoday.length>0){
			for(var i=0;i<data.clubRank.scoreRank.yestoday.length;i++){
				console.log(123)
				if((i%2)==0){
					_html3 = '<li><span class="text0">'+(i+1)+'</span><span class="text1">'+data.clubRank.scoreRank.yestoday[i].user_name+'</span><span class="text2">'+data.clubRank.scoreRank.yestoday[i].raw_add_time+'</span><span class="text3">'+data.clubRank.scoreRank.yestoday[i].n+'</span></li>';
				}else{
					_html3 = '<li class="bg_dif"><span class="text0">'+(i+1)+'</span><span class="text1">'+data.clubRank.scoreRank.yestoday[i].user_name+'</span><span class="text2">'+data.clubRank.scoreRank.yestoday[i].raw_add_time+'</span><span class="text3">'+data.clubRank.scoreRank.yestoday[i].n+'</span></li>';
				}
				console.log(_html3);		
				$('.pop_rank .content_right .box_ul .yesPoint').append(_html3);
			}
		}else{
			_html3 = '<div class="nodata">暂无数据</div>';
			$('.pop_rank .content_right .box_ul .yesPoint').append(_html3);
		}
	}
}
















