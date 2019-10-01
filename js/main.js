//---------------------------------------- Прокрутка экранов
let scrollFlag = 0;
let screensCount = $('.container > div').length;

$(window).bind('mousewheel', function(event) {
    if(scrollFlag == 0){
        scrollFlag = 1;
        setTimeout(function () {
            scrollFlag = 0;
        }, 700);
        if (event.originalEvent.wheelDelta >= 0) {
            if($('.active').index() != 0){
                $('.active').removeClass('active').addClass('gone-bottom').prev().removeClass('gone-top').addClass('active');
            }
        }
        else {
            if($('.active').index() != (screensCount - 1)){
                $('.active').removeClass('active').addClass('gone-top').next().removeClass('gone-bottom').addClass('active');
            }
        }
    }
});
//-------------------------------------Появление лого
$(function () {
    setTimeout(function () {
        setTimeout(function () {
            $('.letter1').addClass('shown');
        },0);
        setTimeout(function () {
            $('.letter2').addClass('shown');
        },120);
        setTimeout(function () {
            $('.letter3').addClass('shown');
        },240);
        setTimeout(function () {
            $('.letter4').addClass('shown');
        },360);
        setTimeout(function () {
            $('.letter5').addClass('shown');
        },480);
        setTimeout(function () {
            $('.letter6').addClass('shown');
        },600);
        setTimeout(function () {
            $('.letter7').addClass('shown');
        },720);
        setTimeout(function () {
            $('.letter8').addClass('shown');
        },840);
        setTimeout(function () {
            $('.letter9').addClass('shown');
        },960);
    }, 500);
})