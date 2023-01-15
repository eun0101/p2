//header 영역
//햄버거
$('.open_menu a').click(function(){
    $('.h_side').animate({
        right : 0
    },300);
    return false;
});
//사이드닫기
$('.close_menu a').click(function(){
    $('.h_side').animate({
        right : '-100%'
    },300);
    return false;
});
$('.h_gnb2 .d1').click(function(){
    $(this).find('.sub').stop().hide();
    //현재 마우스를 올린 대상의 범위 안에서 .sub을 찾음.
    $(this).find('.sub').stop().slideDown(200);
});
//아코디언
$('.h_side .d1 .m').click(function(){
    // .sub의 display속성값을 저장
    // .sub 영역의 높이값을 d1의 수에 따라 다르게 함
    let d = $(this).siblings('.sub').css('display');
    //조건문 사용하기
    if(d == 'block'){
        $('.h_side .d1 .m').removeClass('on');
        $('.h_side .d1 .sub').slideUp(200);
    } else {
        $('.h_side .d1 .m').removeClass('on');
        $('.h_side .d1 .sub').slideUp(200);
        $(this).addClass('on');
        $(this).siblings('.sub').slideDown(200);
    };
    return false;
});



//탭
//product 영역
$('.p_menu li').click(function(){
    let i = $(this).index();
    //버튼
    $('.p_menu li').removeClass('on');
    $(this).addClass('on');

    //p_view
    $('.p_view').removeClass('view');
    $('.p_view').css({
        display: 'none'
    });
    $('.p_view').eq(i).fadeIn('view');
    
    return false;
});

//footer chat 영역
//chat 맨위로 가기
$('.chat .quick').click(function(){
    $('html, body').animate({
        scrollTop: 0
    });
    return false;
});
//chat offset 위치에 따라 fade
$(window).scroll(function(){
    let s = $('.chat').offset().top;
    let eventTop = $('.event').offset().top;
    if( s < eventTop ){
        $('.chat').fadeOut();
    } else {
        $('.chat').fadeIn();
    }
});    

//swiper 플러그인
let main1 = new Swiper('.main1',{
    loop : true,
    //페이저 버튼
    pagination : {
        el : '.main1 .main_order_pager',
        //페이저 숫자로
        type : 'fraction'
    },
    autoplay: {
        //3초에 한 번 움직이기
        delay : 3000
    },
    speed : 1000
});
$('.main1 .main_order_stop').click(
    function(){
        main1.autoplay.stop();
        $(this).hide();
        $('.main1 .main_order_play').show();
        return false;
    }
)
$('.main1 .main_order_play').click(
    function(){
        main1.autoplay.start();
        $(this).hide();
        $('.main1 .main_order_stop').show();
        return false;
    }
)

