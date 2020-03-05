$(function(){
    $('.toggle-btn').click(function(){
        var $menuicon = $('.toggle-btn');
        if($menuicon.hasClass('menu-click')){
            $menuicon.removeClass('menu-click');    
            $('.responsive-menu').fadeIn();
        }else{
            $menuicon.addClass('menu-click');
            $('.responsive-menu').fadeOut();
        }
    });

    // トップへ戻る
    var topBtn = $('#pageTop');
    topBtn.hide();

    $(window).scroll(function(){
        if($(this).scrollTop()>80){
            topBtn.fadeIn();
        }else{
            topBtn.fadeOut();
        }
    });

    topBtn.click(function(){
        $('body,html').animate({
            scrollTop:0
        },500);
        return false;
    });

    // 猫スタッフのキャプション
    $('.other-staff-img li').hover(function(){
        $(this).append("<div><p>" + $(this)
        .children("img").attr("alt") + "</p></div>");
        $(this).children("div").stop().fadeIn(300);
        $(this).children("div").children("p").stop().
        animate({"top" : 0}, 300);
       }, function(){
        $(this).children("div").stop().fadeOut(300);
        $(this).children("div").children("p").stop().
        animate({"top": "10px"}, 300, function(){
            $(this).children("div").remove();
        });       
    });

    // フワッと表示
    function animation(){
        $('.fadein').each(function(){
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if( scroll > target - windowHeight + 100){
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    }
    animation();
    $(window).scroll(function(){
        animation();
    });
});

