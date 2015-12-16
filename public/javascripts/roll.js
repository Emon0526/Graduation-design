$(document).ready(function() {
    //首先将#top隐藏
    $("#top").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                $("#top").fadeIn(500);
            } else {
                $("#top").fadeOut(500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#top").click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                500);
            return false;
        });
    });
    $("#arrow").click(function() {
        $('body,html').animate({
                scrollTop: 800
            },
            500);
        return false;
    });
    $('.carousel').carousel({
        interval: 2000
    })});
