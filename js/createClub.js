/**
 * Created by guminji on 2018/3/14.
 */
//引入zepto为$符号对象
;(function(global,$){
    $('.pop_set .message .uname').val('223232323');
})(window, Zepto||jQuery);

$('.btn').on('click',function(e){
    $('.btn').removeClass('active');
    $(this).addClass('active');
})