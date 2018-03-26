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


var data1 = {
	"recordList": [{
		"userList": [{
			"nickname": "游客",
			"score": "-75"
		}, {
			"nickname": "游客_6784",
			"score": "225"
		}, {
			"nickname": "游客_9857",
			"score": "-75"
		}, {
			"nickname": "游客_6868",
			"score": "-75"
		}],
		"roomId": "498480",
		"gameId": 40172,
		"raw_add_time": "2018-02-05 14:23:41",
		"create_user_name": "游客_6868",
		"round_num": 1,
		"content": {
			"mode": "2",
			"lowFlower": {
				"flower": "5",
				"low": "5"
			},
			"play": ["1", "2", "3", "4", "5"],
			"top": "-1",
			"clubId": "429789",
			"roundNum": {
				"card": "2",
				"num": "2"
			},
			"type": "3",
			"number": 4,
			"desc": "百搭-局数:2-玩法:开宝荒番飞苍蝇无百搭可捉铳无百搭可抢杠-底花:5\/5-模式:8花",
			"gameName": "1768上海麻将",
			"appId": "2006"
		}
	}, {
		"userList": [{
			"nickname": "游客",
			"score": "0"
		}, {
			"nickname": "游客_6784",
			"score": "0"
		}, {
			"nickname": "游客_9857",
			"score": "-10"
		}, {
			"nickname": "游客_6868",
			"score": "10"
		}],
		"roomId": "498352",
		"gameId": 40172,
		"raw_add_time": "2018-02-05 14:16:03",
		"create_user_name": "游客_6868",
		"round_num": 1,
		"content": {
			"mode": "2",
			"lowFlower": {
				"flower": "1",
				"low": "2"
			},
			"play": ["1", "2"],
			"top": "-1",
			"clubId": "429789",
			"roundNum": {
				"card": "2",
				"num": "8"
			},
			"type": "0",
			"number": 4,
			"desc": "敲麻-局数:8-玩法:开宝荒番-底花:2\/1-模式:不吃牌",
			"gameName": "1768上海麻将",
			"appId": "2006"
		}
	}, {
		"userList": [{
			"nickname": "游客",
			"score": "0"
		}, {
			"nickname": "游客_9857",
			"score": "-6"
		}, {
			"nickname": "A薛二疯子",
			"score": "6"
		}, {
			"nickname": "游客_6784",
			"score": "0"
		}],
		"roomId": "192104",
		"gameId": 40172,
		"raw_add_time": "2018-02-02 20:41:59",
		"create_user_name": "游客_6784",
		"round_num": 1,
		"content": {
			"lowFlower": {
				"flower": "1",
				"low": "1"
			},
			"play": ["1", "2"],
			"top": "-1",
			"clubId": "429789",
			"roundNum": {
				"card": "1",
				"num": "1"
			},
			"type": "1",
			"number": 4,
			"desc": "1局 拉西湖",
			"gameName": "1768上海麻将",
			"appId": "2006"
		}
	}],
	"errorCode": 0,
	"errorMsg": "SUCCESS"
}
if(data1){
	$('.pop_record .content_bottom .ul').empty();
	if(data1.recordList.length>0){
		var recordHtml1;
		var recordHtml2;
		for(var i=0;i<data1.recordList.length;i++){
			recordHtml1 = '<li><span class="li_left"><div class="li_top"><span class="text0">房间号：'+data1.recordList[i].roomId+'</span><span class="text1">时间：'+data1.recordList[i].raw_add_time+'</span><span class="text2">'+data1.recordList[i].content.desc+'</span></div><div class="li_bottom"></div></span><span class="li_right"></span></li>'
			$('.pop_record .content_bottom .ul').append(recordHtml1);
			var userList = data1.recordList[i].userList;
			userList.sort(function(a,b){return b.score-a.score});
			console.log(userList)
			for(var j=0;j<userList.length;j++){
				if(parseInt(userList[0].score)>=0){
					recordHtml2 = '<span class="text0"></span><span class="text1">'+userList[0].nickname+'</span><span class="text2 yellow">'+userList[0].score+'</span>';
				}else{
					recordHtml2 = '<span class="text0"></span><span class="text1">'+userList[0].nickname+'</span><span class="text2 green">'+userList[0].score+'</span>';
				}
				if(parseInt(userList[1].score)>=0){
					recordHtml2 += '<span class="text3">'+userList[1].nickname+'</span><span class="text4 yellow">'+userList[1].score+'</span>';
				}else{
					recordHtml2 += '<span class="text3">'+userList[1].nickname+'</span><span class="text4 green">'+userList[1].score+'</span>';
				}
				if(parseInt(userList[2].score)>=0){
					recordHtml2 += '<span class="text5">'+userList[2].nickname+'</span><span class="text6 yellow">'+userList[2].score+'</span>';
				}else{
					recordHtml2 += '<span class="text5">'+userList[2].nickname+'</span><span class="text6 green">'+userList[2].score+'</span>';
				}
				if(parseInt(userList[3].score)>=0){
					recordHtml2 += '<span class="text7">'+userList[3].nickname+'</span><span class="text8 yellow">'+userList[3].score+'</span>';
				}else{
					recordHtml2 += '<span class="text7">'+userList[3].nickname+'</span><span class="text8 green">'+userList[3].score+'</span>';
				}
				
				
			}
			console.log(recordHtml2)
			$('.pop_record .content_bottom .ul li').eq(i).find('.li_bottom').append(recordHtml2);
			$('.pop_record .content_bottom .ul li').eq(i).find('.li_right').on('click',function(){
				console.log($(this).siblings('.li_left').find('.li_top .text0').html().split('：')[1]);
				var roomId = $(this).siblings('.li_left').find('.li_top .text0').html().split('：')[1];

			})
		}

	}else{
		var recordHtml0 = '<div class="nodata">暂无数据</div>';
		$('.pop_record .content_bottom .ul').append(recordHtml0);
	}
}


var data2 = {
	"details": [{
		"userList": [{
			"nickName": "游客_6868",
			"roundId": "159384",
			"score": "-75",
			"status": "0",
			"raw_add_time": "2018-02-05 14:23:23"
		}, {
			"nickName": "游客_9857",
			"roundId": "159384",
			"score": "-75",
			"status": "0",
			"raw_add_time": "2018-02-05 14:23:23"
		}, {
			"nickName": "游客_6784",
			"roundId": "159384",
			"score": "225",
			"status": "1",
			"raw_add_time": "2018-02-05 14:23:23"
		}, {
			"nickName": "游客",
			"roundId": "159384",
			"score": "-75",
			"status": "0",
			"raw_add_time": "2018-02-05 14:23:23"
		}]
	},
	{
		"userList": [{
			"nickName": "游客_6868",
			"roundId": "159384",
			"score": "-75",
			"status": "0",
			"raw_add_time": "2018-02-05 14:23:23"
		}, {
			"nickName": "游客_9857",
			"roundId": "159384",
			"score": "-75",
			"status": "0",
			"raw_add_time": "2018-02-05 14:23:23"
		}, {
			"nickName": "游客_6784",
			"roundId": "159384",
			"score": "225",
			"status": "1",
			"raw_add_time": "2018-02-05 14:23:23"
		}, {
			"nickName": "游客",
			"roundId": "159384",
			"score": "-75",
			"status": "0",
			"raw_add_time": "2018-02-05 14:23:23"
		}]
	}],
	"common": {
		"roomId": "498480",
		"desc": "",
		"gameName": "",
		"roundNum": 55
	},
	"errorCode": 0,
	"errorMsg": "SUCCESS"
}
if(data2){
	if(data2.details){
		$('.pop_detail .content_bottom .tail_top').empty();
		$('.pop_detail .content_bottom .tail_bottom').empty();
		if(data2.details.length>0){
			var detailslen = data2.details.length;
			var detailhtml0;
			var detailhtml1;
			detailhtml0 = '<span class="text0">序号</span><span class="text1">对战时间</span><span class="text2">'+data2.details[0].userList[0].nickName+'</span><span class="text3">'+data2.details[0].userList[0].nickName+'</span><span class="text4">'+data2.details[0].userList[0].nickName+'</span><span class="text5">'+data2.details[0].userList[0].nickName+'</span>';
			$('.pop_detail .content_bottom .tail_top').append(detailhtml0);
			for(var i=0;i<detailslen;i++){
				var ulist = data2.details[i].userList;
				ulist.sort(function(a,b){return b.score-a.score});
				for(var j=0;j<ulist.length;j++){
					if((i%2)==0){
						detailhtml1 = '<li class="bg_item"><span class="text0">'+(i+1)+'</span><span class="text1">'+ulist[j].raw_add_time+'</span>';
							if(parseInt(ulist[0].score)>0){
								detailhtml1 += '<span class="text2 yellow">'+ulist[0].score+'</span>';
							}else{
								detailhtml1 += '<span class="text2 green">'+ulist[0].score+'</span>';
							}
							if(parseInt(ulist[1].score)>0){
								detailhtml1 += '<span class="text3 yellow">'+ulist[1].score+'</span>';
							}else{
								detailhtml1 += '<span class="text3 green">'+ulist[1].score+'</span>';
							}
							if(parseInt(ulist[2].score)>0){
								detailhtml1 += '<span class="text4 yellow">'+ulist[2].score+'</span>';
							}else{
								detailhtml1 += '<span class="text4 green">'+ulist[2].score+'</span>';
							}
							if(parseInt(ulist[3].score)>0){
								detailhtml1 += '<span class="text5 yellow">'+ulist[3].score+'</span></li>';
							}else{
								detailhtml1 += '<span class="text5 green">'+ulist[3].score+'</span></li>';
							}
					}else{
						detailhtml1 = '<li><span class="text0">'+(i+1)+'</span><span class="text1">'+ulist[j].raw_add_time+'</span>';
							if(parseInt(ulist[0].score)>0){
								detailhtml1 += '<span class="text2 yellow">'+ulist[0].score+'</span>';
							}else{
								detailhtml1 += '<span class="text2 green">'+ulist[0].score+'</span>';
							}
							if(parseInt(ulist[1].score)>0){
								detailhtml1 += '<span class="text3 yellow">'+ulist[1].score+'</span>';
							}else{
								detailhtml1 += '<span class="text3 green">'+ulist[1].score+'</span>';
							}
							if(parseInt(ulist[2].score)>0){
								detailhtml1 += '<span class="text4 yellow">'+ulist[2].score+'</span>';
							}else{
								detailhtml1 += '<span class="text4 green">'+ulist[2].score+'</span>';
							}
							if(parseInt(ulist[3].score)>0){
								detailhtml1 += '<span class="text5 yellow">'+ulist[3].score+'</span></li>';
							}else{
								detailhtml1 += '<span class="text5 green">'+ulist[3].score+'</span></li>';
							}
					}
					

				}
				$('.pop_detail .content_bottom .tail_bottom').append(detailhtml1);
			}
		}
	}
	if(data2.common){
		$('.pop_detail .content .content_top').empty();
		var detailhtml2;
		detailhtml2 = '<span class="text0">房间号：'+data2.common.roomId+'</span><span class="text1">游戏局数：'+data2.common.roundNum+'</span><span class="text2">游戏玩法：'+data2.common.gameName+'</span>'
		$('.pop_detail .content .content_top').append(detailhtml2);
	}
}








