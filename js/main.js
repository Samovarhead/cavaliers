//---------------------------------------- Прокрутка экранов
let scrollFlag = 1;
let screensCount = $('.container > div').length;

$(window).bind('mousewheel DOMMouseScroll', function(event) {
    if(scrollFlag === 1){
        if (event.originalEvent.wheelDelta >= 0) {
            if($('.active').index() != 0){
                $('.active').removeClass('active').addClass('gone-bottom').prev().removeClass('gone-top').addClass('active');
                scrollFlag = 0;
                setTimeout(function () {
                    scrollFlag = 1;
                }, 1500);
            }
        }
        else {
            if($('.active').index() != (screensCount - 1)){
                $('.active').removeClass('active').addClass('gone-top').next().removeClass('gone-bottom').addClass('active');
                scrollFlag = 0;
                setTimeout(function () {
                    scrollFlag = 1;
                }, 1500);
            }
        }
    }
});
//-------------------------------------Появление панели
$(function () {
    setTimeout("$('.date').addClass('shown')", 3000);
    setTimeout("$('.menu-button').addClass('shown')", 3400);
    setTimeout("$('.rights').addClass('shown')", 3600);
    setTimeout("$('.social').addClass('shown')", 4100);
});

$(function () {
    //----------Открытие модального видео и закрытие
    $('.play-button').click(function () {
        $('.video-modal').removeClass('hidden');
    });
    $('.modal-close').click(function () {
        $('.video-modal').addClass('hidden');
        uppodSend("videoplayer","play");
    });
    //-------------Ховер блоков
})







































